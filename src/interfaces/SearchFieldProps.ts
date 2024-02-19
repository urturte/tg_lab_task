import { ChangeEvent } from "react";

export interface SearchFieldProps {
    type: string;
    placeholder: string;
    title: string;
    onInput: (event: ChangeEvent<HTMLInputElement>) => void;
  };