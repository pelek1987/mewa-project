import {fireEvent, render, screen} from "@testing-library/react";
import { AuthCredentials } from "./AuthCredentials"
import {AuthContextProvider} from "./AuthContext";
// import {userEvent} from "@testing-library/user-event/setup/index";

describe('AuthCredentials component', () => {
  it('should toggle value', async () => {
    // arrange/given
    const { debug } = render(<AuthContextProvider><AuthCredentials /></AuthContextProvider>)
    debug()
    // act/ when
    const button = screen.getByRole('button')
    // assert/then
    expect(screen.getByText('No', { exact: false})).toBeInTheDocument()

    fireEvent.click(button)
    // await userEvent.click(button)

    expect(screen.getByText('Yes', { exact: false})).toBeInTheDocument()
  })
})
