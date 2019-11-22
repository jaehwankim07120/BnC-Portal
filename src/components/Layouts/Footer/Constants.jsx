import urlConf from 'configure/urlConfig';

import IconInstagram from 'images/Layouts/IcInstagram.svg';
import IconFacebook from 'images/Layouts/IcFacebook.svg';
import IconYoutube from 'images/Layouts/IcYoutube.svg';

export const socialMapArray = [
  {
    label: 'Facebook',
    icon: IconFacebook,
    link: urlConf.Facebook,
  },
  {
    label: 'Youtube',
    icon: IconYoutube,
    link: urlConf.Youtube,
  },
  {
    label: 'Instagram',
    icon: IconInstagram,
    link: urlConf.Instagram,
  },
];

export default { socialMapArray };
