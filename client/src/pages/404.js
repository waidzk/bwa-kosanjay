import React from "react";

import Button from "elements/Button";

function NotFound(props) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-xl mb-1">Are you lost?</h1>
      <p className="text-sm mb-5">
        Some page are still in development, maybe you can go back if you want.
      </p>
      <Button
        className="btn btn-primary text-accent"
        type="button"
        onClick={() => window.history.back()}
      >
        Yes, bring me to safe place please
      </Button>
    </div>
  );
}

export default NotFound;