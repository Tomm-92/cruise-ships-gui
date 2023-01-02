const cruiseShip = require('../src/cruiseShip');

describe('cruiseShip constuctor', () => {
    it('creates an instance of a ship as an object', () => {
    expect(new cruiseShip('Dover')).toBeInstanceOf(cruiseShip);
});
it('creates sets the port property of the ship', () => {
    const ship = new cruiseShip('Rotterdam')
    expect(ship.startingPort).toBe("Rotterdam");

});
it('sets the initial number of passengers on the ship to 0', () => {
    const ship = new cruiseShip('Southampton')
        expect(ship.passengers).toEqual(0);
    })
});

