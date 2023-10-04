import { ComponentProps } from 'react';

type LabelProps = { children: string; id: string } & ComponentProps<'label'>;

export const Label = ({ children, id }: LabelProps) => {
  return (
    <label className="block" htmlFor={id}>
      <span className="block text-sm font-medium text-slate-700">
        {children}
      </span>
    </label>
  );
};
