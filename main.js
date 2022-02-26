// document.getElementById("press").addEventListener('click',nextOne);

document.getElementById("press").addEventListener('click',catchQ);

function nextOne(){
    document.querySelector("#innerText").innerHTML = "This is life on Mars"
    document.querySelector("#numAdv").innerHTML = "#7"
}


function catchQ (){
    fetch('https://api.adviceslip.com/advice')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        document.getElementById("innerText").innerHTML = data.slip.advice;
        document.getElementById("numAdv").innerHTML = data.slip.id;
    })
}








// async function catchQ () {
//     const response = await fetch('https://api.adviceslip.com/advice');
//     const data = await response.data;
//     document.getElementById('innerText').innerHTML = data.advice;
// }