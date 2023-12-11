import projek from "../assets/img/projek2.png";
import admin from "../assets/img/admin_3.png";

export default function Portfoliio() {
  return (
    <>
      <section id="portfolio" className="pt-32 pb-16 bg-Projek">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-left mb-8 lg:mb-16 lg:mx-0 lg:max-w-2xl">
              <h2 className=" text-secondary font-semibold text-xl">
                Portfolio
              </h2>
              <h1 className=" text-Dark font-bold text-2xl">Projek Terbaru</h1>
              <p className="pt-2 font-normal">
                Dalam portofolio saya, saya ingin berbagi tentang beberapa
                projek terbaru yang telah saya kerjakan. Setiap projek
                mencerminkan dedikasi dan keterampilan saya dalam menangani
                tantangan di berbagai bidang.
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-end ">
              <div className="mb-10 p-4 relative">
                <div className="hidden z-20 bg-Dark rounded-full w-[180px] h-[180px] -rotate-12 font-semibold text-2xl items-center justify-center text-white -left-20 inset-y-1/3 lg:absolute lg:flex ">
                  Admin
                </div>
                <div className=" relative rounded-3xl shadow-md overflow-hidden ">
                  <img src={admin} alt="Peta Kejahatan" width="w-full" />
                  <span className="w-full bottom-0 h-full z-10 gradient pl-2 absolute opacity-0 transition-all duration-300 hover:opacity-100">
                    <h1 className="absolute font-semibold bottom-4 z-20 text-Dark pl-2 mb-2 lg:text-xl md:pl-10 ">
                      Web Peta Kejahatan
                      <span className="block bottom-6 pt-1 font-light md:w-3/4">
                        Crime Map Pekanbaru merupakan perangkat lunak yang
                        menyediakan informasi mengenai data kejahatan yang
                        terjadi di kota pekanbaru. Informasi yang disajikan
                        berbentuk map yang memiliki pointer yang berfungsi untuk
                        menunjukan kejadian yang terjadi pada pointer tersebut.
                      </span>
                    </h1>{" "}
                  </span>
                </div>
                {/* <div className="bg-Dark absolute z-20 ">tes</div> */}
              </div>
            </div>
            <div className="flex justify-start ">
              <div className="mb-12  p-4 relative">
                <div className="hidden z-20 bg-secondary rounded-full w-[180px] h-[180px] rotate-12 font-semibold text-2xl items-center justify-center text-white -right-20 inset-y-1/3 lg:absolute lg:flex ">
                  User
                </div>
                <div className=" relative rounded-3xl shadow-md overflow-hidden ">
                  <img src={projek} alt="Peta Kejahatan" width="w-full" />
                  <span className="w-full bottom-0 h-full z-10 gradient pl-2 absolute opacity-0 transition-all duration-300 hover:opacity-100">
                    <h1 className="absolute font-semibold bottom-4 z-20 text-Dark pl-4 mb-2 lg:text-xl md:pl-10 ">
                      Web Peta Kejahatan
                      <span className="block bottom-6 pt-1  w-3/4 font-light md:w-3/4">
                        Crime Map Pekanbaru merupakan perangkat lunak yang
                        menyediakan informasi mengenai data kejahatan yang
                        terjadi di kota pekanbaru. Informasi yang disajikan
                        berbentuk map yang memiliki pointer yang berfungsi untuk
                        menunjukan kejadian yang terjadi pada pointer tersebut.
                      </span>
                    </h1>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
