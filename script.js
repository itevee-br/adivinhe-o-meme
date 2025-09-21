let correctAnswer = 1; // Você pode mudar conforme o som corresponde

function playSound() {
  const audio = document.getElementById("sound");
  audio.play();
  document.getElementById("result").innerText = "";
}

function checkAnswer(selected) {
  if (selected === correctAnswer) {
    document.getElementById("result").innerText = "Acertou! 🎉";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").innerText = "Errou! 😢";
    document.getElementById("result").style.color = "red";
  }
}