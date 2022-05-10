import { useParams, useHistory } from "react-router-dom";

// localhost:3000/blogs/blog-id-1
// id = blog-id-1
const BlogDetails = () => {
    const { id } = useParams();

    const history = useHistory();
    
    
    return ( 
        <div className="blog-details">
            <h2>Blog Details - { id }</h2>
        </div>
    );
}
 
export default BlogDetails;