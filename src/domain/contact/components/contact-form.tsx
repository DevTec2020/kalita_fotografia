"use client";

import {
  ContactSchema,
  type ContactSchemaType,
} from "@/domain/contact/schemas/contactSchema";
import CustomPhone from "@/app/shared/ui/form/CustomPhone";
import CustomSelect from "@/app/shared/ui/form/CustomSelect";
import CustomTextArea from "@/app/shared/ui/form/CustomTextArea";
import Input from "@/app/shared/ui/form/input";
import { Modal } from "@/app/shared/ui/Modal";
import { useState } from "react";
import type { ContactMessage } from "../entities/contact-message";
import { useContactForm } from "../hooks/useContactForm";
import { useContactMutation } from "../hooks/useContactMutation";

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {
    handleSubmit,
    errors,
    control,
    reset: resetForm,
    clearErrors
  } = useContactForm(ContactSchema);

  const { mutate, isPending, isSuccess, isError, reset } = useContactMutation();

  const onsubmit = (formData: ContactSchemaType) => {
    console.log(formData);

    const dataUpdate = {
      ...formData,
      phone: formData.phone.replace(/\D/g, ""),
      assigned_photographer: null,
      status: "pending",
    } as unknown as ContactMessage;
    mutate(dataUpdate, {
      onSuccess: () => {
        setIsModalOpen(true),
        
          resetForm({
            full_name: "",
            email: "",
            phone: "",
            photo_session_type: "",
            message: "",
          });
          
      },
    });
  };

  const handleCloseModal = () => {
    
    if(isSuccess){
       setIsModalOpen(false);
    reset();
    }
    return
   
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onsubmit)}>
      {isError && <span>Messagem de erro no envio</span>}
      <section className="flex flex-col gap-8">
        <Input
          name="full_name"
          control={control}
          errors={errors}
          nameInput="Nome completo"
          nameLabelInput="full_name"
          namePlaceholderInput="Digite seu nome"
          typeInput="text"
        />

        <Input
          name="email"
          control={control}
          errors={errors}
          nameInput="E-mail"
          nameLabelInput="email"
          namePlaceholderInput="Digite seu e-mail"
          typeInput="email"
        />

        <CustomPhone
          label="Telefone"
          name="phone"
          control={control}
          placeholder="Digite seu telefone"
          errors={errors}
        />

        <CustomSelect
          name="photo_session_type"
          control={control}
          errors={errors}
        />

        <CustomTextArea name="message" control={control} errors={errors} />

        <button
          className="bg-kalita-brown-medium w-full h-16 px-8 py-4 
              flex justify-center items-center gap-2 cursor-pointer 
              rounded-md transition-colors duration-300 hover:bg-kalita-brown-dark"
          type="submit"
        >
          <span className="font-nunito font-normal text-kalita-bg-light text-lg">
            {isPending ? "Carregando..." : "Enviar"}
          </span>
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Formulário enviado com sucesso!"
          message="Sua mensagem foi enviada. Entraremos em contato em breve."
        />
      </section>
    </form>
  );
}
