import React, { createContext, useContext, useCallback } from 'react';
import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(): void;
  remove(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('add');
  }, []);

  const remove = useCallback(() => {
    //
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, remove }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useTost must be used whithin a ToastProvider');
  }
  return context;
}

export { ToastProvider, useToast };
