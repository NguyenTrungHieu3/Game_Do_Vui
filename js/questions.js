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

let q1 = new Question("Câu 1: Bệnh gì mà bác sĩ phải bó tay?", ["A. Gãy tay", "B. Đau mắt đỏ", "C. Cúm", "D. Đau bụng"], "A. Gãy tay");
let q2 = new Question("Câu 2: Lịch nào dài nhất?", ["A. Lịch vạn niên", "B. Lịch treo tường", "C. Lịch sử", "D. Lịch bàn"], "C. Lịch sử");
let q3 = new Question("Câu 3: Đường dài nhất là con đường nào?", ["A. Đường biên giới", "B. Đường đời", "C. Đường quốc lộ", "D. Đường Trường Sơn"], "B. Đường đời");
let q4 = new Question("Câu 4: Quần gì rộng nhất?", ["A. Quần jean", "B. Quần thụng", "C. Quần đùi", "D. Quần đảo"], "D. Quần đảo");
let q5 = new Question("Câu 5: Cái gì mà đi thì nằm, đứng cũng nằm, nhưng nằm lại đứng?", ["A. Cái cổ", "B. Cái lưng", "C. Bàn chân", "D. Bàn tay"], "C. Bàn chân");
let q6 = new Question("Câu 6: Núi nào mà bị chặt ra từng khúc?", ["A. Hoàng Liên Sơn", "B. Thái Sơn", "C. Ngũ Hành Sơn", "D. Phan Xi Păng"], "B. Thái Sơn");
let q7 = new Question("Câu 7: Cái gì bằng cái vung, vùng xuống ao, đào chẳng thấy, lấy chẳng được?", ["A. Cây cầu", "B. Bóng mặt trăng", "C. Cái thuyền", "D. Cái vung"], "B. Bóng mặt trăng");
let q8 = new Question("Câu 8: Con gì đập thì sống, không đập thì chết?", ["A. Con sông", "B. Con ếch", "C. Con tim", "D. Con đập"], "C. Con tim");
let q9 = new Question("Câu 9: Bỏ ngoài nướng trong, ăn ngoài bỏ trong là gì?", ["A. Cây mía", "B. Bắp ngô", "C. Xúc xích", "D. Củ khoai"], "B. Bắp ngô");
let q10 = new Question("Câu 10: Trong 1 cuộc thi chạy, nếu bạn vượt qua người thứ 2 bạn sẽ đứng thứ mấy?", ["A. 2", "B. 1", "C. 4", "D. 3"], "A. 2");
let q11 = new Question("Câu 11: Sở thú bị cháy, con gì chạy ra đầu tiên?", ["A. Con voi", "B. Con người", "C. Con hổ", "D. Con khỉ"], "B. Con người");
let q12 = new Question("Câu 12: Có bao nhiêu chữ C trong câu sau đây: 'Cơm, canh, cháo gì tớ cũng thích ăn!'?", ["A. 2", "B. 3", "C. 1", "D. 4"], "C. 1");
let q13 = new Question("Câu 13: Cái gì tay phải cầm được còn tay trái cầm không được?", ["A. Đôi đũa", "B. Cây bút", "C. Tay trái", "D. Cái kéo"], "C. Tay trái");
let q14 = new Question("Câu 14: Tìm điểm sai trong câu: '...dưới ánh nắng sương long lanh triệu cành hồng khoe sắc thắm'?", ["A. khoe sắc thắm", "B. sương long lanh", "C. triệu cành hồng", "D. dưới ánh nắng"], "A. khoe sắc thắm");
let q15 = new Question("Câu 15: Ai cũng biết đỉnh núi Everest cao nhất thế giới. Vậy trước khi đỉnh Everest được khám phá, đỉnh núi nào cao nhất thế giới?", ["A. Kanchenjunga", "B. Everest", "C. Makalu", "D. Lhotse"], "B. Everest");
let q16 = new Question("Câu 16: Loại nước giải khát nào chứa sắt và canxi?", ["A. 7up", "B. Pepsi", "C. Cafe", "D. Coca"], "C. Cafe");
let q17 = new Question("Câu 17: Cái gì trong trắng ngoài xanh. Trồng đậu, trồng hành rồi thả heo vào?", ["A. Bánh chưng", "B. Bánh tiramisu", "C. Bánh mì", "D. Bánh đậu xanh"], "A. Bánh chưng");
let q18 = new Question("Câu 18: Con trai và con chim khác nhau chủ yếu ở điểm nào?", ["A. Đôi chân", "B. Cái tay", "C. Môi trường sống", "D. Cái đầu"], "C. Môi trường sống");
let q19 = new Question("Câu 19: Khi Ronaldo thực hiện quả đá phạt đền, anh ta sẽ sút vào đâu?", ["A. Thủ môn", "B. Góc phải", "C. Trái bóng", "D. Góc trái"], "C. Trái bóng");
let q20 = new Question("Câu 20: Con gì mang được miếng gỗ lớn nhưng không mang được hòn sỏi?", ["A. Con sông", "B. Con cua", "C. Con kiến", "D. Con voi"], "A. Con sông");

let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];
const getQuestion = document.getElementById("questions");
showQuestions(questions[0]);

function showQuestions(question) {
    let result = "";
    result += `<label for="answer" style="font-weight: bold">${question.content}</label><br><br>`;
    for (let i = 0; i < 4; i++) {
        result += `<button type="button" id="answer" onclick="checkAnswer('${question.answer[i]}')">${question.answer[i]}</button><br>`;
    }
    getQuestion.innerHTML = result;
}

let index = 0;
let count = 0;

function checkAnswer(answer) {
    // if (confirm("Bạn chọn phương án " + answer + " đúng không?")) {
    if (questions[index].checkAnswer(answer)) {
        musicCorrect.play();
        alert("Bạn trả lời đúng");
        count++;
    } else {
        musicFail.play();
        alert("Bạn trả lời sai");
    }
    index++;
    // }
    if (index < questions.length) {
        showQuestions(questions[index]);
    } else {
        window.location.href = `Man_Hinh_Ket.html?correct=${count}`;
    }
}

let musicBackground;
let musicCorrect;
let musicFail;

function initMusic() {
    musicBackground = new Audio("../sound/background.mp3");
    musicCorrect = new Audio("../sound/correct.mp3");
    musicFail = new Audio("../sound/fail.mp3");

    musicBackground.loop = true;
    musicBackground.volume = 0.5;
}

window.onload = function () {
    initMusic();
    musicBackground.play();
}















