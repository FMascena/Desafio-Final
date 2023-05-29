import { useFormik } from "formik"
import store from "../../store"
import { shippingFetch } from "../../store/modules/cart/cartFetch"
import { cepValidationSchema as validationSchema } from "../../Validations/checkoutValidation"


function FreteForm() {
  const formik = useFormik({
    initialValues: {
      sCepDestino: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
      store.dispatch(shippingFetch(values))
    }
  })
  return (
    <div className='bg-[#FFFFFF] py-8 px-5 flex flex-col gap-5 mb-5 md:rounded-lg'>
      <h1 className='text-h5 font-semibold font-montserrat text-preto-100' >Calcular o Frete</h1>
      <div className='flex gap-4'>
        <form onSubmit={formik.handleSubmit} className='flex flex-col'>
          <div className='flex gap-4'>
          <input value={formik.values.sCepDestino} onChange={formik.handleChange} name='sCepDestino' id='sCepDestino' type="text" placeholder='Digite o seu CEP' className='border-4 border-rosa-400 rounded-lg placeholder-rosa-100 p-1 w-64 text-rosa-100 focus:outline-none' />
          <button className='bg-rosa-200 rounded-lg p-2 font-semibold text-bege-100 w-14 hover:bg-rosa-100' type='submit'>OK</button>
          </div>
        {formik.errors.sCepDestino && <span className='text-rosa-100'>{formik.errors.sCepDestino}</span>}
        </form>
      </div>
    </div>
  )
}

export default FreteForm