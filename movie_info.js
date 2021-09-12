const api_key = "api_key=02904aaa6140ad4e8e75cd0725d9b635"
const base_url = "https://api.themoviedb.org/3"

const movieInfo = `${base_url}/discover/movie/${getMovieId()}?api_key=${api_key}`;

const image_url = "https://image.tmdb.org/t/p/w500"
const container = document.querySelector(".container-wrapper")
const container1 = document.querySelector(".container-wrapper1")
const container2 = document.querySelector(".container-wrapper2")

// getMovieId(now_showing)
getMovieInfo(movieInfo);

function getMovieId (){
    const param = new URLSearchParams(window.location.search);
    return param.get("movie_id");
}

function getMovieInfo(url) {
    fetch(url).then(res => res.json()).then(data =>{
        // console.log(data.results)
        showInfo(data.results)
    }).catch((err) => {
        console.log('error', err)  
    })
}

function showInfo(data){
    container.innerHTML= ''
    
    console.log(data);
}
