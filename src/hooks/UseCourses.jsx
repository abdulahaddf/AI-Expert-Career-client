import { useEffect, useState } from "react";
import axios from "axios";

const useCourses = () => {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ai-server-sooty.vercel.app/courses"
        );
        setCourses(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return [courses, isLoading];
};

export default useCourses;
