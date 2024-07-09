// 랜덤번호 지정
// 유저가 번호 입력, go 버튼 누름
// 유저가 랜덤번호 맞추면 : "맞췄습니다"
// 랜덤번호 < 유저번호 : "Down"
// 랜덤번호 > 유저번호 : "Up"
// Reset 버튼 클릭, 게임리셋
// 5번 기회 사용하면 게임 종료(버튼 disable)
// 유저가 1~100의 숫자 입력하면 "다시입력", 기회 그대로
// 유저가 똑같은 숫자 다시 입력하면 기회 그대로

let computerNumber = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];


playButton.addEventListener("click",play) // 이벤트 실행시 play 함수를 호출
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""}) // 익명 함수

function pickRandomNum(){
    computerNumber = Math.floor(Math.random() * 100) + 1;  // Math.random : 0부터 1(1 미포함) 
    console.log("정답",computerNumber)
}

function play(){
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 100){    // 유효성 검사
        resultArea.textContent="1부터 100사이의 숫자를 입력하세요";
        return; // chances -- 가 실행되지 않도록 play 함수 종료
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력하세요";
        return;
    }

    chances --;
    chanceArea.textContent=`남은기회:${chances}번`;
    console.log("chance",chances);

    if(userValue > computerNumber){
        resultArea.textContent = "Down";
    }
    else if(userValue < computerNumber){
        resultArea.textContent = "Up";
    }
    else{
        resultArea.textContent = "정답!";
        gameOver = true;
    }

    history.push(userValue)

    if(chances < 1){
        gameOver = true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    // input창 정리
    userInput.value = "";
    // 새로운 번호 생성
    pickRandomNum();

    resultArea.textContent="결과값이 여기 나옵니다"
    chanceArea.textContent = "남은기회: 5번"; 
    chances = 5;
    gameOver = false;
    playButton.disabled = false;
    history = [];
}

pickRandomNum();