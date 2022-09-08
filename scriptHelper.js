// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div./*
   let missionTarget = document.getElementById(missionTarget);
   missionTarget.innerHTML = `
   
       <><h2>Mission Destination</h2><ol>
           <li>Name: ${name}</li>
           <li>Diameter: ${diameter} </li>
           <li>Star: ${star}</li>
           <li>Distance from Earth: ${distance}</li>
           <li>Number of Moons: ${moons}</li>
       </ol> <img src='${imageUrl}'/> ` 
    }
               function validateInput(testInput) { 
               if (testInput === "" || testInput === null || testInput === 0) { 
               return `Empty`
                } else if ((!isNaN(Number(testInput)))) { 
               return `Is a Number`
                 } else { 
               return 'Not a Number'
            }
        }

               function formSubmission (document, list, pilot, copilot, fuelLevel, cargoLevel) {
                   
               let pilotStatus = document.getElementById('pilotStatus');
               let copilotStatus = document.getElementById('copilotStatus');
               let fuelStatus = document.getElementById('fuelStatus');
               let launchStatus = document.getElementById('launchStatus');
               let cargoStatus = document.getElementById('cargoStatus');
               
               if (validateInput(pilot) === `Empty`|| validateInput(copilot) === `Empty`||
               validateInput(fuelLevel) === `Empty`||validateInput(cargoLevel) === `Empty`) {alert(`All fields are required`);
               }
           
           else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {alert(`Please enter values for Fuel Level and Cargo Mass`);
           } else if (validateInput(pilot)===`Is a Number`||validateInput(copilot)===`Is a Number`) {alert('Please do not enter numbers for name of pilot/co-pilot');
             } 

           else { pilotStatus.innerHTML = `${pilot} is ready`;
               copilotStatus.innerHTML = `${copilot} is ready`;
               list.style.visibility = 'hidden';
           }
               if (Number(fuelLevel) < 10000) {fuelStatus.innerHTML = `Check fuel level for journey!`;
               list.style.visibility = 'visible';
               launchStatus.innerHTML = `Shuttle not ready for launch`;
               launchStatus.style.color = `red`;

            } else if (Number(cargoLevel) > 10000) {cargoStatus.innerHTML = `Cargo too heavy for launch`;
               list.style.visibility = `visible`;
               launchStatus.innerHTML = `Shuttle not ready for launch`;
               launchStatus.style.color = `red`;

            } else if (Number(cargoLevel) < 10000 == Number(fuelLevel) > 10000) {list.style.visibility = `visible`;
               fuelStatus.innerHTML = `Fuel Level ready for journey.`;
               cargoStatus.innerHTML = `Cargo loaded and ready for launch.`;
               launchStatus.innerHTML = `Shuttle ready for launch.`;
               launchStatus.style.color = `green`;
               
        }
    }
        

               async function myFetch() {let planetsReturned;

               planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) { 
               return response.json()

               });
               return planetsReturned;
            }
               function pickPlanet(planets) {let idx = Math.floor(Math.random() * planets.length);
               return planets[idx];
               }

               module.exports.addDestinationInfo = addDestinationInfo;
               module.exports.validateInput = validateInput;
               module.exports.formSubmission = formSubmission;
               module.exports.pickPlanet = pickPlanet;
               module.exports.myFetch = myFetch;
            
