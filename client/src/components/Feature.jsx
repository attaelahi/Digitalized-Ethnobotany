import { Link } from "react-router-dom";
import shurb from '/src/assets/icons/shrubs.svg';
import flowers from '/src/assets/icons/flower.svg';
import tree from '/src/assets/icons/tree.svg';
import hurbs from '/src/assets//icons/hurbs.svg';
const Features = () => {
  return (
    <section className="py-20 bg-gray-100 min-h-[70vh]">
      <div className="container mx-auto text-center">
        {/* <p className="text-lg text-blue-500 mb-4">Our Categories</p> */}
        <h2 className="text-4xl font-bold mb-12">
          Digitalized Ethnobotany Categories
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Flowers Category */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-500 text-4xl mb-4">
              <img
                src={flowers}
                alt="Flower Icon"
                className="h-16 w-16 mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Flowers</h3>
            <p className="text-gray-600 mb-4">
              Discover the beauty and uses of various flowers.
            </p>
            <Link
              to="/category/flowers"
              className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block hover:bg-blue-600 transition duration-300"
            >
              Explore Flowers
            </Link>
          </div>

          {/* Trees Category */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-500 text-4xl mb-4">
            <img 
             src={tree}  // Correct way to insert the image variable
             alt="Tree Icon" 
             className="h-16 w-16 mx-auto"
             />

            </div>
            <h3 className="text-xl font-bold mb-4">Trees</h3>
            <p className="text-gray-600 mb-4">
              Learn about different trees and their significance.
            </p>
            <Link
              to="/category/trees"
              className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block hover:bg-blue-600 transition duration-300"
            >
              Explore Trees
            </Link>
          </div>

          {/* Herbs Category */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-500 text-4xl mb-4">
              <img
                src={hurbs}
                alt="Flower Icon"
                className="h-16 w-16 mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Herbs</h3>
            <p className="text-gray-600 mb-4">
              Explore the world of medicinal herbs and significance.
            </p>
            <Link
              to="/category/herbs"
              className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block hover:bg-blue-600 transition duration-300"
            >
              Explore Herbs
            </Link>
          </div>

          {/* Shrubs Category */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-500 text-4xl mb-4">
              <img
                src={shurb}
                alt="Flower Icon"
                className="h-16 w-16 mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Shrubs</h3>
            <p className="text-gray-600 mb-4">
              Discover the importance of shrubs in ecosystems.
            </p>
            <Link
              to="/category/shrubs"
              className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block hover:bg-blue-600 transition duration-300"
            >
              Explore Shrubs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
