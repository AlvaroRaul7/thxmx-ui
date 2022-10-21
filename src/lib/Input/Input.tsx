import { forwardRef, Ref } from 'react';

import { InputProps } from './types';
import {
  FloatInput,
  FloatLabel,
  FloatContainer,
  InputContainer,
  Label,
  Input as NormalInput,
  ErrorMessage,
} from './Input.styles';

function Input(
  {
    label,
    size = 'm',
    full = false,
    disabled = false,
    error = false,
    float = false,
    hint = '',
    errorText = '',
    name,
    type,
    id,
    value,
    inputProps,
    onBlur,
    onKeyDown,
    onFocus,
    onChange,
  }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  if (float) {
    return (
      <FloatContainer size={size} full={full}>
        {/* @ts-expect-error (TODO: No overload matches this call) */}
        <FloatInput
          ref={ref as Ref<HTMLInputElement>}
          error={error || !!(errorText && errorText.trim())}
          disabled={disabled}
          id={id}
          name={name}
          inputSize={size}
          value={value}
          placeholder={label}
          onKeyDown={onKeyDown}
          onChange={onChange}
          onFocus={onFocus}
          type={type}
          onBlur={onBlur}
          {...inputProps}
        />
        <FloatLabel size={size}>{label.substring(0, 20)}</FloatLabel>
        {errorText && !disabled && errorText.trim() && (
          <ErrorMessage>{errorText}</ErrorMessage>
        )}
      </FloatContainer>
    );
  }

  return (
    <InputContainer size={size} full={full}>
      <Label htmlFor={id} size={size}>
        {label}
      </Label>
      {/* @ts-expect-error (TODO: No overload matches this call) */}
      <NormalInput
        inputSize={size}
        ref={ref as Ref<HTMLInputElement>}
        disabled={disabled}
        error={error || !!(errorText && errorText.trim())}
        value={value}
        type={type}
        name={name}
        placeholder={hint}
        id={id}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        {...inputProps}
      />
      {errorText && !disabled && errorText.trim() && (
        <ErrorMessage>{errorText}</ErrorMessage>
      )}
    </InputContainer>
  );
}

export default forwardRef(Input);
