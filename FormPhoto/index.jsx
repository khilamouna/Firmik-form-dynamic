import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../InputFileType";

const onSubmit = (values) => {
  console.log("Form data", values);
};
const initialValues = {
  text: " ",
};
const validationSchema = Yup.object().shape({
  text: Yup.string().required("Text is required"),
});

const Index = () => {
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
            <div className="relative z-0 mb-6 w-full group">
              <Input
                type="file"
                name="floating_first_name"
                label="Prénom"
                placeholder=" "
              />
            </div>
          </Form>
        )
      )}
    </Formik>
  );
};
export default Index;
