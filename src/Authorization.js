import React from "react";
import axios from "axios";

const data = {
    grant_type:'password',
    client_id:'354FE540-6100-436F-A212-7B29C4D09545',
    client_secret: 'rhBQCWiIufQRooTtXcH',
    username: 'PRGUS',
    password: 'wsDCrf7',
    scope: 'read/write/admin',
    refresh_token: ''
}

export default () => {
    axios.post(`http://opac.liart.local/api/v1/oauth2/token`, {
        headers: {
            'Content-Type': 'application/www-form-urlencoded'
        },
        data
    })
    .then(respons => {console.log(respons)})
    .catch(err => {console.error(err)})
}

