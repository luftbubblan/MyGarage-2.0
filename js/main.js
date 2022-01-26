class Car {
    constructor (brand, model, plateNumber, color, parkingspot) {
        this.brand = brand;
        this.model = model;
        this.plateNumber = plateNumber;
        this.color = color;
        this.parkingspot = parkingspot;
    }
    

    present() {
        return `Parkingspot: ${this.parkingspot}<br>Brand: ${this.brand}<br>Model: ${this.model}<br>Color: ${this.color}<br>Platenumber: ${this.plateNumber}<br><br>`;
    }
}


let garage = {
    parkingspots: [],

    parkCarInSpot: function(parkingspot) {
        console.log("Method: parkCarInSpot");
        //checks so the position is unoccupied
        for(let i in this.parkingspots) {
            if(parkingspot == this.parkingspots[i].parkingspot) {
                document.getElementById("output").innerHTML = "This parkingspot is already taken";
                return;
            }
        }

        //start the parking inputs
        brand = ""
        model = ""
        plateNumber = ""
        color = ""
        while(brand === "") {
            brand = prompt("PARK A CAR\nWhat Brand");
        }
        while(model === "") {
            model = prompt("PARK A CAR\nWhat Model");
        }
        while(plateNumber === "") {
            plateNumber = prompt("PARK A CAR\nWhat Platenumber");
        }
        while(color === "") {
            color = prompt("PARK A CAR\nWhat Color");
        }

        // change the parkingspot to red in the grid
        this.changeToRed(parkingspot);
    
        //adds the car to the garage
        this.parkingspots.push(new Car(brand, model, plateNumber, color, parkingspot));
        
        document.getElementById("output").innerHTML = `Your car is parked in parkingspot ${parkingspot}`;
        
        this.sortGarage();
    },

    sortGarage: function() {
        console.log("Method: sortingTheGarage")
        this.parkingspots.sort(function(a, b){return a.parkingspot - b.parkingspot});
    },

    unparkCarInSpot: function(parkingspot) {
        console.log("Method: unparkCarInSpot");
        for(let i in this.parkingspots) {
            //if true unpark the car in the spot
            if(parkingspot == this.parkingspots[i].parkingspot) {
                this.parkingspots.splice(i, 1);
                // change the parkingspot to grey in the grid
                this.changeToGrey(parkingspot);

                document.getElementById("output").innerHTML = `The car in parkingspot ${parkingspot} is unparked`;
                return
            }
        }
        //else prints no car in the spot
        document.getElementById("output").innerHTML = "There is no car in this parkingspot";
    },

    showCarInSpot: function(parkingspot) {
        console.log("Method: showCarInSpot");

        message = this.spotCheck(parkingspot);

        document.getElementById("output").innerHTML = message;
    },

    spotCheck: function(parkingspot) {
        console.log("Method: spotCheck");
        //checks if the position is a positive number and between 1-14
        while(Math.sign(parkingspot) != 1  || parkingspot > 14 || parkingspot < 1) {
            parkingspot = prompt('SHOW CAR\nThe parkingspot need to be a positive number\nWhat car do you want to show (1-14)');
        }

        // returns the information of the car if the parking spot is pressent(occupied) in the array
        for(let i in this.parkingspots) {
            if(parkingspot == this.parkingspots[i].parkingspot) {
                return this.parkingspots[i].present();
            } 
        }
        // return a message if the parking spot is not pressent(occupied) in the array
        return "There is no car parked in parkingspot " + parkingspot;
    },

    changeToRed: function(parkingspot) {
        console.log("Method: changeToRed");
        document.getElementById("pos" + parkingspot).style.backgroundColor = "rgb(105, 0, 0)";
    },

    changeToGrey: function(parkingspot) {
        console.log("Method: changeToGray");
        document.getElementById("pos" + parkingspot).style.backgroundColor = "rgb(95, 95, 95)";
    }
}


let allParkingSpots = document.querySelectorAll("div[id*= pos]");
let btnGroup = document.querySelectorAll(".btn-group");
let position = [];

for(let i = 0; i < 14; i++) {
    //shows the buttons
    allParkingSpots[i].addEventListener("mouseover", function() {
        btnGroup[i].style.visibility="visible"
    })
    //hiddes the buttons
    allParkingSpots[i].addEventListener("mouseout", function() {
        btnGroup[i].style.visibility="hidden"
    })

    //park a car on click
    position[i] = document.querySelector(`div#pos${i+1} > div > button:first-child`);

    position[i].addEventListener("click", function(e) {
        let positionNumber = e.target.parentNode.parentNode.innerText
        positionNumber = positionNumber[0];
        garage.parkCarInSpot(positionNumber);
    })

    //unpark a car on click
    position[i] = document.querySelector(`div#pos${i+1} > div > button:nth-child(2)`);

    position[i].addEventListener("click", function(e) {
        let positionNumber = e.target.parentNode.parentNode.innerText
        positionNumber = positionNumber[0];
        garage.unparkCarInSpot(positionNumber)
    })

    //show info of a car on click
    position[i] = document.querySelector(`div#pos${i+1} > div > button:last-child`);

    position[i].addEventListener("click", function(e) {
        let positionNumber = e.target.parentNode.parentNode.innerText
        positionNumber = positionNumber[0];
        garage.showCarInSpot(positionNumber)
    })
}