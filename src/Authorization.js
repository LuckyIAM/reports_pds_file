import React from "react";
import axios from "axios";

export default () => {
    axios.post(`htpp://opac.liart.local/api/v1/oauth2/token`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            grant_type:'password',
            client_id:'354FE540-6100-436F-A212-7B29C4D09545',
            client_secret: 'rhBQCWiIufQRooTtXcH',
            username: 'PRGUS',
            password: 'wsDCrf7',
            scope: 'read/write/admin',
            refresh_token: ''
        })
    })
    .then(respons => {console.log(respons)})
    .catch(err => {console.error(err)})
}

