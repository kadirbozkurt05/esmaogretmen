import { useState } from "react";
import {auth} from "./../../firebase.js"

const useFetch = (route, onReceived) => {

  const controller = new AbortController();
  const signal = controller.signal;
  const cancelFetch = () => {
    controller.abort();
  };

  if (route.includes("api/")) {
    /**
     * We add this check here to provide a better error message if you accidentally add the api part
     * As an error that happens later because of this can be very confusing!
     */
    throw Error(
      "when using the useFetch hook, the route should not include the /api/ part"
    );
  }

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const performFetch = async (options) => {
    setError(null);
    setIsLoading(true);
    let idToken = "";

    if(auth.currentUser){
      idToken = await auth.currentUser.getIdToken();
    }
    
    
    const baseOptions = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "authorization": "Bearer "+idToken
      },
    };

    const fetchData = async () => {


const url =`${import.meta.env.VITE_HOST_URL}/api${route}`;


      const res = await fetch(url, { ...baseOptions, ...options, signal });

      if (!res.ok) {
        setError(
          `Fetch for ${url} returned an invalid status (${
            res.status
          }). Received: ${JSON.stringify(res)}`
        );
      }

      const jsonResult = await res.json();

      onReceived(jsonResult);

      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setError(error);
      setIsLoading(false);
    });
  };

  return { isLoading, error, performFetch, cancelFetch };
};

export default useFetch;





