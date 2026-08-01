import { Project } from '../types';
import webgis1 from '../images/webgis-dims1.png';
import webgis2 from '../images/webgis-dims2.png';
import webgis3 from '../images/webgis-dims3.png';

export const projects: Project[] = [
    {
        id: '1',
        slug: 'webgis-data-inventory',
        title: 'WebGIS Data Inventory Management System',
        category: 'Spatial data platform',
        domain: 'Petroleum E&P',
        disciplines: ['Geospatial', 'Backend'],
        status: 'Delivered',
        summary:
            'A single spatial system of record for petroleum exploration and production data.',
        description:
            'Exploration and production teams keep decades of well logs, core analyses, drilling reports and production figures spread across file shares and spreadsheets. We modelled that estate as spatial data and put it behind one interface: an authenticated Django backend over PostGIS, OGC layers published through GeoServer, and a map-and-dashboard front end where a geologist can move from a point on the map to the underlying records without leaving the browser.',
        highlights: [
            'Spatial schema covering wells, core analysis, drilling reports and production metrics',
            'REST API layer over PostGIS, with OGC-compliant layers published via GeoServer',
            'Interactive map and analytics dashboards built with Leaflet, Chart.js and Plotly',
            'Automated PDF reporting and conversion between industry formats including LAS and SEGY',
        ],
        techStack: ['Django', 'PostGIS', 'GeoServer', 'Leaflet', 'Chart.js', 'Plotly', 'LAS / SEGY', 'REST APIs'],
        images: [webgis1, webgis2, webgis3],
    },
    {
        id: '2',
        slug: 'issb-ppdt-platform',
        title: 'ISSB PPDT Preparation Platform',
        category: 'Training platform',
        domain: 'Defence training',
        disciplines: ['Mobile', 'Backend'],
        status: 'Delivered',
        summary:
            'Cross-platform practice environment for candidates preparing for military selection testing.',
        description:
            'The Picture Perception & Discussion Test gives candidates seconds to read an ambiguous image and minutes to write a story about it. We built a timed practice environment that mirrors those constraints — a Flutter client for phones and desktop, backed by a FastAPI service with a documented OpenAPI contract so the content library and scoring rules can evolve independently of the app.',
        highlights: [
            'Flutter client delivering the same timed test flow across mobile and web',
            'FastAPI backend with a versioned OpenAPI contract',
            'Structured content library for test sets, prompts and candidate submissions',
            'Session history so candidates can track responses over time',
        ],
        techStack: ['Flutter', 'FastAPI', 'OpenAPI', 'Python'],
    },
    {
        id: '3',
        slug: 'property-mart',
        title: 'Property Mart',
        category: 'Consumer marketplace',
        domain: 'Real estate',
        disciplines: ['Mobile', 'Web'],
        status: 'Live',
        summary:
            'A property marketplace shipped to Android and web from one codebase, with scripted releases.',
        description:
            'Property Mart ships as both an Android app and a web app from a single Flutter codebase — the same listings, search and detail flows rendered in the browser and on device. The engineering work that mattered was in delivery: pinned toolchains through FVM, a multi-environment build matrix so staging and production never diverge, and Bash/SSH release scripts that package and publish each target the same way every time.',
        highlights: [
            'One Flutter codebase compiled to both an Android build and a Flutter Web build',
            'Multi-environment configuration for development, staging and production',
            'Toolchain pinned with FVM so builds are reproducible across machines',
            'Scripted release packaging and deployment over Bash and SSH',
        ],
        techStack: ['Flutter', 'Flutter Web', 'Dart', 'FVM', 'Bash / SSH'],
        liveUrl: 'https://mypropertymart.com/',
    },
    {
        id: '4',
        slug: 'causer-v2',
        title: 'CauserV2 — Volunteer Management',
        category: 'Community app',
        domain: 'Civic & volunteering',
        disciplines: ['Mobile'],
        status: 'Delivered',
        summary:
            'Volunteers find opportunities, register, and log hours; organisers see who showed up.',
        description:
            'CauserV2 connects two sides of the same problem: people who want to volunteer and organisations that need to track them. The app handles discovery and registration, keeps a profile and verified hour log for each volunteer, and pushes notifications when an opportunity changes — all behind single sign-on so organisations can use their existing identity provider.',
        highlights: [
            'Search and registration flow for volunteer opportunities',
            'Volunteer profiles with tracked and verifiable service hours',
            'Single sign-on against an existing identity provider',
            'Push notifications for schedule and opportunity changes',
        ],
        techStack: ['Flutter', 'SSO', 'Push Notifications', 'REST APIs'],
    },
    {
        id: '5',
        slug: 'trace-waste-collection',
        title: 'TRACE — Plastic Waste Collection',
        category: 'Gamified utility',
        domain: 'Sustainability',
        disciplines: ['Mobile'],
        status: 'Delivered',
        summary:
            'Collect plastic waste, scan it in at a drop point, earn redeemable points.',
        description:
            'TRACE makes waste collection legible and rewarding. Users locate drop-off points on a map, scan a QR code at handover, and accumulate points redeemable against rewards. Geolocation confirms the collection actually happened where it was claimed, which is what makes the reward ledger trustworthy.',
        highlights: [
            'Map of collection and drop-off points backed by Google Maps',
            'QR scanning at handover to confirm a collection event',
            'Geolocation checks tying each collection to a place and time',
            'Points ledger and reward redemption flow',
        ],
        techStack: ['Flutter', 'Google Maps', 'Geolocation', 'QR', 'Gamification'],
    },
    {
        id: '6',
        slug: 'bangla-topic-modeling',
        title: 'Bangla Topic Modeling with Transformers',
        category: 'Applied research',
        domain: 'NLP research',
        disciplines: ['AI & NLP'],
        status: 'Research',
        summary:
            'Discovering topic structure in Bangla text, where off-the-shelf English pipelines fall over.',
        description:
            'Most topic-modelling tooling assumes English. Bangla morphology and the scarcity of clean labelled corpora break those assumptions quickly. We evaluated transformer-based approaches for unsupervised topic discovery on Bangla text — comparing embedding-driven clustering against prompt-driven labelling, and measuring where each one stops being reliable.',
        highlights: [
            'Bangla-specific embedding and preprocessing pipeline',
            'BERTopic clustering compared against prompt-driven labelling',
            'Evaluation of topic coherence on low-resource corpora',
            'Reproducible experiment harness for further runs',
        ],
        techStack: ['PyTorch', 'Hugging Face', 'BERTopic', 'BanglaBERT', 'NLP'],
    },
    {
        id: '7',
        slug: 'bangla-misinformation-rag',
        title: 'Bangla Misinformation Detection via RAG',
        category: 'Applied research',
        domain: 'NLP research',
        disciplines: ['AI & NLP'],
        status: 'Research',
        summary:
            'Claim-and-evidence verification for Bangla, built on a retrieval pipeline rather than a black box.',
        description:
            'Asking a language model whether something is true is unreliable. Asking it to justify a verdict against retrieved evidence is a different problem, and a tractable one. We built a retrieval-augmented pipeline for Bangla claims: index a document corpus, retrieve candidate evidence for a claim, and produce a verdict traceable to the passages that supported it.',
        highlights: [
            'Document ingestion and vector indexing for a Bangla corpus',
            'Claim-to-evidence retrieval with relevance scoring',
            'Verdict generation constrained to retrieved passages',
            'Traceable output — every verdict points back at its evidence',
        ],
        techStack: ['LangChain', 'RAG', 'Vector DB', 'Embeddings', 'NLP'],
    },
];
