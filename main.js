// document.getElementById("press").addEventListener('click',nextOne);

document.getElementById("press").addEventListener('click',catchQ);
window.onload = catchQ;

function catchQ (){
    fetch('https://api.adviceslip.com/advice')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        document.getElementById("innerText").innerHTML = data.slip.advice;
        document.getElementById("numAdv").innerHTML = "ADVICE # " + data.slip.id;
    })
    .catch((error) => console.log(error))
}








// async function catchQ () {
//     const response = await fetch('https://api.adviceslip.com/advice');
//     const data = await response.data;
//     document.getElementById('innerText').innerHTML = data.advice;
// }