const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const imageElement = document.getElementById('img-ques')
const answerButtonsElement = document.getElementById('answer-buttons')

let curQuestionIndex = 0;
let score = 0;


const questions = [
    {
        question: 'Theo em, đâu là dấu hiệu của 1 đám cháy?',
        image: './img/img1.jpg',
        answers: [
            { text: 'Có khói, mùi', correct: false },
            { text: 'Có ánh lửa, khói', correct: false },
            { text: 'Có khói, mùi lạ, ánh lửa – tiếng nổ – mùi sản phẩm cháy.', correct: true },
            { text: 'Có tia sét', correct: false },
        ]
    },
    {
        question: 'Khi phát hiện cháy, em cần làm lần lượt theo các bước nào dưới đây:',
        image: './img/img2.jpg',
        answers: [
            { text: 'Hô to: Cháy! Cháy! Cháy!, cúp cầu dao điện, tham gia chữa cháy, đồng thời gọi điện thoại báo lực lượng chữa cháy chuyên nghiệp.', correct: true },
            { text: 'Gọi điện thoại báo lực lượng chữa cháy chuyên nghiệp', correct: false },
            { text: 'Hô to: Cháy! Cháy! Cháy!', correct: false },
            { text: 'Gào khóc và hét lớn.', correct: false }
        ]
    },
    {
        question: 'Khi phát hiện đám cháy, em cần cần báo ngay cho ai:',
        image: './img/img3.jpg',
        answers: [
            {
                text: 'Người thân: Bố mẹ, ông bà,..', correct: false },
            {
                text: 'Hàng xóm và những người xung quanh', correct: false },
            {
                text: 'Đầu số 114 của quan PCCC, cứu hộ cứu nạn', correct: false },
            { text: 'Tất cả đáp án a, b, c đều đúng', correct: true },
        ]
    },
    {
        question: 'Em hãy cho biết khi xảy ra cháy, điện thoại cho lực lượng Cảnh sát PCCC theo số điện thoại nào?',
        image: './img/img4.jpg',
        answers: [
            {
                text: '113', correct: false },
            {
                text: ' 114', correct: true },
            { text: '115', correct: false },
            { text: '116', correct: false },
        ]
    },
    {
        question: 'Khi đang ở trong siêu thị, nếu phát hiện siêu thị đang bị cháy, em sẽ làm gì?',
        image: './img/img5.jpg',
        answers: [
            {
                text: 'Hô hoán cho mọi người chạy', correct: false },
            {
                text: 'Tới nơi có cháy để chữa cháy', correct: false },
            {
                text: 'Gọi điện cho lực lượng Cảnh sát PCCC', correct: false },
            {
                text: 'Bình tĩnh, báo động có cháy, ngắt cầu giao điện, dùng phương tiện chữa cháy tại chỗ chữa cháy và gọi điện báo cho lực lượng Cảnh sát PCCC.', correct: true },
        ]
    },
    {
        question: 'Khi bị cháy ở nhà cao tầng, bạn sẽ thoát nạn như thế nào?',
        image: './img/img6.jpg',
        answers: [
            {
                text: 'Chạy lên', correct: false },
            {
                text: 'Đi bằng thang máy', correct: false },
            { text: 'Chạy xuống bằng cầu thang bộ theo biển chỉ dẫn thoát nạn trong tòa nhà.', correct: true },
            {
                text: 'Ở trong phòng đóng kín cửa lại', correct: false },
        ]
    },
    {
        question: ' Khi đang ở trên tầng 18 của chung cư, mà ở tầng 17 bị cháy không thể xuống phía dưới được, em sẽ làm gì?',
        image: './img/img7.jpg',
        answers: [
            {
                text: 'Nhảy xuống', correct: false },
            {
                text: 'Cố chạy xuống', correct: false },
            {
                text: 'Chạy lên trên tầng cao nhất, dùng khăn ướt bịt mũi và gọi điện để lực lượng Cảnh sát PCCC ứng cứu.', correct: true },
            {
                text: 'Ở trong phòng căn hộ đóng kín cửa lại', correct: false },
        ]
    },
    {
        question: 'Khi xảy cháy bếp dầu do chế dầu lúc đun nấu, phạm vi cháy mới chỉ xung quanh bếp dầu, tại chỗ không có bình chữa cháy, chỉ có: nước, cát, chăn (mền). Em xử lý bằng cách nào?',
        image: './img/img8.jpg',
        answers: [
            {
                text: 'Xối nước.', correct: false },
            {
                text: 'Tạt cát.', correct: false },
            {
                text: ' Lấy chăn (mền) nhúng nước trùm lên.', correct: true },
            {
                text: 'Hoảng loạn và gào khóc.', correct: false },
        ]
    },
    {
        question: 'Nếu xảy ra cháy nổ, em sẽ xử lý như thế nào?',
        image: './img/img9.jpg',
        answers: [
            { text: 'Cắt điện', correct: false },
            { text: ' Báo động, cắt điện, dùng phương tiện chữa cháy dập tắt đám cháy, gọi điện thoại cho lực lượng chữa cháy số điện thoại 114', correct: true },
            {
                text: 'Dùng phương tiện chữa cháy dập tắt đám cháy', correct: false },
            {
                text: ' Báo động, cắt điện, cố tạt nước, điện thoại cho lực lượng chữa cháy số điện thoại 114.', correct: false },
        ]
    },
    {
        question: 'Để tránh ngộ độc khí trong đám cháy em cần làm gì?',
        image: './img/img10.jpg',
        answers: [
            {
                text: 'Phải ngay lập tức mở tất cả các cửa', correct: false },
            {
                text: 'Trốn trong nhà vệ sinh, đóng kín cửa và xả nước', correct: false },
            {
                text: 'Các phương pháp phòng khói khẩn cấp như khăn ướt luôn có tác dụng tốt vì vậy có 1 chai nước trong phòng là điều cần thiết', correct: true },
            {
                text: 'Nấp mình trong tủ quần áo để khói không lan được vào trong', correct: false },
        ]
    },
]


function startQuiz() {
    curQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Tiếp tục"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[curQuestionIndex];
    let questionNo = curQuestionIndex + 1;
    questionElement.innerHTML = "Câu hỏi " + questionNo + ". " + currentQuestion.question;
    imageElement.src = currentQuestion.image;

    currentQuestion.answers.forEach( (ans) => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn-custom");
        answerButtonsElement.appendChild(button)
        if(ans.correct) {
            button.dataset.correct = ans.correct;

        }
        button.addEventListener("click", selectAnswer)
    })

}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    imageElement.src = "";
    questionElement.innerHTML = `Đúng ${score} trên tổng cộng ${questions.length}`;
    nextButton.innerHTML = "Chơi lại";
    nextButton.style.display = "block";
}



function handleNextButton() {
    curQuestionIndex++;
    if(curQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if(curQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})


function resetState() {
    nextButton.style.display = "none";
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

startQuiz();