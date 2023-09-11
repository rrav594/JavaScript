
// $(document).ready(function(){
// jQuery("h1").css("color", "white")
// });

// Instead add the jQuery module in the end of the body.

$("h1").addClass("big-title margin-50");

//$("h1").removeClass("big-title");
console.log($("h1").hasClass("big-title"));


$("h1").text("GoodBye");

$("button").text("Inside the button");

$("button").html("<em>HEY</em>")


console.log($("img").attr("src"));

$("a").attr("href", "https://www.yahoo.com");


// Adding event listeners

$("h1").click(function(){
    $("h1").css("color", "blue");
    $("h1").text("Hi Ravi");
    $("h1").removeClass("big-title");
    $("img").hide();
})

// EVENT LISTENERS


// var buttonCount = document.querySelectorAll("button").length;
// for(var i=0; i<buttonCount; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     })
// }
$("button").click(function(){
    $("h1").css("color", "purple");
})

$("input").keypress(function(event){
    console.log(event.key);
})

$(document).keypress(function(event){
    $("h1").text(event.key);
})


// Easier way to look for event listeners
// On method
$("h1").on("mouseover", function(){
    $("h1").css("color", "red");
})

// Before Keyword to create HTML tags before selected tag
$("h1").before("<button>Before</button>");

// After Keyword to create HTML tags after the selected tag
$("h1").after("<button>After</button><hr>");

// Prepend and Append Keywords to create HTML tags inside the selected tag
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");


// To remove tags
//$("button").remove();


// hide(), show(), toggle() - Animations in jQuery
// fadeOut(), fadeIn(), fadeToggle(), fadeToggle()
// slideUp(), slideDown(), slideToggle()
// animate() only takes properties with numeric value, not color properties

$("button").click(function(){
    // $("h1").fadeToggle();
    // $("img").toggle();
    // $("h1").after("<h2>Here is a h2 heading</h2>");
    // $("h2").css("font-size", "3rem");
    // $("h2").slideToggle();
    $("h1").animate({opacity:0.5});
    $("h1").slideUp().slideDown().fadeToggle().animate({opacity:0.5});   
})

