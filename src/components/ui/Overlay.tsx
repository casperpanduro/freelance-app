"use client";
import { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import AdminButton from "@/components/ui/AdminButton";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: ReactNode;
  title?: string;
  active?: boolean;
  onClose?: () => void;
}

const SlideModal = ({ children, title, active, onClose = () => {} }: Props) => {
  return (
    <AnimatePresence mode={"wait"}>
      {active && (
        <motion.div
          key={"modal"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onClose()}
          className={"fixed bg-black/35 text-zinc-900 inset-0 z-40"}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "20%" }}
            animate={{ x: 0 }}
            exit={{ x: "50%" }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className={
              "absolute flex flex-col right-0 inset-y-0 bg-white w-[450px]"
            }
          >
            <div
              className={
                "px-6 py-6 border-b border-gray-100 flex justify-between gap-x-4"
              }
            >
              <h3 className={"text-xl font-bold"}>{title}</h3>
              <button onClick={() => onClose()} className={"text-zinc-500"}>
                <XMarkIcon className={"w-6 h-6"} />
              </button>
            </div>
            <div className={"grow p-6"}>{children}</div>
            <div className={"p-6 border-t border-gray-100 flex justify-end"}>
              <AdminButton text={"Create Client"} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideModal;
