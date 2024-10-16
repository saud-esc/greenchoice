function scanQRCode() {
    const qrData = document.getElementById("qr-input").value;
    if (qrData) {
        alert(`QR Code Data: ${qrData}`);
    } else {
        alert("Please enter QR code data.");
    }
}

