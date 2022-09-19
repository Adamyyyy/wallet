import { ClickUnit } from "./clickUnit";
import { DragElement } from "./dragElement";
import { DragUnit } from "./dragUnit";
import { GetElement } from "./getElement";

class AddUnit {
  static add() {
    const add = GetElement.getAddElement(); // add-unit
    add.addEventListener("click", () => {
      const unit = AddUnit.createUnit(); // unit = oneUnit
      // 添加
      add.parentNode.insertBefore(unit, add);
      // 参考节点之前插入一个拥有指定父节点的子节点（第一个：指定父节点的子节点，第二个：参考节点）
    });
  }

  static createUnit() {
    //创建one-unit
    const oneUnit = document.createElement("div");
    oneUnit.classList.add("one-unit");
    //给新添加的的unit addEventListener
    ClickUnit.addListener(oneUnit);
    // new DragElement(oneUnit);
    new DragUnit(oneUnit)
    oneUnit.innerHTML = `
      <span class="currency">New</span>
      <div>
        <span class="num">66</span>
        <span class="symbol">%</span>
      </div>
      `;

    return oneUnit;
  }
}

AddUnit.add();

export { AddUnit };
