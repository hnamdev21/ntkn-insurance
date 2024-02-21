"use client";

import Image from "next/image";
import React from "react";

import { get } from "@/apis/axiosInstance";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { Policy } from "@/constants/data";

const PoliciesModule = () => {
  const [policies, setPolicies] = React.useState<Policy[]>([]);

  React.useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await get<Policy[]>("/policies");

        if (response.success) {
          setPolicies(response.data);
        }
      } catch (error) {
        //
      } finally {
        //
      }
    };

    fetchPolicies();
  }, []);

  return (
    <Section>
      <Container className="grid grid-cols-6 md:grid-cols-12 flex-wrap gap-[1.6rem] md:gap-[2.4rem]">
        {policies.map((policy) => (
          <div key={policy.id} className="col-span-6 md:col-span-4 lg:col-span-3">
            <div className="bg-white shadow rounded-lg h-[30rem] lg:h-[46rem] overflow-hidden">
              <div className="w-full h-1/2">
                <Image
                  src="/images/people-scrum.jpg"
                  alt="Banner"
                  width={1980}
                  height={1020}
                  priority
                />
              </div>

              <div className="p-[1.6rem] h-1/2 flex flex-col">
                <div className="w-full flex-1">
                  <Typography tag="h3" fontSize="fs-lg" fontWeight="fw-md">
                    {policy.title}
                  </Typography>
                </div>

                <div className="w-full">
                  <Button
                    as="a"
                    href={`/policies/${policy.slug}`}
                    btnWidth="full"
                    className="block"
                    btnSize="lg"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default PoliciesModule;
