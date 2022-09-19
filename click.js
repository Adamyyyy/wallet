{// const elementList = [...document.querySelectorAll(".one-unit")]; // nodeList to array

// // 个所有的.one-unit加click eventlistener
// elementList.forEach((el) => {
//   el.addEventListener("click", elementClick);
// });

// // click  callback function
// function elementClick(event) {
//   console.log("here");
//   console.log(event);

//   const target = event.currentTarget; // currentTarget = target
//   console.log(target);

//   const addUnit = target.classList.contains("add-unit");
//   console.log(addUnit);

//   if (addUnit) {
//     addUnitFunc(target);
//   } else {
//     selectUnitFunc(target);
//   }
// }

// // 选择
// function selectUnitFunc(target) {
//   console.log("select unit");
//   const elementList = [...document.querySelectorAll(".one-unit")];
//   //删除颜色
//   // elementList.some((el) => {
//   //   if (el.classList.contains("selected-unit")) {
//   //     el.classList.remove("selected-unit");
//   //     return false;
//   //   }
//   // });

//   for (let el of elementList) {
//     el.classList.remove("selected-unit");
//   }

//   //添加颜色
//   target.classList.add("selected-unit");
// }

// // 添加
// function addUnitFunc(target) {
//   console.log("add unit");

//   //添加one-unit
//   const newUnit = document.createElement("div");
//   newUnit.classList.add("one-unit");
//   newUnit.innerHTML = `
//   <span class="currency">New</span>
//   <div>
//     <span class="num">66</span>
//     <span class="symbol">%</span>
//   </div>
//   `;
//   // 添加的位置
//   target.parentNode.insertBefore(newUnit, target.parentNode.firstElementChild);

//   newUnit.addEventListener("click", elementClick);
// }
}

class ElementClick {
  constructor() {
    // console.log('ElementClick Create');
    this.run()
  }
  run = () => {
    console.log("ElementClick Create");
    // this._elementListAddClickListener();
    this.addListener()
  };

  addListener() {
    this._elementListAddClickListener();
  }

  removeListener() {
    this._getElementList().forEach((el) => {
      el.removeEventListener("click", this._elementClick);
    });
  }

  _getElementList = () => {
    return [...document.querySelectorAll(".one-unit")];
  };

  // addEventListener
  _elementListAddClickListener = () => {
    this._getElementList().forEach((el) => {
      el.addEventListener("click", this._elementClick);
    });
  };

  // addEventListener的callback function
  _elementClick = (event) => {
    const target = event.currentTarget; // currentTarget = target
    const addUnit = target.classList.contains("add-unit");
    addUnit ? this._addUnitFunc(target) : this._selectUnitFunc(target);
  };

  _addUnitFunc = (target) => {
    console.log("add");

    //创建one-unit
    const newUnit = document.createElement("div");
    newUnit.classList.add("one-unit");
    newUnit.innerHTML = `
      <span class="currency">New</span>
      <div>
        <span class="num">66</span>
        <span class="symbol">%</span>
      </div>
      `;
    // 添加one-unit
    target.parentNode.insertBefore(
      newUnit,
      target.parentNode.firstElementChild
    );

    // 新加的unit加上listener
    newUnit.addEventListener("click", this._elementClick);
  };

  _selectUnitFunc = (target) => {
    console.log("select");

    const elementList = this._getElementList();
    //删除颜色
    for (let el of elementList) {
      el.classList.remove("selected-unit");
    }

    //添加颜色
    target.classList.add("selected-unit");
  };
}

export { ElementClick };
