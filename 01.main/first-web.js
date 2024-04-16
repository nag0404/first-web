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

/*----로그인창 자바스크립트----*/
document.getElementById("login-btn").addEventListener("click", function(event) {
    var id = document.getElementById("id").value;
    var pw = document.getElementById("pw").value;

    if (id === "" || pw === "") {
        alert("ID와 PW는 필수 입력값입니다.");
        event.preventDefault(); 
    }
});

document.getElementById("id").addEventListener("keydown", function(event) {
    if (event.key == 13) {
        document.getElementById("login-btn").click();
    }
});

document.getElementById("pw").addEventListener("keydown", function(event) {
    if (event.key == 13) {
        document.getElementById("login-btn").click();
    }
});
