import { NextPage } from 'next';
import { HomeContent } from '@page-contents/home';
import { DynamicLayout } from '@web/layout/dynamic-layout/inex';

const NotFind: NextPage = () => {
  return (
    <DynamicLayout>
      <HomeContent />
    </DynamicLayout>
  );
};

export async function getServerSideProps(): Promise<{
  props: {
    title: string;
    description: string;
  };
}> {
  return {
    props: {
      title: 'Venium',
      description:
        '¡Compra juegos más baratos y sin impuesto país! Para PC, celular, PS4, PS5, Xbox, etc. Entrega al instante. ¿Qué esperas?',
    },
  };
}

export default NotFind;
