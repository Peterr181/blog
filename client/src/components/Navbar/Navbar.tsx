import React, { useState } from "react";
import star from "../../assets/star.png";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useUserData } from "../../hooks/useUserData";

const Navbar = () => {
  const { loggedIn, user, handleLogout } = useAuthentication();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userData = useUserData(user?.id);

  console.log(userData, "Dane uzytkownika");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(user?.role);

  return (
    <>
      <nav className="bg-[#1A1A1A]">
        <div className="flex items-center justify-between p-6 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3">
            <img src={star} alt="star logo" className="w-12 h-12" />
            <p className="font-medium">StarBlog</p>
          </div>

          <div className="relative">
            <div className="cursor-pointer" onClick={toggleMenu} tabIndex={0}>
              {loggedIn ? (
                <div className="flex items-center gap-3">
                  <p className="text-white">{user && user.username}</p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 8.25L12 15.75L4.5 8.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <Link to="/register">
                  <button className="bg-[#FFD11A] text-[#141414] rounded-lg p-14 md:p-14 lg:p-3 font-bold-sm font-medium">
                    Register
                  </button>
                </Link>
              )}
            </div>

            {isMenuOpen && (
              <div className="absolute top-10 right-[-10px] bg-[#1A1A1A] p-6 rounded-md shadow-md text-center w-52">
                {userData?.role === "admin" && (
                  <p className="mt-3 mb-3 cursor-pointer  p-3">Users Panel</p>
                )}
                {loggedIn && (
                  <button
                    className="bg-[#FFD11A] text-[#141414] rounded-lg p-2 font-bold-sm font-medium"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
