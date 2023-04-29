import React from "react";
import axios from "axios";
import qs from "qs"

const data = {
    grant_type:'password',
    client_id:'354FE540-6100-436F-A212-7B29C4D09545',
    client_secret: 'rhBQCWiIufQRooTtXcH',
    username: 'PRGUS',
    password: 'wsDCrf7',
    scope: 'read/write/admin',
    refresh_token: ''
}

export default async() => {
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url:`http://opac.liart.local/api/v1/oauth2/token`,
      }
    await axios(options)
    .then(respons => {localStorage.setItem('token', respons.data.access_token)})
    .catch(err => {console.error(err)})
}

