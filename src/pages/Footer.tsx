import { FaHome, FaList, FaSearch } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="absolute bottom-0 mb-8">
      <div className="flex gap-20 p-3 text-white text-[20px]">
        <button>
          <FaHome />
        </button>
        <button>
          <FaSearch />
        </button>
        <button>
          <FaList />
        </button>
      </div>
    </div>
  );
};

export default Footer;
