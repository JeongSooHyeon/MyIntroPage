// 오늘의 인사말 랜덤 alert
const greetings = ["안녕", "안녕하세요", "달룡하세요", "달선하세요", "달례하세요", "우리 오빠 최고예요❣️"];

function randGreeting() {
    const rand = Math.floor(Math.random() * greetings.length);
    alert(greetings[rand] + "~");
}

// window.onload = function () {
//     randGreeting();
// };

// 반복문 연습
// const mungs = [
//     { name: "달룡", hobby: "간식 바라보기" },
//     { name: "달선", hobby: "코 골기" },
//     { name: "달례", hobby: "바짓가랭이 물고 끌려댕기기" },
// ]

// for (let dog of mungs) {
//     console.log(`${dog.name}의 취미는 ${dog.hobby}예요.`);
// }



// Day11 강아지 버튼 클릭 시 이미지 이름 취미 변경
const mungs = [
    { img: "images/dallyong.jpg", name: "달룡", hobby: " 간식 바라보기" },
    { img: "images/dalseon.jpg", name: "달선", hobby: "코 골기" },
    { img: "images/dallye.jpg", name: "달례", hobby: "바짓가랭이 물고 끌려댕기기" },
];

let mungIdx = 0;

function nextMung() {
    mungIdx = ++mungIdx % mungs.length;
    const current = mungs[mungIdx];

    document.getElementById("dal").src = current.img;
    document.getElementById("dalName").innerText = `이름 : ${current.name}`;
    document.getElementById("dalHobby").innerText = `취미 : ${current.hobby}`;
}

function prevMung() {
    mungIdx = (--mungIdx + mungs.length) % mungs.length;
    const current = mungs[mungIdx];

    document.getElementById("dal").src = current.img;
    document.getElementById("dalName").innerText = `이름 : ${current.name}`;
    document.getElementById("dalHobby").innerText = `취미 : ${current.hobby}`;
}

// 버튼 누르면 배경 변경
const bgColBtn = document.getElementById('bgColBtn');
bgColBtn.addEventListener('click', () => {
    document.documentElement.style.backgroundColor = '#BADFDB';
})

// 마우스 올리면 프로필 사진 변경
const myImg = document.getElementById('myImg');
myImg.addEventListener('mouseover', () =>{
    myImg.src = "images/automnDalsun.jpg";
})
myImg.addEventListener('mouseout', () =>{
    myImg.src = "images/취업 사진.jpg";
})

// 키보드로 강아지 사진 변경
const dal = document.getElementById('dal');
window.addEventListener('keydown',() => dal.src = "")