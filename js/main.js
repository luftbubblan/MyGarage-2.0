class Car {
    constructor (brand, model, plateNumber, color, parkingSpace) {
        this.brand = brand;
        this.model = model;
        this.plateNumber = plateNumber;
        this.color = color;
        this.parkingSpace = parkingSpace;
    }
    
    present() {
        return `Parkingspace: ${this.parkingSpace}\nBrand: ${this.brand}\nModel: ${this.model}\nColor: ${this.color}\nPlatenumber: ${this.plateNumber}`;
    }
}


let garage = {
    numberOfCars: 0,
    parkingSpace: [],

    parkCar: function(newCar) {
        this.parkingSpace.push(newCar);
        this.numberOfCars++;
        return newCar;
    },
}


parkCar = () => {
    let brand = prompt("PARK A CAR\nBrand");
    let model = prompt("PARK A CAR\nModel");
    let plateNumber = prompt("PARK A CAR\nPlatenumber");
    let color = prompt("PARK A CAR\nColor");
    let parkingSpace = prompt("PARK A CAR\nParkingspace position");

    //checks so the position is valid
    parkingSpace = positionCheck(parkingSpace);

    //adds the car to the garage
    garage.parkCar(new Car(brand, model, plateNumber, color, parkingSpace));

    //sorts the garage
    sortingTheGarageAfterParkingspacePosition(garage.parkingSpace);
}


sortingTheGarageAfterParkingspacePosition = (allParkedCars) => {
    // console.log("sorting");
    allParkedCars.sort(function(a, b){return a.parkingSpace - b.parkingSpace});
}


positionCheck = (input) => {
    //checks if the position is a positive number
    if(Math.sign(input) != 1) {
        input = prompt('PARKING SPACE NEEDS TO BE A POSITIVE NUMBER\nWhat parking space do you want to park the car in (positive number)');
        input = positionCheck(input);
    }

    //checks if the space is occupied and informs the user what spaces are occupied
    let freeSpaces = "";
    for(let i in garage.parkingSpace) {
        freeSpaces += garage.parkingSpace[i].parkingSpace + ", ";
    }

    for(let i in garage.parkingSpace) {
        if(input == garage.parkingSpace[i].parkingSpace) {
            input = prompt(`PARKING SPACE IS ALREADY OCCUPIED\n${freeSpaces} are all occupied\nWhat parking space do you want to park the car in (positive number)`);
            input = positionCheck(input);
        }
    }
    return input;
}


showParkedCars = () => {
    for(let i in garage.parkingSpace) {
        alert(`SHOW PARKED CARS\n${garage.parkingSpace[i].present()}`);
    }
}


menu = () => {
    while(runMenu) {
        menuChoice = prompt('MENU\ntype "park" to park a new car\ntype "show" to show all parked cars\ntype "exit" to exit');
        switch(menuChoice) {
            case "park":
                console.log("park a car");
                parkCar();
                break;
            case "show":
                console.log("show all cars");
                showParkedCars();
                break;
            case "exit":
                console.log("exit");
                runMenu = false;
                break;
            default:
                console.log("Menu default");
                break;
        }
    }
}

let runMenu = true;
let menuChoice = "";
menu();