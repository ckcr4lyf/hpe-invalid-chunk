import http from 'http';

http.get('http://127.0.0.1:3399', (res) => {
    res.on('data', chunk => {
        console.log(`Got chunk`, chunk);
    });

    res.on('end', () => {
        console.log(`response ended`);
    });
}).on('error', err => {
    throw err;
})