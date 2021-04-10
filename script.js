var today = moment();
$("#currentDay").text(today.format("[Today is] dddd, MMMM Do YYYY"));
var nineAM = $("#input9");
var tenAM = $("#input10");
var elevenAM = $("#input11");
var twelvePM = $("#input12");
var onePM = $("#input13");
var twoPM = $("#input14");
var threePM = $("#input15");
var fourPM = $("#input16");
var fivePM = $("#input17");
//var saves
var nineAMsave = $("#nineAMsave");
var tenAMsave = $("#tenAMsave");
var elevenAMsave = $("#elevenAMsave");
var twelvePMsave = $("#twelvePMsave");
var onePMsave = $("#onePMsave");
var twoPMsave = $("#twoPMsave");
var threePMsave = $("#threePMsave");
var fourPMsave = $("#fourPMsave");
var fivePMsave = $("#fivePMsave");
//var for empty objects
var input = {
    nineAM : "",
    tenAM :"",
    elevenAM : "",
    twelvePM : "",
    onePM : "",
    twoPM : "",
    threePM : "",
    fourPM : "",
    fivePM : ""
};

nineAMsave.on("click", save);
tenAMsave.on("click", save);
elevenAMsave.on("click", save);
twelvePMsave.on("click", save);
onePMsave.on("click", save);
twoPMsave.on("click", save);
threePMsave.on("click", save);
fourPMsave.on("click", save);
fivePMsave.on("click", save);

function save(){
 //create link of value within input (toDo)to save
    input = {
    nineAM : nineAM.val(),
    tenAM : tenAM.val(),
    elevenAM : elevenAM.val(),
    twelvePM : twelvePM.val(),
    onePM : onePM.val(),
    twoPM : twoPM.val(),
    threePM : threePM.val(),
    fourPM : fourPM.val(),
    fivePM : fivePM.val()
};
    localStorage.setItem("toDo", JSON.stringify(input));

};

input = JSON.parse(localStorage.getItem("toDo"));
console.log(input);
nineAM.val(input.nineAM);
tenAM.val(input.tenAM);
elevenAM.val(input.elevenAM);
twelvePM.val(input.twelvePM);
onePM.val(input.onePM);
twoPM.val(input.twoPM);
threePM.val(input.threePM);
fourPM.val(input.fourPM);
fivePM.val(input.fivePM);

//setting up color parameters

var d = new Date().getHours();

for (var i = 9; i < 18; i++){
    if (d === i){
        $("#input"+i).css("background-color", "#ff6961");
        $("#input"+i).css("color", "white");
}   else if (d < i) {
         $("#input"+i).css("background-color", "#77dd77");
         $("#input"+i).css("color", "white");
 }   else {
         $("#input"+i).css("background-color", "#d3d3d3");
         $("#input"+i).css("color", "white");
}};