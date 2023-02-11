alert("This is a project from xii programming copy right 2023 and a happy valantine to you all.");
window.onload = function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}
function calculateLove() {
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush's-name").value;

    if (yourName != "" && crushName != "") {
        let percentage = Math.floor(Math.random() * 101);
        document.getElementById("result-message").innerText = yourName  + " and " + crushName + "'s chance of love: ";
document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    }
    else{
        alert("COULD NOT CALCULATE CHECK NAME OR CRUSH'S NAME");
    }
  
}

