"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { message, Spin } from "antd";
import React from "react";
import { useForm } from "react-hook-form";

import { get, post, put } from "@/apis/axiosInstance";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Typography from "@/components/Typography";
import { Claim, ClaimForm, Policy, PolicyForm } from "@/constants/data";
import {
  createClaimFormValidator,
  policyFormValidator,
  updateClaimFormValidator,
} from "@/constants/formValidator";

import styles from "./styles.module.scss";

type Props = {
  slug: string;
};

const PolicyDetailModule = ({ slug }: Props) => {
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [claims, setClaims] = React.useState<Claim[]>([]);

  // prettier-ignore
  const { register, handleSubmit, formState: { isSubmitting, errors }, setValue } = useForm({
    resolver: yupResolver(policyFormValidator),
    mode: "onBlur",
  });

  // prettier-ignore
  const { register: registerUpdateClaim, handleSubmit: handleSubmitUpdateClaim, setValue: setValueUpdateClaimForm } = useForm({
    resolver: yupResolver(updateClaimFormValidator),
    mode: "onBlur",
  });

  // prettier-ignore
  const { register: registerCreateClaim, handleSubmit: handleSubmitCreateClaim, formState: { errors: createClaimErrors }, setValue: setValueCreateClaimForm } = useForm({
    resolver: yupResolver(createClaimFormValidator),
    mode: "onBlur",
  });

  const switchToEditMode = (claim: Claim) => {
    setEditMode(true);
    setValueUpdateClaimForm("id", claim.id);
    setValueUpdateClaimForm("coverage", claim.coverage);
    setValueUpdateClaimForm("insuranceAmount", claim.insuranceAmount);
    setValueUpdateClaimForm("details", claim.details);
  };

  const fetchPolicy = async () => {
    try {
      const response = await get<Policy>(`/policies?slug=${slug}`);

      if (response.success) {
        const { id, title, insuredAge, contractMonthTerm, feeAmount, claimDetails } = response.data;
        setValueCreateClaimForm("policyId", id);
        setValue("id", id);
        setValue("title", title);
        setValue("insuredAge", insuredAge);
        setValue("contractMonthTerm", contractMonthTerm);
        setValue("feeAmount", feeAmount);
        setClaims(claimDetails);
      }
    } catch (error) {
      //
    }
  };

  const onSubmitCreateClaim = async (data: ClaimForm) => {
    try {
      const response = await post("/claimDetails", data);

      if (response.success) {
        message.success("Claim created successfully");
      }
    } catch (error) {
      //
    } finally {
      fetchPolicy();
    }
  };

  const onSubmitUpdateClaim = async (data: Claim) => {
    try {
      const response = await put("/claimDetails/" + data.id, data);

      if (response.success) {
        message.success("Claim updated successfully");
      }
    } catch (error) {
      //
    } finally {
      setEditMode(false);
      fetchPolicy();
    }
  };

  const onSubmit = async (data: PolicyForm) => {
    try {
      const response = await put("/policies/" + data.id, data);

      if (response.success) {
        message.success("Policy updated successfully");
      }
    } catch (error) {
      //
    } finally {
      //
    }
  };

  React.useEffect(() => {
    fetchPolicy();
  }, [slug]);

  return (
    <div>
      <div className="flex gap-[2.4rem]">
        <div className="w-1/4 mb-[2.4rem]">
          {/* @ts-ignore */}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input type="hidden" id="id" {...register("id")} />

            <Form.Item>
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" {...register("title")} error={errors.title && true} />

              {errors.title && <MessageError>{errors.title.message}</MessageError>}
            </Form.Item>

            <Form.Item>
              <Label htmlFor="insuredAge">Insured age</Label>
              <Input
                type="number"
                id="insuredAge"
                {...register("insuredAge")}
                error={errors.insuredAge && true}
              />

              {errors.insuredAge && <MessageError>{errors.insuredAge.message}</MessageError>}
            </Form.Item>

            <Form.Item>
              <Label htmlFor="contractMonthTerm">Contract month term</Label>
              <Input
                type="number"
                id="contractMonthTerm"
                {...register("contractMonthTerm")}
                error={errors.contractMonthTerm && true}
              />

              {errors.contractMonthTerm && (
                <MessageError>{errors.contractMonthTerm.message}</MessageError>
              )}
            </Form.Item>

            <Form.Item>
              <Label htmlFor="feeAmount">Fee amount</Label>
              <Input
                type="number"
                id="feeAmount"
                {...register("feeAmount")}
                error={errors.feeAmount && true}
              />

              {errors.feeAmount && <MessageError>{errors.feeAmount.message}</MessageError>}
            </Form.Item>

            <Form.Item className="mb-0">
              <Button type="submit" btnWidth="full">
                {isSubmitting ? <Spin /> : "Edit"}
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="w-3/4 mb-[2.4rem]">
          <div className="mb-[.8rem] ">
            <Form onSubmit={handleSubmitCreateClaim(onSubmitCreateClaim)} className={styles.form}>
              <Input type="hidden" id="policyId" {...registerCreateClaim("policyId")} />

              <Form.Item>
                <Label htmlFor="coverage">Coverage</Label>
                <Input
                  type="text"
                  id="coverage"
                  {...registerCreateClaim("coverage")}
                  error={createClaimErrors.coverage && true}
                />
              </Form.Item>

              <Form.Item>
                <Label htmlFor="insuranceAmount">Insurance amount</Label>
                <Input
                  type="text"
                  id="insuranceAmount"
                  {...registerCreateClaim("insuranceAmount")}
                  error={createClaimErrors.insuranceAmount && true}
                />
              </Form.Item>

              <Form.Item className="flex-1">
                <Label htmlFor="details">Details</Label>
                <Input
                  type="text"
                  id="details"
                  {...registerCreateClaim("details")}
                  error={createClaimErrors.details && true}
                />
              </Form.Item>

              <Form.Item className="mb-0">
                <Button type="submit" btnWidth="full">
                  {isSubmitting ? <Spin /> : "Create"}
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div>
            <div className={`flex w-full py-[0.6rem] ${styles.heading}`}>
              <div className="w-1/12 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  ID
                </Typography>
              </div>

              <div className="w-1/5 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  Coverage
                </Typography>
              </div>

              <div className="w-1/5 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  Insurance amount
                </Typography>
              </div>

              <div className="w-1/2 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  Details
                </Typography>
              </div>

              <div className="w-1/6 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  Actions
                </Typography>
              </div>
            </div>
          </div>

          <div>
            {claims.map((claim) => {
              if (editMode) {
                return (
                  <Form
                    key={claim.id}
                    onSubmit={handleSubmitUpdateClaim(onSubmitUpdateClaim)}
                    className={`flex items-center w-full py-[0.6rem] ${styles.claimForm}`}
                  >
                    <Input
                      type="hidden"
                      id="id"
                      {...registerUpdateClaim("id")}
                      className={styles.claimForm__input}
                    />

                    <Form.Item className="w-1/12 px-[1rem]">
                      <Typography tag="p" fontWeight="fw-md">
                        {claim.id}
                      </Typography>
                    </Form.Item>

                    <Form.Item className="w-1/5 px-[1rem]">
                      <Input
                        type="text"
                        id="coverage"
                        {...registerUpdateClaim("coverage")}
                        className={styles.claimForm__input}
                      />
                    </Form.Item>

                    <Form.Item className="w-1/5 px-[1rem]">
                      <Input
                        type="text"
                        id="insuranceAmount"
                        {...registerUpdateClaim("insuranceAmount")}
                        className={styles.claimForm__input}
                      />
                    </Form.Item>

                    <Form.Item className="w-1/2 px-[1rem]">
                      <Input
                        type="text"
                        id="details"
                        {...registerUpdateClaim("details")}
                        className={styles.claimForm__input}
                      />
                    </Form.Item>

                    <Form.Item className="w-1/6 px-[1rem] flex gap-[.8rem]">
                      <Button type="submit" btnSize="sm">
                        {isSubmitting ? <Spin /> : "Save"}
                      </Button>

                      <Button
                        btnVariant="secondary"
                        btnSize="sm"
                        onClick={() => setEditMode(false)}
                      >
                        Cancel
                      </Button>
                    </Form.Item>
                  </Form>
                );
              }

              return (
                <div key={claim.id} className={`flex w-full py-[0.6rem]`}>
                  <div className={`w-1/12 px-[1rem] ${styles.col}`}>
                    <Typography tag="p" fontWeight="fw-md">
                      {claim.id}
                    </Typography>
                  </div>

                  <div className={`w-1/5 px-[1rem] ${styles.col}`}>
                    <Typography tag="p" fontWeight="fw-md">
                      {claim.coverage}
                    </Typography>
                  </div>

                  <div className={`w-1/5 px-[1rem] ${styles.col}`}>
                    <Typography tag="p" fontWeight="fw-md">
                      {claim.insuranceAmount}
                    </Typography>
                  </div>

                  <div className={`w-1/2 px-[1rem] ${styles.col}`}>
                    <Typography tag="p" fontWeight="fw-md">
                      {claim.details}
                    </Typography>
                  </div>

                  <div className={`w-1/6 px-[1rem] ${styles.col}`}>
                    <Button
                      btnVariant="secondary"
                      btnSize="sm"
                      onClick={() => switchToEditMode(claim)}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetailModule;
