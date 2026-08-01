import { Capability, NavItem, ProcessStep, StackGroup, TeamMember } from '../types';
import jahidImg from '../images/jahid.jpeg';
import armanImg from '../images/arman.jpeg';
import saifurImg from '../images/saifur.jpeg';

export const site = {
    name: 'JAS Labs',
    shortPitch: 'Engineering studio for data-heavy software.',
    email: 'jaslabs43@gmail.com',
    phone: '+8801644199529',
    location: 'Dhaka, Bangladesh',
    timezone: 'UTC+6',
    github: 'https://github.com/JAS-Labs',
    linkedin: 'https://linkedin.com/company/jas-labs',
    twitter: 'https://twitter.com/JAS_Labs',
};

export const navItems: NavItem[] = [
    { label: 'Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Approach', href: '#approach' },
    { label: 'Team', href: '#team' },
];

export const heroStats: { value: string; label: string }[] = [
    { value: '07', label: 'Systems delivered' },
    { value: '03', label: 'Engineers, no middle layer' },
    { value: '06', label: 'Practice areas' },
    { value: 'UTC+6', label: 'Dhaka, working worldwide' },
];

export const domains: string[] = [
    'Petroleum E&P',
    'Defence training',
    'Real estate',
    'Civic & volunteering',
    'Sustainability',
    'NLP research',
    'Public sector data',
];

export const capabilities: Capability[] = [
    {
        id: 'geospatial',
        title: 'Geospatial & data platforms',
        blurb:
            'For teams whose data has coordinates attached and no good place to live.',
        bullets: [
            'Spatial modelling in PostGIS',
            'GeoServer & OGC services',
            'Leaflet map interfaces',
            'Domain formats — LAS, SEGY, CSV',
        ],
        icon: 'Map',
    },
    {
        id: 'mobile',
        title: 'Cross-platform product engineering',
        blurb:
            'One Flutter codebase to Android, iOS and web — without the usual compromises.',
        bullets: [
            'Flutter & Dart architecture',
            'Offline-tolerant data sync',
            'Maps, geolocation, QR, push',
            'SSO and identity flows',
        ],
        icon: 'Smartphone',
    },
    {
        id: 'ai',
        title: 'Applied AI & language systems',
        blurb:
            'Retrieval pipelines and transformer models, including low-resource languages.',
        bullets: [
            'RAG and vector search',
            'Fine-tuning & evaluation',
            'Topic modelling and clustering',
            'LLM features inside real products',
        ],
        icon: 'BrainCircuit',
    },
    {
        id: 'backend',
        title: 'Backend & API architecture',
        blurb:
            'Django, FastAPI and .NET services with contracts you can hand to another team.',
        bullets: [
            'REST design and OpenAPI contracts',
            'Auth, roles and audit trails',
            'Reporting and PDF automation',
            'Relational data design',
        ],
        icon: 'Server',
    },
    {
        id: 'delivery',
        title: 'Release & delivery engineering',
        blurb:
            'Reproducible builds and boring deploys. Versioned, scripted, multi-environment.',
        bullets: [
            'Pinned toolchains (FVM, lockfiles)',
            'Multi-environment build matrices',
            'Scripted release packaging',
            'CI pipelines and deploy automation',
        ],
        icon: 'GitBranch',
    },
    {
        id: 'discovery',
        title: 'Technical discovery',
        blurb:
            'A short, paid engagement to de-risk a build before anyone commits a budget.',
        bullets: [
            'Architecture and schema review',
            'Feasibility and build-vs-buy',
            'Estimates you can plan against',
            'Written findings, not a deck',
        ],
        icon: 'Compass',
    },
];

export const stackGroups: StackGroup[] = [
    { label: 'Languages', items: ['Python', 'Dart', 'TypeScript', 'C#', 'SQL'] },
    { label: 'Interface', items: ['Flutter', 'React', 'Leaflet', 'Chart.js', 'Plotly', 'Tailwind'] },
    { label: 'Services', items: ['Django', 'DRF', 'FastAPI', '.NET', 'OpenAPI'] },
    { label: 'Data & spatial', items: ['PostgreSQL', 'PostGIS', 'GeoServer', 'Vector DBs', 'LAS / SEGY'] },
    { label: 'Machine learning', items: ['PyTorch', 'Hugging Face', 'LangChain', 'BERTopic', 'BanglaBERT'] },
    { label: 'Delivery', items: ['Docker', 'Linux & SSH', 'GitHub Actions', 'FVM', 'Nginx'] },
];

export const processSteps: ProcessStep[] = [
    {
        number: '01',
        title: 'Scope',
        duration: 'Week 0',
        description:
            'We ask the awkward questions first — who uses this, what breaks today, what does the data actually look like. Cheaper to find the wall now than in month three.',
        outputs: ['Problem statement', 'Constraints & risks', 'Fixed-price estimate'],
    },
    {
        number: '02',
        title: 'Architect',
        duration: 'Weeks 1–2',
        description:
            'Schema, API contract, and a spike through the riskiest part of the build. Nothing else starts until the hard thing is proven to work.',
        outputs: ['Data model', 'OpenAPI contract', 'Technical spike'],
    },
    {
        number: '03',
        title: 'Build',
        duration: 'Two-week increments',
        description:
            'You get a running build every increment, not a status report. Direct access to the engineers writing the code — no account layer in between.',
        outputs: ['Working builds', 'Increment demos', 'Open issue tracker'],
    },
    {
        number: '04',
        title: 'Ship & hand over',
        duration: 'Close-out',
        description:
            'Deployed, documented and transferred. You own the repository, the infrastructure and the runbook — with or without us afterwards.',
        outputs: ['Production deploy', 'Runbook & docs', 'Repository transfer'],
    },
];

export const principles: { title: string; body: string }[] = [
    {
        title: 'Three engineers, no middle layer',
        body: 'The people who scope your project are the people who build it. Nothing is repackaged on the way to the keyboard.',
    },
    {
        title: 'Contracts before code',
        body: 'Schemas and API contracts get agreed and written down first. It is the cheapest disagreement you will ever have.',
    },
    {
        title: 'You own everything',
        body: 'Repository, credentials, infrastructure, documentation. We build systems you could hand to another team tomorrow.',
    },
];

export const team: TeamMember[] = [
    {
        name: 'Jahidul Islam',
        role: 'Founder & Mobile Lead',
        focus: ['Flutter', 'Mobile architecture', 'Release engineering'],
        bio: 'Leads cross-platform product work — architecture, state management and the delivery pipeline that gets builds into stores reliably.',
        image: jahidImg,
        github: 'https://github.com/Jahidul007',
        linkedin: 'https://www.linkedin.com/in/jahidul007/',
        twitter: 'https://twitter.com/Jahidul-Islam',
    },
    {
        name: 'Arman Abdullah',
        role: 'Full-Stack Engineer',
        focus: ['.NET', 'Web platforms', 'Front-end systems'],
        bio: 'Builds the web half of the studio — .NET services, front-end architecture and the integration work that connects them.',
        image: armanImg,
        github: 'https://github.com/mdabdullahfaruque',
        linkedin: 'https://www.linkedin.com/in/mdabdullahfaruque/',
        twitter: 'https://twitter.com/ArmanAbdullah',
    },
    {
        name: 'Saifur Rahman',
        role: 'Backend & AI Engineer',
        focus: ['Python', 'Geospatial data', 'NLP'],
        bio: 'Works where the data is heaviest — spatial schemas, Django and FastAPI services, and applied NLP including low-resource Bangla.',
        image: saifurImg,
        github: 'https://github.com/Saifur43',
        linkedin: 'https://www.linkedin.com/in/saifur43',
        twitter: 'https://twitter.com/Saifur43',
    },
];

export const engagements: string[] = ['Web', 'Mobile', 'Data / GIS', 'AI / ML', 'Discovery'];
