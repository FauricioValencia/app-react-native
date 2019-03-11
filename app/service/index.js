export const api = {
    uri: 'https://back-tesis.herokuapp.com/',
    users: {
        login: 'login/',
        byID: `user/${id_user}`,
        all: '',
        save: 'user/',
    }
}

export const postApi = (rute, body) => {
    return new Promise((resolve,reject) => {
        fetch(rute,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': token 
            },
            
            body:JSON.stringify(body)
        })
        .then(resp => resp.json())
        .then(respjson => {
            console.log(respjson,'RESPONSE');
            resolve(respjson);
        })
        .catch((error) => {
            reject(error);
        });
    });
}


export const putApi = ( rute, body) => {
    return new Promise((resolve,reject) => {
        fetch(rute,{
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': token 
            },
            
            body:JSON.stringify(body)
        })
        .then(resp => resp.json())
        .then(respjson => {
            console.log(respjson,'RESPUESTA');
            resolve(respjson);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

export const getApi = (rute, token) => {
    return new Promise((resolve, reject) => {
        fetch(rute,{
            method: 'GET',
            'Content-Type': 'application/json',
            // 'Authorization': token
        })
        .then(resp => resp.json())
        .then((respjson) => {
            console.log(respjson,'RESPUESTA');
            resolve(respjson);
        })
        .catch((error) => {
            reject(error);
        });
    });
}
