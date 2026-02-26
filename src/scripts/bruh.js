const game_start = document.getElementById("start-game");
const return_main =document.getElementById("return-main")

game_start.addEventListener('click', function () {
  console.log('Button was clicked!');
  game_start.remove();
  return_main.remove();

  const input_sec = document.createElement("input");
  input_sec.textContent = "Enter your guess";
  input_sec.style.backgroundColor = "lightblue";
  input_sec.style.padding = "10px";
  document.body.appendChild(input_sec);
  
});