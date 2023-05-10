import HomeContainer from "@/containers/home"
import Link from "next/link"
import Movies from "@/mocks/movies";
import {
  getSingleCategory,
  getCategories,
  getPopularMovies,
  getTopRatedMovies
} from "@/services/movie";

export default async function Home({params}) {
    let selectedCategory;
    const [{results:topRatedMovies},{results:popularMovies},{genres:categories}] = await Promise.all([getPopularMovies(), getPopularMovies(), getCategories()])
    // const {results:popularMovies} = await getPopularMovies();
    // const {results:topRatedMovies} = await getTopRatedMovies();
    if(params.category?.length>0){
      const  {results} = await getSingleCategory(params.category[0]);
        selectedCategory = results;
    }
  return (
    <div>
     <HomeContainer
     topRatedMovies={topRatedMovies}
     popularMovies={popularMovies}
     categories={categories}
     selectedCategory={{
        id:params.category?.[0] ?? "",
        movies:selectedCategory?selectedCategory.slice(0,7):[]
     }}
     />

     
     
    </div>
  )
}
