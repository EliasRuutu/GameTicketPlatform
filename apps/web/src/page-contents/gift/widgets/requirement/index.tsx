import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { openLoginModal, useAppDispatch, useTypedSelector } from '@store';
import { endpoints, get } from '@utils';
import { RouletteRequirementCard } from '..';
import { TwoFactorAuthentication } from '../two-factor-authentication';

const VerificationPhone = dynamic(() => import('../verification-phone/index'));

export const RouletteRequirements: React.FC<{
  onChnageValidated: (validated: boolean) => void;
}> = ({ onChnageValidated }) => {
  const dispatch = useAppDispatch();
  const { user } = useTypedSelector((store) => store.auth);

  const [state, setState] = useState<{
    phoneNumber: string;
    verification: {
      userLogin: boolean;
      phoneNumber: boolean;
    };
    modal: {
      name: string;
    };
  }>({
    phoneNumber: '',
    modal: { name: '' },
    verification: { userLogin: false, phoneNumber: false },
  });

  useEffect(() => {
    onChnageValidated &&
      onChnageValidated(
        (user?.id || state.verification.userLogin) && state.verification.phoneNumber
      );
  }, [user?.id, state.verification.userLogin, state.verification.phoneNumber]);

  const onCloseModal = (): void => setState({ ...state, modal: { name: '' } });

  const onEnterPhone = async (value: string): Promise<void> => {
    try {
      await get(`${endpoints.userUrl}/sendSms/${value}`);
      setState({ ...state, phoneNumber: value, modal: { name: 'confirm-2fa' } });
    } catch (error) {
      console.log(error);
    }
  };

  const onVerification2fa = (): void => {
    setState({
      ...state,
      modal: { name: '' },
      verification: { ...state.verification, phoneNumber: true },
    });
  };

  return (
    <div className="roulette-requirements">
      <div className="title">Requisitos</div>
      <div className="description">
        Para tener acceso a la ruleta, debes cumplir las siguientes condiciones
      </div>

      <VerificationPhone
        open={state.modal.name === 'confirm-number'}
        onClose={onCloseModal}
        onVerification={onEnterPhone}
      />

      <TwoFactorAuthentication
        open={state.modal.name === 'confirm-2fa'}
        onClose={onCloseModal}
        onVerification={onVerification2fa}
        onResend={() => onEnterPhone(state.phoneNumber)}
      />
    </div>
  );
};
