const emojis = [
    "👯",
    "👯",
    "🕺",
    "🕺",
    "🤖",
    "🤖",
    "💩",
    "💩",
    "🤹",
    "🤹",
    "💣",
    "💣",
    "😺",
    "😺",
    "👻",
    "👻"
];
let cartasAbertas = [];

let randomEmojis = emojis.sort(()=>Math.random()> 0.5?2:-1);

randomEmojis.forEach(e => {
    let divBox = document.createElement("div");
    divBox.className = "item";
    divBox.innerHTML = e;
    divBox.onclick = virarCarta;
    document.querySelector(".game").appendChild(divBox);
});

function virarCarta(){
    if(cartasAbertas.length < 2 && !this.classList.contains("boxOpen")){
        this.classList.add("boxOpen");
        cartasAbertas.push(this);
    }

    if(cartasAbertas.length == 2) {
        setTimeout(checkAcerto, 500);
    }

}

function playSound(audioName){
    let audio = new Audio(`./src/audios/${audioName}.mp3`)
    audio.volume = 0.1;
    audio.play();
}

function checkAcerto(){
    if(cartasAbertas[0].innerHTML===cartasAbertas[1].innerHTML){
        playSound("hit");
        cartasAbertas[0].classList.add("boxMath");
        cartasAbertas[1].classList.add("boxMath");
    }else{
        playSound("err");
        cartasAbertas[0].classList.remove("boxOpen");
        cartasAbertas[1].classList.remove("boxOpen");
    }
    cartasAbertas = [];
    if(document.querySelectorAll(".boxMath").length===emojis.length){
        alert("Você Ganhou, Parabéns!!!");
        playSound('init');
    }
}