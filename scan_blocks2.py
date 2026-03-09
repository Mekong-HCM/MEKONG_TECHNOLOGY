import re

with open('DE_AN_MEKONG_V2/MEKONG_DE_AN_V2.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find ALL ``` lines (both bare and language-tagged)
all_fences = []
for i, line in enumerate(lines):
    stripped = line.strip()
    if stripped.startswith('```'):
        lang = stripped[3:].strip()
        all_fences.append((i+1, lang))  # 1-indexed line number, language

# Pair them: track open/close state
blocks = []
open_line = None
open_lang = None
for lineno, lang in all_fences:
    if open_line is None:
        # This is an opening fence
        open_line = lineno
        open_lang = lang
    else:
        # This is a closing fence
        blocks.append((open_line, lineno, open_lang))
        open_line = None
        open_lang = None

# Now classify bare ``` blocks
diagram_chars = re.compile(r'[\u250c\u2510\u2514\u2518\u251c\u2524\u2502\u2554\u2557\u255a\u255d\u2551\u2550\u25ba\u25bc\u25b2\u25c4\u2192\u2190\u2193\u2191\u2500\u2534\u252c\u2560\u2563\u256b\u256a]|-->|<--|████|░░|===|\u2503|\u250f|\u2513|\u2517|\u251b|\u2501')

# Also detect arrow patterns in text
arrow_pattern = re.compile(r'-->|<--|==>|->|<-|\u2192|\u2190|\u2193|\u2191|\u25ba|\u25bc|\u25b2|\u25c4')

print(f"Total blocks: {len(blocks)}")
print(f"Mermaid blocks: {sum(1 for _,_,l in blocks if l == 'mermaid')}")
print(f"Bare blocks: {sum(1 for _,_,l in blocks if l == '')}")
print()

# Find section heading for each block
def find_heading(lineno):
    for i in range(lineno - 2, max(0, lineno - 30), -1):
        line = lines[i].strip()
        if line.startswith('#'):
            return line[:100]
    return "(no heading found)"

diagram_count = 0
for open_l, close_l, lang in blocks:
    if lang != '':  # Skip language-tagged blocks
        continue
    
    block_lines = lines[open_l:close_l-1]  # content between fences (0-indexed: open_l to close_l-2)
    block_text = ''.join(block_lines)
    
    has_diagram = diagram_chars.search(block_text)
    
    if has_diagram:
        diagram_count += 1
        heading = find_heading(open_l)
        first_line = block_lines[0].strip()[:80] if block_lines else ""
        print(f"DIAGRAM #{diagram_count}: L{open_l}-L{close_l} ({close_l - open_l - 1} lines)")
        print(f"  Heading: {heading}")
        print(f"  First:   {first_line}")
        print()

print(f"\nTotal DIAGRAM blocks in bare ```: {diagram_count}")
