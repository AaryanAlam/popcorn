function button() {
    var button = document.getElementById("txt")

    if (button.textContent === "poop") {
        button.textContent = "popo"
        button.style.marginLeft = "590px"
        button.style.color = "skyblue"
    } else {
        button.textContent = "poop"
        button.style.marginLeft = "0px"
        button.style.color = "black"
    }

   
}

function button2() {
    var myButton = document.getElementById("txt2")

    if (myButton.textContent === " ") {
        myButton.textContent = "hi"
    } else {
        myButton.textContent = "bye"
    }
}

var elem = document.getElementById('element');
console.log(elem)
