// HTML Elements
const buttonEncrypt = document.getElementById("btn-encrypt");
const buttonDecrypt = document.getElementById("btn-decrypt");
const input = document.getElementById("input-text");
const message = document.getElementById("msg");
const buttonCopy = document.getElementById("btn-copy");
const image = document.getElementById("person-image");

buttonEncrypt.addEventListener("click", () => {
  const encryptedMessage = encrypt(input.value);
  if (encryptedMessage !== "-1") {
    showMessage(encryptedMessage);
  } else {
    clearMessage();
  }
});

buttonDecrypt.addEventListener("click", () => {
  const decryptedMessage = decrypt(input.value);
  if (decryptedMessage !== "-1") {
    showMessage(decryptedMessage);
  } else {
    clearMessage();
  }
});

buttonCopy.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(message.value);
    console.log("Copiado");
  } catch (err) {
    console.error("Error al copiar el texto: ", err);
  }
});

function showMessage(msg) {
  message.value = msg;
  message.style.visibility = "visible";
  buttonCopy.style.visibility = "visible";
  image.style.display = "none";
}

function clearMessage() {
  message.value = "";
  message.style.visibility = "hidden";
  buttonCopy.style.visibility = "hidden";
  image.style.display = "block";
}

function validate(s) {
  return !/[^a-z]/.test(s) && s.length !== 0;
}

function encrypt(s) {
  if (validate(s)) {
    return s.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai")
      .replaceAll("o", "ober").replaceAll("u", "ufat");
  } else {
    alert("La entrada es incorrecta.");
    return "-1";
  }
}

function decrypt(s) {
  if (validate(s)) {
    return s.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a")
      .replaceAll("ober", "o").replaceAll("ufat", "u");
  } else {
    alert("La entrada es incorrecta.");
    return "-1";
  }
}
