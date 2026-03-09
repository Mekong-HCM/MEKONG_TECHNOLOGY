# Script: Build MEKONG_DE_AN_V2_MASTER.md from F1 (HO_SO_MO_RONG_REVIEW)
# Fix: Promote PHU LUC P/Q/R from ## to # and their sub-headers ### to ##

$src = "HO_SO_MO_RONG_REVIEW\MEKONG_DE_AN_V2.md"
$dst = "MEKONG_DE_AN_V2_MASTER.md"

Write-Host "=== BUILD MASTER FILE ===" -ForegroundColor Cyan
Write-Host "Source: $src"

# Use .NET to read with proper encoding detection
$content = [System.IO.File]::ReadAllText((Resolve-Path $src).Path)
$lines = $content -split "`n"
Write-Host "Source lines: $($lines.Count)"

# Hardcoded line numbers from Select-String (1-based) → convert to 0-based
$pStart = 8362 - 1  # ## PHU LUC P
$qStart = 8944 - 1  # ## PHU LUC Q
$rStart = 9367 - 1  # ## PHU LUC R
$sStart = 10316 - 1 # # PHU LUC S

Write-Host "`nSections to fix (0-based index):"
Write-Host "  PHU LUC P: $pStart"
Write-Host "  PHU LUC Q: $qStart"
Write-Host "  PHU LUC R: $rStart"
Write-Host "  PHU LUC S: $sStart"

# Verify markers exist at expected positions
Write-Host "`nVerifying markers:"
Write-Host "  P: $($lines[$pStart].Substring(0, [Math]::Min(50, $lines[$pStart].Length)))"
Write-Host "  Q: $($lines[$qStart].Substring(0, [Math]::Min(50, $lines[$qStart].Length)))"
Write-Host "  R: $($lines[$rStart].Substring(0, [Math]::Min(50, $lines[$rStart].Length)))"
Write-Host "  S: $($lines[$sStart].Substring(0, [Math]::Min(50, $lines[$sStart].Length)))"

# Process the lines
$output = [System.Collections.Generic.List[string]]::new($lines.Count)

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    
    # Promote PHU LUC P/Q/R headers from ## to #
    if ($i -eq $pStart -or $i -eq $qStart -or $i -eq $rStart) {
        $line = $line.Substring(1)  # Remove one # (## → #)
        Write-Host "  Fixed line $($i+1): $($line.Substring(0, [Math]::Min(60, $line.Length)))..."
    }
    # Promote sub-headers within P/Q/R from ### to ##
    elseif (($i -gt $pStart -and $i -lt $sStart) -and ($i -ne $qStart -and $i -ne $rStart)) {
        if ($line.StartsWith('### ')) {
            $line = $line.Substring(1)  # Remove one # (### → ##)
        }
    }
    
    $output.Add($line)
}

# Write output using .NET to preserve encoding
[System.IO.File]::WriteAllText((Join-Path $PWD $dst), ($output -join "`n"))
$outLines = ([System.IO.File]::ReadAllText((Resolve-Path $dst).Path) -split "`n").Count

Write-Host "`n=== RESULT ===" -ForegroundColor Green
Write-Host "Output: $dst"
Write-Host "Lines: $outLines"

# Verification
Write-Host "`n=== VERIFICATION ===" -ForegroundColor Yellow

# Check all PHU LUC are now # level
$phuLuc = Select-String -Path $dst -Pattern '^# PHỤ LỤC [A-Z]{1,2}:' | ForEach-Object { 
    "$($_.LineNumber): $($_.Line.Substring(0, [Math]::Min(70, $_.Line.Length)))" 
}
Write-Host "`nAll # PHU LUC sections ($($phuLuc.Count) total):"
$phuLuc | ForEach-Object { Write-Host "  $_" }

# Check no ## PHU LUC remain
$wrongLevel = Select-String -Path $dst -Pattern '^## PHỤ LỤC [A-Z]{1,2}:' 
if ($wrongLevel) {
    Write-Host "`nWARNING: Still have ## PHU LUC headers:" -ForegroundColor Red
    $wrongLevel | ForEach-Object { Write-Host "  $($_.LineNumber): $($_.Line)" }
} else {
    Write-Host "`nOK: No ## PHU LUC headers remaining" -ForegroundColor Green
}

# Key financial numbers check
$numbers = @("47,50M", "2,78M", "14,1%", "32,80M", "15,78M", "34,97M", "205,20M")
Write-Host "`nFinancial numbers check:"
foreach ($num in $numbers) {
    $count = (Select-String -Path $dst -Pattern $num -SimpleMatch).Count
    $status = if ($count -gt 0) { "OK ($count)" } else { "MISSING!" }
    Write-Host "  $num : $status"
}

# Mermaid count
$mermaid = (Select-String -Path $dst -Pattern '```mermaid').Count
Write-Host "`nMermaid diagrams: $mermaid"

# Table rows
$tables = (Select-String -Path $dst -Pattern '^\|').Count
Write-Host "Table rows: $tables"

# Check ending
$last5 = Get-Content $dst -Tail 5
Write-Host "`nLast 5 lines:"
$last5 | ForEach-Object { Write-Host "  $_" }

Write-Host "`n=== DONE ===" -ForegroundColor Cyan
