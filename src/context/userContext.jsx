import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const getUser = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to fetch user", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshUser = useCallback(() => {
    setLoading(true);
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
