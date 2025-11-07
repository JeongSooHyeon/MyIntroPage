// 오늘의 인사말 랜덤 alert
const greetings = ["안녕", "안녕하세요", "달룡하세요", "달선하세요", "달례하세요", "우리 오빠 최고예요❣️"];

function randGreeting() {
    const rand = Math.floor(Math.random() * greetings.length);
    alert(greetings[rand] + "~");
}

window.onload = function () {
    randGreeting();
};

// 반복문 연습
const mungs = [
    {name : "달룡", hobby:"간식 바라보기"},
    {name : "달선", hobby:"코 골기"},
    {name : "달례", hobby:"바짓가랭이 물고 끌려댕기기"},
]

for(let dog of mungs){
    console.log(`${dog.name}의 취미는 ${dog.hobby}예요.`);
}
