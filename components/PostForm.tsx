import React, { FC } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { postsTypes } from "../store/posts";

interface Props {
  setSubmiting?: (values: postsTypes.Post) => void;
  values?: postsTypes.Post;
}
const InputBlock = styled.div`
  width: 100%;
  & > h4 {
    margin-bottom: 5px;
  }
  & > textarea {
    width: 100%;
    height: 100px;
    resize: none;
  }
  & > #title {
    height: 30px;
  }
`;
const Button = styled.button`
  margin: 20px 0;
`;
const Error = styled.div`
  color: red;
  font-size: 17px;
`;
const PostForm: FC<Props> = ({ values, setSubmiting }) => {
  const { title, body } = values;
  const initialValues: postsTypes.Post = {
    title,
    body,
  };
  const validationSchema = Yup.object({
    title: Yup.string().min(5, "Must be 5 characters or more").required(),
    body: Yup.string().min(10, "Must be 10 characters or more").required(),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(val) => setSubmiting(val)}
    >
      {({ errors, touched }) => (
        <Form>
          <InputBlock>
            <h4>Title</h4>
            <Field name="title" type="text" id="title" as="textarea" />
            {errors.title && touched.title && <Error>{errors.title}</Error>}
          </InputBlock>
          <InputBlock>
            <h4>Post Content</h4>
            <Field name="body" type="text" as="textarea" />
            {errors.body && touched.body && <Error>{errors.body}</Error>}
          </InputBlock>
          <Button type="submit">Save Post</Button>
        </Form>
      )}
    </Formik>
  );
};

export default PostForm;
