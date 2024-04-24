import { useState } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch } from '@store';

import { Icon } from '@widgets/icon';
import { Menu } from '@widgets/menu';

export const LanguageSelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [openLanguage, setLanguage] = useState<boolean>(false);

  const onClickLanguage = (language: LanguagesItem): void => {
    console.log('select language', language);
  };

  const languages: LanguagesItem[] = [
    {
      id: '1',
      key: 'es',
      lang: 'Spain',
    },
    {
      id: '2',
      key: 'it',
      lang: 'Italy',
    },
  ];

  return (
    <Menu
      maxHeight="unset"
      open={openLanguage}
      onChangeOpen={(val) => setLanguage(val)}
      activator={
        <div className="notification badge-container">
          <Icon name="globe" />
        </div>
      }
    >
      <div className="language-select-container">
        <ul className="content">
          {languages.map((language) => (
            <li key={language.id} onClick={() => onClickLanguage(language)}>
              <div className="language">{language.lang}</div>
            </li>
          ))}
        </ul>
      </div>
    </Menu>
  );
};
