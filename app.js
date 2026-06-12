document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('download-btn');
    const menuBtn = document.querySelector('.menu-btn');

    // Menu toggle listener
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            alert('ReviewJoy APK update landing page menu. Download the app directly using the install button below.');
        });
    }

    // Try to extract dynamic referrer params from current URL and forward to APK downolad if necessary
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = urlParams.get('ref');
    
    if (referrer && downloadBtn) {
        const originalUrl = downloadBtn.getAttribute('href');
        downloadBtn.setAttribute('href', `${originalUrl}?ref=${encodeURIComponent(referrer)}`);
    }
});
