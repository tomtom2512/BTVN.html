var celebrationNames = [
    'Vũ Thị Hoài Anh',
    'Phạm Thanh Hoa',
    'Trần Thị Thi',
    'Ngô Thị Ngọc Ánh',
    'Ngô Thị Mai',
    'Giang Thị Tình',
    'Giang Thị Hạnh',
    'Trần Thị Hương Ly',
    'Đặng Danh Quảng'
];
var celebrationRose = '<div class="celebration-rose">\n' +
    '        <img src="http://getdrawings.com/image/beauty-and-the-beast-rose-drawing-step-by-step-62.jpg" alt="Rose">\n' +
    '    </div>';
var celebrationContentP1 = '<div class="celebration-content">\n' +
    '        <h1>Chào mừng ngày phụ nữ Việt Nam 20 tháng 10</h1>\n' +
    '        <p>Nhân ngày phụ nữ Việt Nam 20/10/2018, thay mặt các bạn nam lớp T1808A, Thầy gửi lời chúc tới các bạn: </p>\n' +
    '        <div class="celebration-name">\n' +
    '            <ul>';

var liCelebrationName = '';
for (var j = 0; j < 3; j++) {
    liCelebrationName += '<li>' + celebrationNames[j] + '</li>';
}

var hiddenLiCelebrationNames = '';
for (var k = 3; k < celebrationNames.length; k++) {
    hiddenLiCelebrationNames += '<li name="hidden" class="hidden">' + celebrationNames[k] + '</li>';
}



var seeMoreNames = '<button id="toggleButton">See more</button>'

var celebrationContentP2 = '</ul>\n' +
    '        </div>\n' +
    '        <blockquote>"Một ngày 20 tháng 10 vui vẻ, nhận được nhiều quà, luôn hoàn thành tốt assignment\n' +
    '            Thầy giao để khỏi phải học lại cũng như bị lưu ban sang lớp khác :)"</blockquote>\n' +
    '    </div>';

document.body.innerHTML = celebrationRose + celebrationContentP1 + liCelebrationName + hiddenLiCelebrationNames + seeMoreNames + celebrationContentP2;

var btnSeeMore = document.getElementById("toggleButton");

var btnStatus = "less";

var hidden = document.getElementsByName("hidden");
btnSeeMore.onclick = function(){
    if (btnStatus==="less"){
        for (var i = 0; i < celebrationNames.length-3; i++) {
            hidden[i].classList.remove("hidden");
        }
        btnSeeMore.innerHTML = "See less";
        btnStatus = "more";
    } else if (btnStatus==="more"){
        for (var i = 0; i < celebrationNames.length-3; i++) {
            hidden[i].classList.add("hidden");
        }
        btnSeeMore.innerHTML = "See More";
        btnStatus = "less";
    }
}


