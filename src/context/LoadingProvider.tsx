import React from "react";

export const LoadingContext = React.createContext({
  isLoading: false,
  startLoad: () => {},
  endLoad: () => {},
});

function LoadingProvider(props: { children: any }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const startLoad = () => {
    setIsLoading(true);
  };

  const endLoad = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoad, endLoad }}>
      {props.children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;
