const cruiseShip = require('../src/cruiseShip');

class Port {
    constructor(name, ships=[]) {
        this.name = name
        this.ships = ships
    }

addShip(ship) {
this.ships.push(ship)
}

removeShip(ship) {
    const index = this.ships.indexOf(ship)
    if (index !== -1) {
        this.ships.splice(index, 1);
      }

    //this.ships.pop()
}


}

module.exports = Port