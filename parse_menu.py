import re
from pathlib import Path
p = Path('files/script.js')
text = p.read_text(encoding='utf-8')
# parse categories
cat_match = re.search(r'const CATEGORIES = \[(.*?)\];', text, re.S)
if not cat_match:
    raise SystemExit('CATEGORIES not found')
cat_text = cat_match.group(1)
cat_objs = re.findall(r'\{([^\}]*)\}', cat_text, re.S)
categories = []
for obj in cat_objs:
    d = {}
    for m in re.finditer(r'\s*([a-zA-Z0-9_]+):\s*"(.*?)"\s*,?', obj):
        d[m.group(1)] = m.group(2)
    if d:
        categories.append(d)
# parse dishes
start = text.index('const DISHES = [') + len('const DISHES = [')
end = text.rfind('];', start)
section = text[start:end]
# use a simple parser for top-level objects
objs = []
level = 0
in_str = False
esc = False
cur = ''
for c in section:
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

dishes = []
for o in objs:
    d = {}
    for m in re.finditer(r'([a-zA-Z0-9_]+):\s*"(.*?)"\s*,?', o):
        d[m.group(1)] = m.group(2)
    for m in re.finditer(r'([a-zA-Z0-9_]+):\s*([0-9]+)\s*,?', o):
        d[m.group(1)] = int(m.group(2))
    dishes.append(d)
# output counts and sample
print('categories', len(categories))
print('dishes', len(dishes))
print(categories[0])
print(dishes[0])
