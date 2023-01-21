(function exportController() {
  class Controller {
    constructor(ship) {
      this.ship = ship;
      this.initialiseSea();
      this.headsUpDisplay();
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

    renderPorts(ports) {
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
    }

    //this for each works by iterating over the ports passed in to the renderPorts function and creates a new div which is added to the DOM (can see in browser console)
    // the newPortElement is given a class name port and the data tags are then that ports name and its index in the array

    renderShip() {
      const ship = this.ship;

      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(
        `[data-port-index='${shipPortIndex}']`
      );

      const shipElement = document.querySelector('#ship');
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    }

    setSail() {
      const ship = this.ship;
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
          document.querySelector('#sailButton').addEventListener('click', () => {
          hud.removeChild(displayMessage)})
          this.headsUpDisplay();
          this.renderMessage(`Welcome to ${ship.currentPort.name}`);
          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
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
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const currentPort = ship.currentPort.name
    const displayMessage = document.createElement('div');
    displayMessage.id = 'portInfo';
    displayMessage.innerHTML = (`Current port: ${ship.currentPort.name} <br>
    Next port: ${ship.itinerary.ports[currentPortIndex + 1].name}`)    
    const hud = document.querySelector('#headsUpDisplay');
    hud.appendChild(displayMessage);
    //document.querySelector('#sailButton').addEventListener('click', () => {
      //hud.removeChild(displayMessage)})
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