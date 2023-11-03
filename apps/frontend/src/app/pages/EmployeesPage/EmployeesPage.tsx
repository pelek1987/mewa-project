import { EmployeesList } from '../../features/employees';

export const EmployeesPage = () => {
  return (
    <div className="w-full text-center">
      <h1 className="text-2xl font-bold mb-4">Employees Page</h1>
      <EmployeesList />
    </div>
  );
};
