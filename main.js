/*API URL*/
const API_URL="https://jsonplaceholder.typicode.com";

const workItems = document.querySelectorAll('.work .item');
const workItemsCount = workItems.length;
let currentIndex = 0;
const closeButton = document.querySelector("#close-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const openCloseButton = document.querySelector("#buttonOpenCloseMenu");
const menuMobileItems = document.querySelector("#menu-mobile-items");

/*Response API*/

const HTMLResponse = document.querySelector('#app');
const ul = document.createElement('ul');

/*--------------------------------------------------------------------------*/
openCloseButton.addEventListener("click", e => {
    menuMobileItems.classList.toggle("menu-mobile-closed");
});

workItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        currentIndex = parseInt(item.getAttribute("data-id"));

        const contentArr = document.querySelectorAll("#details-container .item");

        document.querySelectorAll("#details-container .item").forEach(item => {
            item.classList.add('item-hide');
        });

        document.querySelectorAll("#details-container .item")[currentIndex].classList.toggle('item-hide');

	    document.querySelector('#screen').style['animation-name'] = 'fade-in';

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
    if(currentIndex + 1 == workItemsCount) {
        return;
    }
    currentIndex++;
    loadGalleryItem(currentIndex);
});

function loadGalleryItem(index) {
    const items = document.querySelectorAll('#details-container .item');

    items.forEach(item => {item.classList.add('item-hide')});
    items[index].classList.toogle('item-hide');
}

/*-----------------------------Fetch para la API---------------------------*/
fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        users.forEach(user => {
            let elem = document.createElement('li');
            elem.appendChild(document.createTextNode(`${user.name} , ${user.email}`));
            ul.appendChild(elem);
        });

        HTMLResponse.appendChild(ul);
    });