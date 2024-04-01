let equation = ""
function handleGetValue(value) {
    equation += value
    document.getElementById("display").innerHTML = equation
}
function handleCalculate() {
    const result = eval(equation)
    document.getElementById("display").innerHTML = result
    equation = result
}
function clearAll() {
    equation = ""
    document.getElementById("display").innerHTML = ""
}
function sliceWord() {
    if (equation) {
        equation = equation.slice(0, equation.length - 1);
        document.getElementById("display").innerHTML = equation;
        
    }
    else {
        
        result = result.slice(0, result.length - 1)
        document.getElementById("display").innerHTML = result;
    }
    
}
// Light theme
function light() {
    document.getElementById("calbg").style.backgroundColor = "white"
    document.getElementById("display").style.color = "black"
    document.getElementById("equal").style.backgroundColor = "#19647e"
    document.getElementById("clear").style.backgroundColor = "#db7f8e"
    document.getElementById("clear").style.color = "#ffdbda"
}
// Dark theme
function dark() {
    document.getElementById("calbg").style.backgroundColor = "#071115"
    document.getElementById("display").style.color = "white"
    document.getElementById("equal").style.backgroundColor = "#566246"
    document.getElementById("clear").style.backgroundColor = "#785964"
    document.getElementById("clear").style.color = "#d5c7bc"
}