import { GoogleLogin } from '@react-oauth/google';


const GoogleLoginComponent = () => {

    return (
<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
    );
};

export default GoogleLoginComponent;
