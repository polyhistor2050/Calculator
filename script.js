const buttons = document.querySelectorAll("span");
const answer = document.querySelector("#answer");

for(let b of buttons){b.addEventListener("click", function(){
    if(b.innerText === 'C'){
        answer.value = " ";
    }else if(b.innerText === "="){
       answer.value =  eval(answer.value);
    }else {
        answer.value += b.innerText;
    }
})}




