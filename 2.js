class Car {
    /* Constructor expects parameters for
    fill color, x and y coordinates that
    will be used to initialize class properties.
    */
    constructor(cColor, x, y) {
      this.color = cColor;
      this.doors = 4;
      this.isConvertible = false;
      this.x = x;
      this.y = y;
      this.speed = 0;
    }
  
    start(speed) { // method expects parameter!
      this.speed = speed;
    }
  
    display() { // method!
      fill(this.color);
      rect(this.x, this.y, 20, 10);
    }
  
    move() { // method!
      this.x += this.speed;
      // Wrap x around boundaries
      if (this.x < -20) {
        this.x = width;
      } else if (this.x > width) {
        this.x = -20;
      }
    }
  } //end class Car
  
  let rav4;
  let charger;
  let nova;
  let linzy;
  
  function setup() {
    createCanvas(200, 400);
    /* Construct the 3 Cars */
    //constructor expects cColor, x, y
    rav4 = new Car("white", 100, 200);
    charger = new Car("red", 0, 200);  
    nova = new Car("blue", 200, 200); 
    nova.doors = 2; 
    linzy = new Car ("pink", 300,200)
    //update nova's doors property
    
    console.log("rav4", rav4);
    console.log("charger", charger);
    console.log("nova", nova);
    console.log("linzy", linzy);
    
    //call start methods of Car instances
    //the start method expects a number for speed
    rav4.start(5.3);
    charger.start(-4);
    nova.start(random(-1, 1));
    linzy.start(1.3);
  }
  
  function draw() {
    background("beige");
    
    //display and move all 3 Cars
    rav4.display();
    charger.display();
    nova.display();
    linzy.display();
    
    rav4.move();
    charger.move();
    nova.move();
    linzy.move();
  }