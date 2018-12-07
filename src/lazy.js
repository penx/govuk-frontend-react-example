import React from "react";

import { Button } from "govuk-frontend-react";

export default () => {
  return (
    <div>
      <Button>A button!</Button>
      <h2>Tree shaking/Lazy loading</h2>
      <p>Note that the CSS for this button was not in in the initial page load - it was only loaded once the Button component was used.</p>
    </div>
  );
}
