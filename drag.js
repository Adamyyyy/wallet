class DragContainer {
  constructor() {
    this.init();
  }

  init() {
    this.mouseDownPosition = { x: 0, y: 0 };
    this.movDistance = { x: 0, y: 0 };
    this.moveBarMouseDown = false;
    this.originalMoveDistance = { x: 0, y: 0 };
  }

  run() {
    this.mousedown();
    this.mousemove();
    this.moveBar();
    this.mouseup();
  }
/////////////////////////////////////////////////////////////////////////////////
  mousedown() {
    document.body.addEventListener("mousedown", this._mouseDownOnBody);
  }

  // mouseup的时候记录下element所处位置
  mouseup() {
    document.body.addEventListener("mouseup", this._mouseUpOnBody);
  }

  mousemove() {
    document.body.addEventListener("mousemove", this._mouseMoveOnBody);
  }

  moveBar() {
    const bar = document.querySelector(".moveBar");
    bar.addEventListener("mousedown", () => {
      this.moveBarMouseDown = true;
      console.log("mousedown");
    });
    bar.addEventListener("mouseup", () => {
      this.moveBarMouseDown = false;
      console.log("up");
    });
  }
////////////////////////////////////////////////////////////////////////////////////

  _mouseDownOnBody = (event) => {
    // console.log("x:", event.clientX);
    // console.log("y:", event.clientY);
    this.mouseDownPosition.x = event.clientX;
    this.mouseDownPosition.y = event.clientY;
  };

  _mouseMoveOnBody = (event) => {
    // console.log("x:", event.clientX);
    // console.log("y:", event.clientY);
    if (this.moveBarMouseDown) {
      this.movDistance.x =
      event.clientX - this.mouseDownPosition.x + this.originalMoveDistance.x;
      this.movDistance.y =
      event.clientY - this.mouseDownPosition.y + this.originalMoveDistance.y;
      
      const target = document.querySelector(".container");
      target.style.transform = `translate(${this.movDistance.x}px, ${this.movDistance.y}px)`;
    }
  };

  _mouseUpOnBody = (event) => {
    this.originalMoveDistance.x = this.movDistance.x;
    this.originalMoveDistance.y = this.movDistance.y;
  };
}

export { DragContainer };
