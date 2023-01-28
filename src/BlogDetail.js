import { useParams } from "react-router-dom";
import useFetch from "./useFatch";

const BlogDetail = () => {

    const { id } = useParams()
    const { error, data: blog, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blog-detail">
        { isPending && <div>Loading ... </div> }
        { error && <div>{error} </div> }
        { blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
            </article>
            )}
            <h2>Blog Detail - { id }</h2>
        </div>
     );
}
 
export default BlogDetail;