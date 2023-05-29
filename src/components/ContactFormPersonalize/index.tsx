import { useFormik } from "formik"
import { validationSchema } from "../../Validations/contactValidation"
import store from "../../store";
import { contactPersonalizedFetch } from "../../store/modules/contacts";

function ContactFormPersonalize() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      description: "",
    }, 
    validationSchema, 
    onSubmit: async (values) => {
      store.dispatch(contactPersonalizedFetch(values))
      formik.resetForm()
    },
  });

  return (
    <div className="bg-bege-100 pt-2 pb-[110px]">
      <div className="form-container w-10/12 m-auto">
        <p className="text-[44px] font-semibold text-rosa-200 pb-12">
          Vamos começar?
        </p>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            className="rounded-[20px] text-[20px] pb-3 placeholder-rosa-200 px-4 pt-1 outline-none"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && <span className='text-rosa-100'>{formik.errors.name}</span>}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="rounded-[20px] text-[20px] pb-3 placeholder-rosa-200 px-4 pt-1 outline-none"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <span className='text-rosa-100'>{formik.errors.email}</span>}
          <textarea
            name="description"
            id="description"
            placeholder="Descreva seu pedido"
            className="rounded-[20px] pb-10 text-[20px] placeholder-rosa-200 px-4 pt-1 resize-none outline-none"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {formik.errors.description && <span className='text-rosa-100'>{formik.errors.description}</span>}
          <div className="flex justify-end">
          <button className="flex justify-center whitespace-nowrap text-p2 font-bold text-bege-100 bg-rosa-200 px-16 py-1 rounded-[15px] hover:bg-rosa-100" type="submit">Enviar pedido</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactFormPersonalize;
