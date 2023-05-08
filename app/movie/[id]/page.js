import React from 'react'
import Movies from "@/mocks/movies.json"
import MovieContainer from '@/containers/movie'
import {notFound} from "next/navigation"
function MoviePage({params,searchParams}) {
    console.log(params)
    const movieDetail = Movies.results.find(movie=>movie.id.toString() == params.id)
    if(!movieDetail){
        notFound();
    }
    if(searchParams.error === "true"){
        throw new Error("Error happened");
    }
  return (
    <MovieContainer movie={movieDetail}>MoviePage</MovieContainer>
  )
}

export default MoviePage