import { bruh } from './cuh.js';

const game_start = document.getElementById("start-game");
const return_main =document.getElementById("return-main")

game_start.addEventListener('click', function () {
  console.log('Button was clicked!');
  game_start.remove();
  return_main.remove();

  var gamestate=1;
  var score=0;
  var time_left=10000;
    const scoresection = document.createElement("p");
    scoresection.textContent="score: " + score;
    scoresection.id= 'score';
    document.body.appendChild(scoresection);

    const timer = document.createElement("p");
    timer.textContent="timer: \n" + time_left/1000;
    timer.id= 'timer';
    document.body.appendChild(timer);

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

  //  // const loss = new Audio('../../../audio/loss.mp3');
  //   loss.play();   

  //   const right = new Audio('../../../audio/right.mp3');
  //   right.play();   
      const intervalId = setInterval(() => {
            console.log("Exécution répétée toutes les secondes");
            time_left-=1000;
            timer.textContent="timer: " + time_left/1000;
            if  (time_left<5000){
              timer.style.backgroundColor='red';
            }
            if (time_left===0){
              if (score < 5){
                window.location='loss.html';
                const loss = new Audio('/audio/loss.mp3');
                loss.play();   
              }
              else{
                window.location='win.html';
              }

            }
      }, 1000);
      var CountryName=bruh[RandomNum(bruh.length)];
      hiddentext.textContent=CountryName;

      input_sec.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            console.log("User input:", input_sec.value);
          if (input_sec.value.toUpperCase() === CountryName.toUpperCase()){
              document.getElementById("input-section").value=""; 


              score+=1;
              scoresection.textContent = "score: " + score;
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
              scoresection.textContent = "score: " + score;
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