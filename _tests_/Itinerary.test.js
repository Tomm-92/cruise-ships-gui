const Intinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe('Intinerary constructor function', () => {
    it('can be instantiated', () => {
        expect(new Intinerary()).toBeInstanceOf(Object);
    });
    it('can have ports', () => {
        const nice = new Port('Nice')
        const monaco = new Port('Monaco')
        
        const intinerary = new Intinerary([nice, monaco])
        expect(intinerary.ports).toEqual([nice, monaco])
    }
    )
});
