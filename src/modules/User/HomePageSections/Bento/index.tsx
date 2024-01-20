import Image from "next/image";
import Link from "next/link";
import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";

import styles from "./styles.module.scss";

const BentoSection = () => {
  return (
    <Section>
      <Container className="flex flex-col md:gap-[1.8rem]">
        <div className="overflow-hidden flex gap-[1.8rem] md:h-[44rem] w-full">
          <div className={`overflow-hidden md:rounded-3xl md:w-2/3 ${styles.card}`}>
            <Link href="/policies/home-insurance">
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
            <Link href="/policies/life-insurance">
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
            <Link href="/policies/heath-insurance">
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
            <Link href="/policies/motor-insurance">
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
