const http = require('http');
const url = require('url');
const server = new http.Server;
const fs = require('fs');
server.listen(8010, '127.0.0.1');

server.on('request', function (req, res) {
    let parseUrl = url.parse(req.url, true);

    console.log(getPageNameByPath(parseUrl.pathname));
    if ('error' !== getPageNameByPath(parseUrl.pathname)) {
        console.log('MTAV');
        let param = JSON.parse(JSON.stringify(parseUrl.query));
        console.log(param.id);
        fs.readFile(getPageNameByPath(parseUrl.pathname) + '.json', function (err, data) {
            if (err) throw new Error(err);

            res.writeHead(200, {"Content-Type": "application/json"});
            data = JSON.parse(data);
            console.log(data['users'][param.id]);
            let result = JSON.stringify(data['users'][param.id]);
            res.end(result);

            //res.end(result);

        });
    } else {
        res.end('NET Danix');
    }
});


function getPageNameByPath(path) {
    switch (path) {
        case '/':
        case '/users':
            return 'users';

        case '/profile':
            return 'profile';

        case '/error':
            return 'error';

        default:
            return 'error';
    }
}