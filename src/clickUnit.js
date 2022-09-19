import { GetElement } from "./getElement";
import { DragUnit, unitDragElementList } from "./dragUnit";

class ClickUnit {
  static addListener(el) {
    el.addEventListener("click", () => {
      GetElement.getSelectUnit().classList.remove(GetElement.selectUnitClass);
      el.classList.add(GetElement.selectUnitClass);
    });

    el.addEventListener("contextmenu", (event) => {
      event.preventDefault();

      unitDragElementList.filter((element) => element.target !== el);
      console.log(unitDragElementList);
      el.remove();
    });
  }
}

GetElement.getUnits().forEach((el) => {
  ClickUnit.addListener(el);
});

export { ClickUnit };
