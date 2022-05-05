const BlogList = ({title, blogs, handleDelete}) => {

    return (  
        <div className="blog-list">
            <h2>{title}</h2>
             {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written byt {blog.anothor}</p>
                    <botton className="delete" onClick={()=> handleDelete(blog.id)}>delete blog</botton>
                </div>          
            ))} 
        </div>
    );
}
 
export default BlogList;
