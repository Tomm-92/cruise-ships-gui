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
    const itinerary = this.itinerary
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort)
    const length = itinerary.ports.length
    console.log(length)

    if (currentPortIndex >= (itinerary.ports.length -1)) {
        throw new Error('End of itinerary reached');
    }
         
    this.previousPort = this.currentPort
    this.currentPort = null;
    } 


dock() {
    const itinerary = this.itinerary
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort)
    this.currentPort = itinerary.ports[previousPortIndex + 1];
    //console.log(`The ship has docked in ${itinerary.ports[1]}`)
}

}

module.exports = cruiseShip