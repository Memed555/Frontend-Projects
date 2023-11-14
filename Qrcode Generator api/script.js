const inputText = document.getElementById('inputtext')
const button = document.getElementById('btn')
const Imagebox = document.getElementById('qrImgbox')
const Imageqr = document.getElementById('qrImg')



    function generateQR() {
        if(inputText.value.length>0){
            Imageqr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputText.value;
    }

}

