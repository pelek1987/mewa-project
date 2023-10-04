import { ComponentProps } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type SelectOption = {
  label: string;
  value: string;
  default: boolean;
};

type FormSelectFieldProps<T extends FieldValues> = {
  label: string;
  register: UseFormRegister<T>;
  path: Path<T>;
  options: SelectOption[];
};

export const FormSelectField = <T extends FieldValues>({
  label,
  options,
  register,
  path,
  ...restProps
}: FormSelectFieldProps<T> & ComponentProps<'select'>) => {
  return (
    <div>
      <label
        htmlFor={restProps.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <select
        id={restProps.id}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={options.find((option) => option.default)?.value}
        {...register(path)}
        {...restProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
