# Import hi-res gallery from Assorted Wedding Photos -> public/images/weddings
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

function Save-OptimizedJpeg {
    param([string]$Source, [string]$Dest, [int]$MaxSide = 2400, [int]$Quality = 88)
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

function Import-File {
    param([string]$Source, [string]$Dest, [int]$MaxSide = 2400)
    $len = (Get-Item -LiteralPath $Source).Length
    if ($len -gt 800000) {
        Save-OptimizedJpeg -Source $Source -Dest $Dest -MaxSide $MaxSide
    } else {
        Copy-Item -LiteralPath $Source -Destination $Dest -Force
    }
}

$root = "c:\Users\Timothy\Dev\Amber Morrill\Assorted Wedding Photos"
$dest = "c:\Users\Timothy\Dev\Amber Morrill\website\public\images\weddings"

# Mitchells (9) — full-res photographer exports
$mit = Get-ChildItem "$root\The Mitchells_Kelly Costello Photography\*.jpg" | Sort-Object Name
for ($i = 0; $i -lt $mit.Count; $i++) {
    $n = "{0:D2}" -f ($i + 1)
    Import-File -Source $mit[$i].FullName -Dest "$dest\nicole-matt-$n.jpg"
    Write-Host "mitchells $n <- $($mit[$i].Name)"
}

# Ralstons: image001-006 -> 01-06; hi-res Ralston*.jpg -> 07-14
$ralDir = "$root\The Ralstons_Elizabeth Rey Photography"
$ralSmall = Get-ChildItem "$ralDir\image*.jpg" | Sort-Object Name
for ($i = 0; $i -lt $ralSmall.Count; $i++) {
    $n = "{0:D2}" -f ($i + 1)
    Import-File -Source $ralSmall[$i].FullName -Dest "$dest\ralstons-$n.jpg" -MaxSide 1600
    Write-Host "ralstons $n <- $($ralSmall[$i].Name)"
}
$ralBig = @(
    "Ralston128.jpg", "Ralston236.jpg", "Ralston380.jpg", "Ralston506.jpg",
    "Ralston516.jpg", "Ralston639.jpg", "Ralston937.jpg", "Ralston966.jpg"
)
for ($i = 0; $i -lt $ralBig.Count; $i++) {
    $n = "{0:D2}" -f ($i + 7)
    $src = Join-Path $ralDir $ralBig[$i]
    Import-File -Source $src -Dest "$dest\ralstons-$n.jpg"
    Write-Host "ralstons $n <- $($ralBig[$i])"
}

# Buenos (13)
$buenosDir = "$root\The Buenos"
$buenosSmall = Get-ChildItem "$buenosDir\image*.jpg" | Sort-Object Name
for ($i = 0; $i -lt $buenosSmall.Count; $i++) {
    $n = "{0:D2}" -f ($i + 1)
    Import-File -Source $buenosSmall[$i].FullName -Dest "$dest\buenos-$n.jpg" -MaxSide 1600
    Write-Host "buenos $n <- $($buenosSmall[$i].Name)"
}
Import-File -Source "$buenosDir\IMG_5667.jpeg" -Dest "$dest\buenos-12.jpg" -MaxSide 2400
Import-File -Source "$buenosDir\IMG_5976.jpeg" -Dest "$dest\buenos-13.jpg" -MaxSide 2400
Write-Host "buenos 12 <- IMG_5667.jpeg"
Write-Host "buenos 13 <- IMG_5976.jpeg"

# Munizes (8) — same small exports as before; import for consistency
$mun = Get-ChildItem "$root\The Munzies\image*.jpg" | Sort-Object Name
for ($i = 0; $i -lt $mun.Count; $i++) {
    $n = "{0:D2}" -f ($i + 1)
    Import-File -Source $mun[$i].FullName -Dest "$dest\munizes-$n.jpg" -MaxSide 1600
    Write-Host "munizes $n <- $($mun[$i].Name)"
}

Write-Host "`nDone. New JPG sizes:"
Get-ChildItem $dest -Include "nicole-matt-*.jpg","ralstons-*.jpg","buenos-*.jpg","munizes-*.jpg" -Recurse |
    Sort-Object Name |
    ForEach-Object { "{0,-22} {1,8:N0} KB" -f $_.Name, ($_.Length / 1KB) }
