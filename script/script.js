

function bottone(){
    var user = document.getElementById("user_input").value;
    var password = document.getElementById("user_password").value;
    if (user=="davide") {
        if (password=="123456") {
            window.location.href = "./page/page1.html"
        }else{
            alert("password errata")
        }
    }else{
        alert("username errato")
    }
    
}

