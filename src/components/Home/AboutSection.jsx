import { NavLink } from "react-router-dom";

export default function AboutSection() {
  return (
    <>
      <section>

        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <h2 className="text-indigo-700 text-2xl font-semibold mt-[40px] absolute">About</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                <abbr title="Our Mission" className=" no-underline " >Specialist in Digital Marketing Solutions </abbr> </h2>

              <p className="mt-4 text-gray-600">
                Rhoncus vulputate amet ultrices nullam libero vitae egestas egestas mauris egestas etiam fringilla nibh ultricies volutpat turpis dapibus arcu tellus et ut vestibulum lectus maecenas egestas facilisi nam enim curabitur euismod faucibuso.
                <br />

                Dignissim tellus tempor sit faucibus mi diam posuere etiam at fermentum a vestibulum in eget cursus a id adipiscing scelerisque blandit neque, scelerisque velit commodo sit quam vel massa sit aliquam arcu nulla velit magna enim dolor enim eu, velit aliquet id in risus malesuada faucibus pharetra.
              </p>

              <NavLink to={"/about"}>
                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Check full details
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
