const text = document.getElementById("bionic-reading");
const convertBtn = document.getElementById("convert");
const reset = document.getElementById("reset");
const code = document.getElementById("code");
let s = "";
convertBtn.addEventListener("click", () => {
  if (code.style.display === "block") return;
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
  code.style.display = "block";
  code.textContent = `${s}`;
});

reset.addEventListener("click", () => {
  code.style.display = "none";
  text.style.display = "block";
  text.value = "";
  s = "";
});
