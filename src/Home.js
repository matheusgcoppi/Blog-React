
import BlogList from "./BlogList";
import useFetch from "./useFatch";

const Home = () => {
    const {data : blogs, isPending, error, handleDelete} = useFetch('http://localhost:8000/blogs' )

    return ( 
        <div className="home">
              { error && <div> { error } </div> } {/* If There is an error show up */}
              { isPending && <div>Loading ...</div>} {/* If pending is true We'll use Loading ... in the browser */}
              { blogs && <BlogList blogs = { blogs } title = {"All Blogs"} handleDelete = { handleDelete }></BlogList> } {/*If blogs are null do it*/}                    
        </div>
     );
}
 
export default Home;

