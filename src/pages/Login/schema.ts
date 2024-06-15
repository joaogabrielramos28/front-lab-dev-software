import * as yup from "yup";

export type LoginSchemaType = {
  email: string;
  password: string;
};

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Preencha o e-mail"),
  password: yup.string().required("Preencha a senha"),
});
