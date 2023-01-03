/* globals describe it expect */
const cruiseShip = require('../src/cruiseShip');
const Intinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe('cruiseShip constuctor', () => {
    it('creates an instance of a ship as an object', () => {
    
        const port = new Port('Rotterdam')
        const itinerary = new Intinerary([port])
        const ship = new cruiseShip(itinerary)
    
        expect(ship).toBeInstanceOf(Object);
});
it('sets the starting port property of the ship', () => {
    
    const port = new Port('Rotterdam')
    const itinerary = new Intinerary([port])
    const ship = new cruiseShip(itinerary)

    expect(ship.currentPort).toBe(port);
   
   });

it('sets the preivous port property of the ship to null', () => {
    const port = new Port('Rotterdam')
    const itinerary = new Intinerary([port])
    const ship = new cruiseShip(itinerary)
    expect(ship.previousPort).toBe(null);

});

/* it('sets the initial number of passengers on the ship to 0', () => {
    const port = new Port('Amsterdam')
    const ship = new cruiseShip(port)
    expect(ship.passengers).toEqual(0); */
    });


describe('setSail', () => {
    it('changes the starting port to at sea', () => {
    const port = new Port('Cartagena')
    const itinerary = new Intinerary([port])
    const ship = new cruiseShip(itinerary)
    ship.setSail()
    expect(ship.previousPort).toBe(port)
    expect(ship.currentPort).toBeFalsy();
   
});
});

describe('dock', () => {
    it('allows the ship to dock at a different port', () => {
    const rotterdam = new Port('Rotterdam');
    const miami = new Port('Miami');
    const monaco = new Port('Monaco');
    const itinerary = new Intinerary([rotterdam, miami, monaco])
    const ship = new cruiseShip(itinerary);
      
    ship.setSail();
    ship.dock();
      
    expect(ship.currentPort).toBe(miami);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(monaco);


 /*const currentPort = new Port('Rotterdam')
    const preivousPort = new Port('Miami')
    const route = new Intinerary([currentPort, preivousPort])
    const ship = new cruiseShip(route.ports[0])
    expect(ship.currentPort).toEqual(route.ports[0]); */


});
});