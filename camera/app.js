const Stream = require('node-rtsp-stream');

const stream = new Stream({
  name: 'live_stream',
  streamUrl: 'rtsp://192.168.144.25:8554/main.264',
  wsPort: 9999,
  ffmpegOptions: {
    '-stats': '',
    '-r': 30
  }
});

stream.on('exitWithError', () => {
  console.log('Error streaming, restarting...');
  stream.start();
});
