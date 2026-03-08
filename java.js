$(document).ready(function(){
    renderListStudent(getDataLocal());
    const marquee = $(".mar");
    function getNgayThang(){
        let tg = new Date();
        let ngay = tg.getDate();
        let thang = tg.getMonth() + 1;
        let nam = tg.getFullYear();
        let currentDateIndex = tg.getDay();
        let dayOfWeek = [
            "Chủ nhật",
            "Thứ hai",
            "Thứ ba",
            "Thứ tư",
            "Thứ năm",
            "Thứ sáu",
            "Thứ bảy",
        ];
        return `Hôm nay, ${dayOfWeek[currentDateIndex]} ngày ${ngay} tháng ${thang} năm ${nam}`;
    }
    marquee.text(getNgayThang);
});

