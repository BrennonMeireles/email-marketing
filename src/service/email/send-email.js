(function() {
    emailjs.init({
        publicKey: "eS7FehxwHm6kAeav3",
    })
})()

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault()

    emailjs.sendForm("cpralixo@gmail.com", "template_dz5fsqz" , this).then(
        function() {
             console.log('ok')
             alert("email enviado")             
        }
    ), function(err) {
        console.log("fail", err)
        alert("Falha ao enviar o email, tente novamente...")
    }
})