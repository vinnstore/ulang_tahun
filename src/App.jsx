import Navbar from "./components/Navbar";
import heroImg from "./assets/pics/103.jpg";
import { Info } from "lucide-react";
import { FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import CardImage from "./components/CardImage";
import { images } from "./constants/images";
import Aos from "aos";
import "aos/dist/aos.css"; 

function App() {
  const [openModal, setOpenModal] = useState(false);
  const Button = ({ children, variant, ...rest }) => {
    return (
      <button
        className={`flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out ${
          variant == "primary" && "bg-white text-black "
        } ${variant == "secondary" && "bg-white/30 text-white"}`}
        {...rest}
      >
        {children}
      </button>
    );
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <Navbar />
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex justify-center items-end"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full max-w-screen-2xl px-5 lg:px-10 mb-[5%] flex flex-col gap-3 lg:gap-5 z-10 text-white ">
          <h1
            className="lg:text-4xl text-2xl font-bold lg:w-[50%]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Happy Birthday Sayang ❤
          </h1>
          <p
            className="text-sm lg:text-base lg:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Happy Birthday Sayang Cebol Ku😊. <br/>
            Semoga Dengan Bertambahnya Umur Sayang.<br/>
            Sayang Semakin Kuat Untuk Menjalankan Hidup Ini.<br/>
            Dan Semoga Dengan Bertambahnya Usia Sayang Ini,<br/>
            Sayang di Berikan Kesehatan Terus, Di Murahkan Rejekinya,<br/>
            Tidak Suka Marah-Marah, Hilang Rasa Gengsinya,<br/> 
            Pokoknya Yang Terbaiklah Buat Sayang.<br/>
            HAPPY BIRTHDAY SAYANG KU💕💕
          </p>
          <p data-aos="fade-right" data-aos-duration="1300">
            Click "Play" to see Details
          </p>
          <div
            className="actions flex items-center gap-3"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            <Button variant={"primary"} onClick={() => setOpenModal(true)}>
              <FaPlay />
              Play
            </Button>
            <Button variant={"secondary"}>
              <Info size={20} />
              More Info
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-black text-white">
        <div className="py-5 lg:py-10 flex flex-col gap-5 px-5 lg:px-10 max-w-screen-2xl">
          <h3 className="font-semibold text-xl">More to Explore : Us</h3>
          <section className=" grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5">
            {images.map((image, idx) => (
              <CardImage src={image.src} key={idx} idx={idx} />
            ))}
          </section>
        </div>
      </section>
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px] "
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
          <h1 className="font-bold text-2xl">Happy Birthday, Sayang ❤❤ </h1>
          <p>Hi Sayang </p>
          <p>
            Hallo Sayang<br/>
            Selamat Menjadi Tua, Sayang!!!<br/>
            Semoga seiring bertambahnya usia,<br/>
            bertambah pula rasa syukur atas segala berkat di dalam hidup,<br/>
            semoga di hari spesial ini apa yang sayang doakan menjadi nyata.<br/>
            Amiinnn.... <br/>
            Dan jangan lupa ngurus KTP y sayang hihi😁😁.
          </p>
          <p>
            With all my love,
            <br />
            Arvin 
          </p>
        </div>
      </Modal>
    </main>
  );
}

export default App;
