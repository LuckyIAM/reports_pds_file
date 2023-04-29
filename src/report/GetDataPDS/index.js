import React, { useContext} from "react";
import axios from "axios";
import Context from "../../Context";

export default async() => {
    const {token} = useContext(Context)
    const options = {
        method: 'GET',
        headers: { 
            accept: 'application/vnd.api+json',
            authorization: `${token}`
        },
        url:`http://opac.liart.local/api/v1/reports/collections/customize/reports/FLP_report`,
      }
    await axios(options)
    .then(respons => {console.log(respons)})
    .catch(err => {console.error(err)})
}