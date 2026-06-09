import { CONTACT } from '../data/portfolio.jsx';
import { CONTACT_ICONS } from '../data/icons.jsx';

export default function Footer() {
  const getIcon = (iconName) => {
    const Icon = CONTACT_ICONS[iconName];
    return Icon ? <Icon /> : null;
  };

  const socialLinks = CONTACT.links.filter((l) => l.icon !== 'email');

  return (
    <footer>
      <p>Bernardo Stocco Silva &mdash; Web Developer <span>//</span> Passo Fundo, BR</p>
      <div className="footer-social">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener" aria-label={link.label}>
            {getIcon(link.icon)}
          </a>
        ))}
      </div>
    </footer>
  );
}
