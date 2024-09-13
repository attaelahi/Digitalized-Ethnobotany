import { Link } from 'react-router-dom'; // Ensure you have this if using React Router

const Hero = () => {
  return (
    <section className="bg-green-900 text-white py-20 min-h-[70vh]">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Welcome on Digitalized Ethnobotany
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm mb-8">
            Our platform is dedicated to exploring the intricate relationship between plants 
            and human culture. Through research, innovation, and technology, 
            we aim to preserve and share the knowledge of traditional plant usage.
          </p>
          <Link
            to='/search'
            className='text-xs sm:text-sm text-white-500 font-bold hover:underline'
          >
            View all posts
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src="./public/images/hero.png" alt="hero " className="w-full max-w-[570px] object-cover" />
        </div>
      </div>
    </section>
  ); 
};

export default Hero;
