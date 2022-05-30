import "loadEnv";
// import "https://deno.land/std@0.141.0/dotenv/load.ts";

// const PORT_HTTP = parseInt(Deno.env.get("PORT_HTTP") || "3000");

export const configServer = {
    port_http: parseInt(Deno.env.get("PORT_HTTP") || "3000"),
    port_https: parseInt(Deno.env.get("PORT_HTTPS") || "3000"),
    certPath: Deno.env.get("CERT_PATH") || "./input/cert.pem",
    keyPath: Deno.env.get("PRIVAKEY_PATH") || "./input/privakey.pem"
}
