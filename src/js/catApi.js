import {refs} from './refs'

export function fetchBreeds(){
    refs.pLoader.classList.remove('is-hidden');
    return fetch('https://api.thecatapi.com/v1/breeds/')
     .then((response) => {
         if (!response.ok) {
             throw new Error(response.status);
         }
    //  console.log(response.json());   
     return response.json();  
 })
 .catch(error => {
 console.log(error);
 }
 );
 }

export  function fetchCatByBreed(breedId) {
    refs.pLoader.classList.remove('is-hidden');
    return fetch(`https://api.thecatapi.com/v1/breeds/${breedId}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();     
    })
    .catch(error => {
        console.log(error);
        }
        );
 }

