let string = ""
let ans = ""
let check=""
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            console.log(e.target.innerHTML)
            string = eval(string)
            if (check!=""){
                document.querySelector('input').value=eval(ans);
            }
            else{
            document.querySelector('input').value = string;
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            ans=""
            check=""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='M+'){
            ans=ans+"+"+string;
            string=""
            check="8"
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='M-'){
            ans=ans+"-"+string;
            string=""
            check="8"
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='CL'){
            string=string.substring(0,string.length-1)
            document.querySelector('input').value=string;
        }
        
        else {
            console.log(e.target);
            string = string + e.target.innerHTML
            check=""
            document.querySelector('input').value = string;
        }
    })
})

// console.log("hari")
// let a=document.getElementById("principal").value
// console.log(a)

burger=document.querySelector(".hum")
rightbar=document.querySelector(".right")
burger.addEventListener('click',()=>{
    rightbar.classList.toggle('right-resp')

})

