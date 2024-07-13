import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BlogCard from "../Blog/BlogCard";

export default function BlogSection() {

  const { data, loading, error } = useFetch(`${import.meta.env.VITE_APP_URL}/api/blogs?populate=*`);


  if (loading) {
    return (
      <div>
        <h2>Loading.....</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Something went wrong!</h2>
      </div>
    );
  }

  // if (!data || data.length === 0) {
  //   return (
  //     <div>
  //       <h2>No blogs available.</h2>
  //     </div>
  //   );
  // }

  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <h2 className="text-indigo-700 text-2xl font-semibold underline mt-[60px]">Our insights Blog</h2>
        <div className="grid grid-cols-3 gap-8 mt-10">
          {data?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}


          {/* {
            data && data.length > 0 ? (
              data.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            ) : (
              <p>No blogs available</p>
            )
          } */}

        </div>
        <div className="text-center mt-7">
          <NavLink to={"/blog"}>
            <a href={""} className="text-indigo-700 hover:underline uppercase font-semibold">See more</a>
          </NavLink>
        </div>
      </section >
    </>
  )
}

{/* <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm mt-[70px]">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                dignissimos. Molestias explicabo corporis voluptatem?
              </p>

              <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Find out more

                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
          <article className="mt-[70px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                dignissimos. Molestias explicabo corporis voluptatem?
              </p>

              <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Find out more

                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
          <article className="mt-[70px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                dignissimos. Molestias explicabo corporis voluptatem?
              </p>

              <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Find out more

                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </a>
            </div>
          </article> */}