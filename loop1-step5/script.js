const options = ["design", "frontend", "backend", "testing"];

const word = document.getElementById("word");

function main(params) {
  word.innerHTML = "";

  var i = 0;
  var option = params;

  function typeWord() {
    if (i < option.length) {
      word.innerHTML += option.charAt(i);
      i++;
      setTimeout(typeWord, 200);
    }
  }

  setTimeout(typeWord, 200);
}
main(options[0]);
