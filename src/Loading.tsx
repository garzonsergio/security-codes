import React from "react";

class Loading extends React.Component {
  componentWillUnmount(): void {
    console.log("will unmount");
  }
  render() {
    return <p>... Loading</p>;
  }
}

export { Loading };
