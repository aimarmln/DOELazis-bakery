import checkMark from "../assets/images/check-mark.png"

const Modal = ({ visible, onClose }) => {
  const handleClose = e => {
    if (e.target.id === "modal-container") {
      onClose();
    } 
  };

  if (!visible) return null;

  return (
    <div id="modal-container" onClick={handleClose} className="fixed inset-0 z-30 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center transition-all duration-500">
      <div className="bg-white py-10 px-16 rounded-lg flex flex-col items-center shadow-md">
        <img src={checkMark} alt="check-mark" className="w-16 mb-4 animate-bounce" />
        <p className="text-center mb-4">Your form has been successfully submitted.</p>
        <button onClick={onClose} className="rounded-md bg-dustyBrown py-2 px-5 text-brokenWhite font-semibold active:bg-dustyBrown/70 hover:bg-dustyBrown/90 transition-all">OK</button>
      </div>
    </div>
  );
}

export default Modal;