import { useState } from "react"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(
      (prev) => ({
        ...prev,
        [name]: value,
      }));
  };

  const postContactData = (e) => {
    e.preventDefault(),
      console.log(formData);

    const contactData = {
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }
    }

    axios.post(`${import.meta.env.VITE_APP_URL}/api/contact-forms`, contactData, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(function (response) {
      console.log(response);
      toast.success('Form submitted Successfully!');
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    }).catch(function (error) {
      console.log(error);
      toast.error("Something went wrong! Please try again later");
    });

  }



  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />

      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-indigo-700 text-2xl font-semibold inline-block ">Contact Us</h2>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12 mt-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally independent from
                manufacturer and other group control gives you confidence that we will only recommend what
                is right for you.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-indigo-700"> 01311347688 </a>

                <address className="mt-2 not-italic">
                  Dakhhin Dharandi, Kamlapur, Patuakhali, Bangladesh
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 mb-5 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4" onSubmit={postContactData}>
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
