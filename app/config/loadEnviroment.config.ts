import "loadEnv";

export const configServer = {
    port_http: parseInt(Deno.env.get("PORT_HTTP") || "3000"),
    port_https: parseInt(Deno.env.get("PORT_HTTPS") || "3000"),
    certPath: Deno.env.get("CERT_PATH") || "./input/cert.pem",
    keyPath: Deno.env.get("PRIVAKEY_PATH") || "./input/privakey.pem"
};

export const configDatabase = {
    host: Deno.env.get("HOST_DB") || "localhost",
    port: Deno.env.get("PORT_DB") || "9000",
    username: Deno.env.get("USERNAME_DB") || "admin",
    password: Deno.env.get("PASSWORD_DB") || "root"
};
