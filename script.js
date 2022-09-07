// Write your JavaScript code here!

const { myFetch, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    const form = this.document.querySelector("form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let pilot = this.document.querySelector("input[name=pilotName]").value;
        let copilot = this.document.querySelector("input[name=copilotName").value;
        let fuelLevel = this.document.querySelector("input[name=fuelLevel").value;
        let cargoLevel = this.document.querySelector("input[name=cargoMass").value;
        let list = this.document.getElementById('faultyItems');

        formSubmission(this.document,list,pilot,copilot,fuelLevel,cargoLevel);
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (response) {response.json().then(function (listedPlanets) {          
       let index = Math.floor(Math.random() * (listedPlanets.length));
           console.log(myFetch());
           console.log(typeof jsonObject);
           console.log(listedPlanets); 
     })
  });
       preventDefault();
       return listedPlanets;
  });
                    
                   
                        