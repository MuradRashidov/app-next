import HomeContainer from "@/containers/home"
import Link from "next/link"
import Movies from "@/mocks/movies";
export default function Home({params}) {
    let selectedCategory;
    if(params.category?.length>0){
        selectedCategory = true;
    }
  return (
    <div>
     <HomeContainer
     selectedCategory={{
        id:params.category?.[0] ?? "",
        movies:selectedCategory?Movies.results.slice(0,7):[]
     }}
     />

     
     
    </div>
  )
}
