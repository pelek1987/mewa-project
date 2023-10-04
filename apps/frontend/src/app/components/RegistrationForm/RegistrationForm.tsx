import { Button, Input } from '@ems/common-ui';
import { FormEventHandler, useRef } from 'react';

export const RegistrationForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const age = ageRef.current?.value;

    console.log({ firstName, lastName, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="First Name:" type="text" ref={firstNameRef} />
      <Input label="Last Name:" type="text" ref={lastNameRef} />
      <Input label="Age:" type="number" ref={ageRef} />
      <Button label="Submit" type="submit" />
    </form>
  );
};
