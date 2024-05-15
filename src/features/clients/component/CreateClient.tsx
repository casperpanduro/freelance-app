"use client";
import SlideModal from "@/components/ui/Overlay";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleCreateClientModal } from "@/features/clients/clientSlice";

const CreateClient = () => {
  const active = useAppSelector((state) => state.clients.showCreate);
  const dispatch = useAppDispatch();

  return (
    <SlideModal
      active={active}
      onClose={() => dispatch(toggleCreateClientModal())}
      title={"Create new client"}
    >
      <div>sldkf</div>
    </SlideModal>
  );
};

export default CreateClient;
