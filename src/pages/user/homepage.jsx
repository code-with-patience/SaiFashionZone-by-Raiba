import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import Navbar from "../../components/user/navbar/navbar";
import Footer from "../../components/user/footer/footer";
import ClubbedBox from "./club";

// Scroll Progress Bar Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <motion.div
      style={{ scaleX: scrollProgress / 100 }}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500 origin-left z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  );
};

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-cubic",
      once: true,
    });
  }, []);

  const productCategories = [
    {
      // img: "https://i.pinimg.com/originals/96/24/6e/96246e3c133e6cb5ae4c7843f9e45b22.jpg",
      img: "https://thesstudioonline.com/cdn/shop/articles/paripoorna-blog-6-65c49bf9cc585.webp?v=1707384169&width=700",
      title: "Sarees",
      description:
        "A saree isn't just an outfit; it's a symbol of grace and confidence woven into every fold.",
      category: "Ladies wear",
    },
    {
      img: "https://img.freepik.com/premium-photo/collection-men-s-clothing-including-jacket-pants-hat_793585-43.jpg?w=740",
      title: "Mens Wear",
      description:
        "This encompasses a wide variety of garments including shirts, trousers, jackets, suits, sweaters",
      // description: "Transform spaces with our sophisticated decor books.",
      category: "Mens",
    },
    {
      // img: "https://tse1.mm.bing.net/th?id=OIP.EYAqW5p_HzCoXKq1dXvGyQHaFj&pid=Api&P=0&h=180",
      img: "https://3.imimg.com/data3/ND/MH/MY-8335494/designer-kids-mannequins-1000x1000.jpg",
      title: "Girls Collections",
      description:
        "Girls' wear collections offer a vibrant array of styles and designs, catering to diverse tastes and occasions.",
      category: "Gift Boxes",
    },
    {
      // img: "https://tse3.mm.bing.net/th?id=OIP.90zsFkK9l2Nttf3fQu12ZwHaE8&pid=Api&P=0&h=180",
      img: "https://m.media-amazon.com/images/I/61ge8BmxqRL._AC_SL1500_.jpg",
      title: "Boys Collections",
      description:
        "Boys' wear collections offer a wide range of styles and designs, encompassing both casual and formal wear.",
      // description: "Transform spaces with our sophisticated decor books.",
      category: "Books",
    },
  ];

  return (
    <>
      <Helmet>
        <title> SaiFashionZone by Raiba</title>
        <meta
          name="description"
          content="Discover unique clothing and thoughtful collections for every occasion."
        />
      </Helmet>
      <ScrollProgress />
      <Navbar />
      <div className="w-full bg-white overflow-hidden">
        {/* Hero Section with Modern Glassmorphism Design */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img
              src="https://cdn.wallpapersafari.com/89/8/lybQgH.jpg"
              alt="Elegant Gift Background"
              className="w-full h-full object-cover filter brightness-50"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          <motion.div
            className="relative z-10 container mx-auto max-w-4xl px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="bg-white/20 backdrop-blur-md border border-white/30 p-12 md:p-16 rounded-3xl shadow-2xl text-center">
              <h1 className="mb-6 text-5xl md:text-6xl font-extrabold text-white tracking-tight bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 text-transparent">
                Crafting Memorable Moments
              </h1>
              <p className="mb-8 text-xl text-white/90 max-w-2xl mx-auto">
                Transforming ordinary moments into extraordinary memories with
                our curated collections
              </p>
              <div className="space-x-4 flex justify-center">
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 px-10 py-3 rounded-full uppercase text-sm tracking-wider font-semibold shadow-xl transition-all"
                  >
                    Explore Our Story
                  </motion.button>
                </Link>
                <Link to="/shop">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:opacity-90 px-10 py-3 rounded-full uppercase text-sm tracking-wider font-semibold shadow-xl transition-all"
                  >
                    Shop Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Product Categories Section with Refined Styling */}
        <section className="px-4 py-20 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Our Collections
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Discover meticulously crafted categories designed to inspire and
                delight
              </p>
            </motion.div>

            <motion.div
              className="grid gap-10 md:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {productCategories.map((category, index) => (
                <Link to="/shop" key={index}>
                  <motion.div
                    className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-4"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={category.img}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 text-center bg-white">
                      <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
              <ClubbedBox title="Saree" />
              <ClubbedBox title="Mens" />
              <ClubbedBox title="Girls" />
              <ClubbedBox title="Boys" />
            </motion.div>
          </div>
        </section>

        {/* Vision Section with Modern Overlay Design */}
        <section
          className="relative min-h-[80vh] flex items-center"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.RNJBshhRJcxPoSt2Slj5bAHaEK&pid=Api&P=0&h=180"
              alt="Vision Background"
              className="w-full h-full object-cover filter brightness-50"
              loading="lazy"
            />
          </div>

          <div className="container relative z-10 mx-auto max-w-6xl px-4">
            <motion.div
              className="bg-white/20 backdrop-blur-md border border-white/30 p-12 md:p-16 rounded-3xl max-w-2xl mx-auto text-center shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Our Vision
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                We believe in creating more than just products – we craft
                experiences that connect hearts, celebrate relationships, and
                turn ordinary moments into extraordinary memories. Our mission
                is to be your partner in expressing love, appreciation, and
                thoughtfulness.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:opacity-90 px-12 py-4 rounded-full uppercase text-sm tracking-wider font-semibold shadow-xl transition-all"
                >
                  Our Journey
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
