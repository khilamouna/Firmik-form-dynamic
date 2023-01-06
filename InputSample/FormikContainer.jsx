import * as Yup from "yup";
import { Formik, Form } from "formik";
import { defaultProps } from "./defaultProps";

import FormikControl from "./FormikControl";
const FormikContainer = () => {
  const initialValues = {};
  const validationSchema = Yup.object({
    name: Yup.string().required("*Champs obligatoire"),
  });
  console.log(validationSchema, "err");
  const onSubmit = (values) => console.log("Form data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        console.log("Form values", formik.values),
        (
          <Form>
            <FormikControl
              control="input"
              onChange={formik.handleChange}
              valu={formik.values.name}
            />
          </Form>
        )
      )}
    </Formik>
  );
};
FormikContainer.defaultProps = defaultProps;
export default FormikContainer;
