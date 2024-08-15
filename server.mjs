import net from 'net';

/*
Corresponds to the following body captured from my own ESP8266:

    00000000  48 54 54 50 2f 31 2e 31  20 32 30 30 20 4f 4b 0d   HTTP/1.1  200 OK.
    00000010  0a 43 6f 6e 74 65 6e 74  2d 54 79 70 65 3a 20 74   .Content -Type: t
    00000020  65 78 74 2f 70 6c 61 69  6e 0d 0a 43 6f 6e 6e 65   ext/plai n..Conne
    00000030  63 74 69 6f 6e 3a 20 63  6c 6f 73 65 0d 0a 41 63   ction: c lose..Ac
    00000040  63 65 70 74 2d 52 61 6e  67 65 73 3a 20 6e 6f 6e   cept-Ran ges: non
    00000050  65 0d 0a 54 72 61 6e 73  66 65 72 2d 45 6e 63 6f   e..Trans fer-Enco
    00000060  64 69 6e 67 3a 20 63 68  75 6e 6b 65 64 0d 0a 0d   ding: ch unked...
    00000070  0a 32 39 20 20 0d 0a 0a  75 70 20 31 0a 74 65 6d   .29  ... up 1.tem
    00000080  70 65 72 61 74 75 72 65  20 33 31 2e 30 30 0a 68   perature  31.00.h
    00000090  75 6d 69 64 69 74 79 20  36 36 2e 30 30 0a 0a 0a   umidity  66.00...
    000000A0  0d 0a                                              ..
    000000A2  30 20 20 20 0d 0a 0d 0a                            0   .... 
*/
const tcpPayload = Buffer.from("485454502f312e3120323030204f4b0d0a436f6e74656e742d547970653a20746578742f706c61696e0d0a436f6e6e656374696f6e3a20636c6f73650d0a4163636570742d52616e6765733a206e6f6e650d0a5472616e736665722d456e636f64696e673a206368756e6b65640d0a0d0a323920200d0a0a757020310a74656d70657261747572652033312e31300a68756d69646974792036352e36300a0a0a0d0a302020200d0a0d0a", 'hex');
const server = new net.Server();

server.listen('3399', '0.0.0.0', () => {
    console.log(`started on :3399`);
})

server.on('connection', (socket) => {
    socket.on('data', chunk => {
        socket.write(tcpPayload); // For literally any data we respond with the mocked body to keep it simple
        socket.end();
    });
    socket.on('end', function() {
        console.log('Closing connection with the client');
    });
    socket.on('error', function(err) {
        console.log(`Error: ${err}`);
    });
})