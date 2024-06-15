import * as yup from "yup";

export type RegisterSchemaType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const RegisterSchema = yup.object({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Preencha o e-mail"),
  name: yup.string().required("Preencha o nome"),
  password: yup.string().required("Preencha a senha"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "As senhas precisam ser iguais")
    .required("Preencha a confirmação de senha"),
});
