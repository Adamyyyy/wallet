import { GetElement } from "./getElement";

class DragElement {
  /**
   * @dragElement drag的控件，个体
   * @moveElement move的控件，整体
   */
  constructor(moveElement, dragElement) {
    this.moveElement = moveElement;
    this.dragElement = dragElement || moveElement;
    this.mouseDownPosition = { x: 0, y: 0 };
    this.moveDistance = { x: 0, y: 0 };
    this.originalMoveDistance = { x: 0, y: 0 };
    this.mouseDown = false;
    this.transition = moveElement.style.transition;
    this.zIndex = moveElement.style.zIndex;
    this.mousedown();
    this.mouseup();
    this.mousemove();
    this.targetClick();
  }

  mousedown = () => {
    this.dragElement.addEventListener("mousedown", (event) => {
      this.mouseDownPosition.x = event.clientX;
      this.mouseDownPosition.y = event.clientY;
    });
  };

  mouseup = () => {
    this.dragElement.addEventListener("mouseup", () => {
      this.originalMoveDistance.x = this.moveDistance.x;
      this.originalMoveDistance.y = this.moveDistance.y;
    });
  };

  mousemove = () => {
    this.dragElement.addEventListener("mousemove", (event) => {
      if (this.mouseDown) {
        this.moveDistance.x =
          event.clientX -
          this.mouseDownPosition.x +
          this.originalMoveDistance.x;
        this.moveDistance.y =
          event.clientY -
          this.mouseDownPosition.y +
          this.originalMoveDistance.y;

        const target = this.moveElement;
        target.style.transform = `translate(${this.moveDistance.x}px, ${this.moveDistance.y}px)`;
      }
    });
  };

  targetClick = () => {
    this.dragElement.addEventListener("mousedown", (event) => {
      console.log(event.button);
      if (event.button === 0) {
        this.mouseDown = true;
        this.moveElement.style.transition = "none";
        this.moveElement.style.zIndex = 999;
      }
    });
    this.dragElement.addEventListener("mouseup", (event) => {
      console.log(event.button);
      if (event.button === 0) {
        this.mouseDown = false;
        this.moveElement.style.transition = this.transition;
        this.moveElement.style.zIndex = this.zIndex;
      }
    });
  };
}

new DragElement(GetElement.getContainer(), GetElement.getMoveBar());

export { DragElement };
