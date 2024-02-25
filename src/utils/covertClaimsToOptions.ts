import { Option } from "@/components/Form/Select";
import { ClaimDetail } from "@/constants/data";

const convertClaimsToOptions = (claims: ClaimDetail[]): Option[] => {
  return claims.map((claim) => ({
    label: claim.coverage,
    value: claim.id.toString(),
  })) as Option[];
};

export default convertClaimsToOptions;
