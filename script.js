const text = document.getElementById("bionic-reading");
const convertBtn = document.getElementById("convert");
const reset = document.getElementById("reset");
const dummy = document.getElementById("dummy");

let s = "";
convertBtn.addEventListener("click", () => {
  if (dummy.style.display === "block") return;
  const userTxt = text.value;
  const txtArray = [...userTxt.split(" ")];
  let variable = 0;
  for (const element of txtArray) {
    variable = 0;
    s += element.substring(0, element.length / 2).bold();
    s += element.substring(element.length / 2);
    s += " ";
  }
  text.style.display = "none";
  dummy.style.display = "block";
  dummy.innerHTML = `${s}`;
});

reset.addEventListener("click", () => {
  dummy.style.display = "none";
  text.style.display = "block";
  text.value = "";
  s = "";
});

/*
// const speak = document.getElementById("speak");
// const play = document.getElementById("play");
// const pause = document.getElementById("pause");
(*************IGNORE THIS*************************)
speak.addEventListener("click", () => {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  const utter = new SpeechSynthesisUtterance(dummy.innerText);
  utter.rate = 1;
  speechSynthesis.speak(utter);
});

pause.addEventListener("click", () => {
  if (speechSynthesis.speaking) speechSynthesis.pause();
});

*/
