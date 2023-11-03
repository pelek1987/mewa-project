import { useEffect, useState } from 'react';

type State<T> =
  | {
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      data: T;
      isLoading: false;
      isError: false;
    }
  | {
      data: undefined;
      isLoading: false;
      isError: true;
    };

type ApiResponse<S> = Promise<{
  results: S;
}>;

const initialState: State<undefined> = {
  data: undefined,
  isLoading: true,
  isError: false,
};

export const useApi = <T>(url: string) => {
  const [state, setState] = useState<State<T>>(initialState);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching data');
        }
        return res.json() as ApiResponse<T>;
      })
      .then((data) => {
        setState({ data: data.results, isLoading: false, isError: false });
      })
      .catch((err) => {
        console.error(err);
        setState({ data: undefined, isLoading: false, isError: true });
      });
  }, [url]);

  return state;
};
