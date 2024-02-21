import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  isOpen?: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose, children, ...props }: Props) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center ${
        isOpen ? "" : "hidden"
      }`}
      {...props}
    >
      <div className="bg-white rounded-lg p-[2.4rem] relative">
        <div className="w-full h-full overflow-auto">{children}</div>

        <button
          onClick={onClose}
          className="absolute top-0 right-1 text-4xl p-1 hover:opacity-40 ease-in-"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
