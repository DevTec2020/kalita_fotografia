"use client";
import { useState } from "react";
import { ContactSchema } from "@/domain/contact/schemas/contactSchema";
import { Title } from "@/app/shared/ui/headings/Title";
import { SubTitle } from "@/app/shared/ui/headings/Subtitle";
import { ButtonCTA } from "@/app/shared/ui/ButtonCTA";
import Input from "@/app/shared/ui/form/input";
import CustomTextArea from "@/app/shared/ui/form/CustomTextArea";
import { useContactForm } from "@/domain/contact/hooks/useContactForm";

export function FeedbackPage(){
    const [submitting, setSubmitting] = useState<boolean>(false);
    const { control, errors, reset:resetForm} = useContactForm(ContactSchema);

    const sendFeedback = (e) => {
        e.preventDefault();
        setSubmitting(true)

        alert('Aqui vai o envio para o backend')
    }

    return(
        <section className="flex flex-col justify-center items-center px-4 md:px-0">
            <Title content={'Compartilhe sua experiência'} size="medium" align="center"/>

            <section className="my-6 max-w-xs md:max-w-sm lg:max-w-lg">
                <SubTitle content={'Seu feedback é muito importante! Conte mais sobre sua experiência.'} size="small" align="center"/>
            </section>

            <form 
                className="w-full max-w-md px-12 py-8 rounded-md space-y-10 bg-kalita-bg-medium  border border-kalita-bg-light-brown shadow-lg shadow-kalita-bg-light-brown"
                onSubmit={sendFeedback}    
            >
                <Input
                    name="full_name"
                    control={control}
                    errors={errors}
                    nameInput="Seu nome"
                    nameLabelInput="full_name"
                    namePlaceholderInput="Digite seu nome"
                    typeInput="text"
                    
                />

                <Input
                    name="typeSession"
                    control={control}
                    errors={errors}
                    nameInput="Qual foi o tipo de sessão?"
                    nameLabelInput="typeSession"
                    namePlaceholderInput="Parto, acompanhamento do bebê, gestante..."
                    typeInput="text"
                />

                <CustomTextArea 
                    name="depoimento" 
                    control={control} 
                    errors={errors}
                    nameTextarea="Seu depoimento:" 
                    namePlaceholderTextarea="Descreva aqui a sua experiência..."
                />


                <div className="flex items-center bg-kalita-brown-dark border-2 border-kalita-bg-light-brown py-5 px-4 gap-3 rounded-md">
                    <input className="
                        appearance-none shrink-0 w-6 h-6 
                        bg-kalita-bg-light border-2 
                        border-kalita-bg-light-brown 
                        rounded-md 
                        cursor-pointer
                        checked:after:content-['✓']
                        checked:after:flex
                        checked:after:items-center
                        checked:after:justify-center
                        checked:after:text-sm
                        checked:after:font-extrabold
                        " 
                        type="checkbox"
                    />
                    <span className="text-xs text-kalita-bg-light ">
                        Autorizo a publicação deste feedback no site Kálita Fotografias. 
                        Entendo que meu nome e depoimento poderão ser exibidos publicamente.
                    </span>
                </div>

                <ButtonCTA content={submitting ? "Enviando..." : "Enviar" } size="larger" className="w-full"/>
            </form>
        </section>
    )
}

export default FeedbackPage;