import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import useFetch from "../hooks/useFetch";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const onSuccess = (data) => {
    setUser(data);
    setLoading(false); // Move loading state management here
  };

  const { performFetch, error } = useFetch("/auth/profile", onSuccess);

  // Move error handling inside a useEffect
  useEffect(() => {
    if (error) {
      setUser(null);
      setLoading(false); // Ensure loading is false if there's an error
    }
  }, [error]);

  const getUser = useCallback(() => {
    setLoading(true); // Set loading true before fetching
    performFetch({
      credentials: "include",
    });
  }, [performFetch]);

  const refreshUser = useCallback(() => {
    setRefresh((prev) => !prev);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser, refresh]);

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser }}>
      {loading ? <div>Loading...</div> : children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
