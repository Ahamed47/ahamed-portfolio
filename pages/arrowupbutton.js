import { AiOutlineArrowUp } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

const ArrowToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 rounded-full bg-gradient-to-r from-[#41C9E2] to-[#378CE7] hover:from-[#162c44] hover:to-[#162c44] transition duration-300 text-white"
        >
          <AiOutlineArrowUp />
        </button>
      )}
    </div>
  );
};

export default ArrowToTopButton;
