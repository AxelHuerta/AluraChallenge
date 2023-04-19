console.log("js is working");

const getInputText = document.getElementById("text-input");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const setOutputText = document.getElementById("text-output");
const outputContainer = document.getElementById("output-container");
const outputArea = document.getElementById("text-output");
const textResult = document.getElementById("text-result");

// limpiar textarea
getInputText.value = "";

// comprobar que el texto ingresado cumpla con los requisitos
getInputText.addEventListener("input", () => {
  if (getInputText.value == "") return;
  getInputText.value = getInputText.value.replace(/[^a-zñ\s]/g, "");
});

// btn encriptar
btnEncriptar.addEventListener("click", () => {
  if (getInputText.value == "") return;
  let text = encriptar(getInputText.value);
  console.log(text);
  hideImg();
  setText(text);
});

// btn desencriptar
btnDesencriptar.addEventListener("click", () => {
  if (getInputText.value == "") return;
  let text = desencriptar(getInputText.value);
  hideImg();
  setText(text);
});

// encriptar texto
const encriptar = (text) => {
  text = text.replaceAll("e", "enter");
  text = text.replaceAll("i", "imes");
  text = text.replaceAll("a", "ai");
  text = text.replaceAll("o", "ober");
  text = text.replaceAll("u", "ufat");
  return text;
};

// desencriptar texto
const desencriptar = (text) => {
  text = text.replaceAll("enter", "e");
  text = text.replaceAll("imes", "i");
  text = text.replaceAll("ai", "a");
  text = text.replaceAll("ober", "o");
  text = text.replaceAll("ufat", "u");
  return text;
};

// oculatar preview de salida
const hideImg = () => {
  outputContainer.style.display = "none";
};

// poner el texto en pantalla
const setText = (text) => {
  textResult.innerHTML = text;
  outputArea.style.display = "inline";
  textResult.style.display = "inline";
};
