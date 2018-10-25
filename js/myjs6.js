var student1 = {
    avatar: '../img/1.jpg',
    rollNumber: 'A0001',
    name: 'Phan Hoai Nam',
    birthday: '20/10/1998',
    address: 'So 8 Ton That Thuyet',
    phone: '0911111111'
}

var student2 = {
    avatar: '../img/2.jpg',
    rollNumber: 'A0002',
    name: 'Dang Tieu Binh',
    birthday: '20/10/2000',
    address: 'So 8 Ton That Thuyet',
    phone: '0922222222'
}

var student3 = {
    avatar: '../img/3.jpg',
    rollNumber: 'A0003',
    name: 'Dang Doanh Quang',
    birthday: '16/03/1998',
    address: 'So 8 Ton That Thuyet',
    phone: '0933333333',
    gender: 'unknown'
}

var student4 = {
    avatar: '../img/4.jpg',
    rollNumber: 'A0007',
    name: 'James Bond',
    birthday: '20/10/1970',
    address: 'So 8 Ton That Thuyet',
    phone: '19001007'
}

var listStudent = new Array();
listStudent.push(student1);
listStudent.push(student2);
listStudent.push(student3);
listStudent.push(student4);




var classMainContent = document.getElementsByClassName('main-content');
if(classMainContent != null && classMainContent.length>0){
    var mainContent = classMainContent[0];
    for (var i = 0; i < listStudent.length; i++){
        var itemContent = '<div class="main-content">\n' +
            '        <div class="personal-infor">\n' +
            '            <div class="avatar" style="background-image: url(' + listStudent[i].avatar + '); background-size: cover">\n' +
            '            </div>\n' +
            '            <div class="line-infor">\n' +
            '                <label>Rollnumber</label>\n' +
            '                <div>'+ listStudent[i].rollNumber + '</div>\n' +
            '            </div>\n' +
            '            <div class="line-infor">\n' +
            '                <label>Name</label>\n' +
            '                <div>' + listStudent[i].name + '</div>\n' +
            '            </div>\n' +
            '            <div class="line-infor">\n' +
            '                <label>Phone</label>\n' +
            '                <div>' + listStudent[i].phone + '</div>\n' +
            '            </div>\n' +
            '            <div class="line-infor">\n' +
            '                <label>Address</label>\n' +
            '                <div>' + listStudent[i].address + '</div>\n' +
            '            </div>\n' +
            '        </div>';
        mainContent.innerHTML += itemContent;
    }
}



