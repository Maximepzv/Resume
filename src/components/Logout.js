import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '634491167857-98p85106755i3771otfudnsrhn22kd08.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;