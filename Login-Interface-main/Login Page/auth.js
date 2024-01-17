function auth(){
   var user = document.getElementById("user").value;
   var pass = document.getElementById("pass").value;
    if (user =="ryuk" && pass =="1234"){
        window.location.assign("home.html");
        alert("Login Success");
    }
    else{
       window.location.reload();
       alert("Invalid Information");
       return;
       }
}
