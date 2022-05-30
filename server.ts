import { configServer } from "configs/loadEnviroment.ts";
import { ServerRequest } from "serverDeno";
import { pathToRegexp } from "path-to-regexp";

interface Route {
    name: string; // name of the route, just for tracking
    path: string; // path pattern for handler
    handler: (req: ServerRequest, match: RegExpExecArray) => void; // handler to handle request
}

const server = Deno.listen({
    port: configServer.port_http
});
console.log(`HTTP webserver running.  Access it at:  http://localhost:3000/`);


// servidor const =  Deno . listenTls ( { 
//     puerto :  8443 , 
//     certFile :  "localhost.crt" , 
//     keyFile :  "localhost.key" , 
//     alpnProtocols :  [ "h2" ,  "http/1.1" ] , 
//   } ) ;

for await (const conn of server ) {
    console.log(conn);
    serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
    // This "upgrades" a network connection into an HTTP connection.
    const httpConn = Deno.serveHttp(conn);
    // Each request sent over the HTTP connection will be yielded as an async
    // iterator from the HTTP connection.
    for await (const requestEvent of httpConn) {
      // The native HTTP server uses the web standard `Request` and `Response`
      // objects.
      const body = `Your user-agent is:\n\n${
        requestEvent.request.headers.get("user-agent") ?? "Unknown"
      }`;
      // The requestEvent's `.respondWith()` method is how we send the response
      // back to the client.
      requestEvent.respondWith(
        new Response(body, {
          status: 200,
        }),
      );
    }
  }
