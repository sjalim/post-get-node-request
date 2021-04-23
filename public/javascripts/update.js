

let updateButton = document.getElementById("update_button");
let dropDown = document.getElementById("selected_id");
let showButton = document.getElementById("show_button");
let showDes = document.getElementById("show");
let updatePanel = document.getElementById("update_panel");


showButton.addEventListener("click",()=>{

    showDes.style.visibility = "visible";
    updatePanel.style.visibility= "hidden";
});
updateButton.addEventListener("click",()=>{
    console.log("check");
 
    showDes.style.visibility = "hidden";
    updatePanel.style.visibility = "visible";

});


dropDown.addEventListener("change", function () {


    console.log("selected text:" + this.value);
    updateButton.href = "/update/data/"+this.value;
    showButton.href = "/show/data/"+this.value;
    console.log(updateButton.getAttribute("href"));
});
