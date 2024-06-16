import * as yup from "yup";

export type SheetSchemaType = {
  name: string;
  email: string;
  password: string;
};

export const SheetSchema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Preencha o e-mail"),
  password: yup.string().required("Preencha a senha"),
});
