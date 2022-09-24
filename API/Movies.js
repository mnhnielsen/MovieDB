const url = "http://www.omdbapi.com/?apikey=da68bd39"

export const fetchMovies = async (title) =>{
    const result = await fetch(`${url}&s=${title}`)
    return result.json();
}

export const fetchMovie = async (id) => {
    const result = await fetch(`${url}&i=${id}`)
    return result.json();
}