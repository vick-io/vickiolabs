import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Building the Future of Apps
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Vickio Labs creates innovative applications that solve real-world problems. 
              We combine cutting-edge technology with user-centered design to deliver exceptional experiences.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#apps"
                className="rounded-full bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700 transition-colors"
              >
                View Our Apps
              </a>
              <a
                href="#contact"
                className="rounded-full bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">Our Apps</h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
              <p className="text-xl text-gray-600">
                We're working on some exciting new applications. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-900">About Vickio Labs</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're passionate about creating innovative solutions that make a difference. 
              Our team combines technical expertise with creative problem-solving to build 
              apps that users love to use.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
                <p className="text-gray-600">Pushing boundaries with cutting-edge technology</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Quality</h3>
                <p className="text-gray-600">Delivering excellence in every project</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">User-First</h3>
                <p className="text-gray-600">Designing with users in mind</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-900">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Have a project in mind? We'd love to hear from you.
            </p>
            <a
              href="mailto:vickiolabs@gmail.com"
              className="inline-block rounded-full bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
