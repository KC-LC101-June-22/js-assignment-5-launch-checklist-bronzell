// Write your JavaScript code here!

const { myFetch, formSubmission, addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    const form = this.document.querySelector("form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel").value;
        let cargoLevel = document.querySelector("input[name=cargoMass").value;
        let list = document.getElementById('faultyItems');

        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {        
    listedPlanets = result;  
           console.log(listedPlanets); 
     })
     .then(function() {
        console.log(listedPlanets);
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moon = planet.moon;
        let imageUr1 = planet.imageUr1;
        addDestinationInfo(document,name,moon,star,distance,diameter,imageUr1);
     })
  });
                    
                   
                        