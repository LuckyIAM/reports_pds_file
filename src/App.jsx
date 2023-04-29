import React,{ useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Authorization from "./Authorization";
import Context from "./Context";
import GetDataPDS from "./report/GetDataPDS";



export default () => {
    const[token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

    return <Context.Provider value={{
        token: token, 
        setToken: setToken
    }}>
        <BrowserRouter>
            <Authorization/>
            <GetDataPDS/>
        </BrowserRouter>
    </Context.Provider>
}
