import React, { ReactElement, ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';

interface Props {
  fieldName: string;
  options: OptionType[];
  placeholder?: string;
}

type OptionType = {
  value: string | number;
  label: string;
};

export default function Select(props: Props): ReactElement {
  const { fieldName: name, options, placeholder } = props;

  const { register } = useFormContext();

  return (
    <div className="m-4 flex items-center">
      <label htmlFor={name} className="mr-2.5 font-bold text-yellow-300 text-xl capitalize">
        {name}
      </label>
      <select
        id={name}
        placeholder={placeholder}
        className="bg-gray-800 border border-yellow-300 text-yellow-300 rounded-md p-2 mr-2.5 capitalize"
        {...register(name)}
      >
        {options.length > 0 &&
          options.map((item: OptionType) => {
            return (
              <option key={`${item.label}-${item.label}`} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </select>
      <ErrorMessage fieldName={name} />
    </div>
  );
}
