document.getElementById("login-form").onsubmit = function(event) {
    event.preventDefault(); // Ngăn chặn gửi form
    alert("Thông tin đã được gửi!"); // Thông báo cho người dùng
    window.location.href = "patient_record.html"; // Chuyển đến trang hồ sơ bệnh án
};

document.getElementById("submit-appointment").onclick = function() {
    alert("Ngày và thời gian đã được chọn!"); // Thông báo cho người dùng
    window.location.href = "clinical_services.html"; // Chuyển đến trang danh sách dịch vụ
};

document.getElementById("view-results-button").onclick = function() {
    alert("Đang tải kết quả khám chữa..."); // Thông báo cho người dùng
    window.location.href = "results.html"; // Chuyển đến trang kết quả khám chữa
};
