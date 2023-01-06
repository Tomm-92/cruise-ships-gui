/* globals describe it expect */
const Port = require('../src/Port');
const cruiseShip = require('../src/cruiseShip');
const Intinerary = require('../src/Itinerary');

describe('Port', () => {
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

    describe('Port Constructor with a name and ships stored within', () => {
        it('creates an instance of port as an object', () => {
            expect(new Port('liverpool')).toBeInstanceOf(Object);
     });

        it('assigns a name property to the port', () => {
            expect(cartagena.name).toMatch('Cartagena');    
    });

        it('can add a ship to the ship array property', () => {
            cartagena.addShip(ship)  
                expect(cartagena.ships).toContain(ship);
        }); 
    });

        it('can remove a ship to the ship array property', () => {
            cartagena.addShip(ship)  
            cartagena.removeShip(ship)
                expect(cartagena.ships).not.toContain([ship])
    });
});



