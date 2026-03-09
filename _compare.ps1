$f1 = 'c:\Users\Dell M4800\Downloads\DE_AN_MEKONG\HO_SO_MO_RONG_REVIEW\MEKONG_DE_AN_V2.md'
$f2 = 'c:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V2\MEKONG_DE_AN_V2.md'
$c1 = Get-Content $f1
$c2 = Get-Content $f2

Write-Host "=== F1: HO_SO_MO_RONG_REVIEW ==="
Write-Host "Lines: $($c1.Count)"
Write-Host "Mermaid: $(($c1 | Where-Object {$_ -match 'mermaid'}).Count)"
Write-Host "Tables: $(($c1 | Where-Object {$_ -match '^\|'}).Count)"
Write-Host "Headings: $(($c1 | Where-Object {$_ -match '^#'}).Count)"
Write-Host ""
Write-Host "=== F2: DE_AN_MEKONG_V2 ==="
Write-Host "Lines: $($c2.Count)"
Write-Host "Mermaid: $(($c2 | Where-Object {$_ -match 'mermaid'}).Count)"
Write-Host "Tables: $(($c2 | Where-Object {$_ -match '^\|'}).Count)"
Write-Host "Headings: $(($c2 | Where-Object {$_ -match '^#'}).Count)"
Write-Host ""

# Top-level sections
Write-Host "=== F1 TOP SECTIONS ==="
$c1 | Select-String '^# [A-Z]' | Select-Object -First 30 | ForEach-Object { Write-Host "$($_.LineNumber): $($_.Line.Substring(0, [Math]::Min(80, $_.Line.Length)))" }
Write-Host ""
Write-Host "=== F2 TOP SECTIONS ==="
$c2 | Select-String '^# [A-Z]' | Select-Object -First 30 | ForEach-Object { Write-Host "$($_.LineNumber): $($_.Line.Substring(0, [Math]::Min(80, $_.Line.Length)))" }
Write-Host ""

# First 5 lines
Write-Host "=== F1 FIRST 5 LINES ==="
$c1[0..4] | ForEach-Object { Write-Host $_ }
Write-Host ""
Write-Host "=== F2 FIRST 5 LINES ==="
$c2[0..4] | ForEach-Object { Write-Host $_ }
Write-Host ""

# Last 5 lines
Write-Host "=== F1 LAST 5 LINES ==="
$c1[($c1.Count-5)..($c1.Count-1)] | ForEach-Object { Write-Host $_ }
Write-Host ""
Write-Host "=== F2 LAST 5 LINES ==="
$c2[($c2.Count-5)..($c2.Count-1)] | ForEach-Object { Write-Host $_ }

# PHU LUC count
Write-Host ""
Write-Host "=== PHU LUC SECTIONS ==="
Write-Host "F1 PHU LUC:"
$c1 | Select-String '^# PH' | ForEach-Object { Write-Host "  $($_.LineNumber): $($_.Line.Substring(0, [Math]::Min(70, $_.Line.Length)))" }
Write-Host ""
Write-Host "F2 PHU LUC:"
$c2 | Select-String '^# PH' | ForEach-Object { Write-Host "  $($_.LineNumber): $($_.Line.Substring(0, [Math]::Min(70, $_.Line.Length)))" }
