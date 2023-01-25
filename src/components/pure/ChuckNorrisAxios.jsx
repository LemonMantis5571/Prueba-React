import React, {useState} from 'react';
import randomJoke from '../../services/chuckNorris-service';
import { Button } from '@mui/material';
const ChuckNorrisAxios = () => {

    const [likeCounter, setlikeCounter] = useState(0);
    const [dislikeCounter, setdislikeCounter] = useState(0);
    const [activeBtn, setActiveBtn] = useState("none");
    const [generateNewJoke, setgenerateNewJoke] = useState({});

    const obtainRandomJoke = () => {
        randomJoke().then((response) => {
            console.log(response.data)
            if(response.status === 200){
                setgenerateNewJoke(response.data);
                setActiveBtn('none');
            }
            
        })
        .catch((error) => alert(error))
    }

    const handleLikeClick = () => {
        if (activeBtn === "none") {
          setlikeCounter(likeCounter + 1);
          setActiveBtn("like");
          return;
        }
     
        if (activeBtn === 'like'){
          setlikeCounter(likeCounter - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "dislike") {
          setlikeCounter(likeCounter + 1);
          setdislikeCounter(dislikeCounter - 1);
          setActiveBtn("like");
        }
      };

    const handleDisikeClick = () => {
        if (activeBtn === "none") {
          setdislikeCounter(dislikeCounter + 1);
          setActiveBtn("dislike");
          return;
        }
       
        if (activeBtn === 'dislike'){
          setdislikeCounter(dislikeCounter - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "like") {
          setdislikeCounter(dislikeCounter + 1);
          setlikeCounter(likeCounter - 1);
          setActiveBtn("dislike");
        }
      };




    return (
        <div className='d-flex flex-column justify-content-center align-items-center w-100 h-100'>
            <p>{generateNewJoke.value}</p>
            <Button variant="contained" onClick={obtainRandomJoke}>Random Joke</Button>
            <div className='d-flex gap-5 mt-3'>
                <Button onClick={handleLikeClick} variant="outlined" >Like {likeCounter}</Button>
                <Button onClick={handleDisikeClick} variant="outlined">Dislike {dislikeCounter}</Button>
            </div>
            
        </div>
    );
}

export default ChuckNorrisAxios;
