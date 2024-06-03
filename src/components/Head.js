import React from 'react';
import { Helmet } from 'react-helmet';

export const Head = ({ title }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{title} | BSCBay</title>
    </Helmet>
  );
};
