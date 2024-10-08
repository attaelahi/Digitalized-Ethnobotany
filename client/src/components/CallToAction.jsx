import calls from '/src/assets/images/calls.jpeg';

const CallToAction = () => {
  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
          <img src={calls} alt="Digitalized Ethnobotany App" className="w-full max-w-[570px] object-cover" />
        </div>
        <div className="md:w-1/2 md:pl-12 order-1 md:order-2 text-center md:text-left">
          <p className="text-lg text-green-300 mb-4">Visit Our Digital Ethnobotany Website</p>
          <h2 className="text-4xl font-bold mb-6">Explore Plant Data on the Go</h2>
          <p className="text-gray-300 mb-8">
            Discover various plant species, their scientific details, and uses wherever you are. Stay connected to nature with 
            the Digitalized Ethnobotany Website. Explore a wealth of plant information from across the globe.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <a href="/about" className="bg-white text-green-900 px-6 py-3 rounded-lg shadow-lg">Wants to Know About Us</a>
            <a href="/Category" className="bg-white text-green-900 px-6 py-3 rounded-lg shadow-lg">Categories</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;