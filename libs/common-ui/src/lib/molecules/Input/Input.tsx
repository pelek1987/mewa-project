import { ComponentProps, useId } from 'react';
import { Label } from '../../atoms';

type InputProps = {
  label: string;
} & ComponentProps<'input'>;

export const Input = ({ label, value, onChange, ...props }: InputProps) => {
  const id = useId();

  return (
    <div className="mb-2">
      <Label id={id}>{label}</Label>
      <input
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        id={id}
        defaultValue={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};