import React from "react";

import PolicyModule from "@/modules/User/PolicyPageSections";

type Props = {
  params: {
    slug: string;
  };
};

const Policy = ({ params }: Props) => {
  return <PolicyModule slug={params.slug} />;
};

export default Policy;
