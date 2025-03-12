import { useState } from "react";
import closeIcon from "../../assets/icons/close.png";
export default function Notifications({
  notification,
}: {
  notification: string;
}) {
  const [open, setOpen] = useState(true);
  const close = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <div className="bg-[#CD6137] p-5 rounded flex justify-between items-center">
          <p className="text-white">{notification}</p>
          <button
            onClick={close}
            className="text-white font-bold border-solid border-white border-[2px] p-4 size-[24px] rounded-[50%] flex justify-center items-center"
          >
            X{/* <img src={closeIcon} /> */}
          </button>
        </div>
      )}
    </>
  );
}
