let span = document.getElementById('numbers');
let charInsert;
let arr;
let numbers = [];

document.getElementById("1").addEventListener('click', function(){
    span.textContent += "1";
});

document.getElementById("2").addEventListener('click', function(){
    span.textContent += "2";
})

document.getElementById("3").addEventListener('click', function(){
    span.textContent += "3";
})

document.getElementById("4").addEventListener('click', function(){
    span.textContent += "4";
})

document.getElementById("5").addEventListener('click', function(){
    span.textContent += "5";
})

document.getElementById("6").addEventListener('click', function(){
    span.textContent += "6";
})

document.getElementById("7").addEventListener('click', function(){
    span.textContent += "7";
})

document.getElementById("8").addEventListener('click', function(){
    span.textContent += "8";
})

document.getElementById("9").addEventListener('click', function(){
    span.textContent += "9";
})

document.getElementById("0").addEventListener('click', function(){
    span.textContent += "0";
})

document.getElementById("c").addEventListener('click', function(){
    span.textContent = "";
    document.querySelector("#answer").innerHTML = "";
});

document.getElementById("positive").addEventListener('click', function(){
    charInsert = "-";
    if (span.textContent.charAt(0) !== '-') 
        span.textContent = charInsert + span.textContent;  
});

document.getElementById("backspace").addEventListener('click', function(){
    span.textContent = span.textContent.slice(0, -1);
});

document.getElementById("divide").addEventListener('click', function(){
    charInsert = "/";
    if (span.textContent.charAt(span.textContent.length-1) !== '/' || span.textContent !== " ") 
        span.textContent = span.textContent + charInsert;

});

document.getElementById("multiply").addEventListener('click', function(){
    charInsert = "*";
    if (span.textContent.charAt(span.textContent.length-1) !== '*' || span.textContent !== " ") 
        span.textContent = span.textContent + charInsert;
});

document.getElementById("minus").addEventListener('click', function(){
    charInsert = "-";
    if (span.textContent.charAt(span.textContent.length-1) !== '-' || span.textContent !== " ") 
        span.textContent = span.textContent + charInsert;
});

document.getElementById("add").addEventListener('click', function(){
    charInsert = "+";
    if (span.textContent.charAt(span.textContent.length-1) !== '+' || span.textContent !== " ")
        span.textContent = span.textContent + charInsert;
});

document.getElementById("decimal").addEventListener('click', function(){
    charInsert = ".";
    if (span.textContent.charAt(span.textContent.length-1) !== '/' || span.textContent !== " ")
        span.textContent = span.textContent + charInsert;
});

document.getElementById("equals").addEventListener('click', function(){
    let exp = document.querySelector("#numbers");

    if(exp.textContent.includes("+")) //change the plus, divide, multiply symbols according to mathjs api
        exp = exp.textContent.replace(/\++/g, "%2B");
    else if(exp.textContent.includes("/"))
        exp = exp.textContent.replace(/\//g, "%2F");
    else if(exp.textContent.includes("x"))
        exp = exp.textContent.replace(/\x/g, "*");
    else
        exp = exp.textContent;
    getDataFromApi(exp); //send the expression to the api
});


const numberDisplay = document.getElementById('numbers');
const animation = document.querySelectorAll('.button');

animation.forEach(button => {
    button.addEventListener('click', (event) => {

      // Add the animate class to trigger the animation
      numberDisplay.classList.add('animate');
      
      // Remove the animate class after the animation ends
      setTimeout(() => {
        numberDisplay.classList.remove('animate');
      }, 300); // Match this timeout to the animation duration (0.3s)
    });
  });




async function getDataFromApi(expression){
    const base_URL = "https://api.mathjs.org/v4/?expr="
    try {
        const response = await fetch(base_URL + expression);
        if(!response.ok) 
            throw new Error("Network response is not ok" + response.statusText)

        const data = await response.json();
        console.log(data);

        document.querySelector("#answer").innerHTML = data
        
    } catch (error) {
        console.log("error" + error)
        document.querySelector("#answer").innerHTML = "0";
        document.querySelector("#numbers").innerHTML = "";
    }
}   




