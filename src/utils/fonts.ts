import { Inter, Poppins } from "next/font/google";

export const interFont = Inter({ subsets: ["latin"], variable: "--inter" });
export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
