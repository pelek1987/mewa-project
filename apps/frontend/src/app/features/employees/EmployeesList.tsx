import { useApi } from '../../hooks/useApi';
import { EmployeeDto } from './employee';

export const EmployeesList = () => {
  const { data, isLoading, isError } = useApi<EmployeeDto[]>(
    'https://randomuser.me/api/?results=10'
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Oh no! Error occurs!</div>;
  }

  return (
    <ul>
      {data.map((el) => (
        <li key={`${el.email.split('@')[0]}-${el.id.value}`}>
          {el.name.first} {el.name.last}
        </li>
      ))}
    </ul>
  );
};
