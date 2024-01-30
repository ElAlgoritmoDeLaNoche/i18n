import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const [t, i18n] = useTranslation('global')

  return (
    <div>
      <h1>{t("header.hello-world")}</h1>
      <br /><br />
      <button
        onClick={() => i18n.changeLanguage('es')}
        style={{ marginRight: '10px' }}
      >
        Español
      </button>
      <button
        onClick={() => i18n.changeLanguage('en')}
      >
        English
      </button>
    </div>
  );
}

export default Header;
