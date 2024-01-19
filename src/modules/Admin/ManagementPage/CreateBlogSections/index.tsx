"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Editor } from "@tinymce/tinymce-react";
import { Spin } from "antd";
import React from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Select from "@/components/Form/Select";

import styles from "./styles.module.scss";

const categoryOptions = [
  { label: "Category 1", value: "Category 1" },
  { label: "Category 2", value: "Category 2" },
  { label: "Category 3", value: "Category 3" },
];

const tagOptions = [
  { label: "Tag 1", value: "tag 1" },
  { label: "Tag 2", value: "tag 2" },
  { label: "Tag 3", value: "tag 3" },
];

const TIMEOUT = 1000;
const formValidator = yup.object().shape({
  title: yup.string().required("Please enter your title"),
  category: yup.string(),
  tags: yup.string(),
  htmlContent: yup.string(),
});

const CreateBlogModule = () => {
  // prettier-ignore
  const { register, handleSubmit, formState: { isSubmitting, errors }, control } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
  });
  const [blobFiles, setBlobFiles] = React.useState<Blob[]>([]);

  const onSubmit = async (data: FieldValues) => {
    // Fake API call
    await new Promise((resolve) => {
      setTimeout(resolve, TIMEOUT);
    });

    blobFiles;

    return data;
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Form.Item className="flex gap-[2.4rem]">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" {...register("title")} error={errors.title && true} />
            {errors.title && <MessageError>{errors.title.message}</MessageError>}
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select id="category" {...register("category")} options={categoryOptions} />
          </div>

          <div>
            <Label htmlFor="tag">Tag</Label>
            <Select id="tags" {...register("tags")} options={tagOptions} />
          </div>
        </Form.Item>

        <Form.Item>
          <Label htmlFor="htmlContent">Content</Label>
          <Controller
            name="htmlContent"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Editor
                apiKey="ivrnuq9o5aq5qeypenzy9lcsvwt47wnotmb282cyl1vt17so"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "anchor",
                    "autolink",
                    "codesample",
                    "colorpicker",
                    "contextmenu",
                    "directionality",
                    "emoticons",
                    "fullscreen",
                    "help",
                    "hr",
                    "image",
                    "imagetools",
                    "importcss",
                    "insertdatetime",
                    "legacyoutput",
                    "link",
                    "lists",
                    "media",
                    "nonbreaking",
                    "noneditable",
                    "pagebreak",
                    "paste",
                    "preview",
                    "print",
                    "save",
                    "searchreplace",
                    "spellchecker",
                    "tabfocus",
                    "table",
                    "template",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | \
                  link image",
                  images_upload_handler: async function (blobInfo) {
                    const blob = blobInfo.blob();
                    setBlobFiles((prev) => [...prev, blob]);
                    return "https://picsum.photos/200";
                  },
                }}
                onEditorChange={field.onChange}
              />
            )}
          />
          {errors.htmlContent && <MessageError>{errors.htmlContent.message}</MessageError>}
        </Form.Item>

        <Form.Item className="mb-0">
          <Button type="submit" btnWidth="auto">
            {isSubmitting ? <Spin /> : "Create"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateBlogModule;
