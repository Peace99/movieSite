const navToggle = document.querySelector(".nav-toggle")
const linkContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function(){
    //linkContainer.classList.toggle("show-links")
    const containerHeight = linkContainer.getBoundingClientRect().height
    const linkheight = links.getBoundingClientRect().height

    if (containerHeight === 0){
        linkContainer.style.height = `${linkheight}px`
    }
    else {
        linkContainer.style.height = 0
    }
})


const api_key = "api_key=02904aaa6140ad4e8e75cd0725d9b635"
const base_url = "https://api.themoviedb.org/3"

const now_showing = base_url + "/discover/movie?primary_release_date.gte=2021-07-11&primary_release_date.lte=2021-09-01&"+ api_key
const image_url = "https://image.tmdb.org/t/p/w500"
const container = document.querySelector(".container-wrapper")

getNowShowing(now_showing)

function getNowShowing(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results)
       showMovies(data.results)
    }).catch((err) => {
        console.log('error', err)
    })
}


function showMovies(data){
    container.innerHTML = ''
   
    data.forEach(movie => {
        const {title, poster_path,release_date} = movie
        const movie1 = document.createElement("div")
        movie1.classList.add('container')
        movie1.innerHTML = `
        <img src="${image_url+poster_path}" alt="${title}">

        <div class="movie-title">
           <h3>${title}</h3>
        </div>
        <div class="movie-info">
            <h3 class="date">${release_date}</h3>
         </div>
        `
        
        container.appendChild(movie1)

    });
}

