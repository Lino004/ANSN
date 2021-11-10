import i18n from '@/i18n';

export default [
  {
    title: i18n.t('menu.home'),
    to: '/',
    children: [],
  },
  {
    title: i18n.t('menu.about'),
    to: '/about',
    children: [],
  },
  {
    title: i18n.t('menu.activite'),
    to: '/activités',
    children: [],
  },
  {
    title: i18n.t('menu.projet'),
    to: '/project',
    children: [
      /* {
        title: 'Project',
        to: '/project',
      },
      {
        title: 'Project Details',
        to: '/project-details',
      }, */
    ],
  },
  {
    title: i18n.t('menu.contact'),
    to: '/contact',
    children: [],
  },
]