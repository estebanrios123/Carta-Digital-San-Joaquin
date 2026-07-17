import re
from pathlib import Path
text = Path('index/script.js').read_text(encoding='utf-8')
start = text.index('const DISHES = [')
brace = text.index('[', start)
level = 1
in_str = False
esc = False
content = ''
i = brace + 1
while i < len(text):
    c = text[i]
    if in_str:
        content += c
        if c == '"' and not esc:
            in_str = False
        esc = (c == '\\' and not esc)
    else:
        if c == '"':
            content += c
            in_str = True
            esc = False
        elif c == '[':
            content += c
            level += 1
        elif c == ']':
            if level == 1:
                break
            content += c
            level -= 1
        else:
            content += c
    i += 1
print('content len', len(content))
objs = []
level = 0
in_str = False
esc = False
cur = ''
for c in content:
    if in_str:
        cur += c
        if c == '"' and not esc:
            in_str = False
        esc = (c == '\\' and not esc)
        continue
    if c == '"':
        cur += c
        in_str = True
        esc = False
        continue
    if c == '{':
        level += 1
        cur += c
        continue
    if c == '}':
        cur += c
        level -= 1
        if level == 0:
            objs.append(cur)
            cur = ''
        continue
    if level > 0:
        cur += c
print('objs', len(objs))
for idx, o in enumerate(objs[-10:], start=len(objs)-9):
    print('--- obj', idx, 'len', len(o), repr(o[:80]))
blanks = [o for o in objs if 'id:' not in o and 'cat:' not in o and 'name:' not in o]
print('blank objs', len(blanks))
