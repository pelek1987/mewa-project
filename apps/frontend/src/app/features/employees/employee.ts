export interface EmployeeDto {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  email: string;
  id: {
    name: string;
    value: string;
  };
}
