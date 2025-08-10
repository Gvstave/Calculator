document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#input");
  const result = document.querySelector("#result");
  const info = document.querySelector("#info");
  const bracket = document.querySelector("#brackets");
  const btn = document.querySelectorAll(".btn");
  const clear = document.querySelector("#clear");
  const equal = document.querySelector("#equal");

  // Add event listener to all the buttons with the class btn.
  btn.forEach(button => {
    button.addEventListener("click", function () {
      input.value += button.value;
      calculate();
    });
  });

  function calculate() {
    let output = eval(input.value);
    result.value = output;

    try {
      if (isNaN(output)) throw new SyntaxError("Not a number");
      if (!isFinite(output)) throw new SyntaxError("Can't divide by 0");
      if (result.value == "undefined") throw new SyntaxError("Invalid input");
    } catch (e) {
      info.value = `${e.message}`;
      info.style.color = 'red'
      result.value = 0;
    }
  }

  bracket.addEventListener("click", function () {
    input.value = `(${result.value || 0})*`;
  });

  equal.addEventListener("click", function () {
    if (!Number.isInteger(input.value)) {
      // let fixed = input.value;
      input.value = result.value || input.value;
      result.value = "";
    } else {
      input.value = result.value || input.value;
      result.value = 0;
    }
    info.value = ""
  });

  clear.addEventListener("click", function () {
    input.value = "";
    result.value = "";
    info.value = "";
    info.style.color = 'gray'
  });

});
