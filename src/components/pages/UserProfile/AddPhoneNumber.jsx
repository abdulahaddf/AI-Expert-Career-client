import { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useEffect } from 'react';
import { PhoneAuthProvider, RecaptchaVerifier } from 'firebase/auth';

const AddPhoneNumber = () => {
  

  const { user, auth } = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

  useEffect(() => {
    // Initialize the recaptchaVerifier
    const verifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'invisible', // or 'normal'
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // This callback will be called when the user successfully solves the reCAPTCHA.
        console.log('reCAPTCHA solved:', response);
      },
      'expired-callback': () => {
        // reCAPTCHA response expired, reset the reCAPTCHA widget.
        // This callback will be called when the reCAPTCHA response expires.
        console.log('reCAPTCHA expired');
        // Reset the recaptchaVerifier when expired
        setRecaptchaVerifier(null);
      },
    });

    // Set the recaptchaVerifier in the state
    setRecaptchaVerifier(verifier);
  }, []);

  const handleSendVerificationCode = () => {
    if (recaptchaVerifier) {
      const phoneAuthProvider = new PhoneAuthProvider(auth);
      phoneAuthProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier)
        .then((vid) => {
          setVerificationId(vid);
          console.log('Verification code sent');
        })
        .catch((error) => {
          console.error('Error sending verification code:', error);
        });
    } else {
      console.error('RecaptchaVerifier not initialized');
    }
  };

  const handleVerifyCode = () => {
    const credential = PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );

    if (user) {
      user
        .linkWithCredential(credential)
        .then((linkedUser) => {
          // Phone number added successfully
          console.log('Phone number added:', linkedUser);
        })
        .catch((error) => {
          // Handle error
          console.error('Error linking phone number:', error);
        });
    }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  return (
    <div className='h-screen flex items-center justify-center'>
      {user ? (
        <div className='flex items-center justify-center'>
          <p>Welcome, {user.displayName}!</p>
          <label>
            Phone Number:
            <input
              className='input-primary'
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </label>
          <button className='btn' onClick={handleSendVerificationCode}>Send Verification Code</button>
          <input
            className='input-primary'
            type="text"
            value={verificationCode}
            onChange={handleVerificationCodeChange}
            placeholder="Enter Verification Code"
          />
          <button className='btn' onClick={handleVerifyCode}>Verify</button>
        </div>
      ) : (
        <p>Please sign in with Gmail to add a phone number.</p>
      )}
    </div>
  );
};

export default AddPhoneNumber;
