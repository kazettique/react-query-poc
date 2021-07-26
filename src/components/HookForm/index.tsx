import { ReactElement, ReactNode, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// types
import * as Types from './types';

// components
import Input from './Input';
import Select from './Select';

// utils
import Utils from './utils';

interface Props {
  defaultValues: Types.Values;
  onSubmit: Types.OnSubmit;
  children: ReactNode;
  validationSchema: any;
}

function HookForm(props: Props): ReactElement {
  const { defaultValues, onSubmit, children, validationSchema } = props;

  const methods = useForm<Types.Values>({
    defaultValues,
    resolver: yupResolver(Utils.getValidationSchema(validationSchema)),
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  const onHookFormSubmit = handleSubmit(onSubmit);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onHookFormSubmit}>{children}</form>
    </FormProvider>
  );
}

HookForm.Input = Input;
HookForm.Select = Select;

export default HookForm;
