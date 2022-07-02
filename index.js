var musica = prompt('Cole a letra da musica aqui', '‎');
var verso = musica.split("\n");
var counter = parseInt(verso.length);
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent('input', { bubbles: true });
var textbox = document.getElementsByClassName(
  '_13NKt copyable-text selectable-text',
)[1];
for (let index = 0; index < counter; index++) {
  (function (ind) {
    setTimeout(function () {
      textbox.innerHTML = verso[index];
      textbox.dispatchEvent(event);
      document
        .getElementsByClassName(
          'tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq',
        )[0]
        .click();
    }, 1000 + 1000 * ind);
  })(index);
}