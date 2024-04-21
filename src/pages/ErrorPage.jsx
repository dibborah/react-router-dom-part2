import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  // ### A Theory 
  // Console.dir and console.table is better than conso
  console.table(error);
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  );
};

export default Error;
