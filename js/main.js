QrScanner.WORKER_PATH = './js/qr-scanner/qr-scanner-worker.min.js';

const video = document.getElementById('rendered_camera')

const qrScanner = new QrScanner(video, result => console.log('decoded qr code:', result));

qrScanner.start();
