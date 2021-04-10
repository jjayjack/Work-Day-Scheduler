var today = moment();
$("#currentDay").text(today.format("[Today is] dddd"));
var nineAM = $("#nineAM");
var tenAM = $("#tenAM");
var elevenAM = $("#elevenAM");
var twelvePM = $("#twelvePM");
var onePM = $("#onePM");
var twoPM = $("#twoPM");
var threePM = $("#threePM");
var fourPM = $("#fourPM");
var fivePM = $("#fivePM");
var nineAMsave = $("#nineAMsave");
var tenAMsave = $("#tenAMsave");
var elevenAMsave = $("#elevenAMsave");
var twelvePMsave = $("#twelvePMsave");
var onePMsave = $("#onePMsave");
var twoPMsave = $("#twoPMsave");
var threePMsave = $("#threePMsave");
var fourPMsave = $("#fourPMsave");
var fivePMsave = $("#fivePMsave");


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




    // if (key) {
    //     localStorage.setItem(key, )
