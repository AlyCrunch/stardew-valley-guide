import * as React from "react";
import { render } from "react-dom";
import { Boiler_Room } from './data/room';
import { Apple } from './data/item'

render(
    <div>
        <p>{Boiler_Room.id}</p>
        <img src={Apple}/>
    </div>,
    document.body
    );