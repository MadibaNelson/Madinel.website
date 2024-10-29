
 document.querySelector('.js-background').innerHTML = `<div class="screen"></div>
<div class="buttons">
  <div class="numbers">
    <button class="js-buttons">1</button>
    <button class="js-buttons">2</button>
    <button class="js-buttons">3</button>
    <button class="js-buttons">4</button>
    <button class="js-buttons">5</button>
    <button class="js-buttons">6</button>
    <button class="js-buttons">7</button>
    <button class="js-buttons">8</button>
    <button class="js-buttons">9</button>
    <button class="js-button">.</button>
    <button class="js-buttons">0</button>
    <button class="js-button">=</button>
  </div>
  <div class="signs">
    <button class="b-sign">C</button>
    <button class="b-sign">E</button>
    <button class="b-sign">+</button>
    <button class="b-sign">-</button>
    <button class="b-sign">%</button>
    <button class="b-sign">x</button>
    <button class="b-sign">/</button>
    <button class="b-sign">(</button>
    <button class="b-sign">)</button>
    <button class="b-sign">,</button>
  </div>
</div>`;

const screen = [];

const buttonElement = document.querySelectorAll('.js-buttons');

buttonElement.forEach((button) => {
  button.addEventListener('click', ()=>{
    num = Number(button.innerHTML)

  })
});



