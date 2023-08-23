import BtnSaya from "./BtnSaya";

export default function HeroSection() {
  return (
    <>
      <section id="home" className="pt-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 left-0 ">
                <img
                  src="src/assets/img/foto.png"
                  alt="Ale"
                  className="max-w-full mx-auto lg:pl-10"
                />
                <h1 className="absolute font-bold bottom-8 z-10 text-Dark text-4xl mb-4 md:pl-12 md:text-5xl lg:pl-0 lg:text-6xl lg:bottom-12">
                  Muhammad{" "}
                  <span className="block font-bold text-secondary mb-4 md:pl-32 lg:pl-56 text-4xl md:text-5xl lg:text-6xl">
                    Rafli{" "}
                    <span className="absolute ml-2 md:mt-2"> 
                    <svg
                    className="w-[80px] h-[50px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 50"
                      fill="none"
                    >
                      <path
                        d="M60.1213 25.1213C61.2929 23.9497 61.2929 22.0503 60.1213 20.8787L41.0294 1.7868C39.8579 0.615223 37.9584 0.615223 36.7868 1.7868C35.6152 2.95837 35.6152 4.85786 36.7868 6.02944L53.7574 23L36.7868 39.9706C35.6152 41.1421 35.6152 43.0416 36.7868 44.2132C37.9584 45.3848 39.8579 45.3848 41.0294 44.2132L60.1213 25.1213ZM0 26L58 26V20L0 20L0 26Z"
                        fill="#2E515B"
                        // transform="translate(50 100) scale()" 
                      />
                    </svg>
                    </span>
                    
                  </span>
                </h1>
              </div>
            </div>
            <div className="w-full self-center px-4 lg:w-1/2 lg:self-auto lg:pt-14">
              <h1 className="font-semibold text-secondary text-xl mt-10 md:text-2xl ">
                Hallo 👋
                <span className="block font-bold text-Dark text-4xl mb-4 lg:text-5xl">
                  Tentang Saya
                </span>
              </h1>
              <p className="font-normal text-Tertiary mb-10 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                ipsa vitae atque sequi doloribus perspiciatis veritatis
                laboriosam numquam enim ex.
              </p>

              <BtnSaya />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
