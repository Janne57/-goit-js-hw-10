import {fetchBreeds} from './js/catApi.js'
import {fetchCatByBreed} from './js/catApi.js'
import {refs} from './js/refs.js'
import Notiflix from 'notiflix';


refs.pError.classList.add('is-hidden');
refs.pLoader.classList.add('is-hidden');

refs.basicCard.addEventListener('change', onSelect);
  
 function onSelect(evt){
    evt.preventDefault();
    const breedId = refs.basicCard.value;
    // console.log('breedId', breedId);
    
    fetchCatByBreed(breedId)
    .then((breeds) => renderDecription(breeds))
    .catch(onFetchError);
    clearEl();
 }

fetchBreeds()
.then((breeds) => renderNameList(breeds))
.catch(onFetchError);


function renderNameList(breeds){
    refs.pLoader.classList.add('is-hidden');
    const markUp = breeds
        .map((breed) => { 
            return `
            <option value=${breed.id}>${breed.name}</option>
            `;
    })
    .join('');
    refs.basicCard.innerHTML = markUp; 
};

function renderDecription(breeds){
    refs.pLoader.classList.add('is-hidden');
    const markUp =`<img src=https://cdn2.thecatapi.com/images/${breeds.reference_image_id}.jpg class='imgcat' width='230px' height='250px'>`;
    const markUpName = breeds.name;
    const markUpDesc = breeds.description;
    const markUpTemp = breeds.temperament;
    
    refs.catInfo.innerHTML = (`<b>${markUp}</b> <div class=addTwo><b>${markUpName}</b><br>${markUpDesc}<br><br><br><b>Temperament:</b>${markUpTemp}</div>`);
};      

function clearEl(){
    refs.catInfo.innerHTML='';
}

function onFetchError(){
    Notiflix.Notify.failure (`Oops! Something went wrong!`);
}



















//  fetch('https://api.thecatapi.com/v1/images/search?api_key=live_7Ze9UpSIOH6mfZYl6PFk2CqKADPS06UIHOLA8micYEEwgOkx1XMZrU1xBPSMv86d')
//  .then(r => {
//     return r.json();
//  })
//  .then(console.log);

 
//  fetch('https://api.thecatapi.com/v1/breeds/')
//  .then(r => r.json())
//  .then(console.log);


// const basicCardValue = document.createElement(<select></select>, options)
// fetch('https://api.thecatapi.com/v1/breeds')
// .then(response => {
//     // console.log(response.json());   
//     return response.json();  
// })
// .then(breeds => {
//     for (let i = 0; i < 10; i += 1) {
//     // console.log(breeds[i].name);
//     // refs.basicCard.innerHTML = breeds[i].name;
//     // refs.basicCard.insertAdjacentHTML("afterbegin",breeds[i].name);
//     refs.basicCard.insertAdjacentHTML("afterbegin",breeds[i].id);
//     console.log(refs.basicCard);
//     // console.log(my);
    
//     // refs.catInfo.innerHTML = url[3];
//     // refs.catInfo.innerHTML = breeds[3].description;
//     // console.log(refs.catInfo);
    
    
//     }
// })
// .catch(error => {
// console.log(error);
// }
// );





































/*** */

// function fetchCat(){
//     return fetch('https://api.thecatapi.com/v1/breeds')
//     .then(response => {
//         return response.json();
//     });
// }

// function renderFetchCat(){

// }



// fetch('https://api.thecatapi.com/v1/breeds')
// fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD')
// .then(response => {
//     // console.log(response.json());   
//     return response.blob();  
// })
// .then(url => {
//     // for (let i = 0; i < 10; i += 1) {
//     // console.log(breeds[i].name);
//     refs.basicCard.innerHTML = url;
//     console.log(refs.basicCard);
//     // refs.catInfo.innerHTML = breeds;
//     refs.catInfo.innerHTML = url;
//     console.log(refs.catInfo);
    
    
//     // }
// })