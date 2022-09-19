import { GetElement } from "./getElement";
import { DragElement } from "./dragElement";

let unitDragElementList = [];

class DragUnit extends DragElement {
  constructor(target) {
    super(target);
    this.target = target;
    this.mousemove();
    unitDragElementList.push(this);
    console.log(unitDragElementList);
    this.lastNumber = 0;
  }

  mousemove = () => {
    document.body.addEventListener("mousemove", (event) => {
      if (this.mouseDown) {
        // console.log("here");
        const target = this.target.clientWidth + 16 + 2;
        // console.dir(target);
        const len = GetElement.getUnits().length;
        const pos = this.getPosition();
        // console.log(len, pos);

        if (this.moveDistance.x > target && pos < len - 1) {
          const moveNumber = Math.floor(this.moveDistance.x / target);
          console.log("moveNumber", moveNumber);

          if (this.lastNumber === moveNumber) {
            return;
          }
          this.lastNumber = moveNumber;
          console.log("this.lastNumber === moveNumber", this.lastNumber);
          console.log("this.lastNumber === moveNumber", moveNumber);

          if (pos + moveNumber < len) {
            GetElement.getUnits()[
              pos + moveNumber
            ].style.transform = `translate(-${target}px)`;

            const unit = unitDragElementList.find(
              (el) => el.target === GetElement.getUnits()[pos + moveNumber]
            );

            unit.originalMoveDistance.x -= target
          }
        }

        if (-this.moveDistance.x > target && pos > 0) {
          const moveNumber = Math.floor(-this.moveDistance.x / target);
          pos - moveNumber >= 0
            ? (GetElement.getUnits()[
                pos - moveNumber
              ].style.transform = `translate(${target}px)`) 
            : null;

            const unit = unitDragElementList.find(
              (el) => el.target === GetElement.getUnits()[pos - moveNumber]
            );

            unit.originalMoveDistance.x += target
        }
      }
    });
  };

  getPosition = () => {
    return GetElement.getUnits().findIndex((el) => el === this.target);
  };
}

GetElement.getUnits().forEach((el) => {
  new DragUnit(el);
});

export { DragUnit, unitDragElementList };
