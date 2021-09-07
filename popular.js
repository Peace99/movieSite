const api_key = "api_key=02904aaa6140ad4e8e75cd0725d9b635"
const base_url = "https://api.themoviedb.org/3"
const popular = base_url + "/discover/movie?sort_by=popularity.desc&"+api_key

const image_url = "https://image.tmdb.org/t/p/w500"
const container1 = document.querySelector(".container1")

getPopular(popular)

function getPopular(url1){
    fetch(url1).then(res => res.json()).then(data1 => {
        showPopular(data1.results)
    })
}

function showPopular(data1){
    container1.innerHTML= ''
    
    data1.forEach(pops => {
        const {title, poster_path,release_date} = pops
        const movie2 = document.createElement("div")
        movie2.classList.add('container1')
        movie2.innerHTML = `
        <img src="${image_url+poster_path}"alt="${title}">
        <div class="movie-title">
           <h3>${title}</h3>
        </div>
        <div class="movie-info">
            <h3 class="date">${release_date} </h3>
         </div>
        `

        container1.appendChild(movie2)
    });
}