import React from "react";
import { Button } from "../button/Button";
import {
  FormInput,
  FormLabel,
  FormTextArea,
  FormBody,
  FormInputContainer,
} from "./styledComponents";

export function Form({ formStructures, formButton }) {
  return (
    <FormBody>
      {formStructures.map((formStructure) => {
        return (
          <FormInputContainer key={formStructure.label}>
            <FormLabel>{formStructure.label}</FormLabel>
            {formStructure.type === "input" && (
              <FormInput
                type={formStructure.inputType}
                onChange={formStructure.onChange}
                value={formStructure.value}
              />
            )}
            {formStructure.type !== "input" && (
              <FormTextArea
                onChange={formStructure.onChange}
                value={formStructure.value}
              />
            )}
          </FormInputContainer>
        );
      })}
      <Button
        type={formButton.type}
        text={formButton.text}
        onClick={formButton.onClick}
        disabled={formButton.disabled}
      />
    </FormBody>
  );
}
