//logo en warning
setTimeout(function() {
  $("#warning").hide();
}, 0);

setTimeout(function() {
  $("#warning").fadeIn();
  document.getElementById("warningText").innerHTML="Before being able to use this app, please select the Personal ID menu to fill in your personal information. Swipe right or click on the upper-left corner button.";
}, 2500);

setTimeout(function() {
  $("#logo").fadeOut();
}, 2000);

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// swipe functions
var mainPage = 1;
var idPage = 0;
var infoPage = 0;
  
$(document).on("pagecreate","#body",function swipe(){
  $("#body").on("swipeleft",function swipe(){
    if (mainPage == 1)  {
    $("#mainPage").hide("slide", {direction: "left"} );
    $("#idPage").show("slide", {direction: "right"}); //naar idPage
    mainPage = 0;
    idPage = 1;
   ShowTwo();
      document.getElementById("mainPageHead").innerHTML = "Personal ID";
    }
    else if (idPage == 1) {
    $("#idPage").hide("slide", {direction: "left"});
    $("#infoPage").show("slide", {direction: "right"}); //naar infoPage
    idPage = 0;
    infoPage = 1;
         ShowThree();
      document.getElementById("mainPageHead").innerHTML = "More Information";
    }
  });
  $("#body").on("swiperight",function swipe(){
    if (idPage == 1) {
    $("#mainPage").show("slide", {direction: "left"});
    $("#idPage").hide("slide", {direction: "right"}); //naar mainPage
    idPage = 0;
    mainPage = 1;
         ShowOne();
      document.getElementById("mainPageHead").innerHTML = "Home";
    }
    else if(infoPage == 1){
    $("#infoPage").hide("slide", {direction: "right"});
    $("#idPage").show("slide", {direction: "left"});//naar idPage
    idPage = 1;
    infoPage = 0;
         ShowTwo();
      document.getElementById("mainPageHead").innerHTML = "Personal ID";
    }
  })
});

//menu dots
  function ShowOne() { 
  document.getElementById("dot1").checked = true;
}
 
  function ShowTwo() { 
  document.getElementById("dot2").checked = true;
  }
      
  function ShowThree() { 
  document.getElementById("dot3").checked = true;
  }


//which page to show
  function ShowMainPage() { 
  document.getElementById("mainPageHead").innerHTML = "Home";  
    
  document.getElementById("mainPage").style.display = "";
  
  document.getElementById("infoPage").style.display = "none";
  document.getElementById("idPage").style.display = "none";
    ShowOne();
    mainPage = 1;
    idPage = 0;
    infoPage = 0;
}
  
  function ShowIdPage() { 
  document.getElementById("mainPageHead").innerHTML = "Personal ID";  
    
  document.getElementById("idPage").style.display = "";
  
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("infoPage").style.display = "none";
    ShowTwo();
    mainPage = 0;
    idPage = 1;
    infoPage = 0;
}
    
  function ShowInfoPage() { 
  document.getElementById("mainPageHead").innerHTML = "More Info";  
    
  document.getElementById("infoPage").style.display = "";

  document.getElementById("mainPage").style.display = "none";
  document.getElementById("idPage").style.display = "none";
    ShowThree();
    mainPage = 0;
    idPage = 0;
    infoPage = 1;
}
  


//Main Page
//algorithm for alcohol promillage
var amountDrinks = [];
var type = "";
var genderA = ""; 
var weight = ""; 
var height = "";
var drinkType = ""; 
var drinkTypeNumber ="";
var nationality = "";
var driversLicense = "";
var alcoholAllowedToDrive = "";
var alcoholConsumed = "";  
var name = ""
var age = ""; 

function volumeBeer50() {
  gramAlcoholBeer = 0.4*50;
  Beer();
}
function volumeBeer33() {
  gramAlcoholBeer = 0.4*33;
  Beer();
}
function volumeBeer20() {
  gramAlcoholBeer = 0.4*20;
  Beer();
}


var gramAlcoholBeer; //gram 					        5% in 33 cL (0.05x33x8)
var gramAlcoholWine = 9.60; //gram						12% in 10 cL
var gramAlcoholCocktail = 12.32; //gram				5.6% in 27.5 cL
var gramAlcoholShot = 14; //gram 							35% in 5 cL
var longestTime = ""; 

//info halen uit Personal ID
  function getInfoName() {
    name = document.getElementById("Name").value;
  }

  function getInfoAge() {
    age = document.getElementById("Age").value;
    if (age < 18) {
      $("#warning").fadeIn();
  document.getElementById("warningText").innerHTML="Your age is bellow the legal age to drink alcohol in The Netherlands. We advice you not to use this app!";
    }
}  

  function getInfoWeight() {
    weight = document.getElementById("Weight").value;
}
  
  function getInfoGender() {
   gender = document.getElementById("Gender").value;
} 
   
  function getInfoNationality() {
  nationality = document.getElementById("Nationality").value;
} 

  function getInfoDrinkType(){
    drinkType = document.getElementById("drinkType").value;
  }
  function getInfoHeight(){
    height = document.getElementById("height").value;
  }

  function getInfoHowLong() {
    alcoholAllowedToDrive = 
document.getElementById("timeSinceLicense").value;
    alcoholPromillage();
}
  
  function howLongdriverLicense() {
  driversLicense = document.getElementById("driversLicense").value;
  if (driversLicense == "Yes") {
    document.getElementById("timeLicense").style.display = "";
    document.getElementById("ableToDrive").style.display = "";
  }
  else {
    document.getElementById("timeLicense").style.display = "none";
    document.getElementById("ableToDrive").style.display = "none";
  }
   alcoholPromillage();
}

//BAC-waarde berekenen
  function alcoholPromillage() {
          var BACFormula = valueFormula1 + valueFormula2 + valueFormula3 + valueFormula4 + valueFormula5 + valueFormula6 + valueFormula7 + valueFormula8 + valueFormula9 + valueFormula10;
          
          if (BACFormula <= 0){
            document.getElementById("formula").innerHTML = 0;
          }
          else {
            document.getElementById("formula").innerHTML = BACFormula.toFixed(2); //rounding off en BAC formula
          }  
        }
  
//tijd berekenen tot sober en tot je weer mag rijden
  function calculateTime () {
    var BACFormula = valueFormula1 + valueFormula2 + valueFormula3 + valueFormula4 + valueFormula5 + valueFormula6 + valueFormula7 + valueFormula8 + valueFormula9 + valueFormula10;
    var BACTime = BACFormula/nationality;
    var BACTimeHours = BACTime.toString().split('.')[0];
    var BACTimeMinutes = (BACTime - BACTimeHours)*60;
    var BACTimeDrive = BACTime - alcoholAllowedToDrive/nationality;
    var BACTimeDriveHours = BACTimeDrive.toString().split('.')[0];
    var BACTimeDriveMinutes = (BACTimeDrive - BACTimeDriveHours)*60;
    if (BACTime <= 0){
      document.getElementById("timeTillSoberHours").innerHTML = 0;
      document.getElementById("timeTillSoberMinutes").innerHTML = 0;
      document.getElementById("timeTillDriveHours").innerHTML = 0;
      document.getElementById("timeTillDriveMinutes").innerHTML = 0;
    } else {
      document.getElementById("timeTillSoberHours").innerHTML = BACTimeHours;
      document.getElementById("timeTillSoberMinutes").innerHTML = BACTimeMinutes.toFixed(0);
      document.getElementById("timeTillDriveHours").innerHTML = BACTimeDriveHours;
      document.getElementById("timeTillDriveMinutes").innerHTML = BACTimeDriveMinutes.toFixed(0);
    }
    if (BACTimeDrive <=0){
      document.getElementById("timeTillDriveHours").innerHTML = 0;
      document.getElementById("timeTillDriveMinutes").innerHTML = 0;
    }
  }

function hideWarning() {
  document.getElementById("warning").style.display = "none";
}

var valueFormula1 = 0;
var valueFormula2 = 0;
var valueFormula3 = 0;
var valueFormula4 = 0;
var valueFormula5 = 0;
var valueFormula6 = 0;
var valueFormula7 = 0;
var valueFormula8 = 0;
var valueFormula9 = 0;
var valueFormula10 = 0;
var numberDrinks = [];
  
var gramAlcohol1 = 0;
var gramAlcohol2 = 0;
var gramAlcohol3 = 0;
var gramAlcohol4 = 0;
var gramAlcohol5 = 0;
var gramAlcohol6 = 0;
var gramAlcohol7 = 0;
var gramAlcohol8 = 0;
var gramAlcohol9 = 0;
var gramAlcohol10 = 0;
  
function addNumberDrinks() {
  numberDrinks.push(1);
}
 
function timeAndDrink(){
  var BACFormula = valueFormula1 + valueFormula2 + valueFormula3 + valueFormula4 + valueFormula5 + valueFormula6 + valueFormula7 + valueFormula8 + valueFormula9 + valueFormula10;
   
    switch (numberDrinks.length + 1) { //laat die plus 1 staan
    case 1:
      answer = 
        longestTime = timeFromStart1;
      break;
    case 2:
      answer = 
        longestTime = timeFromStart2;
      break;
    case 3:
      answer = 
        longestTime = timeFromStart3;
      break;
    case 4:
      answer = 
        longestTime = timeFromStart4;
      break;
    case 5:
      answer = 
        longestTime = timeFromStart5;
      break;
    case 6:
      answer = 
        longestTime = timeFromStart6;
      break;
    case 7:
      answer = 
        longestTime = timeFromStart7;
      break;
    case 8:
      answer = 
        longestTime = timeFromStart8;
      break;
    case 9:
      answer = 
        longestTime = timeFromStart9;
      break;
    case 10:
      answer = 
        longestTime = timeFromStart10;
      break;
  }		
}
  
function alertTooMuch() {
  if (message == 1) {
    alert("Hey " + name + ",\n There is now a strongly increased risk of an accident when drinking and driving, \n drink some water or eat something ;)");
    message = 0; }
  else{
  }
}

  //Type drink  
 function Beer() {
   type = " Beer ";
   timeAndDrink();
   
   switch (numberDrinks.length + 1) { //laat die plus 1 staan
    case 1:
      answer = 
        gramAlcohol1 = gramAlcoholBeer; 
       startCount1();
      break;
    case 2:
      answer = 
        gramAlcohol2 = gramAlcoholBeer;
       startCount2();
      break;
    case 3:
      answer = 
        gramAlcohol3 = gramAlcoholBeer;
       startCount3();
      break;
    case 4:
      answer = 
        gramAlcohol4 = gramAlcoholBeer;
       startCount4();
      break;
    case 5:
      answer = 
        gramAlcohol5 = gramAlcoholBeer;
       startCount5();
      break;
    case 6:
      answer = 
        gramAlcohol6 = gramAlcoholBeer;
       startCount6();
      break;
    case 7:
      answer = 
        gramAlcohol7 = gramAlcoholBeer;
       startCount7();
      break;
    case 8:
      answer = 
        gramAlcohol8 = gramAlcoholBeer;
       startCount8();
      break;
    case 9:
      answer = 
        gramAlcohol9 = gramAlcoholBeer;
       startCount9();
      break;
    case 10:
      answer = 
        gramAlcohol10 = gramAlcoholBeer;
       startCount10();
      break;
  }			
 }
  
 function Wine() {
   type = " Wine ";
   timeAndDrink();
   
   switch (numberDrinks.length + 1) { //laat die plus 1 staan
    case 1:
      answer = 
        gramAlcohol1 = gramAlcoholWine; 
       startCount1();
      break;
    case 2:
      answer = 
        gramAlcohol2 = gramAlcoholWine;
       startCount2();
      break;
    case 3:
      answer = 
        gramAlcohol3 = gramAlcoholWine;
       startCount3();
      break;
    case 4:
      answer = 
        gramAlcohol4 = gramAlcoholWine;
       startCount4();
      break;
    case 5:
      answer = 
        gramAlcohol5 = gramAlcoholWine;
       startCount5();
      break;
    case 6:
      answer = 
        gramAlcohol6 = gramAlcoholWine;
       startCount6();
      break;
    case 7:
      answer = 
        gramAlcohol7 = gramAlcoholWine;
       startCount7();
      break;
    case 8:
      answer = 
        gramAlcohol8 = gramAlcoholWine;
       startCount8();
      break;
    case 9:
      answer = 
        gramAlcohol9 = gramAlcoholWine;
       startCount9();
      break;
    case 10:
      answer = 
        gramAlcohol10 = gramAlcoholWine;
       startCount10();
      break;
  }			
 }
    
 function Cocktail() {
   type = " Cocktail ";
   timeAndDrink();
   
   switch (numberDrinks.length + 1) { //laat die plus 1 staan
    case 1:
      answer = 
        gramAlcohol1 = gramAlcoholCocktail; 
       startCount1();
      break;
    case 2:
      answer = 
        gramAlcohol2 = gramAlcoholCocktail;
       startCount2();
      break;
    case 3:
      answer = 
        gramAlcohol3 = gramAlcoholCocktail;
       startCount3();
      break;
    case 4:
      answer = 
        gramAlcohol4 = gramAlcoholCocktail;
       startCount4();
      break;
    case 5:
      answer = 
        gramAlcohol5 = gramAlcoholCocktail;
       startCount5();
      break;
    case 6:
      answer = 
        gramAlcohol6 = gramAlcoholCocktail;
       startCount6();
      break;
    case 7:
      answer = 
        gramAlcohol7 = gramAlcoholCocktail;
       startCount7();
      break;
    case 8:
      answer = 
        gramAlcohol8 = gramAlcoholCocktail;
       startCount8();
      break;
    case 9:
      answer = 
        gramAlcohol9 = gramAlcoholCocktail;
       startCount9();
      break;
    case 10:
      answer = 
        gramAlcohol10 = gramAlcoholCocktail;
       startCount10();
      break;
  }			
 }
  
 function Shot() {
   type = " Shot ";
   timeAndDrink();
   
   switch (numberDrinks.length + 1) { //laat die plus 1 staan
    case 1:
      answer = 
        gramAlcohol1 = gramAlcoholShot; 
       startCount1();
      break;
    case 2:
      answer = 
        gramAlcohol2 = gramAlcoholShot;
       startCount2();
      break;
    case 3:
      answer = 
        gramAlcohol3 = gramAlcoholShot;
       startCount3();
      break;
    case 4:
      answer = 
        gramAlcohol4 = gramAlcoholShot;
       startCount4();
      break;
    case 5:
      answer = 
        gramAlcohol5 = gramAlcoholShot;
       startCount5();
      break;
    case 6:
      answer = 
        gramAlcohol6 = gramAlcoholShot;
       startCount6();
      break;
    case 7:
      answer = 
        gramAlcohol7 = gramAlcoholShot;
       startCount7();
      break;
    case 8:
      answer = 
        gramAlcohol8 = gramAlcoholShot;
       startCount8();
      break;
    case 9:
      answer = 
        gramAlcohol9 = gramAlcoholShot;
       startCount9();
      break;
    case 10:
      answer = 
        gramAlcohol10 = gramAlcoholShot;
       startCount10();
      break;
  }			
 }

var reset;
var t1;
var t2; 
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var t10;
var timeFromStart1; //diff1
var timeFromStart2; //diff2
var timeFromStart3; //diff3
var timeFromStart4; //diff4
var timeFromStart5; //diff5
var timeFromStart6; //diff6
var timeFromStart7; //diff7
var timeFromStart8; //diff8
var timeFromStart9; //diff9
var timeFromStart10; //diff10
var message = 1;  

var herhaal = setInterval(myTimer, 1000);
  
  function myTimer() {
  if (reset == 0) {
   var currentTime = new Date();
   var timeParse = Date.parse(currentTime) / 60000;
   timeFromStart1 = timeParse - t1;
   timeFromStart2 = timeParse - t2;
   timeFromStart3 = timeParse - t3;
   timeFromStart4 = timeParse - t4;
   timeFromStart5 = timeParse - t5;
   timeFromStart6 = timeParse - t6;
   timeFromStart7 = timeParse - t7;
   timeFromStart8 = timeParse - t8;
   timeFromStart9 = timeParse - t9;
   timeFromStart10 = timeParse - t10;
  }
  else if (reset == 1) {
    timeFromStart1 = 0;
    timeFromStart2 = 0;
    timeFromStart3 = 0;
    timeFromStart4 = 0;
    timeFromStart5 = 0;
    timeFromStart6 = 0;
    timeFromStart7 = 0;
    timeFromStart8 = 0;
    timeFromStart9 = 0;
    timeFromStart10 = 0;
    t1 = undefined;
    t2 = undefined; 
    t3 = undefined;
    t4 = undefined;
    t5 = undefined;
    t6 = undefined;
    t7 = undefined;
    t8 = undefined;
    t9 = undefined;
    t10 = undefined;
  }
        formula1();
        formula2();
        formula3();
  			formula4();
  			formula5();
  			formula6();
  			formula7();
  			formula8();
  			formula9();
  			formula10();
        alcoholPromillage();
        calculateTime();
        colorCircle();
        
}
   //timer one                  
function startCount1 () {
  reset = 0;
  var currentTime = new Date()
  t1 =  Date.parse(currentTime) / 60000; //minutes
}

function formula1() {
    if (gender == "0.55" && gramAlcohol1/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - drinkType / 60 * timeFromStart1 >0) {
    valueFormula1 = gramAlcohol1/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - drinkType/60 * timeFromStart1 ;
    }
    else if(gender == "0.68" && gramAlcohol1/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart1 >0) {
    valueFormula1 = gramAlcohol1/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - drinkType / 60 * timeFromStart1;
    } else {
      valueFormula1 = 0; 
    }
  }

  //timer two
 function startCount2 () {
  reset = 0;
  var currentTime = new Date()
  t2 =  Date.parse(currentTime) / 60000; //minutes
}

function formula2() {
    if (gender === "0.55" && gramAlcohol2/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart2 >0) {
    valueFormula2 = gramAlcohol2/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart2; 
    }
    else if(gender === "0.68" && gramAlcohol2/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart2 >0) {
    valueFormula1 = gramAlcohol2/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart2;
    } else {
      valueFormula2 = 0; 
    }
  }
  
  //timer three
function startCount3 () {
  reset = 0;
  var currentTime = new Date()
  t3 =  Date.parse(currentTime) / 60000; //minutes
}

function formula3() {
    if (gender === "0.55" && gramAlcohol3/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart3 >0) {
    valueFormula3 = gramAlcohol3/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart3; 
    }
    else if(gender === "0.68" && gramAlcohol3/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart3 >0) {
    valueFormula3 = gramAlcohol3/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart3;
    } else {
      valueFormula3 = 0; 
    }
  }

  //timer four
function startCount4 () {
  reset = 0;
  var currentTime = new Date()
  t4 =  Date.parse(currentTime) / 60000; //minutes
}

function formula4() {
    if (gender === "0.55" && gramAlcohol4/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart4 >0) {
    valueFormula4 = gramAlcohol4/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart4; 
    }
    else if(gender === "0.68" && gramAlcohol4/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart4 >0) {
    valueFormula4 = gramAlcohol4/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart4;
    } else {
      valueFormula4 = 0; 
    }
  }

  //timer five
function startCount5 () {
  reset = 0;
  var currentTime = new Date()
  t5 =  Date.parse(currentTime) / 60000; //minutes
}

function formula5() {
    if (gender === "0.55" && gramAlcohol5/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart5 >0) {
    valueFormula5 = gramAlcohol5/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart5; 
    }
    else if(gender === "0.68" && gramAlcohol5/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart5 >0) {
    valueFormula1 = gramAlcohol5/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart5;
    } else {
      valueFormula5 = 0; 
    }
  }

  //timer six
function startCount6 () {
  reset = 0;
  var currentTime = new Date()
  t6 =  Date.parse(currentTime) / 60000; //minutes
}

function formula6() {
    if (gender === "0.55" && gramAlcohol6/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart6 >0) {
    valueFormula6 = gramAlcohol6/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart6; 
    }
    else if(gender === "0.68" && gramAlcohol6/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart6 >0) {
    valueFormula6 = gramAlcohol6/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart6;
    } else {
      valueFormula6 = 0; 
    }
  }

//timer seven
function startCount7 () {
  reset = 0;
  var currentTime = new Date()
  t7 =  Date.parse(currentTime) / 60000; //minutes
}

function formula7() {
    if (gender === "0.55" && gramAlcohol7/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart7 >0) {
    valueFormula7 = gramAlcohol7/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart7; 
    }
    else if(gender === "0.68" && gramAlcohol7/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart7 >0) {
    valueFormula7 = gramAlcohol7/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart7;
    } else {
      valueFormula7 = 0; 
    }
  }

  //timer eight
function startCount8 () {
  reset = 0;
  var currentTime = new Date()
  t8 =  Date.parse(currentTime) / 60000; //minutes
}

function formula8() {
    if (gender === "0.55" && gramAlcohol8/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart8 >0) {
    valueFormula8 = gramAlcohol8/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart8; 
    }
    else if(gender === "0.68" && gramAlcohol8/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart8 >0) {
    valueFormula8 = gramAlcohol8/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart8;
    } else {
      valueFormula8 = 0; 
    }
  }
  
  //timer nine
function startCount9 () {
  reset = 0;
  var currentTime = new Date()
  t9 =  Date.parse(currentTime) / 60000; //minutes
}

function formula9() {
    if (gender === "0.55" && gramAlcohol9/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart9 >0) {
    valueFormula9 = gramAlcohol9/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart9; 
    }
    else if(gender === "0.68" && gramAlcohol9/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart9 >0) {
    valueFormula9 = gramAlcohol9/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart9;
    } else {
      valueFormula9 = 0; 
    }
  } 
  
  //timer ten
 
function startCount10 () {
  reset = 0;
  var currentTime = new Date()
  t10 =  Date.parse(currentTime) / 60000; //minutes
    alert("After this drink the app will not add an other drink");
}

function formula10() {
        if (gender === "0.55" && gramAlcohol10/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart10 >0) {
    valueFormula10 = gramAlcohol10/(2.135 - 0.02556 * age + 0.08551 * height + 0.2491 * weight) - 0.125 / 60 * timeFromStart10; 
    }
    else if(gender === "0.68" && gramAlcohol10/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart10 >0) {
    valueFormula10 = gramAlcohol10/(2.447 - 0.09516 * age + 0.1074 * height + 0.3362 * weight) - 0.125 / 60 * timeFromStart10;
    } else {
      valueFormula10 = 0; 
    }
  }
  
    
  //reset all                     
  function resetCount() {
    reset = 1;
    alcoholPromillage();
  }       

  function AddToList() { 
    var currentTime = new Date();
    document.getElementById("")
currentTime.toLocaleTimeString().replace(/:(\d{2}) (?=[AP]M)/, " ");

            var x = document.getElementById("listOfDrinks"); 
            amountDrinks.push(1 + amountDrinks.length + type + currentTime.toLocaleTimeString());//Row input
          x.innerHTML = amountDrinks.join("</br>"); 
            
          FunctionShowDrinks();
          ShowSumDrinks();
          addNumberDrinks();
        }

  function myReset() {
            amountDrinks.length = 0;
            var x = document.getElementById("listOfDrinks"); 
            x.innerHTML = "";
            x.innerHTML = amountDrinks.join('<br/>');  
            numberDrinks.length = 0;
            valueFormula1 = 0;
            valueFormula2 = 0;
            valueFormula3 = 0;
            valueFormula4 = 0;
            valueFormula5 = 0;
            valueFormula6 = 0;
            valueFormula7 = 0;
            valueFormula8 = 0;
            valueFormula9 = 0;
            valueFormula10 = 0;
            gramAlcohol1 = 0;
            gramAlcohol2 = 0;
            gramAlcohol3 = 0;
            gramAlcohol4 = 0;
            gramAlcohol5 = 0;
            gramAlcohol6 = 0;
            gramAlcohol7 = 0;
            gramAlcohol8 = 0;
            gramAlcohol9 = 0;
            gramAlcohol10 = 0;
            message = 1;
          
            
           ShowZeroDrinks();
           ShowGreen();
        } 
      
  function getSum(total, num, x) {
    return x + 1;
  	 
}
  var Sum = getSum;

  function FunctionShowDrinks(item) {
    document.getElementById("sumDrinks").innerHTML = numberDrinks.length + 1;
}  

 

//stoplicht systeem
  function colorCircle(Sum) {
     var BACFormula = valueFormula1 + valueFormula2 + valueFormula3 + valueFormula4 + valueFormula5 + valueFormula6 + valueFormula7 + valueFormula8 + valueFormula9 + valueFormula10;
     
  if (BACFormula >= 0.5 && BACFormula <= 0.8) {
    ShowYellow();
  } else if (BACFormula > 0.8) {
    ShowRed();
    //alertTooMuch();
  } else {
    ShowGreen();
  }
   }
    
  //Show circle 
  function ShowYellow() { 
  document.getElementById("yellowCircle").checked = true;
  message = 1;
}
  
  function ShowRed() {    
  document.getElementById("greenCircle").checked = true; //Het klopt dat groen en rood omgedraaid zit
  alertTooMuch();
  message = 0;
  }
    
  function ShowGreen() { 
  document.getElementById("redCircle").checked = true;

  }
  
  
  //Show sum or zero
  function ShowZeroDrinks() { 
document.getElementById("zeroDrinks").style.display = "";
document.getElementById("formulaZero").style.display = "";
document.getElementById("timeTillSoberZero").style.display = "";             document.getElementById("timeTillDriveZero").style.display = "";                  
  
  HideSumOfDrinks();
}
  
  function ShowSumDrinks() { 
document.getElementById("totalSumDrinks").style.display = "";
document.getElementById("showFormula").style.display = ""; 
document.getElementById("showTimeTillSober").style.display = "";             document.getElementById("showTimeTillDrive").style.display = ""; 
                            
  HideZeroDrinks();
} 
  
  function HideSumOfDrinks() {
  document.getElementById("totalSumDrinks").style.display = "none";
  document.getElementById("showFormula").style.display = "none";  
  document.getElementById("showTimeTillSober").style.display = "none";
  document.getElementById("showTimeTillDrive").style.display = "none";  
  }
  
  function HideZeroDrinks() {
  document.getElementById("zeroDrinks").style.display = "none";
  document.getElementById("formulaZero").style.display = "none";
  document.getElementById("timeTillSoberZero").style.display = "none";
  document.getElementById("timeTillDriveZero").style.display = "none";  
}


//Id Page
//Info has been saved
  function ShowSaved() {
  if(gender == "" || age  == "" || weight =="" || Nationality == "" || height == "" || drinkType == "" || driversLicense == "") {
    document.getElementById("hasNotBeenSaved").style.display = "";
    document.getElementById("hasBeenSaved").style.display = "none"
  }
    else {   
      document.getElementById("hasBeenSaved").style.display = "";   
      document.getElementById("hasNotBeenSaved").style.display = "none";
    }
}


//info Page
//rating system
  function changeStar1() {
    document.getElementById("star2").checked = false;
    document.getElementById("star3").checked = false;
    document.getElementById("star4").checked = false;
    document.getElementById("star5").checked = false;
    document.getElementById("rate").innerHTML = 1 + "/5"; 
  }
  function changeStar2() {
    document.getElementById("star1").checked = true
    document.getElementById("star3").checked = false;
    document.getElementById("star4").checked = false;
    document.getElementById("star5").checked = false;
    document.getElementById("rate").innerHTML = 2 + "/5";
  }
  function changeStar3() {
    document.getElementById("star1").checked = true;
    document.getElementById("star2").checked = true;
    document.getElementById("star4").checked = false;
    document.getElementById("star5").checked = false;
    document.getElementById("rate").innerHTML = 3 + "/5";
  }
  function changeStar4() {
    document.getElementById("star1").checked = true;
    document.getElementById("star2").checked = true;
    document.getElementById("star3").checked = true;
    document.getElementById("star5").checked = false;
    document.getElementById("rate").innerHTML = 4 + "/5";
  }
  function changeStar5() {
    document.getElementById("star1").checked = true;
    document.getElementById("star2").checked = true;
    document.getElementById("star3").checked = true;
    document.getElementById("star4").checked = true;
    document.getElementById("rate").innerHTML = 5 + "/5";
  }
  function sendRating() {
    document.getElementById("messageRating").innerHTML = "Thank you for your feed back!";
  }








