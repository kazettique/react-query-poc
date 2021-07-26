import React, { ReactElement } from 'react';
import { ErrorMessage as ErrorMessageComponent } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';

interface Props {
  fieldName: string;
}

export default function ErrorMessage(props: Props): ReactElement {
  const { fieldName: name } = props;

  const { formState } = useFormContext();
  const { errors } = formState;

  return (
    <ErrorMessageComponent
      name={name}
      errors={errors}
      render={({ message }) => <p className="text-red-600">{message}</p>}
    />
  );
}
