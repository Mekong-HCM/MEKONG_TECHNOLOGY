import re

with open('DE_AN_MEKONG_V2/MEKONG_DE_AN_V2.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f'Total lines: {len(lines)}')

locs = [317, 398, 412, 502, 805, 893, 941, 980, 1014, 1164, 1175, 1255, 1424, 1454, 1541, 1564, 1612, 1782, 1917, 1938, 1967, 1984, 1992, 2014, 2075, 2145, 2222, 2561, 2788, 2793, 2859, 2886, 2926, 2960, 3024, 3054, 3069, 3105, 3275, 3299, 3452, 3469, 3561, 3623, 3647, 3740, 3979, 4086, 4524, 4710, 4881, 5002, 5123, 5225, 5298, 5576, 7178, 7201, 7288, 7319, 7383, 7411, 7583, 7592, 7652, 7680, 7787, 7803, 7807, 7835, 8219, 8232, 8504, 8506, 8597, 8605, 8692, 8754, 8768, 8975, 9003, 9097, 9127, 9131, 9177, 10135, 10147, 10165, 10187, 10458, 10493, 10501, 10511, 10623, 10657, 10866, 10898, 11078, 11108, 11206, 11216]

diagram_chars = re.compile(r'[\u250c\u2510\u2514\u2518\u251c\u2524\u2502\u2554\u2557\u255a\u255d\u2551\u2550\u25ba\u25bc\u25b2\u25c4\u2192\u2190\u2193\u2191\u2500\u2534\u252c]|-->|<--|████|░░|===')

for loc in locs:
    idx = loc - 1
    line = lines[idx].strip()
    # Check bare ``` (not ```mermaid, etc.)
    if line == '```':
        # Find closing ```
        end = -1
        for j in range(idx+1, min(idx+120, len(lines))):
            if lines[j].strip().startswith('```'):
                end = j
                break
        if end > idx:
            block = ''.join(lines[idx+1:end])
            if diagram_chars.search(block):
                first_line = lines[idx+1].strip()[:80]
                print(f'DIAGRAM L{loc}-L{end+1} ({end-idx-1} lines): {first_line}')
            else:
                first_line = lines[idx+1].strip()[:80]
                print(f'OTHER   L{loc}-L{end+1} ({end-idx-1} lines): {first_line}')
        else:
            print(f'CLOSING L{loc} (part of previous block)')
    else:
        print(f'LANG    L{loc}: {line[:60]}')
        
print('DONE')
