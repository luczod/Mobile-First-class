import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { useState } from 'react';
import { OverlayScreen } from './OverlayDiv';

export function NavBar() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <header className="max-w-[103rem] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu onClick={() => setMenu(!menu)} size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex item-center bg-gray-200 rounded-full p-1 text-base">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* Search Input */}
      <search className="bg-gray-200 rounded-full flex items-center px-2 w-48 sm:w-[25rem] lg:w-[31rem]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="search"
          placeholder="Seach foods"
        />
      </search>
      {/* Cart Button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-xl">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overley */}
      {menu && <OverlayScreen />}
      {/* Side drawer menu */}
      <div
        aria-hidden={!menu}
        className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 aria-[hidden=true]:left-[-100%] aria-[hidden=true]:w-[300px]"
      >
        <AiOutlineClose
          onClick={() => setMenu(!menu)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer text-red-800"
        />
        <h2 className="text-2xl sm:text-3xl lg:text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
