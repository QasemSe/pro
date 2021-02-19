QrScanner.WORKER_PATH = './js/qr-scanner/qr-scanner-worker.min.js';

const video = document.getElementById('rendered_camera')

const qrScanner = new QrScanner(video, result => qr_start(result));
const flashToggle = document.getElementById('flash_toggle');

qrScanner.start().then(() => {
    qrScanner.hasFlash().then(hasFlash => {
        if (hasFlash) {
            flashToggle.style.display = 'block';
            flashToggle.addEventListener('click', () => {
                qrScanner.toggleFlash().then(() => flashToggle.classList.toggle("flash-on"));
            });
        }
    });
});;

function qr_start(result) {
    if (result.indexOf("http://p.net/login?username=") > -1)
    {
        qrScanner.stop();
        window.location.href = result;
    }
}
