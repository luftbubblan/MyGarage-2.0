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
    numberOfCars: 0,
    parkingspots: [],
    


    removeCar: function(positionInArray) {
        console.log("Method: removeCar");
        this.parkingspots.splice(positionInArray, 1);
        this.numberOfCars--;
    },

    sortGarage: function() {
        console.log("Method: sortingTheGarage")
        this.parkingspots.sort(function(a, b){return a.parkingspot - b.parkingspot});
    },

    unparkCar: function() {
        console.log("Method: unparkCar");
        parkingspot = prompt("UNPARK A CAR\nRemove the car in parkingspot");
        for(let i in this.parkingspots) {
            if(parkingspot == this.parkingspots[i].parkingspot) {
                this.removeCar(i);
            }
        }
        // change the parkingspot to grey in the grid
        this.changeToGrey(parkingspot);
    },

    showCarInSpot: function() {
        console.log("Method: showCarInspot");
        parkingspot = prompt("SHOW CAR\nShow the car in parkingspot");

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

    parkCar: function() {
        console.log("Method: parkCar");
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
        parkingspot = prompt("PARK A CAR\nPick a free parkingspot");
    
        //checks so the position is valid
        parkingspot = this.parkingCheck(parkingspot);

        // change the parkingspot to red in the grid
        this.changeToRed(parkingspot);
    
        //adds the car to the garage
        this.parkingspots.push(new Car(brand, model, plateNumber, color, parkingspot));
        this.numberOfCars++;
    },

    parkingCheck: function(parkingspot) {
        console.log("Method: parkingCheck");
        //checks if the position is a positive number and between 1-14
        while(Math.sign(parkingspot) != 1 || parkingspot > 14) {
            parkingspot = prompt('PARKINGSPOT NEED TO BE A POSITIVE NUMBER\nWhat parkingspot do you want to park the car in (1-14)');
        }
    
        //checks if the spot is occupied and informs the user what spots are occupied
        freespots = ""
        for(let i in this.parkingspots) {
            freespots += this.parkingspots[i].parkingspot + ", ";
        }
        
        for(let i in this.parkingspots) {
            if(parkingspot == this.parkingspots[i].parkingspot) {
                parkingspot = prompt(`PARKINGSPOT IS ALREADY OCCUPIED\n${freespots} are all occupied\nWhat parking spot do you want to park the car in (1-14)`);
                parkingspot = this.parkingCheck(parkingspot);
            }
        }
        return parkingspot;
    },

    changeToRed: function(parkingspot) {
        console.log("Method: changeToRed");
        document.getElementById("pos" + parkingspot).style.backgroundColor = "red";
    },

    changeToGrey: function(parkingspot) {
        console.log("Method: changeToGray");
        document.getElementById("pos" + parkingspot).style.backgroundColor = "gray";
    },

    clearOutput: function() {
        document.getElementById("output").innerHTML = "";
    }
}


document.getElementById("park-car").addEventListener("click", function() {
    garage.parkCar();
    garage.sortGarage();
    garage.clearOutput();
})

document.getElementById("unpark-car").addEventListener("click", function() {
    garage.unparkCar();
    garage.clearOutput();
})

document.getElementById("get-info").addEventListener("click", function() {
    garage.showCarInSpot();
})