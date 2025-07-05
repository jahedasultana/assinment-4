import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../App.css';

const HeroSection = () => {
    return (
        <section className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-to-r from-fuchsia-600 to-violet-800 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 fadeInUp">
                    <span className="inline-block mr-3 transform -rotate-6 text-lime-300">📚</span>
                    Empower Your Reading Journey
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl font-light mb-10 opacity-90 fadeInUp delay200">
                    Discover, manage, and cherish every book you love — all in one seamless and beautifully designed library system.
                </p>

                <Link to="/books">
                    <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-fuchsia-700 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out fadeInUp delay400 focus:outline-none focus:ring-4 focus:ring-fuchsia-300 focus:ring-opacity-75">
                        Browse Collection
                        <ArrowRight className="ml-3 w-5 h-5" />
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
