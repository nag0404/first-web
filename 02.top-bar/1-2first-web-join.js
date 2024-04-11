document.querySelector(".join-btn").addEventListener("click", function(event) {
    // 입력 폼의 모든 필드를 가져옵니다.
    var idValue = document.querySelector(".id").value.trim();
    var pwValue = document.querySelector(".pw").value.trim();
    var pwokValue = document.querySelector(".pwok").value.trim();
    var nameValue = document.querySelector(".name").value.trim();
    var telValue = document.querySelector(".tel").value.trim();
    var emailValue = document.querySelector(".email").value.trim();

    // 하나라도 비어 있는지 확인합니다.
    if (idValue === "" || pwValue === "" || pwokValue === "" || nameValue === "" || telValue === "" || emailValue === "") {
        alert("모든 정보를 입력해주세요.");
    }
});