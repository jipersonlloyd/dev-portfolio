export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { icon: 'FaHtml5', label: 'HTML5' },
      { icon: 'FaCss3Alt', label: 'CSS3' },
      { icon: 'FaJs', label: 'JavaScript' },
      { icon: 'FaPhp', label: 'PHP' },
      { icon: 'FaMicrosoft', label: 'C#' },
      { icon: 'FaMobileAlt', label: 'Dart' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { icon: 'FaReact', label: 'React' },
      { icon: 'FaFlutter', label: 'Flutter' },
      { icon: 'FaNodeJs', label: 'Node.js' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { icon: 'FaDatabase', label: 'MySQL' },
      { icon: 'FaDatabase', label: 'MS-SQL' },
      { icon: 'FaDatabase', label: 'SQLite' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { icon: 'FaFire', label: 'Firebase' },
      { icon: 'FaGitAlt', label: 'Git' },
      { icon: 'FaGithub', label: 'GitHub' },
      { icon: 'FaMicrosoft', label: 'Azure DevOps' }, 
      { icon: 'FaBitbucket', label: 'Bitbucket' },
      { icon: 'FaTerminal', label: 'SSH / SFTP' },
      { icon: 'FaLinux', label: 'Linux' },
      { icon: 'FaServer',  label: 'REST APIs' },
      { icon: 'SiPostman', label: 'Postman' },
      { icon: 'FaCodeBranch', label: 'Agile / Scrum & Kanban' },
    ],
  },
];

export const projects = [
  {
    id: 1,
    icon: 'FaShoppingCart',
    title: 'FAST Sosyo',
    description:
      'Cross-platform mobile e-commerce application with product catalog, cart management, and order-tracking. Published on Google Play with 10K+ downloads.',
    tags: ['Dart', 'Firebase', 'SQLite', 'Flutter'],
    image: '/screenshots/fast-sosyo-playstore.png',                  // inline preview
    link: 'https://play.google.com/store/apps/details?id=com.sosyo.fast&hl=en', // real URL
    linkLabel: 'Google Play listing',
    private: false,
  },
  {
    id: 2,
    icon: 'FaCashRegister',
    title: 'Alliance POS',
    description:
      'Full-featured POS application deployed across multiple retail client branches; handles transactions, inventory, and end-of-day reporting.',
    tags: ['ActionScript 3', 'PHP', 'SQLite'],
    image: '/screenshots/alliance-pos-transaction-redacted.png',
    link: null,                                                       // no external link
    linkLabel: null,
    private: true,
  },
  {
    id: 3,
    icon: 'FaChartBar',
    title: 'Alliance HQ',
    description:
      'Admin portal for Alliance POS — internal dashboard for managing multi-branch operations, user accounts, and reporting with role-based access control.',
    tags: ['React', 'JavaScript', 'PHP', 'Laravel', 'MySQL'],
    image: '/screenshots/alliance-hq-login.png',
    link: null,
    linkLabel: null,
    private: true,
  },
];

export const contact = {
  email: 'lloyddiaz0205@gmail.com',
  github: 'github.com/jipersonlloyd',
  linkedin: 'linkedin.com/in/lloyd-jiperson-diaz-5a747925b/',
  resume: '/Lloyd_Diaz_Software_Developer_Resume.pdf',
};

export const codeSnippet = `// portfolio.js
const developer = {
  name: 'Lloyd Jiperson Diaz',
  role: 'Software Developer',
  stack: ['ReactJS', 'PHP', 'Flutter'],
  loves: 'clean architecture'
};
buildSomethingGreat();`;