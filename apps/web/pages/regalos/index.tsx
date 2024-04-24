import { NextPage } from 'next';
import { DefaultLayout } from '@layout/default-layout';
import { RuletaContent } from '@page-contents/gift';
import { useRouter } from 'next/router';
import Head from 'next/head';

const RuletaPage: NextPage = () => {
  const router = useRouter();

  return (
    <DefaultLayout>
      <RuletaContent />
    </DefaultLayout>
  );
};

export async function getServerSideProps(): Promise<{
  props: {
    title: string;
    description: string;
    url: string;
  };
}> {
  return {
    props: {
      title: 'Venium - Gira la Ruleta de Regalos para premios gratis 🎁',
      description:
        'Obtén premios y descuentos TODOS LOS DÍAS para tus compras dentro de nuestro marketplace. ¡Los mejores jugadores eligen Venium!',
      url: 'https://www.mercadogamer.com/ruleta',
    },
  };
}

export default RuletaPage;
