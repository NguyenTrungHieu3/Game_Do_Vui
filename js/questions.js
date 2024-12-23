class Question {
    constructor(content, answer, correctAnswer) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
}

// TODO answer là một đối tượng.as

let q1 = new Question("Câu hỏi: Đỉnh núi cao nhất Việt Nam là gì?", ["A. Fansipan", "B. Ngọc Linh", "C. Bạch Mã", "D. Langbiang"], "A. Fansipan");
let q2 = new Question("Câu hỏi: Vịnh Hạ Long đã được UNESCO công nhận là di sản thế giới vào năm nào?", ["A. 1990", "B. 1994", "C. 1999", "D. 2003"], "B. 1994");
let q3 = new Question("Câu hỏi: Món ăn nào được gọi là 'quốc hồn quốc túy' của Việt Nam?", ["A. Bún bò Huế", "B. Phở", "C. Bánh mì", "D. Bánh chưng"], "B. Phở");
let q4 = new Question("Câu hỏi: Vị vua nào được coi là sáng lập ra nhà Nguyễn?", ["A. Gia Long", "B. Minh Mạng", "C. Thiệu Trị", "D. Tự Đức"], "A. Gia Long");
let q5 = new Question("Câu hỏi: Bài thơ 'Tây Tiến' của Quang Dũng ra đời vào năm nào?", ["A. 1945", "B. 1948", "C. 1950", "D. 1954"], "B. 1948");
let q6 = new Question("Câu hỏi: Địa danh nào được gọi là 'Hạ Long trên cạn'?", ["A. Ninh Bình", "B. Sapa", "C. Tam Đảo", "D. Đà Lạt"], "A. Ninh Bình");
let q7 = new Question("Câu hỏi: Lễ hội nào lớn nhất của người Việt vào dịp đầu năm?", ["A. Lễ hội Chùa Hương", "B. Lễ hội Đền Hùng", "C. Lễ hội Gióng", "D. Tết Nguyên Đán"], "D. Tết Nguyên Đán");
let q8 = new Question("Câu hỏi: Trong truyện Kiều, nhân vật nào được coi là đại diện của tài sắc vẹn toàn?", ["A. Thúy Kiều", "B. Thúy Vân", "C. Hoạn Thư", "D. Từ Hải"], "A. Thúy Kiều");
let q9 = new Question("Câu hỏi: Bánh cuốn là đặc sản nổi tiếng của tỉnh nào ở Việt Nam?", ["A. Hải Dương", "B. Thanh Hóa", "C. Hà Nam", "D. Cao Bằng"], "C. Hà Nam");
let q10 = new Question("Câu hỏi: Di tích cố đô Huế thuộc triều đại nào?", ["A. Triều Trần", "B. Triều Nguyễn", "C. Triều Lý", "D. Triều Tây Sơn"], "B. Triều Nguyễn");
let q11 = new Question("Câu hỏi: Ai là tác giả của bản 'Tuyên ngôn độc lập' năm 1945?", ["A. Phạm Văn Đồng", "B. Hồ Chí Minh", "C. Võ Nguyên Giáp", "D. Trường Chinh"], "B. Hồ Chí Minh");
let q12 = new Question("Câu hỏi: Loài hoa nào được xem là biểu tượng của thủ đô Hà Nội?", ["A. Hoa sen", "B. Hoa sữa", "C. Hoa mai", "D. Hoa đào"], "B. Hoa sữa");
let q13 = new Question("Câu hỏi: Chợ nổi Cái Răng là một nét văn hóa đặc sắc của tỉnh nào?", ["A. Cần Thơ", "B. An Giang", "C. Tiền Giang", "D. Sóc Trăng"], "A. Cần Thơ");
let q14 = new Question("Câu hỏi: Đàn đá là nhạc cụ dân tộc thuộc khu vực nào của Việt Nam?", ["A. Tây Bắc", "B. Tây Nguyên", "C. Đồng bằng sông Hồng", "D. Nam Trung Bộ"], "B. Tây Nguyên");
let q15 = new Question("Câu hỏi: Văn Miếu - Quốc Tử Giám được xây dựng vào triều đại nào?", ["A. Triều Lý", "B. Triều Trần", "C. Triều Lê", "D. Triều Nguyễn"], "A. Triều Lý");
let q16 = new Question("Câu hỏi: Hang Sơn Đoòng được phát hiện vào năm nào?", ["A. 1991", "B. 2000", "C. 2009", "D. 2013"], "C. 2009");
let q17 = new Question("Câu hỏi: Tác phẩm nào được coi là 'bản tuyên ngôn độc lập thứ hai' của Việt Nam?", ["A. Nam Quốc Sơn Hà", "B. Bình Ngô Đại Cáo", "C. Hịch Tướng Sĩ", "D. Lời Kêu Gọi Toàn Quốc Kháng Chiến"], "B. Bình Ngô Đại Cáo");
let q18 = new Question("Câu hỏi: Tên của cầu dây văng dài nhất Việt Nam là gì?", ["A. Cầu Mỹ Thuận", "B. Cầu Cần Thơ", "C. Cầu Nhật Tân", "D. Cầu Bãi Cháy"], "B. Cầu Cần Thơ");
let q19 = new Question("Câu hỏi: Thành phố nào được gọi là 'thành phố sương mù' của Việt Nam?", ["A. Sapa", "B. Đà Lạt", "C. Tam Đảo", "D. Đồng Văn"], "B. Đà Lạt");
let q20 = new Question("Câu hỏi: Bức tranh 'Vườn Xuân Trung Nam Bắc' là tác phẩm của họa sĩ nào?", ["A. Nguyễn Gia Trí", "B. Tô Ngọc Vân", "C. Nguyễn Phan Chánh", "D. Trần Văn Cẩn"], "A. Nguyễn Gia Trí");
let q21 = new Question("Câu hỏi: Hồ nào được mệnh danh là 'lá phổi xanh' của thủ đô Hà Nội?", ["A. Hồ Gươm", "B. Hồ Tây", "C. Hồ Bảy Mẫu", "D. Hồ Trúc Bạch"], "B. Hồ Tây");
let q22 = new Question("Câu hỏi: Nhà thờ Đức Bà nằm ở thành phố nào?", ["A. Hà Nội", "B. Huế", "C. Đà Nẵng", "D. TP. Hồ Chí Minh"], "D. TP. Hồ Chí Minh");
let q23 = new Question("Câu hỏi: Động Phong Nha nằm ở tỉnh nào của Việt Nam?", ["A. Quảng Bình", "B. Quảng Nam", "C. Hà Tĩnh", "D. Nghệ An"], "A. Quảng Bình");
let q24 = new Question("Câu hỏi: Tỉnh nào có nhiều đảo nhất ở Việt Nam?", ["A. Quảng Ninh", "B. Kiên Giang", "C. Bà Rịa - Vũng Tàu", "D. Bình Thuận"], "B. Kiên Giang");
let q25 = new Question("Câu hỏi: Làng gốm Bát Tràng thuộc huyện nào của Hà Nội?", ["A. Gia Lâm", "B. Đông Anh", "C. Thanh Trì", "D. Hoài Đức"], "A. Gia Lâm");
let q26 = new Question("Câu hỏi: Nơi nào được xem là 'kinh đô của cà phê' ở Việt Nam?", ["A. Đắk Nông", "B. Gia Lai", "C. Đắk Lắk", "D. Kon Tum"], "C. Đắk Lắk");
let q27 = new Question("Câu hỏi: Văn bản nào được xem là tuyên ngôn độc lập đầu tiên của Việt Nam?", ["A. Hịch Tướng Sĩ", "B. Bình Ngô Đại Cáo", "C. Nam Quốc Sơn Hà", "D. Lời Kêu Gọi Toàn Quốc Kháng Chiến"], "C. Nam Quốc Sơn Hà");
let q28 = new Question("Câu hỏi: Lễ hội Đền Hùng được tổ chức vào ngày nào?", ["A. 15/1 âm lịch", "B. 10/3 âm lịch", "C. 20/4 âm lịch", "D. 25/12 dương lịch"], "B. 10/3 âm lịch");
let q29 = new Question("Câu hỏi: Chợ Đông Ba là một địa danh nổi tiếng ở đâu?", ["A. Hội An", "B. Huế", "C. Đà Lạt", "D. Sapa"], "B. Huế");
let q30 = new Question("Câu hỏi: Tác phẩm nào của Nguyễn Trãi được xem là một bản cáo trạng chống lại triều đại nhà Minh?", ["A. Bình Ngô Đại Cáo", "B. Lam Sơn Thực Lục", "C. Quốc Âm Thi Tập", "D. Dư Địa Chí"], "A. Bình Ngô Đại Cáo");
let q31 = new Question("Câu hỏi: Món ăn nào được làm từ bột gạo, nhân tôm thịt, và thường ăn kèm với nước mắm ngọt?", ["A. Bánh xèo", "B. Bánh cuốn", "C. Bánh bèo", "D. Bánh đúc"], "C. Bánh bèo");
let q32 = new Question("Câu hỏi: Nhà văn nào đã viết tác phẩm 'Chí Phèo'?", ["A. Nam Cao", "B. Ngô Tất Tố", "C. Nguyễn Tuân", "D. Vũ Trọng Phụng"], "A. Nam Cao");
let q33 = new Question("Câu hỏi: Loại hình nghệ thuật nào của Việt Nam đã được UNESCO công nhận là di sản văn hóa phi vật thể?", ["A. Cải lương", "B. Hát quan họ", "C. Đờn ca tài tử", "D. Cả B và C đều đúng"], "D. Cả B và C đều đúng");
let q34 = new Question("Câu hỏi: Chùa Một Cột được xây dựng lần đầu tiên dưới triều đại nào?", ["A. Triều Lý", "B. Triều Trần", "C. Triều Lê", "D. Triều Nguyễn"], "A. Triều Lý");
let q35 = new Question("Câu hỏi: Cố đô Hoa Lư thuộc tỉnh nào?", ["A. Hà Nam", "B. Ninh Bình", "C. Thanh Hóa", "D. Nam Định"], "B. Ninh Bình");
let q36 = new Question("Câu hỏi: Hát xoan là loại hình nghệ thuật dân gian gắn liền với tỉnh nào?", ["A. Phú Thọ", "B. Bắc Giang", "C. Hà Nam", "D. Hà Tĩnh"], "A. Phú Thọ");
let q37 = new Question("Câu hỏi: Đỉnh núi cao nhất Tây Nguyên là gì?", ["A. Langbiang", "B. Chư Yang Sin", "C. Ngọc Linh", "D. Kon Ka Kinh"], "C. Ngọc Linh");
let q38 = new Question("Câu hỏi: Nhà thơ nào được mệnh danh là 'Ông hoàng thơ tình' của Việt Nam?", ["A. Xuân Diệu", "B. Hàn Mặc Tử", "C. Tố Hữu", "D. Nguyễn Bính"], "A. Xuân Diệu");
let q39 = new Question("Câu hỏi: Địa đạo Củ Chi nằm ở tỉnh/thành phố nào?", ["A. Tây Ninh", "B. TP. Hồ Chí Minh", "C. Bình Dương", "D. Đồng Nai"], "B. TP. Hồ Chí Minh");
let q40 = new Question("Câu hỏi: Lễ hội nào gắn liền với vùng đất Tây Nguyên?", ["A. Lễ hội Cồng Chiêng", "B. Lễ hội Gióng", "C. Lễ hội Đền Hùng", "D. Lễ hội Chùa Hương"], "A. Lễ hội Cồng Chiêng");
let q41 = new Question("Câu hỏi: Di tích Hoàng Thành Thăng Long nằm ở đâu?", ["A. Huế", "B. Hà Nội", "C. Ninh Bình", "D. Hải Phòng"], "B. Hà Nội");
let q42 = new Question("Câu hỏi: Biển Hồ, còn được gọi là Hồ T’Nưng, nằm ở tỉnh nào?", ["A. Gia Lai", "B. Kon Tum", "C. Đắk Lắk", "D. Lâm Đồng"], "A. Gia Lai");
let q43 = new Question("Câu hỏi: Vị vua nào là người đã đặt nền móng cho văn học chữ Nôm ở Việt Nam?", ["A. Trần Nhân Tông", "B. Nguyễn Huệ", "C. Lê Thánh Tông", "D. Nguyễn Trãi"], "C. Lê Thánh Tông");
let q44 = new Question("Câu hỏi: Lễ hội Kate là lễ hội truyền thống của dân tộc nào?", ["A. Chăm", "B. Ê-đê", "C. H'Mông", "D. Dao"], "A. Chăm");
let q45 = new Question("Câu hỏi: Động Thiên Đường được mệnh danh là 'hoàng cung trong lòng đất' thuộc tỉnh nào?", ["A. Quảng Bình", "B. Quảng Nam", "C. Hà Tĩnh", "D. Nghệ An"], "A. Quảng Bình");
let q46 = new Question("Câu hỏi: Loài hoa nào được xem là biểu tượng của vùng Tây Bắc?", ["A. Hoa đào", "B. Hoa ban", "C. Hoa cúc", "D. Hoa hướng dương"], "B. Hoa ban");
let q47 = new Question("Câu hỏi: Tên gọi khác của sông Hồng khi chảy qua Hà Nội là gì?", ["A. Sông Cái", "B. Sông Đỏ", "C. Sông Mã", "D. Sông Lam"], "A. Sông Cái");
let q48 = new Question("Câu hỏi: Trò chơi dân gian nào phổ biến vào dịp Tết ở vùng đồng bằng Bắc Bộ?", ["A. Kéo co", "B. Nhảy sạp", "C. Đánh đu", "D. Cả A và C"], "D. Cả A và C");
let q49 = new Question("Câu hỏi: Quần đảo Trường Sa thuộc tỉnh nào của Việt Nam?", ["A. Khánh Hòa", "B. Ninh Thuận", "C. Bình Thuận", "D. Bà Rịa - Vũng Tàu"], "A. Khánh Hòa");
let q50 = new Question("Câu hỏi: Ngọn tháp nào cao nhất ở Việt Nam hiện nay?", ["A. Tháp Rùa", "B. Landmark 81", "C. Lotte Center", "D. Bitexco"], "B. Landmark 81");

let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, q41, q42, q43, q44, q45, q46, q47, q48, q49, q50];
const getQuestion = document.getElementById("questions");
showQuestions(questions[0]);

function showQuestions(question) {
    let result = "";
    result += `<label for="answer" style="font-weight: bold">${question.content}</label><br><br>`;
    for (let i = 0; i < 4; i++) {
        result += `<button type="button" id="answer" onclick="checkAnswer('${question.answer[i]}')">${question.answer[i]}</button><br>`;
    }
    result+= '<button type="button" id="endAnswer" onClick="renderToManHinhKet()">Kết thúc trò chơi</button>';
    getQuestion.innerHTML = result;
}

let index = 0;
let count = 0;

function checkAnswer(answer) {
    // if (confirm("Bạn chọn phương án " + answer + " đúng không?")) {
    if (questions[index].checkAnswer(answer)) {
        musicCorrect.play();
        // alert("Bạn trả lời đúng");
        Swal.fire({
            title: "Chúc mừng bạn trả lời đúng rồi!",
            icon: "success",
            draggable: true
        });
        count++;
    } else {
        musicFail.play();
        // alert("Bạn trả lời sai");
        Swal.fire({
            icon: "error",
            title: "Tiếc quá...",
            text: "Không sao, cứ tiếp tục nhé! Bạn đang làm rất tốt!",
        });
    }
    questions.splice(index, 1);
    index = randomQuestion();
    // }
    if (index < questions.length) {
        showQuestions(questions[index]);
    } else {
        renderToManHinhKet();
    }
}

function renderToManHinhKet() {
    fireworkSound.play();
    window.location.href = `Man_Hinh_Ket.html?correct=${count}`;
}

function randomQuestion() {
    return Math.floor(Math.random() * (questions.length - 1));
}

let musicBackground;
let musicCorrect;
let musicFail;
let fireworkSound;

function initMusic() {
    musicBackground = new Audio("../sound/background.mp3");
    musicCorrect = new Audio("../sound/correct.mp3");
    musicFail = new Audio("../sound/fail.mp3");
    fireworkSound = new Audio("../sound/firework_sound.mp3");
    musicBackground.loop = true;
    musicBackground.volume = 0.5;
}

window.onload = function () {
    initMusic();
    musicBackground.play();
}















