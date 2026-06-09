import { useLanguage } from '../contexts/LanguageContext';

const flags = {
  'pt-BR': (
    <svg viewBox="0 0 36 25" width="28" height="20">
      <rect width="36" height="25" fill="#009739" rx="2"/>
      <polygon points="18,3 33,12.5 18,22 3,12.5" fill="#FEDD00"/>
      <circle cx="18" cy="12.5" r="5.5" fill="#002776"/>
      <path d="M12 12.5 Q18 9.5 24 12.5" stroke="#FFF" stroke-width="2" fill="none"/>
      <circle cx="15.5" cy="11" r=".9" fill="#FFF" opacity=".8"/>
      <circle cx="19" cy="10" r=".6" fill="#FFF" opacity=".6"/>
      <circle cx="21.5" cy="11.8" r=".5" fill="#FFF" opacity=".5"/>
      <circle cx="13.5" cy="13.2" r=".5" fill="#FFF" opacity=".5"/>
    </svg>
  ),
  'en-US': (
    <svg viewBox="0 0 36 25" width="28" height="20">
      <rect width="36" height="25" fill="#FFF" rx="2"/>
      <g fill="#B22234">
        <rect y="2" width="36" height="2"/>
        <rect y="6" width="36" height="2"/>
        <rect y="10" width="36" height="2"/>
        <rect y="14" width="36" height="2"/>
        <rect y="18" width="36" height="2"/>
        <rect y="22" width="36" height="2"/>
      </g>
      <rect width="15" height="13" fill="#3C3B6E" rx="1"/>
      <g fill="#FFF" opacity=".9">
        {[4,8].map(y => (
          <g key={y}>
            {[3,7,11].map(x => <circle key={x} cx={x} cy={y} r=".8"/>)}
          </g>
        ))}
        {[2,6,10].map(y => (
          <g key={y}>
            {[1,5,9,13].map(x => <circle key={x} cx={x} cy={y} r=".8"/>)}
          </g>
        ))}
      </g>
    </svg>
  ),
  'es-ES': (
    <svg viewBox="0 0 36 25" width="28" height="20">
      <rect width="36" height="25" fill="#AA1515" rx="2"/>
      <rect y="6" width="36" height="13" fill="#F1BF00"/>
    </svg>
  ),
};

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const languages = ['pt-BR', 'en-US', 'es-ES'];

  return (
    <div className="lang-switcher">
      {languages.map(l => (
        <button
          key={l}
          className={`lang-btn ${lang === l ? 'active' : ''}`}
          onClick={() => setLang(l)}
          aria-label={l}
        >
          {flags[l]}
        </button>
      ))}
    </div>
  );
}
