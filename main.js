let checkBox = document.getElementById("check-box");
checkBox.addEventListener("click",() => {
    checkBox.classList.toggle("chose")
});
let eye = document.getElementById('eye');
eye.onclick = function() {
    document.querySelector('.content-pass').classList.toggle("show");
    if(document.querySelector('.content-pass').classList.contains('show')) {
        document.querySelector('.content-pass input').setAttribute("type","text");
    } else {
        document.querySelector('.content-pass input').setAttribute("type","password");
    }
}