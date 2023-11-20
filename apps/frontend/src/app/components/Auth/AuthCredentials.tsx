import {useAuthContext} from "./AuthContext";
import {Button} from "@ems/common-ui";

export const AuthCredentials = () => {
  const authContext = useAuthContext();
  const toggleLoggedIn = () => {
    authContext.toggleLoggedIn()
  }

  return (
    <div>
      <h2>AuthCredentials</h2>
      <p>
        Is user logged in? {authContext.isLoggedIn ? 'Yes' : 'No'}
      </p>
      <Button onClick={toggleLoggedIn} label={"Toggle"} />
    </div>
  )
}
