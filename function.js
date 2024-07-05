// 문제 1
function greet(){
    console.log("안녕 내 이름은 제시카야")
}

// 문제 2
function greet(name){
    console.log("안녕 내 이름은 ",name, "야")
}

// 문제 3
function greet(name){
    console.log("안녕 내 이름은 ",name, "야")

    return name;
}

// 문제 4

function meetAt(year, month, date){ // 매개변수 순서를 꼭 date ,month, year로
     if (date) {
       return `${year}/${month}/${date}`;
     }
     if (month) {
       return `${year}년 ${month}월`;
     }
     if (year) {
       return `${year}년`;
     }

   }

console.log(meetAt(2021,3,21))

// 문제 5

function findSmallestElement(arr){
    if(arr.length == 0){
       return 0;
    }
 
    let smallest = arr[0];
 
    for(let i = 0; i < arr.length ; i++){
       if(arr[i] < smallest){
          smallest = arr[i]; 
       }
    }
 
    return smallest;
    
 }
 console.log(findSmallestElement([100,200,3,0,2,1])); // 배열에서 가장 작은 0출력

 // 문제 6

 // 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오

 function calculate(money){
    let currency = [50000, 10000, 5000, 1000, 500, 100];
 
    for (let i = 0; i < currency.length; i++){ 
       
       let number = parseInt(money / currency[i]); // 정수로 바꾼 후 나눔
       console.log(`${currency[i]} X ${number}`);
       
       money = money - (currency[i] * number) // 남은 돈
 
    }
 }
 
 calculate(12300);