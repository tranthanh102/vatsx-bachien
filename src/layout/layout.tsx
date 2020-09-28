import React from 'react';

import { Header } from 'components/header/header';
import { Footer } from 'components/footer/footer';

type Props = {
  children?: any;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
