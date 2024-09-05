

export default function Home() {
  
  return (
    <div className="min-h-screen bg-slate-50 text-white">

      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800 fixed w-full top-0 z-10">
        <h1 className="text-2xl font-bold">Self-Appraisal</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-blue-400">About</a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-400">Features</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">Contact Us</a>
            </li>
            <li>
              <a href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign in</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-slate-200 to-blue-100 pt-24 text-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 ">Welcome to Faculty Self-Appraisal System</h1>
        <p className="text-xl mb-8">A platform to simplify and automate the appraisal process</p>
        <a
          href="/register"
          className="bg-gradient-to-l from-teal-300 to-blue-700 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
        >
          Get Started
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="text-black py-16 px-8 bg-blue-100">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          The Faculty Self-Appraisal System is designed to help educators easily document their academic and professional contributions. Whether it&apos;s tracking research papers, attending seminars, or managing course improvements, this system empowers faculty to streamline the appraisal process in an efficient and transparent manner.
        </p>
      </section>

      {/* Key Features Section */}
      <section id="features" className="text-black py-16 px-8 bg-blue-100">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Real-Time Tracking</h3>
            <p>Update and monitor your academic contributions in real time.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Detailed Reports</h3>
            <p>Generate comprehensive PDF reports for performance reviews.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Secure and Reliable</h3>
            <p>Your data is safe, encrypted, and available whenever you need it.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 px-8 text-slate-700 bg-blue-100">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded bg-blue-200 text-white focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded bg-blue-200 text-white focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 rounded bg-blue-200 text-white focus:outline-none focus:ring focus:ring-blue-600"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400">&copy; 2024 Faculty Self-Appraisal System. All rights reserved.</p>
        <p className="text-sm">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a> | <a href="#" className="hover:text-blue-400">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}
