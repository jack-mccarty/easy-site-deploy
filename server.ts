import {
    serveDir,
    serveFile,
  } from "https://deno.land/std@0.182.0/http/file_server.ts";
  
  import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
  
  serve((req: Request) => {
    const pathname = new URL(req.url).pathname;
  
    if (pathname === "/") {
      return serveFile(req, "./public/index.html");
    }
  
    //serve the public directory for scripts/css/assets
    if (pathname.startsWith("/public")) {
      return serveDir(req, {
        fsRoot: "public",
        urlRoot: "public",
      });
    }
    
    //return the 404.html page
  
    return serveFile(req, "./public/404.html");
  });