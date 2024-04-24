import React, { useContext, useMemo, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '@store';
import {
  addMessageToToast,
  endpoints,
  getFileFullUrl,
  httpGetAll,
  madeBackgroundImageUrl,
  RankingLevel,
  toUSD,
  get,
  post,
} from '@utils';
import { Button } from '@widgets/button';
import { Icon } from '@widgets/icon';
import { useRouter } from 'next/router';
import { ProductDetailContext } from '../../context';
import { Input } from '@widgets/input';
import CuponCard from '@web/components/cupon-card';
import Image from 'next/image';

export const ProductDetail: React.FC = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { user } = useTypedSelector((store) => store.auth);

  const [question, setPINEmail] = useState<string>();
  const [discountCode, setDiscount] = useState<string>();
  const [discountAmount, setDiscountAmount] = useState<any>(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [selectedCupon, setSelectedCupon] = useState<CuponsModelType | any>(null);

  const {
    state: { product },
  } = useContext(ProductDetailContext);

  //Selected Payment
  const onCardClick = (index: number) => {
    setActiveCard(index);
  };

  // Selected Cupons
  const onSelectCupon = (cupon: CuponsModelType) => {
    setSelectedCupon(cupon);
  };

  // Discount connection
  const onSendDiscountCode = async (): Promise<void> => {
    try {
      const result = await post(endpoints.discountCodesUrl, discountCode);
      if (result) {
        // addMessageToToast('Su pregunta ha sido enviada con éxito.', {
        //   icon: 'check-circle',
        //   status: 'success',
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //submit cupon pay
  const onPayAction = async (): Promise<void> => {
    const data = {
      user: user.emailAddress,
      selected_cupon: selectedCupon,
      price: selectedCupon?.price - discountAmount,
      payment: activeCard,
    };
    console.log('payment', data);

    const result = await post(endpoints.discountCodesUrl, data);
    if (result) {
      console.log('result', result);
    }
  };

  const paymentMethods = useMemo<{ id: string; image: string; name: string }[]>(
    () => [
      { id: '1', image: 'card.webp', name: 'card' },
      { id: '2', image: 'paypal.webp', name: 'paypal' },
      { id: '3', image: 'apple-pay.webp', name: 'apple' },
      { id: '4', image: 'google.webp', name: 'google' },
      { id: '5', image: 'zinli-logo.webp', name: 'zinli' },
      { id: '6', image: 'binance_01.webp', name: 'binance' },
      { id: '7', image: 'cabal.webp', name: 'cabal' },
    ],
    []
  );

  const cupons: CuponsModelType[] = [
    {
      diamond: 'cupon-1.webp',
      amount: '25',
      price: '0.50',
    },
    {
      diamond: 'cupon-1.webp',
      amount: '50',
      price: '0.80',
    },
    {
      diamond: 'cupon-1.webp',
      amount: '100+10',
      price: '1.30',
    },
    {
      diamond: 'cupon-2.webp',
      amount: '310+31',
      price: '3.60',
    },
    {
      diamond: 'cupon-2.webp',
      amount: '520+52',
      price: '6.00',
    },
    {
      diamond: 'cupon-3.webp',
      amount: '1050+105',
      price: '12.00',
    },
    {
      diamond: 'cupon-4.webp',
      amount: '2160+216',
      price: '23.00',
    },
    {
      diamond: 'cupon-5.webp',
      amount: '5580+580',
      price: '55.00',
    },
    {
      diamond: 'cupon-6.webp',
      amount: 'Pase De Nivel',
      price: '4.00',
    },
    {
      diamond: 'cupon-7.webp',
      amount: 'Tarjeta Semanal',
      price: '2.60',
    },
    {
      diamond: 'cupon-8.webp',
      amount: 'Tarjeta Mensual',
      price: '11.00',
    },
  ];

  return (
    <div className="product-detail">
      <div className="buyer-info">
        <div className="description">
          <div className="label">Introduzca correo electrónico</div>
          <p>
            Asegúrese de la exactitud de su correo electrónico para el PIN y la entrega de recibos
            después de la compra.
          </p>
        </div>
        <Input
          type="text"
          placeholder="Introduzca correo electrónico"
          width="100%"
          value={user ? user?.emailAddress : ''}
          onChange={(value) => setPINEmail(value as string)}
        />
      </div>

      <div className="select-diamond">
        <div className="label">Por favor seleccione el paquete</div>
        <CuponCard cupons={cupons} onSelectCupon={onSelectCupon} />
      </div>

      {selectedCupon && (
        <>
          <div className="price">
            <div className="value">{`$ ${
              selectedCupon?.price ? selectedCupon?.price - discountAmount : ''
            }`}</div>

            <div className="discount">{`$ 0`}</div>
            <div className="discount-amount">
              {`$ 0`} <span>Descuento</span>
            </div>
          </div>

          <div className="payment-methods">
            <div className="label">Medios de pago</div>
            <ul className="content">
              {paymentMethods.map((item, index) => (
                <li
                  key={index}
                  className={`${activeCard === index ? 'active' : ''}`}
                  onClick={() => onCardClick(index)}
                >
                  <Image
                    src={`../assets/imgs//payments/${item.image}`}
                    className="icon"
                    width={60}
                    height={40}
                    loading="lazy"
                    unoptimized={true}
                    alt="device card"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="discount-code">
            <div className="label">¿Tiene un código de promoción?</div>
            <div className="code">
              <Input
                placeholder="¿Tiene un código de promoción?"
                width="100%"
                value={discountCode}
                onChange={(value) => setDiscount(value as string)}
              />
              <Button kind="secondary" onClick={() => onSendDiscountCode()}>
                Aplicar
              </Button>
            </div>
          </div>

          <div className="move-cart">
            <Button size="big" width="100%" id="buy-now-button" onClick={() => onPayAction()}>
              Comprar ahora
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
