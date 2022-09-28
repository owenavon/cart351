// Started with main,js & cart351_triangle.js code structure

class HourglassShape {
    constructor(x,y,lineLength,context) {

      this.lineLength = lineLength; // member variable for the object (must prefix with .this)
      this.localCanvasContext = context;
      this.fillColor = "#ffffff";
      this.strokeColor = "#f0f0f0";
      this.anotherShape = 0;

      //new vars for speed:
      this.speedX  = 2;
      this.speedY = 4;

      //randomize speed
      this.speedX  =(Math.random()*5)+2;
      this.speedY  =(Math.random()*5)+2;;

      //made into a method so that at any time we can update the triangle ...
      this.setPoints(x,y);
    }

    randomColor() {
      this.fillColor = `rgba(
          ${Math.floor(Math.random()*255)},
          ${Math.floor(Math.random()*255)},
          ${Math.floor(Math.random()*255)},
          ${Math.floor(Math.random()*255)}
        )`;
    }

    // DOES NOT WORK
    anotherShape() {
      this.hourglassArray.length; i++
    }

    //method to display the triangle using the HTML 5 canvas API
    display() {
      this.localCanvasContext.fillStyle = this.fillColor; // Displays the color
      this.localCanvasContext.addedShape = this.anotherShape; // Displays the new object

      this.localCanvasContext.beginPath();
      this.localCanvasContext.moveTo(this.x1,this.y1);

      this.localCanvasContext.lineTo(this.x1,this.y1);
      this.localCanvasContext.lineTo(this.x2,this.y2);
      this.localCanvasContext.lineTo(this.x3,this.y3);
      this.localCanvasContext.lineTo(this.x4,this.y4);

      this.localCanvasContext.fill();

      this.localCanvasContext.strokeStyle = this.strokeColor ;
      this.localCanvasContext.lineWidth = 0; // Don't display lineWidth
      this.localCanvasContext.stroke();
      this.localCanvasContext.closePath();
    }

    //method to update the points ...
    setPoints(x,y) {
      //p1
      this.x1 = x;
      this.y1 = y;
      //p2
      this.x2 = this.x1+this.lineLength;
      this.y2 = this.y1
      //p3
      this.x3 = this.x1
      this.y3 = this.y1+this.lineLength;

      this.x4 = this.x1+(this.lineLength);
      this.y4 = this.y1+this.lineLength; // Creates hourglass symbol
    }

    update() {
        let newX = this.x1+this.speedX;
        let newY = this.y1+this.speedY;

        //set the points
        this.setPoints(newX,newY); // Helper function that is made in the constructor
      }

      checkBounds(localCanvas) {
        if(this.x1>localCanvas.width || this.x1<0 ){
          this.speedX = this.speedX*-1;
          this.randomColor();
          // this.anotherShape();






        }

        if(this.y1>localCanvas.height || this.y1<0 ){
        this.speedY=this.speedY*-1;
        this.randomColor();


        }
      }
  }
  /** end class def **/
