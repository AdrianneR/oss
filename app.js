const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const root = __dirname;
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};
const port = Number(process.env.PORT || 8080);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535");
}

const server = http.createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400);
    response.end("Bad Request");
    return;
  }

  if (pathname.includes("\0") || pathname.includes("\\")) {
    response.writeHead(400);
    response.end("Bad Request");
    return;
  }
  if (pathname.split("/").some((segment) => segment.startsWith("."))) {
    response.writeHead(404);
    response.end("Not Found");
    return;
  }

  if (pathname === "/oss" || pathname.startsWith("/oss/")) {
    pathname = pathname.slice(4) || "/";
  }
  if (pathname === "/") pathname = "/index.html";

  const filePath = path.resolve(root, `.${pathname}`);
  if (filePath !== root && !filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const file = await fs.readFile(filePath);
    const contentType = mimeTypes[path.extname(filePath).toLowerCase()];
    if (!contentType) {
      response.writeHead(404);
      response.end("Not Found");
      return;
    }

    response.writeHead(200, {
      "Content-Length": file.length,
      "Content-Type": contentType,
      "X-Content-Type-Options": "nosniff",
    });
    response.end(request.method === "HEAD" ? undefined : file);
  } catch (error) {
    if (
      error.code === "ENOENT" ||
      error.code === "ENOTDIR" ||
      error.code === "EISDIR"
    ) {
      response.writeHead(404);
      response.end("Not Found");
      return;
    }

    console.error("Failed to serve request:", error);
    response.writeHead(500);
    response.end("Internal Server Error");
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Onyx Strategic Solutions is listening on port ${port}`);
});
