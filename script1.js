const input=document.getElementById('input');
function Alert(){
    alert(input.value);
}

input.addEventListener('keyup',(e)=>{
    if (e.keyCode===13){
        Alert();
});