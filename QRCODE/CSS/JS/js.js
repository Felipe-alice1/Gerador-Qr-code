const container = document.querySelector(".container")
const qrcodeBtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")
//Eventos
function generateQrcode(){
    const qrCodeInputValue =qrCodeInput.value
    if (!qrCodeInputValue) return;

    qrcodeBtn.innerHTML = "Gerando Código...";
   
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
    qrCodeImg.addEventListener("load",() =>{
    container.classList.add("active");
    qrcodeBtn.innerHTML = "Código criado!";
    });
    
}

qrcodeBtn.addEventListener("click", () => {
    generateQrcode()

})


qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter")
        generateQrcode()
})

qrCodeInput.addEventListener("keyup", () =>{
    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrcodeBtn.innerHTML = "Gerar Código";   
    }
})