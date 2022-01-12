class Car {
    constructor (brand, model, plateNumber, color, parkingSpace) {
        this.brand = brand;
        this.model = model;
        this.plateNumber = plateNumber;
        this.color = color;
        this.parkingSpace = parkingSpace;
    }
    
    present() {
        return `The car in parkingspace ${this.parkingSpace} are a ${this.color} ${this.brand} ${this.model} with platenumber ${this.plateNumber}`;
    }
}

let garage = {
    numberOfCars: 0,
}

let parkingSpace = [];

let brand = prompt("Brand")
let model = prompt("Model")
let platenumber = prompt("Platenumber")
let color = prompt("Color")
let position = prompt("Parkingspace position")

parkingSpace.push(new Car(brand, model, platenumber, color, position));

for(let i in parkingSpace) {
    alert(parkingSpace[i].present())
}
