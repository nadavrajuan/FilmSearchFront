import { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";

export const useHttpClient = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(async (url, method = "GET", data = null, headers = {}) => {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);
    setIsError(null);
    try {
      if (activeHttpRequests.current.length > 1) {
        await activeHttpRequests.current[0].abort();
        activeHttpRequests.current.shift();
      }
      const res = await axios({
        method,
        url,
        data,
        headers,
        signal: httpAbortCtrl.signal,
      });

      const response = {
        status: res.status,
        data: res.data
      }

      setIsLoading(false);
      if (res.status === 200 || res.status === 201) {
        return response
      } else {
        throw new Error(res.message);
      }
    } catch (e) {
      setIsLoading(false);
      const errorMessage = 
        e.response?.data.message ||
        e.message ||
        "something went wrong, please try again";
      setIsError(errorMessage);
      const errorResponse = {
        status: e.response?.status || 500,
        message: errorMessage,
      };
      return { e: errorResponse };
    }
  }, []);

  const clearError = () => {
    setIsError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current = []
    };
  }, []);

  return { isLoading, isError, sendRequest, clearError };
};
