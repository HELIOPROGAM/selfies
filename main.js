// 1. Código JS para fala em texto:
var SpeechRecognition = window.webkitSpeechRecognition;

// 2. defina a função de início e escreva o código para ela:
var recognition = new SpeechRecognition();
// 3. Este resultado é a conversão de nossa fala em texto
var Textbox = document.getElementById("textbox");
// Escreveremos uma função speak() que realizará a conversão de texto para fala.
function start()
{
    Textbox.innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event)
{
    console.log(event);
    var Content = event.results[0][0]transcript;
    Textbox.innerHTML = Content;
    console.log(Content);
    if(Content =="selfie")
    {
        console.log("tirando selfie ---");
        speak();
    }
}

    

// Escreveremos o código para a funcionalidade da webcam no arquivo main.js, e adicionaremos o
// código da webcam após a função speak() 
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_selfie();
        save();
    }, 5000);
    }

    

camera = document.getElementById("camera");


Webcam.set({
    width:360,
    height:250,
    image_format : "jpeg",
    jpeg_quality:90
});




// aula 100 - escreveremos o código para tirar uma selfie. Adicione este código após o código da webcam -> A função
// takeSelfie() será a nossa função takeSelfie()
function take_selfie()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("reuslt").innerHTML = "<img id="selfie_image" src="'+data_uri+'"/>;
    });
    }

    function save()
    {
        link = document.getElementById("selfie_image").src ;
        image = document.getElementById("selfie_image").src ;
        link.href = image;
        link.click();
    }
    



// aula 100 -Já sabemos como escrever o código para um botão HTML e fornecê-lo uma função onclick.
// Vejamos a função setTimeOutButton:


// aula 100 - escreveremos o código para salvar a selfie tirada.
// Escreva o código para isso, após a função takeSelfie(
