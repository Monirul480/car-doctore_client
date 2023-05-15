import {useContext} from 'react'
import { AuthContext } from '../../../../Providers/AuthProvider';
const SocialLogin = () => {
    const {googleSign} = useContext(AuthContext);

    const handleGoogleSignI = () => {
        googleSign()
        .then(result => {
            console.log(result.user);
        })
        .then(error => {
            console.log(error);
        })
    }

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleSignI} className="btn btn-circle btn-outline">G</button> 
      </div>
    </div>
  );
};

export default SocialLogin;
