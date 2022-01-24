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

    // parkCar: function() {
    //     console.log("Method: parkCar");
    //     brand = ""
    //     model = ""
    //     plateNumber = ""
    //     color = ""
    //     while(brand === "") {
    //         brand = prompt("PARK A CAR\nWhat Brand");
    //     }
    //     while(model === "") {
    //         model = prompt("PARK A CAR\nWhat Model");
    //     }
    //     while(plateNumber === "") {
    //         plateNumber = prompt("PARK A CAR\nWhat Platenumber");
    //     }
    //     while(color === "") {
    //         color = prompt("PARK A CAR\nWhat Color");
    //     }
    //     parkingspot = prompt("PARK A CAR\nPick a free parkingspot");
    
    //     //checks so the position is valid
    //     parkingspot = this.parkingCheck(parkingspot);

    //     // change the parkingspot to red in the grid
    //     this.changeToRed(parkingspot);
    
    //     //adds the car to the garage
    //     this.parkingspots.push(new Car(brand, model, plateNumber, color, parkingspot));
        
    //     this.sortGarage();
    // },

    parkCarInSpot: function(parkingspot) {
        console.log("Method: parkCarInSpot");
        parkingspot++;
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

    // parkingCheck: function(parkingspot) {
    //     console.log("Method: parkingCheck");
    //     //checks if the position is a positive number and between 1-14
    //     while(Math.sign(parkingspot) != 1 || parkingspot > 14) {
    //         parkingspot = prompt('PARKINGSPOT NEED TO BE A POSITIVE NUMBER\nWhat parkingspot do you want to park the car in (1-14)');
    //     }
    
    //     //checks if the spot is occupied and informs the user what spots are occupied
    //     freespots = ""
    //     for(let i in this.parkingspots) {
    //         freespots += this.parkingspots[i].parkingspot + ", ";
    //     }
        
    //     for(let i in this.parkingspots) {
    //         if(parkingspot == this.parkingspots[i].parkingspot) {
    //             parkingspot = prompt(`PARKINGSPOT IS ALREADY OCCUPIED\n${freespots} are all occupied\nWhat parking spot do you want to park the car in (1-14)`);
    //             parkingspot = this.parkingCheck(parkingspot);
    //         }
    //     }
    //     return parkingspot;
    // },

    sortGarage: function() {
        console.log("Method: sortingTheGarage")
        this.parkingspots.sort(function(a, b){return a.parkingspot - b.parkingspot});
    },

    // unparkCar: function() {
    //     console.log("Method: unparkCar");
    //     parkingspot = prompt("UNPARK A CAR\nRemove the car in parkingspot");
    //     for(let i in this.parkingspots) {
    //         if(parkingspot == this.parkingspots[i].parkingspot) {
    //             this.parkingspots.splice(i, 1);
    //         }
    //     }
    //     // change the parkingspot to grey in the grid
    //     this.changeToGrey(parkingspot);
    // },

    unparkCarInSpot: function(parkingspot) {
        console.log("Method: unparkCarInSpot");
        parkingspot++;

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

    changeToRed: function(parkingspot) {
        console.log("Method: changeToRed");
        document.getElementById("pos" + parkingspot).style.backgroundColor = "rgb(105, 0, 0)";
    },

    changeToGrey: function(parkingspot) {
        console.log("Method: changeToGray");
        document.getElementById("pos" + parkingspot).style.backgroundColor = "rgb(95, 95, 95)";
    },

    clearOutput: function() {
        document.getElementById("output").innerHTML = "";
    }
}


document.getElementById("park-car").addEventListener("click", function() {
    garage.parkCar();
    garage.clearOutput();
})

document.getElementById("unpark-car").addEventListener("click", function() {
    garage.unparkCar();
    garage.clearOutput();
})

document.getElementById("get-info").addEventListener("click", function() {
    garage.showCarInSpot();
})


//park a car on hover-click
let positionPark = [];
for(i = 0; i < 14; i++) {
    positionPark[i] = document.querySelector(`div#pos${i+1} > div > button:first-child`);
}

positionPark[0].addEventListener("click", function() {
    garage.parkCarInSpot(0)
})

positionPark[1].addEventListener("click", function() {
    garage.parkCarInSpot(1)
})

positionPark[2].addEventListener("click", function() {
    garage.parkCarInSpot(2)
})

positionPark[3].addEventListener("click", function() {
    garage.parkCarInSpot(3)
})

positionPark[4].addEventListener("click", function() {
    garage.parkCarInSpot(4)
})

positionPark[5].addEventListener("click", function() {
    garage.parkCarInSpot(5)
})

positionPark[6].addEventListener("click", function() {
    garage.parkCarInSpot(6)
})

positionPark[7].addEventListener("click", function() {
    garage.parkCarInSpot(7)
})

positionPark[8].addEventListener("click", function() {
    garage.parkCarInSpot(8)
})

positionPark[9].addEventListener("click", function() {
    garage.parkCarInSpot(9)
})

positionPark[10].addEventListener("click", function() {
    garage.parkCarInSpot(10)
})

positionPark[11].addEventListener("click", function() {
    garage.parkCarInSpot(11)
})

positionPark[12].addEventListener("click", function() {
    garage.parkCarInSpot(12)
})

positionPark[13].addEventListener("click", function() {
    garage.parkCarInSpot(13)
})


//unpark a car on hover-click
let positionUnpark = [];
for(i = 0; i < 14; i++) {
    positionUnpark[i] = document.querySelector(`div#pos${i+1} > div > button:nth-child(2)`);
}

positionUnpark[0].addEventListener("click", function() {
    garage.unparkCarInSpot(0)
})

positionUnpark[1].addEventListener("click", function() {
    garage.unparkCarInSpot(1)
})

positionUnpark[2].addEventListener("click", function() {
    garage.unparkCarInSpot(2)
})

positionUnpark[3].addEventListener("click", function() {
    garage.unparkCarInSpot(3)
})

positionUnpark[4].addEventListener("click", function() {
    garage.unparkCarInSpot(4)
})

positionUnpark[5].addEventListener("click", function() {
    garage.unparkCarInSpot(5)
})

positionUnpark[6].addEventListener("click", function() {
    garage.unparkCarInSpot(6)
})

positionUnpark[7].addEventListener("click", function() {
    garage.unparkCarInSpot(7)
})

positionUnpark[8].addEventListener("click", function() {
    garage.unparkCarInSpot(8)
})

positionUnpark[9].addEventListener("click", function() {
    garage.unparkCarInSpot(9)
})

positionUnpark[10].addEventListener("click", function() {
    garage.unparkCarInSpot(10)
})

positionUnpark[11].addEventListener("click", function() {
    garage.unparkCarInSpot(11)
})

positionUnpark[12].addEventListener("click", function() {
    garage.unparkCarInSpot(12)
})

positionUnpark[13].addEventListener("click", function() {
    garage.unparkCarInSpot(13)
})


//shows the buttons on hover
let allParkingSpots = document.querySelectorAll("div[id*= pos]");
let btnGroup = document.querySelectorAll(".btn-group");

for(let i in allParkingSpots) {
    allParkingSpots[i].addEventListener("mouseover", function() {
        btnGroup[i].style.visibility="visible"
    })

    allParkingSpots[i].addEventListener("mouseout", function() {
        btnGroup[i].style.visibility="hidden"
    })
}