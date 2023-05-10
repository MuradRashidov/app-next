import React from 'react'
import Movies from "@/mocks/movies.json"
import MovieContainer from '@/containers/movie'
import {notFound} from "next/navigation"
import { getMovie } from '@/services/movie'
async function MoviePage({params,searchParams}) {
    const movieDetail = await getMovie(params.id)
    console.log(movieDetail)
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