import {act, renderHook} from "@testing-library/react";
import {useAuth} from "./AuthContext";

describe('useAuth hook', () => {
  it('should toggle value', () => {
    const { result } = renderHook((() => useAuth()))

    expect(result.current.isLoggedIn).toEqual(false)
    act(() => result.current.toggleLoggedIn())

    expect(result.current.isLoggedIn).toEqual(true)
  })
})
