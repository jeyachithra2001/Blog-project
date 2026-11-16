import Footer from "../components/footer"

function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-amber-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          About Our Blog
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
          Welcome to our blog! A place where ideas, stories,
          and knowledge come together.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8 mb-4">
              We are passionate about sharing knowledge, experiences,
              and creative ideas with the world. Our blog is designed
              to inspire readers, provide useful information, and
              create a community of curious minds.
            </p>

            <p className="text-gray-600 leading-8">
              Whether you are looking for inspiration, learning
              something new, or exploring interesting topics,
              we have something for everyone.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
              alt="Person working on a blog"
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
          </div>

        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-indigo-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-7">
              Our mission is to provide valuable, engaging, and
              easy-to-understand content that helps people learn,
              grow, and stay inspired.
            </p>
          </div>

          <div className="bg-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-7">
              Our vision is to build a community where people can
              share their thoughts, discover new perspectives,
              and connect through meaningful stories.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose Us?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-3">
              Quality Content
            </h3>
            <p className="text-gray-600">
              Explore informative and interesting articles
              across different topics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-3">
              Fresh Ideas
            </h3>
            <p className="text-gray-600">
              Discover new ideas, perspectives, and inspiration
              every day.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-3">
              Community
            </h3>
            <p className="text-gray-600">
              Connect with readers and share your thoughts
              with the community.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-gray-900 text-white text-center py-14 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Be Part of Our Journey!
        </h2>

        <p className="text-gray-300 mb-6">
          Read, learn, share, and grow with us.
        </p>

        <a
          href="/blogs"
          className="inline-block bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-lg transition"
        >
          Explore Blogs
        </a>
      </section>
      
      <Footer/>
    </div>
  );
}

export default About;