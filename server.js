const http = require('http'),
      fs   = require('fs'),
      path = require('path'),
      port = 3000

// Files served directly from the project root
const ROOT_FILES = new Set([
  'index.html',
  'projects-data.js',
  'Resume.pdf',
  'BSB.png',
  'US-ARMY-ROTC.svg.png',
  'wpi-logo.webp',
])

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.pdf':  'application/pdf',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
}

const server = http.createServer( function( request, response ) {
    // Normalise URL: strip query string and decode percent-encoding
    let urlPath = request.url.split('?')[0]
    try { urlPath = decodeURIComponent(urlPath) } catch(e) {}

    // Root → index.html
    if (urlPath === '/') urlPath = '/index.html'

    const filename = urlPath.substring(1)  // strip leading /
    const ext      = path.extname(filename).toLowerCase()
    const mime     = MIME[ext] || 'application/octet-stream'

    // Allow root-level whitelisted files
    if (ROOT_FILES.has(filename)) {
        return sendFile(response, filename, mime)
    }

    // Allow anything inside the projects/ folder (images, etc.)
    const normalised = path.normalize(filename)
    if (normalised.startsWith('projects' + path.sep) || normalised.startsWith('projects/')) {
        return sendFile(response, normalised, mime)
    }

    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.end('404 Error: File Not Found')
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename, mime ) {
   fs.readFile( filename, function( err, content ) {
     if (err) {
       response.writeHead(404, { 'Content-Type': 'text/plain' })
       response.end('404 Error: File Not Found')
     } else {
       response.writeHead(200, { 'Content-Type': mime })
       response.end( content )
     }
   })
}
