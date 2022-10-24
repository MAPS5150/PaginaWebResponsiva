/*API URL*/
// const API_URL="https://reqres.in/api/users/";
//const API_URL="https://jsonplaceholder.typicode.com";
//const API_URL = "https://pokeapi.co/api/v2/pokemon/1/"


/*Botones para crear la interaccion en el sitio web*/
const workItems = document.querySelectorAll('.work .item');
const workItemsCount = workItems.length;
let currentIndex = 0;
const closeButton = document.querySelector("#close-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const openCloseButton = document.querySelector("#buttonOpenCloseMenu");
const menuMobileItems = document.querySelector("#menu-mobile-items");

/*Response API*/

//const HTMLResponse = document.querySelector('#app');
//const ul = document.createElement('ul');

/*-------------------------------------------------------------------------*/

openCloseButton.addEventListener("click", e => {
        menuMobileItems.classList.toggle("menu-mobile-closed");
    });

workItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        currentIndex = parseInt(item.getAttribute("data-id"));

        const contentArr = document.querySelectorAll("#details-container .item");

        document.querySelectorAll("#details-container .item").forEach(item => {item.classList.add('item-hide');})
        document.querySelectorAll("#details-container .item")[currentIndex].classList.toggle('item-hide');
        document.querySelector('#screen').style['animation-name'] = 'fade-in';   //cambio de pantalla con una ventana
        document.querySelector('body').style['overflow'] = 'hidden';

        setTimeout(() => {
            document.querySelector("#details-container").style.display = 'block';   
        }, 1000);

        setTimeout (() => {
            document.querySelector("#screen").style = '';
        }, 2000);
    });
});

closeButton.addEventListener('click', e => {
    e.preventDefault();

    document.querySelector('#screen').style['animation-name'] = 'fade-in';
    document.querySelector('body').style['overflow'] = 'auto';

    setTimeout(() => {
        document.querySelector("#details-container").style.display = 'none';   
    }, 1000);

    setTimeout (() => {
        document.querySelector("#screen").style = '';
    }, 2000);
});

prevButton.addEventListener('click', e => {
    e.preventDefault();
    if (currentIndex - 1 < 0) {
        return;
    }
    currentIndex--;
    loadGalleryItem(currentIndex);
    });

nextButton.addEventListener('click', e => {
    e.preventDefault();
    if(currentIndex + 1 === workItemsCount) {
        return;
    }
    currentIndex++;
    loadGalleryItem(currentIndex);
});

function loadGalleryItem(index) {
    const items = document.querySelectorAll('#details-container .item');

    items.forEach(item => {item.classList.add('item-hide')});
    items[index].classList.toggle('item-hide');
}

/*-----------------------------Fetch para la API---------------------------*/

const listUsers = async () => {
    const response = await fetch("https://reqres.in/api/users/");
    const users = await response.json();   //accedemos al json

    let tableBody = ``;
    users.data.forEach((user, index) => {
        //console.log(user);
        tableBody += `<tr>
        <td>${user.id}</td>
        <td>${user.email}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td><img src="${user.avatar}"></td>
        <tr>`;
    });

    document.getElementById("tableBody_Users").innerHTML = tableBody;
};

window.addEventListener("load", function() {
    listUsers();
});





//const tabla = document.querySelector('#app');


/*fetch(API_URL)
    .then(res => res.json())
    .then(datos => {
                let element =document.getElementById('app')
                element.innerHTML = `
                <p>${datos.data.first_name}</p>
                <p>${datos.data.email}</p>
                <img src="${datos.data.avatar}">`;
    });*/
//let element =document.getElementById('app');

//element.onclick = () => {
  //  getData();
//}

//const getData = async () => {
//    await fetch(API_URL).then((response) => {
//        return response.json();}).then((datos) => {
//            console.log(datos);
        

//        for(let i = 0; i < datos.length; i++) {
            //creamos una etiqueta html de imagen
//            const fotos = docment.createElement('img');
            //creamos un objeto para guardar las imagenes
//            fotos.src = datos.data[i].images["original"].API_URL;
//            fotos.className = "nb-3";
//            document.getElementById("app").appendChild(fotos);

//        }
//    })
    
//}

//getData();
//async function obtenerDatos() {
//    const response = await fetch(API_URL);
//    const json = await response.json();
    

//    for (let elemento = 0; elemento <= json.data.length; elemento++) {
//
//        element.innerHTML = `
//        <p>${elemento.first_name}</p>
//        <p>${elemento.email}</p>
//        <img src="${elemento.avatar}">`;

   /*Mi Objeto principal*/
    //console.log(json);
    //console.log(json.data[0].first_name);
    //console.log(json.data[1].first_name);
//    json.data.forEach(elemento => {
//        let element =document.getElementById('app')

//        element.innerHTML = `
//                <p>${elemento.first_name}</p>
//                <p>${elemento.email}</p>
//                <img src="${elemento.avatar}">`;
//    });


//obtenerDatos();
