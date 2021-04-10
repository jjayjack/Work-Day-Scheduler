var today = moment();
$("#currentDay").text(today.format("[Today is] dddd"));
var toDo = document.getElementById("toDo");
var save = $("#save");
toDo = $("#toDo");



save.on("click", function(){
    console.log("save");
 //create link of value within input (toDo)to save
    var key = toDo.val();
    console.log(key);
    localStorage.setItem("toDo", toDo.val());
    JSON.parse(localStorage.getItem("toDo"));

    // if (key) {
    //     localStorage.setItem(key, )
});