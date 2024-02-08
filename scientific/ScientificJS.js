
let e = "";
let Ans = "";
let trig = "";
function buttonPressed(value) {
    if (e != "") {
        document.querySelector('input').value = e + value
        e = "";
    }
    else if (value == "Ans") {
        Ans = document.querySelector('input').value
        document.querySelector('input').value = "Ans"

    }
    else {
        document.querySelector('input').value += value;
    }

}
function buttonPressedE(value) {
    e = document.querySelector('input').value + value;
    document.querySelector('input').value = "e"

}

function buttonPressedPow(value) {
    if (value == "cube") {
        const input = "Math.pow(" + document.querySelector('input').value + ",3)"
        document.querySelector('input').value = eval(input)
    }
    else if (value == "sqr") {
        const input = "Math.pow(" + document.querySelector('input').value + ",2)"
        document.querySelector('input').value = eval(input)
    }
    else if (value == "cbrt") {
        const input = "Math.cbrt(" + document.querySelector('input').value + ")"
        document.querySelector('input').value = eval(input)
    }
    else if (value == "sqrt") {
        const input = "Math.sqrt(" + document.querySelector('input').value + ")"
        document.querySelector('input').value = eval(input)
    }
    else {
        const input = "Math.pow(" + document.querySelector('input').value + ",-1)"
        console.log("ha")
        document.querySelector('input').value = eval(input)
    }

}
// Factorial
function factorial(num) {
    if (num === 0 || num === 1) {
        document.querySelector('input').value = "num"
        return 1;
    }
    return num * factorial(num - 1);
}



function buttonPressedFact(value) {
    const input = document.querySelector('input').value
    const num = parseInt(input);
    document.querySelector('input').value = factorial(num)
}


function buttonPressedT(value) {
    // let buttons = document.querySelector('.btn');
    trig = "yes"
    document.querySelector('input').value += value;

}


function calculate() {


     if (document.querySelector('input').value.includes('√')) {
        const input = document.querySelector('input').value
        console.log(input)
        let ind = input.indexOf('√');
        const result = eval("Math.pow(" + input.substring(ind + 1, input.length) + ",1/" + input.substring(0, ind) + ")");
        // console.log("Math.pow("+input.substring(ind+1,input.length)+",1/"+input.substring(0,ind)+")")
        document.querySelector('input').value = result;
    }

    else if (document.querySelector('input').value.includes('e')) {
        const input = document.querySelector('input').value
        let ind = input.indexOf('^');
        const result = eval("Math.exp(" + input.substring(ind + 1, input.length) + ")");
        document.querySelector('input').value = result;
    }
    else if (document.querySelector('input').value.includes('10^')) {
        const input = document.querySelector('input').value
        let ind = input.indexOf('^');
        const result = eval("Math.pow(10," + input.substring(ind + 1, input.length) + ")");
        document.querySelector('input').value = result;
    }


    else if (document.querySelector('input').value.startsWith('Ans')) {
        const input = document.querySelector('input').value
        const result = eval(Ans + input.substring(3, input.length));
        document.querySelector('input').value = result;
        Ans = ""
    }
    else if (trig != "") {
        trig=""
        if (document.querySelector('input').value.includes('sin(')) {
            let input = document.querySelector('input').value
            let start = parseInt(input.indexOf('s'));
            let end = index(start)+start;
            let rad = "0.01744*" + input.substring(start + 4, end);
            const result = input.substring(0, start) + "Math.sin(" + rad + ")" + input.substring(start+end + 1);
            console.log(result)
            document.querySelector('input').value = Math.round(eval(result));
        }
        if (document.querySelector('input').value.includes('cos(')) {
            let input = document.querySelector('input').value
            let start = parseInt(input.indexOf('c'));
            let end = index(start)+start;
            let rad = "0.01744*" + input.substring(start + 4, end);
            const result = input.substring(0, start) + "Math.cos(" + rad + ")" + input.substring(start+end + 1);
            console.log(result)
            document.querySelector('input').value = Math.round(eval(result));
        }
        if (document.querySelector('input').value.includes('tan(')) {
            let input = document.querySelector('input').value
            let start = parseInt(input.indexOf('t'));
            let end = index(start)+start;
            let rad = "0.01744*" + input.substring(start + 4, end);
            const result = input.substring(0, start) + "Math.tan(" + rad + ")" + input.substring(start+end + 1);
            console.log(result)
            document.querySelector('input').value = Math.round(eval(result));
        }
        if (document.querySelector('input').value.includes('sin-1(')) {
            let input=document.querySelector('input').value
            let start=parseInt(input.indexOf('s'));
            let end=index(start)+start;
            let rad=input.substring(start+6,end);
            const result=input.substring(0,start)+"Math.asin("+rad+")"+input.substring(start+end+1)+"*57.325";
            console.log(result)
            document.querySelector('input').value = Math.round(eval(result));
         }
         if (document.querySelector('input').value.includes('cos-1(')) {
            let input=document.querySelector('input').value
            let start=parseInt(input.indexOf('c'));
            let end=index(start)+start;
            let rad=input.substring(start+6,end);
            const result=input.substring(0,start)+"Math.acos("+rad+")"+input.substring(start+end+1)+"*57.325";
            console.log(result)
            document.querySelector('input').value = Math.round(eval(result));
         }
         if (document.querySelector('input').value.includes('tan-1(')) {
            let input=document.querySelector('input').value
            let start=parseInt(input.indexOf('t'));
            let end=index(start)+start;
            let rad=input.substring(start+6,end);
            const result=input.substring(0,start)+"Math.atan("+rad+")"+input.substring(start+end+1)+"*57.325";
            console.log(result)
            document.querySelector('input').value = Math.round(eval(result));
         }
         if (document.querySelector('input').value.includes('log(')) {
            let input=document.querySelector('input').value
            let start=parseInt(input.indexOf('l'));
            let end=index(start)+start;
            let rad=input.substring(start+4,end);
            const result=input.substring(0,start)+"Math.log("+rad+")"+input.substring(start+end+1)+"/2.3028";
            console.log(result)
            document.querySelector('input').value = Math.round(eval(result));
         }
         if (document.querySelector('input').value.includes('ln(')) {
            let input=document.querySelector('input').value
            let start=parseInt(input.indexOf('n'));
            let end=index(start)+1+start;
            let rad=input.substring(start+2,end);
            const result=input.substring(0,start-1)+"Math.log("+rad+")"+input.substring(start+end);
            console.log(result+"h")
            document.querySelector('input').value = eval(result);
         }
         if (document.querySelector('input').value.includes('π')) {
            let input=document.querySelector('input').value
            let start=parseInt(input.indexOf('π'));
            const result=input.substring(0,start)+"Math.PI"+input.substring(start+1);
            console.log(result)
            document.querySelector('input').value = eval(result);
         }

    }


    else {
        const input = document.querySelector('input').value
        console.log(input)
        const result = eval(input);
        document.querySelector('input').value = result;
    }
}

function index(start) {
    return document.querySelector('input').value.substring(start).indexOf(')');
}





function clearInput() {
    document.querySelector('input').value = "";
}

function clearCH() {
    const input = document.querySelector('input').value
    document.querySelector('input').value = input.substring(0, input.length - 1);
}


function insertSymbol(symbol) {
    // Assuming you have an input field to display expressions
    const inp=document.querySelector('input').value;
    document.querySelector('input').value =eval('Math.abs(' + inp + ')');
}

burger=document.querySelector(".hum")
rightbar=document.querySelector(".right")
burger.addEventListener('click',()=>{
    rightbar.classList.toggle('right-resp')

})