let input = document.getElementById("result");
    let equation = " ";
		
		function addNum() {
		let num1 = parseInt(document.getElementById("num1").value);
		let num2 = parseInt(document.getElementById("num2").value);
		let result = (num1/100)*num2;
		}
		function addNum(value) {
    equation += value;
    input.value = equation;
    }

    function calculate() {
    input.value = eval(equation);
    equation = input.value;
    }
    
    function clearInput() {
    input.value = "";
    equation = "";
    }

    function backspace() {
    equation = equation.slice(0, -1);
    input.value = equation;
    }
