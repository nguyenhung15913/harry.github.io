// Order Problem
window.onload = function() {
    
let orderProb = document.querySelector("#orderproblem");
let ques = document.querySelector("#question");
let com = document.querySelector("#comment");
let orno = document.querySelector(".orno");
orno.style.display = "none";


orderProb.addEventListener('click', function() {
    if (orno.style.display === "none") {
        orno.style.display = "block";
    }
   

});

ques.addEventListener('click', function() {
    if (orno.style.display === "block") {
        orno.style.display = "none";
    }
   
});

com.addEventListener('click', function() {
    if (orno.style.display === "block") {
        orno.style.display = "none";
    }
   
});
}
