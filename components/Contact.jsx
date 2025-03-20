import { Mail, Send, MessageCircle } from "lucide-react";

{/*TO DO fetch to send email */ }

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center pt-6 md:pt-2 lg:mt-16"
    >
      <h2 className="text-3xl md:text-5xl  text-center font-bold bg-gradient-to-br from-[#007bff] to-[#6f42c1] text-transparent bg-clip-text">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row my-3 md:my-6 space-y-6">
        <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-6 my-3">
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

        <div className="md:w-1/2 w-full bg-white dark:bg-gray-800 p-6 shadow-lg rounded-2xl">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Send className="text-purple-500" /> Write me your project
          </h3>
          <form className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
            />
            <textarea
              placeholder="Tell me about your project..."
              className="p-3 border rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
            />
            <button type="button" className="mt-4 bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
              <Send /> Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
