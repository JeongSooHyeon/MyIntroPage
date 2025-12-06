// 오늘의 인사말 랜덤 alert
const greetings = ["안녕", "안녕하세요", "달룡하세요", "달선하세요", "달례하세요"];

function randGreeting() {
    const rand = Math.floor(Math.random() * greetings.length);
    alert(greetings[rand] + "~");
}

document.querySelector("#greetBtn").addEventListener("click", randGreeting);
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






// 버튼 누르면 배경 변경
const bgColBtn = document.getElementById('bgColBtn');
bgColBtn.addEventListener('click', () => {
    document.documentElement.style.backgroundColor = '#BADFDB';
})

// 마우스 올리면 프로필 사진 변경
const myImg = document.getElementById('myImg');
myImg.addEventListener('mouseover', () => {
    myImg.src = "images/automnDalsun.jpg";
})
myImg.addEventListener('mouseout', () => {
    myImg.src = "images/취업 사진.jpg";
})

// 키보드로 강아지 사진 변경
// Day11 강아지 버튼 클릭 시 이미지 이름 취미 변경

class MungSlider {
    constructor(items) {
        this.items = items;
        this.index = 0;
        this.imgEl = document.getElementById("dal");
        this.nameEl = document.getElementById("dalName");
        this.hobbyEl = document.getElementById("dalHobby");

        this.render();
    }

    next() {
        this.index = ++this.index % this.items.length;
        this.render();
    }
    prev() {
        this.index = (--this.index + this.items.length) % this.items.length;
        this.render();
    }
    render() {
        const item = this.items[this.index];
        this.imgEl.src = item.img;
        this.nameEl.textContent = `이름 : ${item.name}`;
        this.hobbyEl.textContent = `취미 : ${item.hobby}`;
    }
}
const slider = new MungSlider([
    { img: "images/dallyong.jpg", name: "달룡", hobby: " 간식 바라보기" },
    { img: "images/dalseon.jpg", name: "달선", hobby: "코 골기" },
    { img: "images/dallye.jpg", name: "달례", hobby: "바짓가랭이 물고 끌려댕기기" },
]);

const dal = document.getElementById('dal');
window.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.key == 'ArrowLeft') {
        slider.prev();
    }
    else if (e.key == 'ArrowRight') {
        slider.next();
    }

})


// 좋아요 버튼
class Like {
    constructor() {
        this.likeCnt = 0;
        this.likeBtn = document.getElementById('likeBtn');
        this.likeFlag = false;
    }

    increaseLike() {
        this.likeCnt++;
        this.likeBtn.textContent = `좋아요! ${this.likeCnt}`;
    }

    likeToggle() {
        if (this.likeFlag) {
            this.likeFlag = false;
            this.likeBtn.style.backgroundColor = '#FFA4A4';
        }
        else {
            this.likeFlag = true
            this.likeBtn.style.backgroundColor = '#BADFDB';
        }
    }
}
const like = new Like();

function onLikeClick() {
    //like.increaseLike();
    like.likeToggle();
}
like.likeBtn.addEventListener('click', onLikeClick);


// 좋아하는 것들 리스트
class FavoriteThings {
    constructor(items) {
        this.items = items;
        this.contentsEl = document.getElementById("profileContents");
        this.profileBtn = document.getElementById("profileBtn");

        this.currentIndex = 0;
        this.pageSize = 3;
        this.isFirst = true;
    }
    //

    showFavoriteThings() {
        const start = this.currentIndex;
        const end = start + this.pageSize;
        const slice = this.items.slice(start, end);

        const listItems = slice
            .map((item, i) => `<li class="fav-item">${this.currentIndex + i + 1}. ${item}</li>`)
            .join(""); /*배열의 모든 요소를 하나의 문자열로 합친다*/

        this.contentsEl.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;좋아하는 것들 ${'\n'}<ul>${listItems}</ul>`;
    }

    showNext() {
        this.currentIndex += this.pageSize;
          if(this.isFirst){
            this.currentIndex = 0;
            this.isFirst=false;
        }
        else if (this.currentIndex >= this.items.length) {
            this.currentIndex = 0;
            this.isFirst=true;
        }
        this.showFavoriteThings();
    }
}

const favoriteThings = new FavoriteThings([
    "누워있기",
    "엽떡먹기",
    "달선이주무르기",
    "강아지랑놀기",
    "공부하기(?)"
]);

function onProfileClick() {
    favoriteThings.showNext();
}
favoriteThings.profileBtn.addEventListener('click', onProfileClick);