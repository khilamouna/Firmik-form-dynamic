import { useFormik } from "formik";
import * as Yup from "yup";
import { defaultProps } from "./defaultProps";

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  text: Yup.string().required("Text is required"),
  phone: Yup.string().required("Phone is required"),
});

const Index = (props) => {
  const { data } = props;
  const initialValues = data.reduce((acc, element) => {
    acc[element.name] = "";
    return acc;
  }, {});

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("formik touched", formik.touched);
  console.log("msg", formik.errors);
  //formik.isSubmitting = true;
  console.log(formik.values, "form values");
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" mt-20 grid md:grid-cols-2 md:gap-6">
        {data.map((element) => (
          <div className="relative z-0 mb-6 w-full group">
            <div key={element.id}>
              <input
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer"
                id={element.name}
                name={element.name}
                type={element.type}
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[element.name]}
              />

              {formik.touched[element.name] && formik.errors[element.name] && (
                <div className="text-xs text-red">
                  {formik.errors[element.name]}
                </div>
              )}

              <label
                htmlFor={element.name}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {element.label}
              </label>
            </div>
          </div>
        ))}
      </div>

      <button type="submit">Click me</button>
    </form>
  );
};

Index.defaultProps = defaultProps;
export default Index;
