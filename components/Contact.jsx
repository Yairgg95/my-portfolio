import { useState } from "react";
import { useForm } from "react-hook-form";
import { showToast } from "./CustomToast";
import {
  Mail,
  Send,
  MessageCircle,
  Loader,
} from "lucide-react";



export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data) => {
    setIsSending(true);

    try {
      const res = await fetch("https://www.yairggdev.lat/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      showToast("succes", "Thank you! Your message has been sent.");
    } catch (error) {
      showToast("error", error.message || "Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="h-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center pt-20 md:pt-24 lg:pt-36"
    >
      <h2 className="text-3xl md:text-5xl  text-center font-bold bg-gradient-to-br from-[#007bff] to-[#6f42c1] text-transparent bg-clip-text">
        Contact
      </h2>

      <div className="flex flex-col lg:flex-row mt-8 md:mt-16">
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 space-y-6 my-3">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <MessageCircle className="text-blue-500" /> Talk to me
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base lg:text-lg text-center md:text-start ">
            If you have any questions or want to discuss a project, feel free to
            contact me via email or WhatsApp.
          </p>
          <a
            href="mailto:yair.g.guadarrama@gmail.com"
            className="text-blue-500 hover:underline flex items-center gap-2"
          >
            <Mail /> Send me an email
          </a>
          <a
            href="https://wa.me/+525535586521"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline flex items-center gap-2"
          >
            <MessageCircle /> Chat with me on WhatsApp
          </a>
        </div>

        <div className="lg:w-1/2 w-full bg-white dark:bg-gray-800 p-6 shadow-lg rounded-2xl mt-6 md:mt-16 lg:mt-0">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Send className="text-purple-500" /> Write me your project
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4"
          >
            <div className="relative">
              <label className="absolute left-3 top-1 text-gray-500 dark:text-white font-bold text-sm">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 mt-6"
                {...register("name", {
                  required: "Name is required",
                  maxLength: {
                    value: 50,
                    message: "Name must be less than 50 characters",
                  },
                })}
              />
            </div>
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}

            <div className="relative">
              <label className="absolute left-3 top-1 text-gray-500 dark:text-white font-bold  text-sm">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 mt-6"
                {...register("email", {
                  required: "Email is required",
                  maxLength: {
                    value: 100,
                    message: "Email must be less than 100 characters",
                  },
                })}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}

            <div className="relative">
              <label className="absolute top-1 left-3 text-gray-500 dark:text-white font-bold  text-sm">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                className="p-3 border rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 mt-6"
                {...register("message", {
                  required: "Message is required",
                  maxLength: {
                    value: 500,
                    message: "Message must be less than 500 characters",
                  },
                })}
              />
            </div>
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
            >
              {isSending ? (
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin" />
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send /> Submit
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
