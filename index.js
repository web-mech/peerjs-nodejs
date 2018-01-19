window = global;

XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var wrtc = require('electron-webrtc')()


RTCPeerConnection = wrtc.RTCPeerConnection;
RTCSessionDescription = wrtc.RTCSessionDescription;
RTCIceCandidate = wrtc.RTCIceCandidate;

WebSocket = require('ws');
location = {
  protocol: 'http'
};

require('peerjs/lib/exports');

module.exports = function(id, options) {
  // Deal with overloading :-D
  if (id && id.constructor == Object) {
    options = id;
    id = undefined;
  } else if (id) {
    // Ensure id is a string
    id = id.toString();
  }

  return new Peer(id, options);
};