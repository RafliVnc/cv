export default function Contact() {
  return (
    <>
      <section id="contact" className="pt-32 pb-32 bg-primary">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-xl mx-auto mb-8 lg:mb-8 ">
                <h2 className=" text-secondary font-semibold text-xl">
                  Contact
                </h2>
                <h1 className=" text-Dark font-bold text-2xl">Hubungi Kami</h1>
                <p className="pt-2 font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis incidunt hic cumque obcaecati aliquid odio debitis
                  sint distinctio deserunt maxime!
                </p>
              </div>
              <div className="block mb-12 lg:px-4 ">
                <div className="flex mb-8 items-center">
                  <span className="p-2 rounded-full outline outline-3">
                  <svg
                    className="w-[20px]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                  </span>
                  <span className=" px-4 text-Tertiary">
                    rafli21ti@mahasiswa.pcr.ac.id
                  </span>
                </div>
                <div className="flex mb-8 items-center">
                <span className="p-2 rounded-full outline outline-3">
                  <svg
                    className="w-[20px]"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  </span>
                  <h1 className="px-4">+62 8128 3506 120</h1>
                </div>
              </div>
            </div>
            <div className="w-full px-6 lg:w-1/2">
              <form action="">
                <div className="w-full mb-8">
                  <label
                    htmlFor="name"
                    className="text-Dark font-semibold px-2 mb-10"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 bg-Projek rounded-md focus:outline-Dark mt-2 focus:ring-Dark focus:right-1 focus:border-primary"
                  />
                </div>
                <div className="w-full mb-8">
                  <label
                    htmlFor="name"
                    className="text-Dark font-semibold px-2 mb-10"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 bg-Projek rounded-md focus:outline-Dark mt-2 focus:ring-Dark focus:right-1 focus:border-primary"
                  />
                </div>
                <div className="w-full mb-8">
                  <label
                    htmlFor="name"
                    className="text-Dark font-semibold px-2 mb-10"
                  >
                    Pesan
                  </label>
                  <textarea
                    type="text"
                    id="pesan"
                    className="w-full p-2 bg-Projek h-32 rounded-md focus:outline-Dark mt-2 focus:ring-Dark focus:right-1 focus:border-primary"
                  />
                </div>
                <button className="w-1/4 mb-8 bg-Dark rounded-xl p-2 text-white font-semibold hover:bg-secondary">
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
