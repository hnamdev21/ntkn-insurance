import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Spin, Upload, UploadFile, UploadProps } from "antd";
import cn from "classnames";
import Image from "next/image";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";

import { get } from "@/apis/axiosInstance";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Select, { Option } from "@/components/Form/Select";
import Typography from "@/components/Typography";
import { Contract } from "@/constants/data";
import { defaultClaimOptions } from "@/constants/other";
import convertClaimsToOptions from "@/utils/covertClaimsToOptions";
import getBase64 from "@/utils/getBase64";

import styles from "./styles.module.scss";

const TIMEOUT = 1000;
const formValidator = yup.object().shape({
  contractId: yup.string().required("Please enter your contract number"),
  description: yup.string().required("Please enter your description"),
  policyId: yup.string().required("Please select your policy"),
  claimId: yup.string().required("Please select your claim"),
  otp: yup.string().required("Please enter your OTP"),
});

const UploadButton = () => (
  <button style={{ border: 0, background: "none" }} type="button">
    <div style={{ marginTop: 8 }}>Upload</div>
  </button>
);
const indexOfTitleImage = 1;

const ClaimRequests = () => {
  // prettier-ignore
  const { register, handleSubmit, formState: { isSubmitting, errors }, setValue } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
  });

  const [contracts, setContracts] = React.useState<Contract[]>([]);
  const [claimOptions, setClaimOptions] = React.useState<Option[] | null>(null);

  const [previewOpen, setPreviewOpen] = React.useState<boolean>(false);
  const [previewImage, setPreviewImage] = React.useState<string>("");
  const [previewTitle, setPreviewTitle] = React.useState<string>("");
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const fetchContracts = async () => {
    try {
      const response = await get<Contract[]>(`/contracts/mine`);

      if (response.success) {
        setContracts(response.data);
      }
    } catch (error) {
      //
    } finally {
      //
    }
  };

  const onClickContractButton = async (contract: Contract) => {
    setValue("contractId", contract.id.toString());
    setClaimOptions(convertClaimsToOptions(contract.policy.claimDetails));
  };

  const onSubmit = async (data: FieldValues) => {
    // Fake API call
    await new Promise((resolve) => {
      setTimeout(resolve, TIMEOUT);
    });

    return data;
  };

  const sendOtp = async () => {
    // Fake API call
    await new Promise((resolve) => {
      setTimeout(resolve, TIMEOUT);
    });
  };

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as File);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + indexOfTitleImage)
    );
  };

  React.useEffect(() => {
    fetchContracts();
  }, []);

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <>
      <div className="mb-[4.2rem]">
        <Typography tag="h4" fontSize="fs-md" fontWeight="fw-md" className="mb-[1.6rem]">
          All your contracts
        </Typography>

        <div className="w-full grid lg:grid-cols-12 gap-[2.4rem]">
          {contracts.map((contract) => (
            <div
              key={contract.id}
              className="col-span-1 lg:col-span-3 cursor-pointer rounded-md shadow-md bg-white p-[1.2rem]"
              onClick={() => onClickContractButton(contract)}
            >
              <Typography tag="p" fontSize="fs-sm" fontWeight="fw-bold" className="mb-[0.8rem]">
                Contract No. {contract.id}
              </Typography>

              <Typography tag="p" fontSize="fs-sm">
                Policy: {contract.policyId}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="flex">
        <Form onSubmit={handleSubmit(onSubmit)} className={cn("flex-1", styles.form)}>
          <Typography tag="h4" fontSize="fs-md" fontWeight="fw-md" className="mb-[1.6rem]">
            Claim Request Form
          </Typography>

          <Form.Item className="flex gap-[2.4rem]">
            <div className="flex-1">
              <Label htmlFor="contractId" required>
                Contract No.
              </Label>
              <Input
                type="text"
                id="contractId"
                {...register("contractId")}
                error={errors.contractId && true}
                disabled
              />
              {errors.contractId && <MessageError>{errors.contractId.message}</MessageError>}
            </div>

            <div className="flex-1">
              <Label htmlFor="claimId">Claim</Label>
              <Select
                id="claimId"
                {...register("claimId")}
                options={claimOptions ?? defaultClaimOptions}
              />
            </div>
          </Form.Item>

          <Form.Item>
            <Label htmlFor="description" required>
              Description
            </Label>
            <Input
              type="text"
              id="description"
              {...register("description")}
              error={errors.description && true}
            />
            {errors.description && <MessageError>{errors.description.message}</MessageError>}
          </Form.Item>

          <Form.Item>
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              <UploadButton />
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
              <Image alt="Image to request claim" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </Form.Item>

          <Form.Item>
            <Label htmlFor="otp" required>
              OTP
            </Label>

            <div className="flex items-start gap-[1.2rem]">
              <Input
                type="text"
                id="otp"
                {...register("otp")}
                error={errors.otp && true}
                className={styles.otpInput}
              />
              <Button type="button" onClick={sendOtp} className={styles.sendOtpBtn}>
                Send OTP
              </Button>
            </div>
            {errors.otp && <MessageError>{errors.otp.message}</MessageError>}
          </Form.Item>

          <Button type="submit" btnWidth="auto">
            {isSubmitting ? <Spin /> : "Request"}
          </Button>
        </Form>

        <div className="flex-1 pl-[4.8rem]">
          <Typography tag="h4" fontSize="fs-md" fontWeight="fw-md" className="mb-[1.6rem]">
            All your claim requests
          </Typography>
        </div>
      </div>
    </>
  );
};

export default ClaimRequests;
