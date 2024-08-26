$(document).ready(function () {
    $("footer").load("../main/Footer.html");
    $("header").load("../main/Header.html");

    var users = JSON.parse(localStorage.getItem("users"));
    let checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    $(".id-check").click(function(){
        var id = $("#inputId").val().trim();
        var isFindId = users.find(function(user){
            return user.id === id;
        })
        if(isFindId){
            console.log("아이디사용불가");
        }else{
            console.log("아이디사용가능");
        }
    })

    $("#inputId").on("input",function(){
        var id = $("#inputId").val().trim();
        if(id.length<4||id.length>12||checkKor.test(id)){
            console.log("아이디 사용불가");
        }
    })


});