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

    parkCar: function(newCar) {
        this.parkingSpaces.push(newCar);
        this.numberOfCars++;
    },

    removeCar: function(positionInArray) {
        this.parkingSpaces.splice(positionInArray, 1);
        this.numberOfCars--;
    },
}


parkCar = () => {
    console.log("Function: parkCar");
    let brand = prompt("PARK A CAR\nBrand");
    let model = prompt("PARK A CAR\nModel");
    let plateNumber = prompt("PARK A CAR\nPlatenumber");
    let color = prompt("PARK A CAR\nColor");
    let parkingSpace = prompt("PARK A CAR\nParkingspace position");

    //checks so the position is valid
    parkingSpace = positionCheck(parkingSpace);

    //adds the car to the garage
    garage.parkCar(new Car(brand, model, plateNumber, color, parkingSpace));
}


sortingTheGarageAfterParkingspacePosition = (allParkedCars) => {
    console.log("Function: sortingTheGarageAfterParkingspacePosition")
    allParkedCars.sort(function(a, b){return a.parkingSpace - b.parkingSpace});
}


positionCheck = (input) => {
    console.log("Function: positionCheck");
    //checks if the position is a positive number
    if(Math.sign(input) != 1) {
        input = prompt('PARKING SPACE NEEDS TO BE A POSITIVE NUMBER\nWhat parking space do you want to park the car in (positive number)');
        input = positionCheck(input);
    }

    //checks if the space is occupied and informs the user what spaces are occupied
    let freeSpaces = "";
    for(let i in garage.parkingSpaces) {
        freeSpaces += garage.parkingSpaces[i].parkingSpace + ", ";
    }

    for(let i in garage.parkingSpaces) {
        if(input == garage.parkingSpaces[i].parkingSpace) {
            input = prompt(`PARKING SPACE IS ALREADY OCCUPIED\n${freeSpaces} are all occupied\nWhat parking space do you want to park the car in (positive number)`);
            input = positionCheck(input);
        }
    }
    return input;
}


showParkedCars = () => {
    console.log("Function: showParkedCars");
    let allParkedCars = "";
    for(let i in garage.parkingSpaces) {
        allParkedCars += garage.parkingSpaces[i].present();
    }
    document.getElementById("textArea").innerHTML = allParkedCars;
}


removedParkedCars = () => {
    console.log("Function: removeParkedCars");
    let remove = prompt("REMOVE\nremove the car in parkingspace");
    for(let i in garage.parkingSpaces) {
        if(remove == garage.parkingSpaces[i].parkingSpace) {
            garage.removeCar(i);
        }
    }
}


menu = () => {
    console.log("Function: menu");
    while(runMenu) {
        menuChoice = prompt('MENU\ntype "park" to park a new car\ntype "show" to show all parked cars\ntype "remove" to remove a car\ntype "exit" to exit');
        switch(menuChoice) {
            case "park":
                parkCar();
                break;
            case "show":
                //sorts the garage
                sortingTheGarageAfterParkingspacePosition(garage.parkingSpaces);
                showParkedCars();
                runMenu = false;
                break;
            case "remove":
                sortingTheGarageAfterParkingspacePosition(garage.parkingSpaces);
                removedParkedCars();
                break;
            case "exit":
                console.log("Exit menu");
                //stops the while loop
                runMenu = false;
                break;
            default:
                console.log("Menu default value");
                break;
        }
    }
}


startScript = () => {
    console.log("Function: startScript")
    runMenu = true;
    menu();
    console.log("Exit startScript")
}


let runMenu = true;
let menuChoice = "";