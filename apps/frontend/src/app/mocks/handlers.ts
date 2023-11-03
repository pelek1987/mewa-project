import { http, HttpResponse } from 'msw';

export const API_URL = 'https://randomuser.me/api/?results=5';
export const mockedEmployeesResponse = {
  results: [
    {
      name: {
        first: 'John',
        last: 'Doe',
      },
      location: {
        street: 'Sezamkowa',
        city: 'Nowhere',
        state: 'Xyz',
        country: 'USA',
        postcode: '1234',
      },
      email: 'johndoe@example.com',
      id: {
        name: 'abc',
        value: '123',
      },
    },
    {
      name: {
        first: 'Jan',
        last: 'Nowak',
      },
      location: {
        street: 'Poziomkowa',
        city: 'Warszawa',
        state: '',
        country: 'Poland',
        postcode: '10-100',
      },
      email: 'jan_nowak@example.com',
      id: {
        name: 'cde',
        value: '456',
      },
    },
  ],
};

export const handlers = [
  http.get(API_URL, () => {
    return HttpResponse.json(mockedEmployeesResponse, {
      status: 200,
    });
  }),
];
