import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect } from "react";

function SignIn() {
  useEffect(() => {
    console.log("redirecting");
    window.location.replace("/");
  }, []);
  return <div>Signed in, redirecting back to home page...</div>;
}

export default withAuthenticator(SignIn);
