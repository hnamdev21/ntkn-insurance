import Image from "next/image";
import Link from "next/link";
import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import { path } from "@/constants/route";

import styles from "./styles.module.scss";

const BentoSection = () => {
  return (
    <Section>
      <Container className="flex flex-col md:gap-[1.8rem]">
        <div className="overflow-hidden flex gap-[1.8rem] md:h-[44rem] w-full">
          <div className={`overflow-hidden md:rounded-3xl md:w-2/3 ${styles.card}`}>
            <Link href={path.HomeInsurance}>
              <Image
                src="/images/social-insurance/house.png"
                alt="Banner"
                width={1980}
                height={1020}
                priority
                className={styles.image}
              />
            </Link>
          </div>
          <div className={`overflow-hidden md:rounded-3xl md:w-1/3 ${styles.card}`}>
            <Link href={path.LifeInsurance}>
              <Image
                src="/images/social-insurance/older-adult.jpg"
                alt="Banner"
                width={1980}
                height={1020}
                priority
                className={styles.image}
              />
            </Link>
          </div>
        </div>

        <div className="overflow-hidden flex gap-[1.8rem] md:h-[44rem] w-full">
          <div className={`overflow-hidden md:rounded-3xl md:w-1/3 ${styles.card}`}>
            <Link href={path.MedicalInsurance}>
              <Image
                src="/images/social-insurance/nurse.webp"
                alt="Banner"
                width={1980}
                height={1020}
                priority
                className={styles.image}
              />
            </Link>
          </div>
          <div className={`overflow-hidden md:rounded-3xl md:w-2/3 ${styles.card}`}>
            <Link href={path.MotorInsurance}>
              <Image
                src="/images/social-insurance/car.webp"
                alt="Banner"
                width={1980}
                height={1020}
                priority
                className={styles.image}
              />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BentoSection;
