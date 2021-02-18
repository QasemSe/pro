QrScanner.WORKER_PATH = './js/qr-scanner/qr-scanner-worker.min.js';

const video = document.getElementById('rendered_camera')

const qrScanner = new QrScanner(video, result => qr_start(result));

qrScanner.start();

function qr_start(result) {
    if (result.indexOf("http://pro.ne/login?username=") > -1)
    {
        window.location.href = result;
    }
}
