

export default function useFetch() {

  useEffect(() => {
    fetch("http://localhost:1337/api/blogs?populate=*").then((res) => res.json())
      .then((data) => {
        console.log("strapi blogs:", data.data);
        setBlogs(data.data);
        // console.log(`http://localhost:1337${data.data[0].attributes.Image.data[0].attributes.url}`);
        // console.log(data.data[0].attributes.Title);
      });
  }, []);



}
