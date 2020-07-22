window.addEventListener("load",function(){
   let form = document.querySelector("form");

   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
      response.json().then(function(json){
         let div = document.getElementById('missionTarget');
         div.innerHTML=`<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">`;
      });
      });
      

      
   

   form.addEventListener("submit", function(event) {
      
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector('input[name=copilotName]');
      let fuel = document.querySelector('input[name=fuelLevel]');
      let cargo = document.querySelector('input[name=cargoMass]');
      
      
      if (pilotName.value === "" || coPilotName.value === "" || fuel.value === '' || cargo.value==='') {
         alert("All fields are required!");
         event.preventDefault();
      }
      
      if (isNaN(fuel.value) === true) {
         alert('Fuel is not a number');
         event.preventDefault();
      }
      
      if (isNaN(cargo.value)===true){
         alert('Cargo is not a number');
         event.preventDefault();
      }

      if (isNaN(pilotName.value)===false){
         alert('name must be a string');
         event.preventDefault();
      }
      if (isNaN(coPilotName.value)===false){
         alert('name must be a string');
         event.preventDefault();
      }

      if (isNaN(pilotName.value)===true && isNaN(coPilotName.value)===true && isNaN(fuel.value)===false && isNaN(cargo.value)===false){
         document.getElementById('pilotStatus').innerHTML=`Pilot ${pilotName.value} is ready for launch.`;
         document.getElementById('copilotStatus').innerHTML=`Co-Pilot ${coPilotName.value} is ready for launch`;
      

            if ((fuel.value)<10000){
               document.getElementById('faultyItems').style.visibility='visible';
               document.getElementById('fuelStatus').innerHTML=`Fuel level is too low to launch.`;
               document.getElementById('launchStatus').innerHTML=`Shuttle not ready for launch.`;
               document.getElementById('launchStatus').style.color='red';
               event.preventDefault();
            }
            
            if ((cargo.value)>10000){
               document.getElementById('faultyItems').style.visibility='visible';
               document.getElementById('cargoStatus').innerHTML=`Cargo level is too high to launch.`;
               document.getElementById('launchStatus').innerHTML=`Shuttle not ready for launch.`;
               document.getElementById('launchStatus').style.color='red';
               event.preventDefault();
            }

            if (fuel.value>=10000 && cargo.value<=10000){
               document.getElementById('launchStatus').style.color='green';
               document.getElementById('launchStatus').innerHTML=`Shuttle is ready for launch.`;
               document.getElementById('faultyItems').style.visibility='visible';
               event.preventDefault();
            } 
      }
   });
   


});





// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
