import React from "react";

import PolicyDetailModule from "@/modules/Admin/ManagementPage/PolicyDetailSections";

type Props = {
  params: {
    slug: string;
  };
};

const Policy = ({ params }: Props) => {
  return <PolicyDetailModule slug={params.slug} />;
};

export default Policy;
