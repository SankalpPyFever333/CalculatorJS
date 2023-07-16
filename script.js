let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target.innerHTML);// gives the value
    // console.log(e.target); //gives the html tag
    if (e.target.innerHTML == "=") {
      // evaluate the string
      string = eval(string);

      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      // console.log(e.target.innerHTML);
      let substr = string.substring(0, string.length - 1);
      console.log(substr);
      document.querySelector("input").value = substr;
      string = substr;
      substr = "";
    }
    if (e.target.innerHTML == "ON") {
      Array.from(buttons).map((btn) => {
        if(btn.target.innerHTML!= "ON"){
              btn.disabled = false;
      }

      });
      if (!e.target.innerHTML.disabled) {
        e.target.innerHTML = "OF";
      }
    }
    else if (e.target.innerHTML == "OF") {
      
      Array.from(buttons).map((btn) => {
      if(btn.target.innerHTML!="OF")
      {
            btn.disabled = true;
      }

      });
      if (e.target.innerHTML.disabled) {
        e.target.innerHTML = "ON";
      }
      document.querySelector("input").value = "";
    } else {
      if (e.target.innerHTML == "X") {
        string = string + "*";
        document.querySelector("input").value = string;
      } else {
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    }
  });
});

// give the on off option on a single button, dynamically change the buttons text.
