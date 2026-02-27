import { bruh } from './cuh.js';

const game_start = document.getElementById("start-game");
const return_main =document.getElementById("return-main")

game_start.addEventListener('click', function () {
  console.log('Button was clicked!');
  game_start.remove();
  return_main.remove();

  var gamestate=1;
  var score=0;

    const scoresection = document.createElement("p");
    scoresection.textContent=score;
    scoresection.id= 'score';

    document.body.appendChild(scoresection);

    const hiddentext = document.createElement("p");
    hiddentext.id = 'word';
    hiddentext.textContent=bruh[RandomNum(bruh.length)];
    hiddentext.classList.add("text-block","paragraph");

    document.body.appendChild(hiddentext);

    const input_sec = document.createElement("input");
    input_sec.id='input-section';
    input_sec.placeholder ='Enter your guess';
    input_sec.autocomplete = "off";
    input_sec.autocorrect = "off";
    input_sec.autocapitalize = "off";
    input_sec.spellcheck = false;
    document.body.appendChild(input_sec);

  //  // const wrong = new Audio('../../../audio/wrong.mp3');
  //   audio.play();   

  //   const right = new Audio('../../../audio/right.mp3');
  //   right.play();   

      var CountryName=bruh[RandomNum(bruh.length)];
      hiddentext.textContent=CountryName;

      input_sec.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            console.log("User input:", input_sec.value);
          if (input_sec.value.toUpperCase() === CountryName.toUpperCase()){
              document.getElementById("input-section").value=""; 


              score+=1;
              scoresection.textContent = score;
              scoresection.style.backgroundColor = "darkgreen";
              scoresection.style.boxShadow = "5px 10px 15px green";
              setTimeout(() => {
              scoresection.style.backgroundColor = "";
              scoresection.style.boxShadow= "";
              }, 500);   



              CountryName=bruh[RandomNum(bruh.length)];
              hiddentext.textContent=CountryName;
              
            } else{
    
              score-=1;
              scoresection.textContent = score;
              scoresection.style.backgroundColor = "darkred";
              scoresection.style.boxShadow = "5px 10px 15px red";   
              setTimeout(() => {
                scoresection.style.backgroundColor = "";
                scoresection.style.boxShadow = "";
              }, 500);
              CountryName=bruh[RandomNum(bruh.length)];
              hiddentext.textContent=CountryName;

            }
          document.getElementById("input-section").value=""; 
            
        } 

    })
  
});




function RandomNum(Number) {
  return Math.floor(Math.random()*Number);
}