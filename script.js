var head2 = document.getElementById("head2");
var p1 = document.getElementById("paragraph1");
var p2 = document.getElementById("paragraph2");

function dark(){
    document.body.style.backgroundColor ="black";
    head2.style.color='white';
    p1.style.color='white';
}
function light(){
    document.body.style.backgroundColor ="white";
    head2.style.color='black';
    p1.style.color='black';
}