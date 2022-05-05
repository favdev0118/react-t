import { useEffect, useState } from 'react';

import './App.css';
import BlogList from './BloglList';

const Home = () => {
    const [blogs, setBlogs] = useState (null);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }

    useEffect (()=> {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data=> {
            setBlogs(data);
        });
    }, []);


    return ( 
        <div className="home">
           {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> }
        </div>
     );
}
 
export default Home;