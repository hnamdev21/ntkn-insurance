import { Option } from "@/components/Form/Select";
import { Claim } from "@/constants/data";

const convertClaimsToOptions = (claims: Claim[]): Option[] => {
  return claims.map((claim) => ({
    label: claim.coverage,
    value: claim.id.toString(),
  })) as Option[];
};

export default convertClaimsToOptions;
