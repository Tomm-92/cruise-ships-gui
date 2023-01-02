/* globals describe it expect */
const Port = require('../src/Port');

describe('Port Constructor', () => {
    it('creates an instance of port as an object', () => {
    expect(new Port('liverpool')).toBeInstanceOf(Object);
    });

    it('assigns a name property to the port', () => {
    const port = new Port('Amsterdam')
    expect(port.name).toMatch('Amsterdam');    
    });
});