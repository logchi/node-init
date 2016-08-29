var options = {
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'post'
};
var req = http.request(
    options,
    function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        })
    }
);
req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
})
