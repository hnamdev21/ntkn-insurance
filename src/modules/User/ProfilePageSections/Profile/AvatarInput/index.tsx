import Image from "next/image";
import React from "react";

import { CameraIcon } from "@/components/Icons";

import styles from "./styles.module.scss";

type AvatarInputProps = React.HTMLAttributes<HTMLInputElement> & {
  src?: string;
};

const AvatarInputComponent = (
  { ...props }: AvatarInputProps,
  ref?: React.Ref<HTMLInputElement>
) => {
  const [avatarBase64, setAvatarBase64] = React.useState<string | null>(null);

  const handleOnChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setAvatarBase64(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const src = avatarBase64 ?? props.src ?? "/images/default-avatar.png";

  return (
    <div className={`${styles.container}`}>
      <label htmlFor="avatar" className={`${styles.avatarContainer}`}>
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
        name="avatar"
        id="avatar"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleOnChangeAvatar}
        ref={ref}
        {...props}
      />
    </div>
  );
};

const AvatarInput = React.forwardRef(AvatarInputComponent);

export default AvatarInput;
