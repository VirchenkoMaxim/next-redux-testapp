import { Form, Formik } from "formik";

import React, { FC } from "react";
import styled from "styled-components";

const TextInput = styled.textarea`
  display: block;
  margin: auto;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  resize: none;
`;

export type InitialValues = {
  body: string;
};
type Props = {
  onSubmit: (values: InitialValues) => void;
  values: InitialValues;
};

const CommentsForm: FC<Props> = ({ onSubmit, values }) => {
  return (
    <Formik
      initialValues={values}
      onSubmit={(val, { resetForm }) => {
        onSubmit(val);
        resetForm({ values: { body: "" } });
      }}
    >
      {(formik) => (
        <Form>
          <TextInput
            id="body"
            name="body"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.body}
          />
          <button type="submit">Add Comment</button>
        </Form>
      )}
    </Formik>
  );
};
export default CommentsForm;
