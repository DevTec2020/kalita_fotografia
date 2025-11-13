import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ZodTypeAny, z } from "zod/v3";

export const useFormValidation = (schema: any) => {
  // por enquanto deixei any para evitar conflitos 
  const {
    register, 
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema)});

  return { register, handleSubmit, errors, reset, control };
};