import { useState, useEffect } from 'react';

const useConsultants = () => {
  const [consultants, setConsultants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const response = await fetch('https://ai-server-sooty.vercel.app/allconsultants'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setConsultants(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchConsultants();
  }, []);

  return { consultants, loading, error };
};

export default useConsultants;
