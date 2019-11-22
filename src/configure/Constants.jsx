import urlConf from 'configure/urlConfig';

import IconInstagram from 'images/Layouts/IcInstagram.svg';
import IconFacebook from 'images/Layouts/IcFacebook.svg';
import IconGit from 'images/Layouts/IcGit.svg';

export const socialMapArray = [
  {
    label: 'Git',
    icon: IconGit,
    link: urlConf.Git,
  },
  {
    label: 'Facebook',
    icon: IconFacebook,
    link: urlConf.Facebook,
  },
  {
    label: 'Instagram',
    icon: IconInstagram,
    link: urlConf.Instagram,
  },
];

export default { socialMapArray };
