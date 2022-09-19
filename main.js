import "./style.scss";

// import './click.js'

import { ElementClick } from "./click.js";

const elementClick = new ElementClick();

console.log(elementClick);
elementClick.run();
elementClick.addListener();
// elementClick.removeListener()

import { DragContainer } from "./drag";

const dragContainer = new DragContainer();

dragContainer.run();
