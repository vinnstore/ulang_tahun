import { X } from "lucide-react";
import ReactDom from "react-dom";

const Modal = ({ openModal, setOpenModal, children }) => {
  return ReactDom.createPortal(
    <>
      <div
        onClick={() => setOpenModal(false)}
        className={`
          overlay w-full h-screen fixed top-0 left-0 bg-[#000] z-50 duration-200 ease-in-out cursor-pointer
          ${openModal ? "visible opacity-50" : "invisible opacity-0"}
        `}
      ></div>
      <div
        className={`fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[90%] lg:w-[50%] bg-black rounded-lg z-50 duration-300 ease-in-out transition-all max-h-[90%] overflow-y-auto ${
          openModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 scale-50 pointer-events-none"
        }`}
      >
        <i
          className="absolute top-3 right-3 p-2 z-10 bg-black rounded-full text-white font-semibold cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          <X size={20} fontSize={500} />
        </i>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
