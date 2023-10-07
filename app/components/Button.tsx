import materialTailwind, { ButtonProps } from "@material-tailwind/react";
import { ReactNode } from "react";
const { Button: TWButton } = materialTailwind;

type Props = {
  className?: ButtonProps["className"];
  children: ReactNode;
};

export default function Button({ children, ...props }: Props) {
  return <TWButton {...props}>{children}</TWButton>;
}
