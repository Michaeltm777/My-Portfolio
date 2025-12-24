export default function PortfolioDemo() {
  return (
    <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-16 text-center">
        <h1 className="text-5xl font-bold mb-4">John Developer</h1>
        <p className="text-xl text-gray-300 mb-8">Full Stack Developer & Designer</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            View Work
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            Contact Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="p-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center">
            I'm a passionate developer with 5+ years of experience creating beautiful,
            functional websites and applications. I specialize in modern web technologies
            and user-centered design.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="p-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-gray-200 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Project {item}</h3>
                <p className="text-gray-600 mb-4">Modern web application with cutting-edge technology</p>
                <a href="#" className="text-gold font-semibold hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Python', 'AWS'].map((skill) => (
            <div key={skill} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">💻</div>
              <p className="font-semibold text-gray-900">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-16 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-300 mb-8">Have a project in mind? Let's discuss how we can bring it to life.</p>
          <button className="bg-gold text-black px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  )
}

