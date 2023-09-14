import { ComponentProps } from 'react';

export type InputProps = ComponentProps<'input'> & {
  label: string;
};

export const Input = ({ label, type, name, id, ...props }: InputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 px-6 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          {...props}
        />
      </div>
    </div>
  );
};
