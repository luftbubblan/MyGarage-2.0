class Car {
    constructor (brand, model, plateNumber, color, parkingSpace) {
        this.brand = brand;
        this.model = model;
        this.plateNumber = plateNumber;
        this.color = color;
        this.parkingSpace = parkingSpace;
    }
    
    present() {
        return `Parkingspace:${this.parkingSpace}\nBrand:${this.brand}\nModel:${this.model}\nColor:${this.color}\nPlatenumber:${this.plateNumber}`;
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
    let brand = prompt("PARK A CAR\nBrand")
    let model = prompt("PARK A CAR\nModel")
    let platenumber = prompt("PARK A CAR\nPlatenumber")
    let color = prompt("PARK A CAR\nColor")
    let position = prompt("PARK A CAR\nParkingspace position")
    
    garage.parkCar(new Car(brand, model, platenumber, color, position));
}


showParkedCars = () => {
    for(let i in garage.parkingSpace) {
        alert(`SHOW PARKED CARS\n${garage.parkingSpace[i].present()}`)
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
                console.log("Menu default")
                break;
        }
    }
}

let runMenu = true;
let menuChoice = "";
menu();