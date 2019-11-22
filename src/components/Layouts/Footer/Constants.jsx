import urlConf from 'configure/urlConfig';

import IconInstagram from 'images/Layouts/IcInstagram.svg';
import IconFacebook from 'images/Layouts/IcFacebook.svg';
import IconYoutube from 'images/Layouts/IcYoutube.svg';

export const socialMap = [
  {
    label: 'Facebook',
    icon: IconFacebook,
    link: urlConf.facebook,
  },
  {
    label: 'Youtube',
    icon: IconYoutube,
    link: urlConf.youtube,
  },
  {
    label: 'Instagram',
    icon: IconInstagram,
    link: urlConf.instagram,
  },
];

export default { socialMap };
