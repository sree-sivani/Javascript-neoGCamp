var btnTranslate = document.querySelector("#btn-translate"); 
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");



//error handler
function errorHandler(error){
   console.log("error occured ", error);
   alert("something wrong with server! try again after some time")
}

//callback function
function clickHandler(){
   var inputText = txtInput.value;

   //calling the server
   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
   })
   .catch(errorHandler)
};

//server for translation
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text){
   return serverURL  + "?" + "text=" + text
}


btnTranslate.addEventListener("click", clickHandler) 



