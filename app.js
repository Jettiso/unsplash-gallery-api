const input = document.getElementById('input');
const grid = document.querySelector('grid');

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter')
    loadImg();
})

function loadImg() {
    removeImages();

    const url = "https://api.unsplash.com/search/photos/?query="+input.value+'&per_page=9&client_id=k82MjiXNiHvPwexKMd-3LCRSHaYurjJu_siNoXJVfCw';

    fetch(url).then(response => {
        console.log(response);
    })
}

function removeImages() {
    grid.innerHTML = '';
}