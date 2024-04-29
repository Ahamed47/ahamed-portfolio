import { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const displayToast = () => {
    toast.success("Thank you! Your message has been successfully sent.");
  };

  const errorToast = () => {
    toast.error(
      "Sorry, we encountered an issue and couldn't send your message. Please try using your g-mail id."
    );
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...formData,
        access_key: "ff5672ee-ce5c-4b25-85d1-8aa31a37be3f",
      }),
    });

    const result = await response.json();
    if (result.success) {
      // setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      displayToast();
    } else {
      errorToast();
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Contact</h2>
      <div className="flex flex-col md:flex-row">
        {/* Left side content */}
        <div className="w-full md:w-1/2 pr-10">
          <div className="flex items-center mb-4">
            <AiOutlineMail className="mr-2 dark:text-white" />
            <p className="text-lg text-gray-800 dark:text-white">
              ahamedabdul24@gmail.com
            </p>
          </div>
          <div className="flex items-center mb-4">
            <AiOutlinePhone className="mr-2 dark:text-white" />
            <p className="text-lg text-gray-800 dark:text-white">
              +91 9003637701
            </p>
          </div>
          <p className="text-base text-gray-800 dark:text-white mb-4">
            {`Thank you for exploring my portfolio! I'm genuinely eager to engage
            with my audience and open to any questions, feedback, collaboration
            proposals you might have. Feel free to reach out to me via email.
            Moreover, let's connect on LinkedIn for professional networking
            opportunities. You can also find me on Facebook, Twitter, and
            Instagram through the links provided in the footer section.`}
          </p>
          <p className="text-base text-gray-800 dark:text-white">
            {`Your insights and opinions are invaluable to me, and I'm grateful
            for the chance to interact with you directly. I'm excited about the
            prospect of collaborating on innovative projects together and
            eagerly await the opportunity to connect with you further.`}
          </p>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 pt-8 md:pt-0">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2 dark:text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#41C9E2] to-[#378CE7] text-white hover:from-[#3c6a9b] hover:to-[#25486d] font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
