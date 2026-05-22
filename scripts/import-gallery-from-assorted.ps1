# Import hi-res gallery — preserves original slot numbering (featured picks stay correct).
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

function Save-OptimizedJpeg {
    param([string]$Source, [string]$Dest, [int]$MaxSide = 2400)
    $img = [System.Drawing.Image]::FromFile($Source)
    try {
        $scale = [Math]::Min(1.0, [Math]::Min($MaxSide / $img.Width, $MaxSide / $img.Height))
        $nw = [Math]::Max(1, [int]($img.Width * $scale))
        $nh = [Math]::Max(1, [int]($img.Height * $scale))
        $bmp = New-Object System.Drawing.Bitmap $nw, $nh
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $g.DrawImage($img, 0, 0, $nw, $nh)
        $g.Dispose()
        $outPath = [System.IO.Path]::GetFullPath($Dest)
        $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $bmp.Dispose()
    } finally {
        $img.Dispose()
    }
}

function Import-Slot {
    param([string]$Source, [string]$Dest, [int]$MaxSide = 2400)
    if (-not (Test-Path -LiteralPath $Source)) {
        throw "Missing source: $Source"
    }
    $len = (Get-Item -LiteralPath $Source).Length
    if ($len -gt 800000) {
        Save-OptimizedJpeg -Source $Source -Dest $Dest -MaxSide $MaxSide
    } else {
        Copy-Item -LiteralPath $Source -Destination $Dest -Force
    }
}

$root = "c:\Users\Timothy\Dev\Amber Morrill\Assorted Wedding Photos"
$dest = "c:\Users\Timothy\Dev\Amber Morrill\website\public\images\weddings"

# Mitchells — original chat upload order (featured = slot 3 = 1J1A9601)
$mitDir = "$root\The Mitchells_Kelly Costello Photography"
$mitchellsMap = @{
    1  = "1J1A8772 (1).jpg"
    2  = "1J1A0126.jpg"
    3  = "1J1A9601.jpg"
    4  = "6I1A4824.jpg"
    5  = "1J1A9850.jpg"
    6  = "1J1A9660 (1).jpg"
    7  = "1J1A0710.jpg"
    8  = "1J1A9925.jpg"
    9  = "1J1A0258 (1).jpg"
}
foreach ($slot in ($mitchellsMap.Keys | Sort-Object)) {
    $n = "{0:D2}" -f $slot
    $src = Join-Path $mitDir $mitchellsMap[$slot]
    Import-Slot -Source $src -Dest "$dest\nicole-matt-$n.jpg"
    Write-Host "mitchells $n <- $($mitchellsMap[$slot])"
}

# Ralstons — original chat upload order (featured = slot 3 = image002)
$ralDir = "$root\The Ralstons_Elizabeth Rey Photography"
$ralstonsMap = @{
    1  = "image006.jpg"
    2  = "image001 (1).jpg"
    3  = "image002.jpg"
    4  = "image003.jpg"
    5  = "image005.jpg"
    6  = "image004.jpg"
    7  = "Ralston506.jpg"
    8  = "Ralston966.jpg"
    9  = "Ralston937.jpg"
    10 = "Ralston380.jpg"
    11 = "Ralston639.jpg"
    12 = "Ralston236.jpg"
    13 = "Ralston516.jpg"
    14 = "Ralston128.jpg"
}
foreach ($slot in ($ralstonsMap.Keys | Sort-Object)) {
    $n = "{0:D2}" -f $slot
    $src = Join-Path $ralDir $ralstonsMap[$slot]
    $max = if ($slot -le 6) { 1600 } else { 2400 }
    Import-Slot -Source $src -Dest "$dest\ralstons-$n.jpg" -MaxSide $max
    Write-Host "ralstons $n <- $($ralstonsMap[$slot])"
}

# Buenos — image001-011 order + Hotel Emma (featured = slot 12)
$buenosDir = "$root\The Buenos"
$buenosMap = @{}
1..11 | ForEach-Object {
    $files = Get-ChildItem "$buenosDir\image*.jpg" | Sort-Object Name
    $buenosMap[$_] = $files[$_ - 1].Name
}
$buenosMap[12] = "IMG_5667.jpeg"
$buenosMap[13] = "IMG_5976.jpeg"
foreach ($slot in ($buenosMap.Keys | Sort-Object)) {
    $n = "{0:D2}" -f $slot
    $src = Join-Path $buenosDir $buenosMap[$slot]
    $max = if ($slot -ge 12) { 2400 } else { 1600 }
    Import-Slot -Source $src -Dest "$dest\buenos-$n.jpg" -MaxSide $max
    Write-Host "buenos $n <- $($buenosMap[$slot])"
}

# Munizes — image001-008 order (featured = slot 7)
$munDir = "$root\The Munzies"
$munFiles = Get-ChildItem "$munDir\image*.jpg" | Sort-Object Name
1..8 | ForEach-Object {
    $n = "{0:D2}" -f $_
    Import-Slot -Source $munFiles[$_ - 1].FullName -Dest "$dest\munizes-$n.jpg" -MaxSide 1600
    Write-Host "munizes $n <- $($munFiles[$_ - 1].Name)"
}

Write-Host "`nDone."
