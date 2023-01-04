/* globals describe it expect */
const Port = require('../src/Port');
const cruiseShip = require('../src/cruiseShip');
const Intinerary = require('../src/Itinerary');

describe('Port Constructor', () => {
    it('creates an instance of port as an object', () => {
    expect(new Port('liverpool')).toBeInstanceOf(Object);
    });

    it('assigns a name property to the port', () => {
    const port = new Port('Amsterdam')
    expect(port.name).toMatch('Amsterdam');    
    });
});

describe('addShip', () => {
    it('adds a ship to the ship array property', () => {
        const port = new Port('Bilbao')
        const ship = {}
        port.addShip(ship)  
        
        expect(port.ships).toContain(ship);

    });
});

describe('removeShip', () => {
    it('removes a ship to the ship array property', () => {
        const port = new Port('Bilbao')
        const ship1 = {}
        const ship2 = {}
        port.addShip(ship1)  
        port.addShip(ship2)
        port.removeShip(ship1)

        expect(port.ships).toEqual([ship2])
    });
});