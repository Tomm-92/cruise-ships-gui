const Port = require('../src/Port');

class cruiseShip {
    constructor(port) {
    this.startingPort = port;
    this.currentPort = port;
    this.previousPort = null;
    this.passengers = 0;
}

setSail() {
    this.previousPort = this.currentPort
    this.currentPort = null;
    } 


dock(portName) {
    this.currentPort = portName
    console.log(`The ship has docked in ${portName}`)
}

}

module.exports = cruiseShip