window.addEventListener("load", function ()
 {
  let counter = 0;

   function buttonClicked()
     {
       counter++;
       
       let clickedCounterElement = document.getElementById("clickcounter");

       clickedCounterElement.innerHTML = "Clicked " + counter + "times";
     }

   let clickedbuttonElement = document.getElementById("clickbutton");

   clickedbuttonElement.addEventListener("click", buttonClicked);
});