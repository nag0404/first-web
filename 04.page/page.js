/*----하단 스크롤버튼 자바스크립트----*/
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}

document.getElementById("scrollTopBtn").addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});


function scrollToInfo() {
    let contentElement = document.querySelector('.info');
    contentElement.scrollIntoView({ behavior: 'smooth' });
}

function scrollToGuide() {
    let contentElement = document.querySelector('#guide');
    contentElement.scrollIntoView({ behavior: 'smooth' });
}

function scrollToReview() {
    let contentElement = document.querySelector('#review');
    contentElement.scrollIntoView({ behavior: 'smooth' });
}

function scrollToQna() {
    let contentElement = document.querySelector('.qnacontainer');
    contentElement.scrollIntoView({ behavior: 'smooth' });
}
