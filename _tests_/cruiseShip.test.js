/* globals describe it expect */
const cruiseShip = require('../src/cruiseShip');
const Intinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe('Ship', () => {
    let cartagena
    let florence
    let itinerary
    let ship

    beforeEach(() => {
        cartagena = new Port('Cartagena')
        florence = new Port('Florence')
        itinerary = new Intinerary([cartagena, florence])
        ship = new cruiseShip(itinerary)
    }); 

    describe('cruiseShip constuctor with ports and itinerary', () => {
        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
            expect(ship.currentPort).toBe(cartagena);
    });
        it('sets the preivous port property of the ship to null', () => {
            expect(ship.previousPort).toBe(null);
    });
        it('cruiseShip gets added to port on instantination', () => {
            expect(ship.currentPort.ships).toContain(ship);
    });
        it('can set sail sea', () => {
        
        ship.setSail()
        
        expect(ship.previousPort).toBe(cartagena)
        expect(ship.currentPort).toBeFalsy();
        expect(cartagena.ships).not.toContain(ship);
    });
    it('can\'t sail further than its itinerary', () => {
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });   

      it('allows the ship to dock at a different port', () => {    
        ship.setSail();
        ship.dock();
      
        expect(ship.currentPort).toBe(florence);
        expect(ship.currentPort.ships).toContain(ship)
    }); 
    });
})



