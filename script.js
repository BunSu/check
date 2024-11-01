// Hàm gửi mã OTP (mô phỏng)
function sendOTP() {
    alert("Mã OTP đã được gửi đến số điện thoại của bạn!");
    document.getElementById("otpSection").style.display = "block";
}

// Hàm xác thực mã OTP và chuyển đến trang 2
function verifyOTP() {
    const fullname = document.getElementById("fullname").value;
    const id = document.getElementById("id").value;
    const phone = document.getElementById("phone").value;
    const otp = document.getElementById("otp").value;

    // Kiểm tra các điều kiện
    if (fullname && id && phone && otp === "1") {  // mã OTP là '1' cho tài khoản demo
        alert("Xác thực thành công!");
        window.location.href = "page2.html";  // Chuyển hướng đến trang 2
    } else {
        alert("Mã OTP không đúng. Vui lòng thử lại.");
    }
}
