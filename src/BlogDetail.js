import { useParams } from "react-router-dom";
import useFetch from "./useFatch";
import {  useNavigate } from "react-router-dom"

const BlogDetail = () => {

    const { id } = useParams()
    const { error, data: blog, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate =  useNavigate(); 

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,{
        method: 'DELETE'
    }).then(() => {
        navigate('/');
        console.log("deleted")
    })
    }

    return ( 
        <div className="blog-detail">
        { isPending && <div>Loading ... </div> }
        { error && <div>{error} </div> }
        { blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={handleDelete}>delete blog</button>
            </article>
            )}
            <h2>Blog Detail - { id }</h2>
        </div>
     );
}
 
export default BlogDetail;