// document.querySelector(".displayGo").style.dis
// document.getElementById("display").style.display="none";


function updateOutput() {
    let tim = document.querySelector('.first').value
    if (tim.length == 10) {
        document.querySelector(".time").value = Time2(tim);
    }
}



function calculateInterest() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    let tim = document.querySelector('.first').value
    let c = Time(tim).toString();

    let interest = eval(principal + "*" + c + "*" + rate + "/100")
    console.log(interest)
    // document.querySelector(".seperate").style.height="none"
    document.querySelector('.display').classList.toggle('displayGo');
    document.querySelector(".interest").value=interest;
    document.querySelector(".total").value=eval(interest+"+"+principal)
}

function Time(tim) {
    const parts = tim.split('-');
    let day1 = parseInt(parts[2])
    let month1 = parseInt(parts[1])
    let yr1 = parseInt(parts[0])

    var today = new Date();
    var day2 = today.getDate();
    var month2 = today.getMonth() + 1; // Note: January is 0
    var yr2 = today.getFullYear();

    var arr = [];

    if (day2 < day1) {
        day2 = day2 + 30
        month2--;
        arr[0] = day2 - day1
        if (month2 < month1) {
            month2 = month2 + 12;
            yr2--;
            arr[1] = month2 - month1;
            arr[2] = yr2 - yr1
        }
        else {
            arr[1] = month2 - month1;
            arr[2] = yr2 - yr1

        }

    }
    else {
        arr[0] = day2 - day1
        if (month2 < month1) {
            month2 = month2 + 12;
            yr2--;
            arr[1] = month2 - month1;
            arr[2] = yr2 - yr1
        }
        else {
            arr[1] = month2 - month1;
            arr[2] = yr2 - yr1

        }


    }
    document.querySelector(".time").value = arr[0] + " days, " + arr[1] + " months, " + arr[2] + " years "
    let ans = (arr[0] / 30) + arr[1] + arr[2] * 12
    return ans



}



function Time2(tim) {
    const parts = tim.split('-');
    let day1 = parseInt(parts[2])
    let month1 = parseInt(parts[1])
    let yr1 = parseInt(parts[0])

    var today = new Date();
    var day2 = today.getDate();
    var month2 = today.getMonth() + 1; // Note: January is 0
    var yr2 = today.getFullYear();

    var arr = [];

    if (day2 < day1) {
        day2 = day2 + 30
        month2--;
        arr[0] = day2 - day1
        if (month2 < month1) {
            month2 = month2 + 12;
            yr2--;
            arr[1] = month2 - month1;
            arr[2] = yr2 - yr1
        }
        else {
            arr[1] = month2 - month1;
            arr[2] = yr2 - yr1

        }

    }
    else {
        arr[0] = day2 - day1
        if (month2 < month1) {
            month2 = month2 + 12;
            yr2--;
            arr[1] = month2 - month1;
            arr[2] = yr2 - yr1
        }
        else {
            arr[1] = month2 - month1;
            arr[2] = yr2 - yr1

        }


    }
    return arr[0] + " days, " + arr[1] + " months, " + arr[2] + " years "
    // let ans = (arr[0] / 30) + arr[1] + arr[2] * 12
    // return ans



}


