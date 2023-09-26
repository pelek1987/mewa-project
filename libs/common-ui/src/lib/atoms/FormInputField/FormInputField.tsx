import { ComponentProps } from 'react';
import { UseFormRegister, Path, FieldValues, FormState } from 'react-hook-form';
import clsx from 'clsx';

type FormInputFieldProps<T extends FieldValues> = {
  label: string;
  register: UseFormRegister<T>;
  path: Path<T>;
  formState: FormState<T>;
};

export const FormInputField = <T extends FieldValues>({
  label,
  register,
  path,
  formState: { errors },
  ...restProps
}: FormInputFieldProps<T> & ComponentProps<'input'>) => {
  const fieldError = errors[path];
  const errorMessage = fieldError?.message;

  const inputClassName = clsx(
    'peer w-full rounded-sm py-2 px-4 mb-2 focus:outline-none focus:shadow-outline placeholder-transparent',
    {
      'border-gray-400 focus:border-gray-600 text-gray-700': !fieldError,
    },
    {
      'border-red-400 focus:border-red-600 text-red-600 focus:text-red-600':
        !!fieldError,
    }
  );

  const labelClassName = clsx(
    'absolute left-3 -top-1 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:text-sm peer-focus:-top-1 peer-focus:left-1',
    {
      'text-gray-600 peer-placeholder-shown:text-gray-400 peer-focus:text-gray-600':
        !fieldError,
    },
    {
      'text-red-600 peer-placeholder-shown:text-red-600 peer-focus:text-red-600':
        !!fieldError,
    }
  );

  const errorMessageClassName = clsx('text-red-600 text-xs italic');

  return (
    <div className="relative w-full">
      <input
        className={inputClassName}
        id={restProps.id}
        placeholder={restProps.placeholder}
        aria-label={label}
        aria-describedby="validation-error-text"
        {...register(path)}
        {...restProps}
      />
      <label className={labelClassName} htmlFor={restProps.id}>
        {label}
      </label>
      {errorMessage && (
        <p className={errorMessageClassName} id="validation-error-text">
          {errorMessage.toString()}
        </p>
      )}
    </div>
  );
};
