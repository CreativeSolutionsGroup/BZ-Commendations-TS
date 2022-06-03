import Button from "@material-ui/core/Button";
import { PropsWithChildren } from "react"

import LoginIcon from '@material-ui/icons/ArrowForward';
import { GoogleLogin } from "react-google-login";

export default ({ children }: PropsWithChildren<{}>) => {

  const clientId =
    '605312368617-6uo64jv6urmtefh0t81ong1ed5opvj2a.apps.googleusercontent.com';
  
  const success = () => {}

  const failure = () => {}

  return (
    <>
      <GoogleLogin
        buttonText="LOGIN"
        clientId={clientId}
        onSuccess={success}
        onFailure={failure}
        cookiePolicy={"single_host_origin"}
        hostedDomain="cedarville.edu"
        isSignedIn={true}
        prompt="consent"
        scope={'email profile https://www.googleapis.com/auth/userinfo.profile'}
        fetchBasicProfile={false}
        render={renderProps => (
          <Button
            variant="contained"
            onClick={renderProps.onClick}
            color="primary"
            endIcon={<LoginIcon />}
          >
            Login
          </Button >
        )}
      />
    </>
  )
}