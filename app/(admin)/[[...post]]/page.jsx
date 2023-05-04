export default function PostPage({params}){
    console.log(params.post)
    return (
        <div>
            Post: {params.post}
        </div>
    )
}