"use client";

import { useForm } from "react-hook-form";
import { Title } from "@/app/shared/ui/headings/Title";
import { SubTitle } from "@/app/shared/ui/headings/Subtitle";
import { ButtonCTA } from "@/app/shared/ui/ButtonCTA";
import Input from "@/app/shared/ui/form/input";
import CustomTextArea from "@/app/shared/ui/form/CustomTextArea";

export function feedbackPage(){
    const {
    control,
    formState: { errors },
  } = useForm();

    return(
        <section className="flex flex-col justify-center items-center">
            <Title content={'Compartilhe sua experiência'} size="medium" align="center"/>

            <section className="my-6 max-w-xs md:max-w-sm lg:max-w-lg">
                <SubTitle content={'Seu feedback é muito importante! Conte mais sobre sua experiência.'} size="small" align="center"/>
            </section>

            <form className="border border-kalita-bg-light-brown bg-kalita-bg-medium px-12 py-8 rounded-md space-y-10 w-[50vh] shadow-lg shadow-kalita-bg-light-brown">
                <Input
                    name="nameUser"
                    nameInput="Seu nome"
                    nameLabelInput="nameUser"
                    namePlaceholderInput="Digite seu nome"
                    typeInput="text"
                    control={control}
                    errors={errors}
                />

                <Input
                    name="typeSession"
                    nameInput="Qual foi o tipo de sessão?"
                    nameLabelInput="typeSession"
                    namePlaceholderInput="Parto, acompanhamento do bebê, gestante..."
                    typeInput="text"
                    control={control}
                    errors={errors}
                />

                <CustomTextArea 
                    name="depoimento" 
                    nameTextarea="Seu depoimento:" 
                    namePlaceholderTextarea="Descreva aqui a sua experiência..."
                    control={control} errors={errors} 
                />


                <div className="flex items-center bg-kalita-brown-dark border-2 border-kalita-bg-light-brown py-5 px-4 gap-3 rounded-md">
                    <input className="appearance-none shrink-0 w-6 h-6 bg-kalita-bg-light border-2 border-kalita-bg-light-brown rounded-md checked:bg-kalita-bg-light-brown cursor-pointer" type="checkbox"/>
                    <span className="text-xs text-kalita-bg-light ">
                        Autorizo a publicação deste feedback no site Kálita Fotografias. 
                        Entendo que meu nome e depoimento poderão ser exibidos publicamente.
                    </span>
                </div>

                <ButtonCTA content="Enviar" size="larger" className="w-full" />
            </form>
        </section>
    )
}

export default feedbackPage;