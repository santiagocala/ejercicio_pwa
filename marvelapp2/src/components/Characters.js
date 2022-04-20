import React, {useEffect, useState} from 'react';

function Characters(){
    // Variable de estado de personajes
    const [characters, setCharacters] = useState([]);
    // Variable de estado de joke
    const [joke, setJoke] = useState(null); 
    // Hook para sacar la información del API
    /*
    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random').then((response) => response.json()).then((res) => {
            console.log(res);
            //setCharacters(res); 
            setJoke(res.value); 
        });
    }, []);
    */
    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("joke") === null) {
                setJoke("Loading...")
            } else {
                setJoke(localStorage.getItem("joke"));
            }
        } else {
            const URL = "https://api.chucknorris.io/jokes/random";
            fetch(URL).then(res=>res.json()).then(res=>{
                setJoke(res.value);
                localStorage.setItem("joke", res.value);
            })
        }
    }, []);
    return(
        <div>
            <p>{joke}</p>   
        </div>
    )
}

export default Characters; 