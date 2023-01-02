/* globals describe it expect */
const cruiseShip = require('../src/cruiseShip');
const Port = require('../src/Port');

describe('cruiseShip constuctor', () => {
    it('creates an instance of a ship as an object', () => {
    expect(new cruiseShip()).toBeInstanceOf(Object);
});
it('sets the port property of the ship', () => {
    const port = new Port('Rotterdam')
    const ship = new cruiseShip(port)
    expect(ship.startingPort).toBe(port);

});

it('sets the preivous port property of the ship to null', () => {
    const port = new Port('Rotterdam')
    const ship = new cruiseShip(port)
    expect(ship.previousPort).toBe(null);

});



it('sets the initial number of passengers on the ship to 0', () => {
    const port = new Port('Amsterdam')
    const ship = new cruiseShip(port)
    expect(ship.passengers).toEqual(0);
    })
});

describe('setSail', () => {
    it('changes the starting port to at sea', () => {
    const port = new Port('Cartagena')
    const ship = new cruiseShip(port)
    ship.setSail()
    expect(ship.currentPort).toBeFalsy();
});
});

describe('dock', () => {
    it('allows the ship to dock at a different port', () => {
    const port = new Port('Cartagena')
    const ship = new cruiseShip(port)
    const dock = new Port('Liverpool')
    ship.dock(dock)
    expect(ship.currentPort).toBe(dock);
});
});