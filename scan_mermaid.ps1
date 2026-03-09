$f = "C:\Users\Dell M4800\Downloads\DE_AN_MEKONG\HO_SO_MO_RONG_REVIEW\MEKONG_DE_AN_V2.md"
$lines = [System.IO.File]::ReadAllLines($f, [System.Text.Encoding]::UTF8)
Write-Host "Total lines: $($lines.Count)"

$inM = $false
$blockStart = 0
for($i=0; $i -lt $lines.Count; $i++) {
    $l = $lines[$i]
    if($l -match '^\s*```mermaid') { 
        $inM = $true
        $blockStart = $i + 1
        continue 
    }
    if($inM -and $l -match '^\s*```\s*$') { 
        $inM = $false
        continue 
    }
    if($inM) {
        $ln = $i + 1
        if($l.Contains('<-->')) { 
            Write-Host "L${ln} BIDIR: $($l.Trim())" 
        }
        if($l -match '^\s*direction\s') { 
            Write-Host "L${ln} DIRECTION: $($l.Trim())" 
        }
        if($l -match 'subgraph\s+\w+\[') { 
            Write-Host "L${ln} SG_BRACKET: $($l.Trim())" 
        }
        if($l.Contains('%q')) { 
            Write-Host "L${ln} PERCENT_Q: $($l.Trim())" 
        }
        if($l -match '&[^#&;]' -and $l -notmatch '-->') { 
            Write-Host "L${ln} AMPERSAND: $($l.Trim())" 
        }
        if($l -match 'pie\s+title') { 
            Write-Host "L${ln} PIE_TITLE: $($l.Trim())" 
        }
    }
}
