import { NextPage } from 'next';
import { DefaultLayout } from '@layout/default-layout';
import { VendorLandingPage } from '@web/page-contents/vendedores';
import Head from 'next/head';

const VendorPage: NextPage = () => {
  return (
    <DefaultLayout full>
      <VendorLandingPage />
    </DefaultLayout>
  );
};

export default VendorPage;
