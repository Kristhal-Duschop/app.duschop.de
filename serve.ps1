$port = if ($env:PORT) { [int]$env:PORT } else { 8085 }
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Write-Host "Starting server at http://localhost:$port"
Write-Host "Serving from: $root"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving HTTP on 0.0.0.0 port $port (http://localhost:$port/) ..."

try {
    while ($listener.IsListening) {
        $ctx = $listener.GetContext()
        try {
            $path = $ctx.Request.Url.LocalPath
            if ($path -eq "/") { $path = "/index.html" }
            elseif ($path.EndsWith("/")) { $path += "index.html" }
            $file = Join-Path $root ($path -replace "/", "\")
            if (Test-Path $file -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($file)
                $ext = [System.IO.Path]::GetExtension($file).ToLower()
                $ct = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".svg"  { "image/svg+xml" }
                    ".ico"  { "image/x-icon" }
                    default { "application/octet-stream" }
                }
                $ctx.Response.ContentType = $ct
                $ctx.Response.ContentLength64 = $bytes.Length
                $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $ctx.Response.StatusCode = 404
                $ctx.Response.ContentType = "text/plain; charset=utf-8"
                $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $ctx.Response.ContentLength64 = $msg.Length
                $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
            }
        } catch {
            Write-Host "Request error: $_"
        } finally {
            try { $ctx.Response.Close() } catch {}
        }
    }
} finally {
    $listener.Stop()
}
