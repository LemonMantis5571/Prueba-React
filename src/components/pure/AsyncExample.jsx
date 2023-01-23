import React from 'react';

const AsyncExample = () => {

    async function generateNumber() {
        return 1;
    }

    function obtainNumber() {
        generateNumber().then((response) => alert(`Respuesta ${response}`));
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }

    async function obtainPromiseNumber(){
        generatePromiseNumber().then((response) => alert(`Respuesta ${response}`))
        .catch((error) => alert(`Something went wrong ${error}`));
    }


    async function saveSessionStorage(key,value) {
        sessionStorage.setItem(key, value)

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name', 'Leonel')
        .then((response) => {
            let value = response;
            alert(`Saved Name: ${value}`)
        }).catch((error) => alert(`Something went wrong ${error}`))
        .finally(() => console.log('Name saved and retrieved Sucessfully'));
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello Wolrd'), 2000)
        });

        let message = await promise;

        await alert(`Message received: ${message}`);
    }

    const returnError = async() => {
        await Promise.reject(new Error('Ooops'));
    }

    const consumeError = () => {
        returnError()
        .then((response) => alert(`Everything is OK: ${response}`))
        .catch((error) => alert(`Something went wrong ${error}`))
        .finally(() => alert('Finally Executed'));
    }


    const urlNotFound = async() => {
        try {
            let response = await fetch('https://invalidURL');
            alert(`responde: ${JSON.stringify(response)}`)
        } catch(error) {
            alert(`Something went wrong with your URL: ${error}`);
        }

    }

    const multiplePromise = async() => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something went wrong with your URLs: ${error}`))

        console.log(results);
    }

    return (
        <div>
        <h1> Ejemplos de asincronia</h1>
        <button onClick={obtainNumber}>Hey</button>
        <button onClick={obtainPromiseNumber}>Promise Number</button>
        <button onClick={showStorage}>Save Name and Show</button>
        <button onClick={obtainMessage}>Send message in 2 seconds</button>
        <button onClick={consumeError}>Obtain Error</button> 
        <button onClick={urlNotFound}>Request to Unknow URL</button> 
        <button onClick={multiplePromise}>Multiples Promises</button>
        </div>
    );
}

export default AsyncExample;
