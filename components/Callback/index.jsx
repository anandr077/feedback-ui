import React, { useEffect } from "react";
import { exchangeCodeForToken } from "../../service.js";

const Callback = () => {
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const code = urlSearchParams.get("code");

    if (code) {
      exchangeCodeForToken(code).then(() => {
        window.location.href = "/";
      });
    }
  }, []);

  return <div>Processing...</div>;
};

export default Callback;
