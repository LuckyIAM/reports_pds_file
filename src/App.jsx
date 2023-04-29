import React from "react";
import { BrowserRouter } from "react-router-dom";
import Authorization from "./Authorization";


export default () => {
    return <BrowserRouter>
        <Authorization/>
    </BrowserRouter>
}
