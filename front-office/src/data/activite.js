import i18n from '@/i18n';

const data = [
  {
    id: 0,
    icon: 'ion-person-stalker',
    img: 'assets/img/slider/my_slider1.jpg',
    list: [
      {
        title: 'Analyse de l\'activité',
        desc: 'L’objectif premier est de lutter contre toutes les formes de maltraitance, d’améliorer la protection de l’enfance dans le monde et de promouvoir un climat de bientraitance. Dans tous les pays, des enfants sont victimes de violences physiques, sexuelles et psychologiques. Ces problèmes obéissent à des facteurs socio-culturels et familiaux multiples. Ainsi, certaines formes de maltraitance sont parfois encore socialement acceptées en tant que forme traditionnelle d’éducation.'
      },
      {
        title: 'Analyse du coût',
        desc: 'La lutte contre la maltraitance des enfants est un combat qui passe par la construction de lieu sécurisés pour les enfants victimes de ces sévices mais aussi de lieux déducations des parents pour promouvoir un climat de bientraitance. Cet ensemble d\'activités est budgétisé à 8342€ par An.'
      }
    ]
  },
  {
    id: 1,
    icon: 'ion-university',
    img: 'assets/img/activite/education.jpg',
    list: [
      {
        title: 'Analyse de l\'activité',
        desc: 'Au Bénin, malgré les avancées significatives amorcées depuis 2006, le système éducatif reste fortement marqué par des inégalités d’accès et de maintien à l’école. Celles-ci sont basées sur le sexe, la zone géographique, le niveau social, ou d’autres facteurs de vulnérabilité comme le handicap. Ainsi en 2012, seulement 62,7 % des filles terminaient l’école primaire contre 78,3 % des garçons.Ces inégalités sont plus importantes dans les zones rurales et pauvres, telles que le département de l’Atacora au nord- ouest du pays, où, en 2012 - 2013, 45 % des filles et 53 % des garçons allaient à l’école.'
      },
      {
        title: 'Analyse du coût',
        desc: 'Face à ces défis, nos activitées interviennent tant sur la qualité de l’offre éducative formelle et non-formelle, avec la mise en place de classes passerelles pour les enfants non-scolarisés, que sur l’augmentation de la demande éducative. Sur un période de 5 ans couvrant 4 communes du nord du Bénin, nous espérons être en mesure de venir en aide à 600 enfants non scolarisés ou déscolarisés, 2 400 élèves des écoles primaires, 400 élèves de 4 collèges d’enseignement général, dont au moins 200 filles, 80 enseignant·e·s du primaire et du secondaire et 320 acteurs du secteur éducatif au niveau local. Cet ensemble d\'activitées à été budgétisé à environs 816 746 € '
      }
    ]
  },
  {
    id: 2,
    icon: 'ion-medkit',
    img: 'assets/img/activite/sante.jpg',
    list: [
      {
        title: 'Analyse de l\'activité',
        desc: 'L\'Afrique abrite seulement 1,3 % des professionnels de la santé, alors qu\'elle porte à elle seule 25% de la charge mondiale de maladies. Beaucoup de médecins et chercheurs africains vivent en effet à l\'étranger, ce qui renforce ce phénomène de déséquilibre entre les pays. Aussi, Les dépenses publiques de santé profitent davantage aux riches qu’aux pauvres. Ainsi, en Mauritanie, 72 % des subventions versées aux hôpitaux bénéficient aux 40 % d’habitants les plus riches. Au Ghana, un tiers des dépenses publiques de santé profite au quintile le plus riche, tandis que 12 % seulement vont au quintile le plus pauvre. Les chiffres sont voisins pour la Tanzanie. Le même schéma se retrouve pour la répartition des dépenses publiques entre villes et campagne. Cette disproportion s’explique par le coût élevé que représente le fonctionnement des hôpitaux spécialisés et des établissements de formation, généralement implantés dans les centres urbains où les plus hauts revenus sont concentrés. '
      },
      {
        title: 'Analyse du coût',
        desc: 'La formulation d’une politique de santé adaptée au contexte de pénurie des ressources publiques suppose l’identification des priorités, la détermination des objectifs et le choix des instruments pour servir la politique définie. ASNS est d\'avis qu\'en matière de santé, aucune priorité ne saurait être définie. Ainsi, nous participons à la formation de jeunes médecin et à l\'approvisionnement des centres de santé en matériels et en médicaments afin de rapprocher le plus possible les populations de soins de santé correctes et moins couteux. Nous avons réussi à budgétiser pour notre secteur actuel d\'action ces activités à environs 18 456€ par an.'
      }
    ]
  },
  {
    id: 3,
    icon: 'ion-film-marker',
    img: 'assets/img/activite/culture.jpg',
    list: [
      {
        title: 'Analyse de l\'activité',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?'
      },
      {
        title: 'Analyse du coût',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?'
      }
    ]
  }
]

data.forEach((el) => {
  el.title = i18n.t(`activite.liste[${el.id}].title`);
  el.desc = i18n.t(`activite.liste[${el.id}].desc`);
  el.content = i18n.t(`activite.liste[${el.id}].content`);
});

export default data;
