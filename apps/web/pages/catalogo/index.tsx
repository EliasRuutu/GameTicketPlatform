import { NextPage } from 'next';
import { DefaultLayout } from '@layout/default-layout';
import { CatalogContent } from '@page-contents/catalogo';
import Head from 'next/head';
import { useRouter } from 'next/router';

const NotFind: NextPage = () => {
  const router = useRouter();
  return (
    <DefaultLayout>
      <CatalogContent />
    </DefaultLayout>
  );
};

export default NotFind;
