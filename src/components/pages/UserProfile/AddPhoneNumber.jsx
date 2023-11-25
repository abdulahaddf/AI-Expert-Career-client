import { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';


const AddPhoneNumber = () => {
  const {auth, user, profileUpdate } = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');

  const handleSendVerificationCode = () => {
    const phoneAuthProvider = new auth.PhoneAuthProvider();
    phoneAuthProvider
      .verifyPhoneNumber(phoneNumber,)
      .then((verificationId) => {
        setVerificationId(verificationId);
        // Verification code sent successfully, handle UI update or further steps if needed
        console.log('Verification code sent');
      })
      .catch((error) => {
        // Handle error
        console.error('Error sending verification code:', error);
      });
  };

  const handleVerifyCode = () => {
    const credential = auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );

    if (user) {
      user
        .updatePhoneNumber(credential)
        .then(() => {
          // Phone number added successfully
          console.log('Phone number added:', phoneNumber);
        })
        .catch((error) => {
          // Handle error
          console.error('Error adding phone number:', error);
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
