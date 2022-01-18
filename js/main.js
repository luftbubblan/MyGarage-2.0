class Car {
    constructor (brand, model, plateNumber, color, parkingSpace) {
        this.brand = brand;
        this.model = model;
        this.plateNumber = plateNumber;
        this.color = color;
        this.parkingSpace = parkingSpace;
    }
    

    present() {
        return `Parkingspace: ${this.parkingSpace}<br>Brand: ${this.brand}<br>Model: ${this.model}<br>Color: ${this.color}<br>Platenumber: ${this.plateNumber}<br><br>`;
    }
}


let garage = {
    numberOfCars: 0,
    parkingSpaces: [],
    


    removeCar: function(positionInArray) {
        console.log("Method: removeCar");
        this.parkingSpaces.splice(positionInArray, 1);
        this.numberOfCars--;
    },

    sortGarage: function() {
        console.log("Method: sortingTheGarage")
        this.parkingSpaces.sort(function(a, b){return a.parkingSpace - b.parkingSpace});
    },

    unparkCar: function() {
        console.log("Method: unparkCar");
        let remove = prompt("UNPARK A CAR\nremove the car in parkingspace");
        for(let i in this.parkingSpaces) {
            if(remove == this.parkingSpaces[i].parkingSpace) {
                this.removeCar(i);
            }
        }

    },

    showParkedCars: function() {
        console.log("Method: showParkedCars");
        let allParkedCars = "";
            for(let i in this.parkingSpaces) {
            allParkedCars += this.parkingSpaces[i].present();
        }
        document.getElementById("output").innerHTML = allParkedCars;
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
        parkingSpace = prompt("PARK A CAR\nPick a free parkingspace");
    
        //checks so the position is valid
        parkingSpace = this.positionCheck(parkingSpace);
    
        //adds the car to the garage
        this.parkingSpaces.push(new Car(brand, model, plateNumber, color, parkingSpace));
        this.numberOfCars++
    },

    positionCheck: function(parkingSpace) {
        console.log("Method: positionCheck");
        //checks if the position is a positive number
        if(Math.sign(parkingSpace) != 1) {
            parkingSpace = prompt('PARKING SPACE NEEDS TO BE A POSITIVE NUMBER\nWhat parking space do you want to park the car in (1-14)');
            parkingSpace = this.positionCheck(parkingSpace);
        }

        if(parkingSpace > 14) {
            parkingSpace = prompt('THE GARAGE ONLY HAS 14 PARKINGSPACES\nParkingspace position 1-14');
            parkingSpace = this.positionCheck(parkingSpace);
        }
    
        //checks if the space is occupied and informs the user what spaces are occupied
        let freeSpaces = ""
        for(let i in this.parkingSpaces) {
            freeSpaces += this.parkingSpaces[i].parkingSpace + ", ";
        }
        
        for(let i in this.parkingSpaces) {
            if(parkingSpace == this.parkingSpaces[i].parkingSpace) {
                parkingSpace = prompt(`PARKING SPACE IS ALREADY OCCUPIED\n${freeSpaces} are all occupied\nWhat parking space do you want to park the car in (1-14)`);
                parkingSpace = this.positionCheck(parkingSpace);
            }
        }
        return parkingSpace;
    }
}


parkACar = () => {
    garage.parkCar();
    garage.sortGarage();
    garage.showParkedCars();
}


unparkACar = () => {
    garage.unparkCar();
    garage.showParkedCars();
}