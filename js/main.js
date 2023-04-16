// HTML Elements
buttonEncrypt = document.getElementById("btn-encrypt");
buttonDecrypt = document.getElementById("btn-decrypt");
input = document.getElementById("input-text");
message = document.getElementById("msg");
buttonCopy = document.getElementById("btn-copy");
image = document.getElementById("person-image");

buttonEncrypt.addEventListener("click", () => {
  message.value = encrypt(input.value);
  if (message.value !== "-1")
    doMessageVisible();
  else
    message.value = "";
})

buttonDecrypt.addEventListener("click", () => {
  message.value = decrypt(input.value);
  if (message.value !== "-1")
    doMessageVisible();
  else
    message.value = "";
})

buttonCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(message.value).then(() => console.log("Copiado"));
})

function doMessageVisible() {
  message.style.visibility = "visible";
  buttonCopy.style.visibility = "visible";
  image.style.display = "none";
}

function validate(s) {
  return !/[^a-z]/.test(s) && s.length !== 0;
}

function encrypt(s) {
  if (validate(s)) {
    return s.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai")
      .replaceAll("o", "ober").replaceAll("u", "ufat");
  }
  else {
    alert("La Entrada es Incorrecta.");
    return "-1";
  }
}

function decrypt(s) {
  if (validate(s)) {
    return s.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a")
      .replaceAll("ober", "o").replaceAll("ufat", "u");
  }
  else {
    alert("La Entrada es Incorrecta");
    return "-1";
  }
}
