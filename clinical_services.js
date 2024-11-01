// Ví dụ thêm logic cho các dịch vụ
const serviceLinks = document.querySelectorAll('.service-item a');

serviceLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn không cho chuyển trang ngay lập tức
        alert('Chức năng này sẽ hiển thị kết quả cho dịch vụ: ' + this.innerText);
        // Bạn có thể chuyển hướng đến trang cụ thể ở đây nếu cần
    });
});
