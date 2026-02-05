import { Project } from '../types';
import webGisImage1 from '../images/webgis-dims1.png';
import webGisImage2 from '../images/webgis-dims2.png';
import webGisImage3 from '../images/webgis-dims3.png';


export const projects: Project[] = [
    {
        id: '1',
        title: 'Web GIS Data Management System',
        category: 'Web GIS Application',
        image: webGisImage1,
        images: [
            webGisImage1,
            webGisImage2,
            webGisImage3
        ],
        problem: 'Legacy E&P systems suffered from high latency.',
        solution: 'Re-engineered with React, Fast API & GeoServer for real-time spatial data streaming and visualization.',
        result: '+200% Data Retrieval Speed'
    },
    {
        id: '2',
        title: 'HealthAI Diagnostics',
        category: 'Machine Learning',
        image: 'https://picsum.photos/seed/medical/800/600',
        images: [
            'https://picsum.photos/seed/medical/800/600',
            'https://picsum.photos/seed/medical2/800/600',
            'https://picsum.photos/seed/medical3/800/600'
        ],
        problem: 'Manual diagnostics were slow and prone to error.',
        solution: 'Deployed Computer Vision model with 99.8% accuracy.',
        result: 'Reduced diagnosis time by 90%'
    },
    {
        id: '3',
        title: 'EcoTrack Mobile',
        category: 'Mobile App',
        image: 'https://picsum.photos/seed/eco/800/600',
        images: [
            'https://picsum.photos/seed/eco/800/600',
            'https://picsum.photos/seed/eco2/800/600',
            'https://picsum.photos/seed/eco3/800/600'
        ],
        problem: 'Disconnect between field sensors and user reporting.',
        solution: 'Offline-first React Native architecture with IoT sync.',
        result: '50k+ Active Daily Users'
    },
    {
        id: '4',
        title: 'FinTech Analytics Suite',
        category: 'SaaS Platform',
        image: 'https://picsum.photos/seed/finance/800/600',
        images: [
            'https://picsum.photos/seed/finance/800/600',
            'https://picsum.photos/seed/finance2/800/600',
            'https://picsum.photos/seed/finance3/800/600'
        ],
        problem: 'SMEs lacked accessible, real-time financial insights.',
        solution: 'Built a scalable dashboard with secure banking API integrations.',
        result: '$2M+ Processed Monthly'
    },
    {
        id: '5',
        title: 'SupplyChain Pro',
        category: 'Enterprise Software',
        image: 'https://picsum.photos/seed/logistics/800/600',
        images: [
            'https://picsum.photos/seed/logistics/800/600',
            'https://picsum.photos/seed/logistics2/800/600',
            'https://picsum.photos/seed/logistics3/800/600'
        ],
        problem: 'Inefficient inventory tracking across multiple warehouses.',
        solution: 'Implemented blockchain-based asset tracking system.',
        result: '30% Cost Reduction'
    },
    {
        id: '6',
        title: 'EduLearn LMS',
        category: 'EdTech',
        image: 'https://picsum.photos/seed/edu/800/600',
        images: [
            'https://picsum.photos/seed/edu/800/600',
            'https://picsum.photos/seed/edu2/800/600',
            'https://picsum.photos/seed/edu3/800/600'
        ],
        problem: 'Low student engagement in remote learning environments.',
        solution: 'Gamified learning experience with real-time collaboration tools.',
        result: '3x Higher Completion Rates'
    }
];
