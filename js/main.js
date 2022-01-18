class Car {
    constructor (brand, model, plateNumber, color, parkingSpace) {
        this.brand = brand;
        this.model = model;
        this.plateNumber = plateNumber;
        this.color = color;
        this.parkingSpace = parkingSpace;
    }
    

    present() {
        return `Parkingspace: ${this.parkingSpace}<br>Brand: ${this.brand}<br>Model: ${this.model}<br>Color: ${this.color}<br>Platenumber: ${this.plateNumber}<br>--------------------<br>`;
    }
}


let garage = {
    numberOfCars: 0,
    parkingSpaces: [],
    brand: "",
    model: "",
    plateNumber: "",
    color: "",
    parkingSpace: 0,


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
        let remove = prompt("REMOVE\nremove the car in parkingspace");
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
        this.brand = prompt("PARK A CAR\nBrand");
        this.model = prompt("PARK A CAR\nModel");
        this.plateNumber = prompt("PARK A CAR\nPlatenumber");
        this.color = prompt("PARK A CAR\nColor");
        this.parkingSpace = prompt("PARK A CAR\nParkingspace position");
    
        //checks so the position is valid
        this.positionCheck();
    
        //adds the car to the garage
        this.parkingSpaces.push(new Car(this.brand, this.model, this.plateNumber, this.color, this.parkingSpace));
        this.numberOfCars++
    },

    positionCheck: function() {
        console.log("Method: positionCheck");
        //checks if the position is a positive number
        if(Math.sign(this.parkingSpace) != 1) {
            this.parkingSpace = prompt('PARKING SPACE NEEDS TO BE A POSITIVE NUMBER\nWhat parking space do you want to park the car in (positive number)');
            this.positionCheck();
        }
    
        //checks if the space is occupied and informs the user what spaces are occupied
        let freeSpaces = ""
        for(let i in this.parkingSpaces) {
            console.log("running freespaces")
            freeSpaces += this.parkingSpaces[i].parkingSpace + ", ";
        }
        
        for(let i in this.parkingSpaces) {
            console.log("running occupied")
            if(this.parkingSpace == this.parkingSpaces[i].parkingSpace) {
                console.log("occupied if true")
                this.parkingSpace = prompt(`PARKING SPACE IS ALREADY OCCUPIED\n${freeSpaces} are all occupied\nWhat parking space do you want to park the car in (positive number)`);
                this.positionCheck();
            }
        }
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