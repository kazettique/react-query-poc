import React, { ReactElement, useMemo } from 'react';
import * as Yup from 'yup';
import { useFormContext } from 'react-hook-form';
import createEmployeeData from '@/api/createEmployeeData';

// components
import HookForm from '@/components/HookForm';

type Values = {
  [key: string]: any;
};

type FieldType = {
  name: string;
  email: string;
  gender: string;
  age: string;
};

type FieldDefinitionType<T, K extends keyof T> = {
  key: K;
};

const validationSchema = {
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  gender: Yup.string().required(),
  age: Yup.string().required(),
};

const defaultValues: FieldType = {
  name: '',
  email: '',
  gender: '',
  age: '',
};

const options = [
  { value: 'female', label: 'female' },
  { value: 'male', label: 'male' },
  { value: 'other', label: 'other' },
];

function CreateEmployee(): ReactElement {
  const { mutate, isLoading, isError, isSuccess, data: successData } = createEmployeeData();

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <div className="w-full border border-yellow-300 rounded-md p-5">
      <div className="text-center">
        <h1 className="text-yellow-300 text-4xl">Create Employee</h1>
      </div>
      <HookForm defaultValues={defaultValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <HookForm.Input fieldName="name" placeholder="" />
        <HookForm.Input fieldName="email" placeholder="" />
        <HookForm.Select fieldName="gender" options={options} />
        <HookForm.Input fieldName="age" placeholder="" />
        <button
          type="submit"
          className="border border-yellow-300 p-2 m-2 rounded-md text-yellow-300 hover:bg-yellow-300 hover:text-gray-800 duration-300"
        >
          Submit
        </button>
      </HookForm>
      {isLoading && <div className="text-yellow-300 capitalize">submitting...</div>}
      {isError && <div className="text-red-300 capitalize">submit error!!</div>}
      {isSuccess && (
        <div className="text-green-300 capitalize">
          submit success!! <br />
          submit content:
          <div>id: {successData?.id}</div>
          <div>name: {successData?.name}</div>
          <div>age: {successData?.age}</div>
          <div>gender: {successData?.gender}</div>
          <div>email: {successData?.email}</div>
        </div>
      )}
    </div>
  );
}

export default CreateEmployee;
