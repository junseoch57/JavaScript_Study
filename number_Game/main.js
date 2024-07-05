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

playButton.addEventListener("click",play) // 이벤트 실행시 play 함수를 호출

function pickRandomNum(){
    computerNumber = Math.floor(Math.random() * 100) + 1;  // Math.random : 0부터 1(1 미포함) 
    console.log("정답",computerNumber)
}

function play(){
    let userValue = userInput.value;
    if(userValue > computerNumber){
        resultArea.textContent = "Down";
      
    }
    else if(userValue < computerNumber){
        resultArea.textContent = "Up";
       
    }
    else{
        resultArea.textContent = "정답!";

    }
}

pickRandomNum();