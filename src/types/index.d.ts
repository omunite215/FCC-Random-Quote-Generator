import type { FC } from "react";
import type { ButtonVariant, Color } from "react-bootstrap/esm/types";

// Response
declare type Quote = {
    quote: string;
    author: string;
    category?: string;
  }

//Components

// Quote
declare type QuoteProps = {
    color: Partial<Color & ButtonVariant>,
    changeQuote: () => void,
    quote: Quote
}
declare type QuoteType= FC<QuoteProps>;

// Button
declare type ButtonProps = {
  quote: string;
  color: ButtonVariant;
};

export type ButtonType = FC<ButtonProps>;