const Port = require('../src/Port');

class cruiseShip {
    constructor(itinerary) {
    this.itinerary = itinerary
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    //this.passengers = 0;
    //this.startingPort = port;
}

setSail() {
    this.previousPort = this.currentPort
    this.currentPort = null;
    } 


dock() {
    const itinerary = this.itinerary
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort)
    console.log(previousPortIndex)
    //this.currentPort = this.itinerary.ports[1]
    //console.log(`The ship has docked in ${itinerary.ports[1]}`)
}

}

module.exports = cruiseShip