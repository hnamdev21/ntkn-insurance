import Image from "next/image";
import React from "react";

import { CameraIcon } from "@/components/Icons";
import env from "@/constants/env";

import styles from "./styles.module.scss";

type AvatarInputProps = React.HTMLAttributes<HTMLInputElement> & {
  avatarBase64: string | null;
  src?: string;
};

const AvatarInputComponent = (
  { avatarBase64, ...props }: AvatarInputProps,
  ref?: React.Ref<HTMLInputElement>
) => {
  const src =
    avatarBase64 ??
    (props.src && `${env.API_LOCAL_URL}/${props.src}`) ??
    "/images/default-avatar.png";

  return (
    <div className={`${styles.container}`}>
      <label htmlFor="avatarImage" className={`${styles.avatarContainer}`}>
        <Image
          src={src}
          alt={"Ảnh đại diện của người dùng ..."}
          width={400}
          height={400}
          className={`${styles.avatar}`}
        />
        <div className={`${styles.overlay}`}>
          <CameraIcon />
        </div>
      </label>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="avatarImage"
        ref={ref}
        // onChange={handleOnChangeAvatar}
        {...props}
      />
    </div>
  );
};

const AvatarInput = React.forwardRef(AvatarInputComponent);

export default AvatarInput;
