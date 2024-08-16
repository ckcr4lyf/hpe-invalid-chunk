# HPE_INVALID_CHUNK_SIZE

This is a demo repository to illustrate the (potential) bug in Node.JS regarding `HPE_INVALID_CHUNK_SIZE`.

## Issue

Node v18+ fails to parse certain HTTP responses, e.g. from an ESP8266.

See: https://github.com/nodejs/undici/issues/2678

## Online Demo

A copy of `server.mjs` is deployed on http://rfc5746.mywaifu.best:3399 , so you can test using you're preferred HTTP library. (I'll do my best to keep it up, open an issue if it seems down)
