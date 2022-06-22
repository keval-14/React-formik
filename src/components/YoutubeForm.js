import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: "Keval",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }

//   if (!values.channel) {
//     errors.channel = "Required";
//   }
//   return errors;
// };

const validationSchema = Yup.object({

    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Email Formate').required('Required'),
    channel: Yup.string().required('Required')
})

function YoutubeForm() {
  
  

//   console.log("Form errors", formik.errors);

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >

      {/* <form onSubmit={formik.handleSubmit}> */}
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          {/* <input
            type="text"
            id="name"
            name="name"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
            {...formik.getFieldProps('name')}

          /> */}
          <Field type="text" id='name' name='name'></Field>
          <ErrorMessage name='name'/>

          {/* {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null} */}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          {/* <input
            type="email"
            id="email"
            name="email"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
            {...formik.getFieldProps('email')}
          /> */}
          {/* {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null} */}
          <Field type="email" id='email' name='email'></Field>
          <ErrorMessage name='email'/>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          {/* <input
            type="text"
            id="channel"
            name="channel"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.channel}
            {...formik.getFieldProps('channel')}
          /> */}

          {/* {formik.touched.channel &&  formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null} */}
          <Field type="text" id='channel' name='channel'></Field>

          <ErrorMessage name='channel'/>


        </div>

        {/* <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}></input>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}></input>

        <label htmlFor="channel">Name</label>
        <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}></input> */}

        <button>Submit</button>
      {/* </form> */}
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
