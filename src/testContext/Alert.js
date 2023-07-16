import { useCustomContext } from "./Context/Context";

const Alert = () => {
  const context = useCustomContext();
  return (
    context.toggleValue && (
      <div className="alert alert-danger">Alert, Alert</div>
    )
  );
};

export default Alert;

// import React from "react";
// import Alert1 from "./Alert1/Alert1";

// const Alert = () => {
//   return <Alert1 />;
// };

// export default Alert;
