import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {

  return (
    <>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt={blog.attributes.Title}
          src={`${import.meta.env.VITE_APP_URL}${blog?.attributes.Image.data[0].attributes.url}`}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <time className="block text-xs text-gray-500 mb-3"> 19th june 2024 </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">
              {blog.attributes.Title}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {blog.attributes.Excerpt.slice(0, 100)}...
          </p>

          <Link to={`/blog/${blog.id}`}>
            <button className="bg-indigo-700 hover:bg-indigo-900 duration-500 px-3 py-1 font-semibold text-white mt-3 rounded">Read More</button>
          </Link>
        </div>
      </article>
    </>
  )
}
