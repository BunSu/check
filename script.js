document.getElementById("login-form").onsubmit = function(event) {
    event.preventDefault(); // Ngăn chặn gửi form
    window.location.href = "patient_record.html"; // Chuyển đến trang hồ sơ bệnh án
};

document.getElementById("submit-appointment").onclick = function() {
    window.location.href = "clinical_services.html"; // Chuyển đến trang danh sách dịch vụ
};

document.getElementById("view-results-button").onclick = function() {
    window.location.href = "results.html"; // Chuyển đến trang kết quả khám chữa
};
