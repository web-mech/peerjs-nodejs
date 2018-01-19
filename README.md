# peerjs-nodejs

A peerjs client that works within nodejs apps

## Usage

```
const peerJs = require('peerjs-nodejs');

const peer = peerJs({ key: 'abcxyz' });
//or
const peer = peerJs(id, { ...options });
```

### A word on connections

Binary data serialization currently isn't supported with the current dependencies. ( probably still possible, just not as is). You must set the connection serialization to either `none` or `json`

See Documentation:

http://peerjs.com/docs/#dataconnection-serialization

```
let conn = peer.connect('foo');
conn.serialization = 'json';
conn.send({ value: 'hello' });
```