const APIkey = '';
let isFetching = false;
let page = 1;

async function getImages(currentPage) {
    isFetching = true;

    try {
        const response = await fetch(`https://api.unsplash.com/photos?page=${currentPage}&per_page=10`, { headers: { Authorization: 'Client-ID ' + APIkey } });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const json = await response.json();
        // return new Promise((resolve, reject) => {
        // 	reject(new Error('Ошибка'));
        // });
        return json;
    } finally {
        isFetching = false;
    }
}

(async function () {
    try {
        const result = await getImages(page++);
        renderImages(result);
    } catch (error) {
        alert(error);
    }
})();

// const result = await getImages(page++);
// renderImages(result);

// getImages(page++)
// 	.then((result) => {
// 		renderImages(result);
// 	})
// 	.catch((error) => {
// 		alert(error);
// 	});

function renderImages(photoArray) {
    const photoContEl = document.querySelector('#photo-container');
    photoArray.forEach((photo) => {
        photoContEl.insertAdjacentHTML('beforeend', `<img class="photo" src="${photo.urls.regular}">`);
    });
}

window.addEventListener('scroll', async () => {
    const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );

    if (window.scrollY >= scrollHeight * 0.75 && !isFetching) {
        try {
            renderImages(await getImages(page++));
        } catch (error) {
            alert(error);
        }
    }
});