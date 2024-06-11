
export default function ContactSection() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-indigo-700 text-2xl font-semibold inline-block underline ">Contact Us</h2>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12 mt-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally independent from
                manufacturer and other group control gives you confidence that we will only recommend what
                is right for you.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-indigo-700"> 0151 475 4450 </a>

                <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 mb-5 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                    placeholder="Message"
                    rows="6"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-indigo-500 hover:bg-indigo-700 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}