const url = "http://www.omdbapi.com/?apikey=da68bd39"

export const fetchMovies = async (title) =>{
    const result = await fetch(`${url}&s=${title}`)
    return result.json();
}