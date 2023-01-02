const Intinerary = require('../src/Itinerary');

describe('Intinerary constructor function', () => {
    it('can be instantiated', () => {
        expect(new Intinerary()).toBeInstanceOf(Object);
    });
    it('has a port property', () => {
        const intinerary = new Intinerary('Liverpool')
        expect(intinerary.ports).toBe('Liverpool')
    }
    )
});
