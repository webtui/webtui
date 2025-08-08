import type { Project as ProjectType } from '@/types'

export const projects: Array<[ProjectType, ProjectType] | [ProjectType]> = [
    [
        {
            title: 'Life Control',
            url: 'https://lifecontrol.mwyndham.dev',
            imageUrl: '/gallery/lifecontrol.png',
            source: 'https://github.com/muhwyndhamhp/lifecontrol',
            tags: ['Calendar', 'AI'],
        },
        {
            title: 'BitTerm',
            url: 'https://bitterm-eight.vercel.app',
            imageUrl: '/gallery/bitterm.png',
            source: 'https://github.com/chandrapratamar/BitTerm/',
            tags: ['WebTorrent Client'],
        },
    ],
    [
        {
            title: 'Metazoa WebTUI',
            url: 'http://45.79.200.131:3000',
            imageUrl: '/gallery/metazoa.png',
            source: 'https://github.com/benjamman/metazoa-webtui',
            tags: ['Search Engine'],
        },
        {
            title: 'fullstackbrett',
            url: 'https://fullstackbrett.com',
            imageUrl: '/gallery/fullstackbrett.png',
            source: 'https://github.com/brettsmith212/fullstackbrett',
            tags: ['Blog'],
        },
    ],
    [
        {
            title: 'Stefan Vučković - Software Engineer',
            url: 'https://stefvuck.dev',
            imageUrl: '/gallery/stefvuck-dev.png',
            tags: ['Personal Portfolio'],
        },
        {
            title: 'AI Terminal',
            url: 'https://ai-terminal-production.up.railway.app',
            imageUrl: '/gallery/ai-terminal.png',
            source: 'https://github.com/chandrapratamar/ai-terminal/',
            tags: ['AI Chat'],
        },
    ],
]
