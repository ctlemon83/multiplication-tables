var factorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var validation = document.getElementById("corIncor");

// Chooses a random digit from the array
function getRandomNumber() {
    return Math.floor(Math.random() * factorArr.length);
}

// Resets the value of each factor and erases the input field, removes added classes
function newProblem () {
    document.getElementById("firstFactor").innerHTML = Number(factorArr[getRandomNumber()]);
    document.getElementById("secFactor").innerHTML = Number(factorArr[getRandomNumber()]);
    document.getElementById("answer").value = "";
    validation.innerHTML = "";
    validation.classList.remove("correct");
    validation.classList.remove("incorrect");
}

// Runs the calculation if "Enter" is pressed
document.querySelector('#answer').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      multiply();
    }
});

// Checks the submitted answer after multiplying the two factors
function multiply () {
    var answer = document.getElementById("answer").value;
    var factor1 = Number(document.getElementById("firstFactor").innerHTML);
    var factor2 = Number(document.getElementById("secFactor").innerHTML);
    var product = factor1 * factor2;
    if (answer.length<1) {
        alert("You must enter a number!");
    } else {
        if (product == answer) {
            validation.innerHTML = "Great Job!";
            validation.classList.add("correct");
        } else {
            validation.innerHTML = "Keep Trying!";
            validation.classList.add("incorrect");
        } setTimeout(function(){newProblem();}, 1250);
    } 
}

// Starts the page with a new problem
newProblem();