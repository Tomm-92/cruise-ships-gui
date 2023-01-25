(function exportController() {
  class Controller {
    constructor(ship) {
      this.ship = ship;
      this.initialiseSea();
      if (ship.itinerary.ports.length > 0) {
      this.headsUpDisplay();
      }
      document.querySelector('#sailButton').addEventListener('click', () => {
        this.setSail();

      });
    }

    initialiseSea() {
      const backgrounds = ['./images/water0.png', './images/water1.png'];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage = `url('${
          backgrounds[backgroundIndex % backgrounds.length]
        }')`;
        backgroundIndex += 1;
      }, 1000);


    }

    /*renderPorts(ports) {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = '0px';
      ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.className = 'port';
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    } */

    renderPorts(ports) {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = '0px';
      ports.forEach((port, index) => {
        this.renderEachPort(portsElement, port, index);
      });
    }

    renderEachPort(portsElement, port, index) {
      const newPortElement = document.createElement('div');
      newPortElement.className = 'port';
      newPortElement.dataset.portName = port.name;
      newPortElement.dataset.portIndex = index;
      portsElement.appendChild(newPortElement);
      const portsElementWidth = parseInt(portsElement.style.width, 10);
      portsElement.style.width = `${portsElementWidth + 256}px`;
    }
    

    //this for each works by iterating over the ports passed in to the renderPorts function and creates a new div which is added to the DOM (can see in browser console)
    // the newPortElement is given a class name port and the data tags are then that ports name and its index in the array

 

    renderShip() {
      const ship = this.ship;
      if (ship.itinerary.ports.length > 0) {
        const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(
          `[data-port-index='${shipPortIndex}']`
        );
        const shipElement = document.querySelector('#ship');
        shipElement.style.top = `${portElement.offsetTop + 32}px`;
        shipElement.style.left = `${portElement.offsetLeft - 32}px`;
      }
    }
      

    setSail() {
      const ship = this.ship;

      if (ship.itinerary.ports.length === 0) {
        this.renderMessage('Add some ports so we can get sailing!');
        return 0;
      }
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );
      if (!nextPortElement) {
        this.renderMessage('End of the line!');
        return 0;
      } else {

      this.renderMessage(`Now departing ${ship.currentPort.name}`);
    }

      const shipElement = document.querySelector('#ship');
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft === nextPortElement.offsetLeft - 35) {
          ship.setSail();
          ship.dock();
          this.renderMessage(`Welcome to ${ship.currentPort.name}`);
          clearInterval(sailInterval);
          this.headsUpDisplay();
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 8);
    }

renderMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.id = 'message';
  messageElement.innerHTML = message;
  
  const viewport = document.querySelector('#viewport');
  viewport.appendChild(messageElement);
  setTimeout(() => {
    viewport.removeChild(messageElement);
  }, 2000);
  }
  
  headsUpDisplay() {
    
  if (this.ship.itinerary.ports.length >0 && this.ship.currentPort !== null) {
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = currentPortIndex + 1;
    let hudMessage = `Current Port: ${ship.itinerary.ports[currentPortIndex].name}`;
    if (nextPortIndex < ship.itinerary.ports.length) {
      hudMessage += `<br>Next Port: ${ship.itinerary.ports[nextPortIndex].name}`;
    } else hudMessage = `Current Port: ${ship.itinerary.ports[currentPortIndex].name} <br> Next Port: End of the Line`;
    document.getElementById('headsUpDisplay').innerHTML = hudMessage;
  }

  }
    
  addNewPort() {
    const portName = document.getElementById('portName').value;
    const newPort = new Port(portName);
    itinerary.ports.push(newPort);
    ship.itinerary = itinerary;
    if (ship.currentPort === null) {
      ship.currentPort = itinerary.ports[0];
    }
    const portsElement = document.querySelector('#ports');
    const newIndex = itinerary.ports.length - 1;
    this.renderEachPort(portsElement, newPort, newIndex);
  }
}

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})(); 


/* SCRIPT CODE 

<div id="headsUpDisplay"> 
</div>
<div id="viewport">
  <div id="ports"></div>
  <div id="ship"></div>
  <button id="sailButton">Set Sail!</button>
</div>
<script src="./src/Controller.js"></script>
<script src="./src/Itinerary.js"></script>
<script src="./src/Port.js"></script>
<script src="./src/cruiseShip.js"></script>

<script>
  const itinerary = new Intinerary([
    new Port('Amsterdam'),
    new Port('Cartagena'),
    new Port('Barcelona'),
  ]);
  const ship = new CruiseShip(itinerary);
  const controller = new Controller(ship);
  controller.renderPorts(itinerary.ports);
  controller.renderShip();
  const message1 = 'TEST'
  controller.headsUpDisplay(message1); 

  */