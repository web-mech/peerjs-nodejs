import test from 'ava';

const peerJs = require('.');

test(async t => {
  await new Promise((resolve, reject) => {
    let p = peerJs({ key: 'ut2nndo3zqdaq0k9' });//add options here
    p.on('open', () => resolve(p));
  }).then((peer) => {
    t.is(peer.open, true);
  });
});