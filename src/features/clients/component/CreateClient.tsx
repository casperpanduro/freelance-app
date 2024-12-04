"use client";
import SlideModal from "@/components/Overlay";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleCreateClientModal } from "@/features/clients/clientSlice";
import CreateClientForm from "@/features/clients/component/CreateClientForm";

const CreateClient = () => {
  const active = useAppSelector((state) => state.clients.showCreate);
  const dispatch = useAppDispatch();

  return (
    <SlideModal
      active={active}
      onClose={() => dispatch(toggleCreateClientModal())}
      title={"Create new client"}
    >
      <div>
        <CreateClientForm />
      </div>
    </SlideModal>
  );
};

export default CreateClient;
