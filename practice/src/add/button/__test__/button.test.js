import *as  React from 'react';
import * as ReactDOM from "react-dom"
import { render} from 'react-dom';
import Button from './../button';

it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<Button></Button>,div)
})