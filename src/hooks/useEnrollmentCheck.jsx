import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useEnrollmentCheck = (_id) => {
  const [enrolled, setEnrolled] = useState(null);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const checkEnrollment = async (courseId, userEmail) => {
    try {
      const response = await fetch(`https://ai-server-sooty.vercel.app/check-enrollment?courseId=${courseId}&email=${userEmail}`);
      if (response.ok) {
        const data = await response.json();
        setEnrolled(data.enrolled);
      } else {
        throw new Error('Failed to fetch');
      }
    } catch (error) {
      console.error('Error checking enrollment:', error);
      setEnrolled(false);
    }
  };

  useEffect(() => {
    if (_id && email) {
      checkEnrollment(_id, email);
    }
  }, [_id, email]);

  return enrolled;
};

export default useEnrollmentCheck;
