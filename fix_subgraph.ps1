$f = "C:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V2\MEKONG_DE_AN_V2.md"
$enc = [System.Text.Encoding]::UTF8
$content = [System.IO.File]::ReadAllText($f, $enc)

$pattern = '(subgraph\s+\w+)\["([^"]+)"\]'
$matches_found = [regex]::Matches($content, $pattern)
Write-Host "Found $($matches_found.Count) subgraph bracket patterns to fix"

$evaluator = [System.Text.RegularExpressions.MatchEvaluator]{
    param($m)
    $pfx = $m.Groups[1].Value
    $lbl = $m.Groups[2].Value
    $lbl = $lbl -replace '<br/>', ' / '
    $lbl = $lbl -replace '\u2014', '-'
    $lbl = $lbl -replace '\u00B2', '2'
    $lbl = $lbl -replace '\|', '-'
    "$pfx [$lbl]"
}

$newContent = [regex]::Replace($content, $pattern, $evaluator)

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($f, $newContent, $utf8NoBom)

$afterLines = [System.IO.File]::ReadAllLines($f, $utf8NoBom).Count
Write-Host "After: $afterLines lines"

$remaining = [regex]::Matches($newContent, 'subgraph\s+\w+\["').Count
Write-Host "Remaining unfixed: $remaining"

if ($afterLines -ne 11280) {
    Write-Host "ERROR - line count changed! Restoring backup..."
    Copy-Item "$f.bak" $f -Force
} else {
    Write-Host "SUCCESS - all subgraph labels fixed"
}
