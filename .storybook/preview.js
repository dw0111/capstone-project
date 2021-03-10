
import GlobalStyles from '../src/GlobalStyles'
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

function withGlobalStyles(Story) {
  return (
    <>
      <GlobalStyles />
      {Story()}
    </>
  );
}

addDecorator(withGlobalStyles);
