import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';


function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/blogs?populate=*").then((res) => res.json())
      .then((data) => {
        console.log("strapi blogs:", data.data);
        setBlogs(data.data);
        // console.log(`http://localhost:1337${data.data[0].attributes.Image.data[0].attributes.url}`);
        // console.log(data.data[0].attributes.Title);
      });
  }, []);

  return (
    <>
      <section className='max-w-[700px] p-20 mx-auto'>
        {
          blogs.map((blog) => (
            <div key={blog.id} className='shadow mb-5 p-10 text-center'>
              <h2 className='mb-3 text-red-500 font-semibold text-2xl'>{blog.attributes.Title}</h2>
              < img src={`http://localhost:1337${blog.attributes.Image.data[0].attributes.url}`} alt="" />
              <p className='mt-6 text-justify'>{blog.attributes.Description[0].children[0].text}</p>
            </div>
          ))
        }
      </section >
    </>
  )
}

export default App
