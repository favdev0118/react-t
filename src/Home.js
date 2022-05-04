import { useState } from 'react';

import './App.css';

const Home = () => {
    const [blogs, setBlogs] = useState ([
        { title: 'My new websites', body: 'lorem ipsum', anothor: 'mario', id:1},
        { title: 'Welcome party', body: 'lorem ipsum', anothor: 'yousi', id:2},
        { title: 'Web dev top tips', body: 'lorem ipsum', anothor: 'mario', id:3}
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written byt {blog.anothor}</p>
                </div>          
            ))}  
        </div>
     );
}
 
export default Home;