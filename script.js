document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#input");

  const result = document.querySelector("#result");

  const info = document.querySelector("#info");

  const bracket = document.querySelector("#brackets");

  const percent = document.querySelector("#percent");

  const btn = document.querySelectorAll(".btn");

  const clear = document.querySelector("#clear");

  const equal = document.querySelector("#equal");
  
  /*function for detecting button click and
   writing button click to the input field*/
  function buttonFunc() {
    for (let i = 0; i < btn.length; i++) {
      btn[i].querySelectorAll(".btn");
      btn[i].addEventListener("click", function () {
        //alert(btn[i].textContent)
        input.value += btn[i].textContent;
        calculate();
      });
    }
  }
  buttonFunc();

  //function for calculating/evaluating the input
  function calculate() {

    const output = eval(input.value);
    result.value = output;

    //These buttons have a special pu
    bracket.addEventListener("click", function () {
      input.value = `(${output})*`;
    });

    percent.addEventListener("click", function () {
      input.value = `${output}/100`;
      result.value = `${output/100}`;
    });

    equal.addEventListener("click", function () {
      input.value = output.toFixed(2);
      result.value = "";
    });

    try {
      if (result.value == "NaN") {
        throw new SyntaxError("Not a number");
        
      } else if (result.value == "Infinity") {
        throw new SyntaxError("Can't divide by 0");
        
      }
      else if(result.value == "undefined"){
        throw new SyntaxError("Invalid input");
      }
    } catch (e) {
      info.value = `Error: ${e.message}`;
      info.style.color = 'red'
    }
  }

  //function to clear the the input fields
  function clean() {
    clear.addEventListener("click", function () {
      input.value = "";
      result.value = "";
      info.value = "";
      info.style.color = 'gray'
    });
  }
  clean();

});
