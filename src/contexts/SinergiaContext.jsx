import React, { createContext, useContext, useState } from 'react';

const SinergiaContext = createContext();

export const useSinergia = () => {
  const context = useContext(SinergiaContext);
  if (!context) {
    throw new Error('useSinergia must be used within a SinergiaProvider');
  }
  return context;
};

export const SinergiaProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const value = {
    user,
    setUser,
    loading,
    setLoading
  };

  return (
    <SinergiaContext.Provider value={value}>
      {children}
    </SinergiaContext.Provider>
  );
};
