import { Link, useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Tag from "./Tag";
import Loader from "../Loader";
import Error from "../Error";


export default function SingleBlogPage() {

  const { id } = useParams();
  const { data: blog, loading, error } = useFetch(`${import.meta.env.VITE_APP_URL}/api/blogs/${id}?populate=*`);


  if (loading) {
    return (
      <Loader />
    );
  }

  if (error) {
    return (
      <Error />
    );
  }

  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto w-[750px]">
          <h3 className="z-10 bg-white text-indigo-700 text-center font-semibold uppercase inline-block absolute top-40 -ml-1 px-2 py-1 w-[95px] rounded -rotate-45">{blog.attributes.Category}</h3>
          <img className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[750px]  -mt-1 object-cover duration-500 hover:grayscale rounded-xl"
            src={`${import.meta.env.VITE_APP_URL}${blog?.attributes.Image.data[0].attributes.url}`}
            alt={blog.attributes.Title}
          />
        </div>

        <div className="mx-auto w-[550px] mt-[25px] text-center">
          <h1 className="text-indigo-700 text-3xl font-semibold">
            {blog.attributes.Title}
          </h1>
          <p className="text-justify my-4 text-gray-400 text-[17px]">
            <abbr title="Delectus Digital Agency" className=" no-underline">{blog.attributes.Excerpt}</abbr>
          </p>

          <div className="prose text-justify mx-auto w-[750px]">
            <BlocksRenderer content={blog.attributes.Description} />
          </div>

          <Link to={"/blog"}>
            <button className="bg-indigo-700 hover:bg-indigo-900 duration-500 px-3 py-1 font-semibold text-white mt-8 rounded">Back to Blog</button>
          </Link>

        </div>

        {/* <div className="mx-auto w-[750px] mt-5">
          <p className="text-xl text-indigo-700">
            <span className="text-2xl text-amber-500">Tags:</span>
            {blog.attributes.Tags[5].name}
          </p>
        </div> */}

        <div className="mx-auto w-[750px] mt-5">
          <h3 className="mb-3 ml-1">Tags:</h3>
          {blog.attributes.Tags?.map((tag) => (
            <Tag key={tag.name} tag={tag} />
          ))}
        </div>

      </section>
    </>
  )
}

