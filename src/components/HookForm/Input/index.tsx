import React, { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import * as Types from '../types';

import ErrorMessage from '../ErrorMessage';

enum InputType {
  Text = 'text',
  Password = 'password',
  Number = 'number',
  File = 'file',
  Email = 'email',
  Color = 'color',
}

interface Props {
  fieldName: string;
  placeholder?: string;
  type?: InputType;
  disabled?: boolean;
}

export default function Input(props: Props): ReactElement {
  const { fieldName: name, placeholder, type = InputType.Text, disabled = false } = props;

  const { register } = useFormContext();

  return (
    <div className="m-4 flex items-center">
      <label htmlFor={name} className="mr-2.5 font-bold text-yellow-300 text-xl capitalize">
        {name}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`${
          disabled ? 'bg-gray-600 border' : 'bg-gray-800 border'
        } border-yellow-300 text-yellow-300 rounded-md p-2 mr-2.5 ${disabled && 'cursor-not-allowed'}`}
        disabled={disabled}
        {...register(name)}
      />
      <ErrorMessage fieldName={name} />
    </div>
  );
}
