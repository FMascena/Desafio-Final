import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("É necessario que insira seu nome!"),
  email: Yup.string()
    .email("E-mail não é válido")
    .required("É necessário que insira seu e-mail!"),
  description: Yup.string()
    .min(10, "Mínimo de 10 caracteres")
    .required("É necessário que insira sua mensagem!"),
});
