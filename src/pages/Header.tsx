import { FaBatteryHalf, FaSignal, FaWifi } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="Weather p-2 text-white place-items-center">
        <div className="header flex justify-between px-3">
          <div className="time">1:41</div>
          <div className="wf flex gap-2">
            <FaWifi />
            <FaSignal />
            <FaBatteryHalf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
