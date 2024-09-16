import about from '/src/assets/images/about.jpeg';

const About = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
          <img
            src={about}
            alt="about banner"
            className="w-full max-w-[670px] object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 order-1 md:order-2 text-center md:text-left">
          <p className="text-lg text-blue-500 mb-4">Digitalized Ethnobotany</p>
          <h2 className="text-4xl font-bold mb-6">
            We Are Trusted By Thousands Of People
          </h2>
          <p className="text-gray-600 mb-8">
            Welcome to Digitalized Ethnobotany! Our platform is dedicated to
            exploring the intricate relationship between plants and human
            culture. Through research, innovation, and technology, we aim to
            preserve and share the knowledge of traditional plant usage.
          </p>
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">Digitalized Ethnobotany</h3>
                <p className="text-gray-600">
                  Here, you all discover detailed information about various
                  plants, including their scientific names, growth patterns,
                  traditional uses, and more. Our mission is to make this rich
                  knowledge accessible to everyone while promoting the
                  importance of plant conservation.
                </p>
              </div>
            </div>
            {/* Add other about items similarly */}
          </div>
          <p className="text-gray-600 mb-8">
            Join us in our journey to bridge the gap between traditional
            knowledge and modern science. Feel free to explore, engage, and
            contribute to the conversation about plants and their crucial role
            in our world.
          </p>
          <a
            href="/"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;