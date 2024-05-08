import classNames from "classnames";
import { ITitleProps } from "./types";

export function Title(props: ITitleProps) {
  const { children, className } = props;
  return <h2 className={classNames("text-4xl xl:text-6xl text-white", className)}>{children}</h2>;
}

export default Title;
