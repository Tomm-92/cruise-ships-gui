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

    it('cruiseShip gets added to port on instantination', () => {
        const port = new Port('Rotterdam')
        const itinerary = new Intinerary([port])
        const ship = new cruiseShip(itinerary)

        expect(port.ships).toContain(ship);

});

   /* it('sets the initial number of passengers on the ship to 0', () => {
        const port = new Port('Amsterdam')
        const ship = new cruiseShip(port)
        expect(ship.passengers).toEqual(0);
 }); */
});


describe('setSail', () => {
    it('changes the starting port to at sea', () => {
        const port1 = new Port('Cartagena')
        const port2 = new Port('Florence')
        const itinerary = new Intinerary([port1, port2])
        const ship = new cruiseShip(itinerary)
        
        ship.setSail()
        
        expect(ship.previousPort).toBe(port1)
        expect(ship.currentPort).toBeFalsy();

});
    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Intinerary([dover, calais]);
        const ship = new cruiseShip(itinerary);

        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
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
        expect(ship.currentPort.ships).toContain(ship)

       /* ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(monaco); */
    }); 
});
