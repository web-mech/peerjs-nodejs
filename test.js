import test from 'ava';

const peerJs = require('.');

test(async t => {
  const bar = Promise.resolve('bar');

  const peer = new Promise((resolve, reject) => {
    let p = peerJs();//add options here
    p.on('open', () => resolve(p));
  });
  
  await peer;

  t.is(peer.open, true);
});