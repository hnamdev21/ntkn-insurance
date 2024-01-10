import React from "react";
import SVG, { Props } from "react-inlinesvg";

export default function SvgInsert(props: Props): React.ReactElement {
  return <SVG {...props} />;
}
