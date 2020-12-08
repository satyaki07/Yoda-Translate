const inputField = document.querySelector("#inputTxt");
const outputField = document.querySelector("#outputTxt");
const btnTranslate = document.querySelector("#btn-translate");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(err) {
  console.log("Error occurred", error);
  alert("Something wrong with the server! Please try again after some time.");
}

function clickHandler() {
  //   console.log("clicked");
  var inputText = inputField.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputField.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
