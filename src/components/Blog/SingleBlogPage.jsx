import { Link, useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";

export default function SingleBlogPage() {

  const { id } = useParams();
  const { data: blog, loading, error } = useFetch(`${import.meta.env.VITE_APP_URL}/api/blogs/${id}?populate=*`);


  if (loading) {
    return (
      <div className="max-w-6xl mx-auto text-center py-44">
        <h2 className="text-center text-xl text-indigo-400 uppercase">
          Loading.....
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto text-center py-44">
        <h2 className="text-center text-xl text-slate-700 font-semibold capitalize">
          Something went wrong!
        </h2>
        <h1 className="text-8xl text-slate-300 uppercase mt-3">Opps😕</h1>
      </div>
    );
  }

  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto w-[750px]">
          <h3 className="z-10 bg-white text-indigo-700 text-center font-semibold uppercase inline-block absolute top-40 -ml-1 px-2 py-1 w-[95px] rounded -rotate-45">{blog.attributes.Category}</h3>
          <img className="h-[400px] w-[750px] -mt-1 object-cover duration-500 hover:grayscale rounded-xl"
            alt={blog.attributes.Title}
            src={`${import.meta.env.VITE_APP_URL}${blog?.attributes.Image.data[0].attributes.url}`}
          />
        </div>

        <div className="mx-auto w-[750px] mt-[25px] text-center">
          <h2 className="text-indigo-700 text-2xl font-semibold">
            {blog.attributes.Title}
          </h2>
          <p className="text-justify mt-4 text-gray-400 text-[17px]">
            <abbr title="Delectus Digital Agency" className=" no-underline">{blog.attributes.Excerpt}</abbr>
          </p>
          <Link to={"/blog"}>
            <button className="bg-indigo-700 hover:bg-indigo-900 duration-500 px-3 py-1 font-semibold text-white mt-8 rounded">Back to Blog</button>
          </Link>
        </div>

      </section>
    </>
  )
}

