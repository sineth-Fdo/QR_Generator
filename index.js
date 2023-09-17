var genBtn = document.querySelector(".gen-btn");
var genBtn2 = document.querySelector(".gen-btn2");
var qrInput = document.querySelector(".qr-text");
var qrImg = document.querySelector(".qr-img");
var downHero = document.querySelector(".down-hero");


function  genereteQR() {
    if(qrInput.value.length > 0){
        qrImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrInput.value;
        
        downHero.style.marginTop = '0%';
        downHero.style.paddingTop = '30px';
        downHero.style.transition = '1s';

        genBtn2.style.display = 'block';
        genBtn.style.display = 'none';
        
        
    }
    
    
}

function QRnew() {
    genBtn2.style.display = 'none';
    genBtn.style.display = 'block';
    downHero.style.marginTop = '-330px';
    qrInput.value = '';

}

