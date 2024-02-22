import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
};

const Modal = ({ onClose, children, ...props }: Props) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center"
      {...props}
    >
      <div
        className="absolute inset-0 bg-black z-50 bg-opacity-80 w-full h-full"
        onClick={onClose}
      />

      {children}
    </div>
  );
};

export default Modal;
