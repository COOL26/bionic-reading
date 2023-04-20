const text = document.getElementById("bionic-reading");
const convertBtn = document.getElementById("convert");
const reset = document.getElementById("reset");
const dummy = document.getElementById("dummy");
let s = "";
convertBtn.addEventListener("click", () => {
  const userTxt = text.value;
  const txtArray = [...userTxt.split(" ")];
  let variable = 0;
  for (const element of txtArray) {
    variable = 0;
    for (let i = 0; i < element.length / 2; i++) {
      s += element[i].bold();

      variable++;
    }
    for (let j = variable; j < element.length; j++) {
      s += element[j];
    }
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
