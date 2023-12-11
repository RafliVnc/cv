import { useState } from "react";

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top")

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add('hidden');
    toTop.classList.remove('flex');
  }
};

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState("false");

  const burgMenu = () =>{
    setHamburgerOpen(!hamburgerOpen);
  };
console.log(hamburgerOpen)
  // useEffect(() => {
  //   const hamburger = document.querySelector("#hamburger");
  //   const navMenu = document.querySelector("#nav-menu");
  //   const menuFunc = (e) => {
  //     if (outerRef.current && !outerRef.current.contains(e.target)) {
  //       // Hide the div or perform any desired action
  //       hamburger.classList.toggle("hamburger-active");
  //       navMenu.classList.toggle("hidden");
  //     }
  //   };

  //   hamburger.addEventListener("click", menuFunc);
  // });

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            {/* <div className="px-4 ">
              <a
                href="#home"
                className="font-bold text-lg text-Dark block py-6 lg:hidden"
              >
                Muhammad Rafli
              </a>
            </div> */}
            <div className="flex items-center justify-center px-4 ">
              <a
                href="#home"
                className="font-bold text-lg text-Dark block py-6 lg:hidden"
              >
                Muhammad Rafli
              </a>
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                // className="block absolute right-4 lg:hidden lg:left-4"
                className={`button-${hamburgerOpen ? "block absolute right-4 lg:hidden lg:left-4" : "block absolute right-4 hamburger-active lg:hidden lg:left-4"  }`}
                onClick={burgMenu}
              >
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-150 ease-in"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
              </button>

              <nav
                id="nav-menu"
                // className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
                className={`button-${hamburgerOpen ? "hidden" :"hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-0 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"  }`}
              >
                <ul 
                // className="block lg:flex "
                className={`button-${hamburgerOpen ?   " hidden lg:flex lg:py-4":"block lg:flex " }`}
                >
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-Tertiary py-2 mx-8 flex group-hover:text-Dark group-hover:font-semibold"
                    >
                      Beranda.
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-Tertiary py-2 mx-8 flex group-hover:text-secondary group-hover:font-semibold"
                    >
                      Portofolio.
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-Tertiary py-2 mx-8 flex group-hover:text-secondary group-hover:font-semibold"
                    >
                      Contact.
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
