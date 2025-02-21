import type { ButtonVariant, Color } from "react-bootstrap/esm/types";

const colors: Partial<Color & ButtonVariant>[] = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "dark",
];

export const toggleColor = () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
};
