import React from "react";
export default React.memo(function MemoComp({ count }) {
  console.log("Rendering memo component ");
  return <div>{count}</div>;
});
