
import { Technology, Company, Project, Article } from '@/types';

export const technologies: Technology[] = [
  { id: 'swift', name: 'Swift', icon: '/icons/swift.svg', color: '#F05138' },
  { id: 'swiftui', name: 'SwiftUI', icon: '/icons/swiftui.svg', color: '#0073E6' },
  { id: 'uikit', name: 'UIKit', icon: '/icons/uikit.svg', color: '#2396F3' },
  { id: 'objc', name: 'Objective-C', icon: '/icons/objc.svg', color: '#38B0DE' },
  { id: 'kotlin', name: 'Kotlin', icon: '/icons/kotlin.svg', color: '#7F52FF' },
  { id: 'flutter', name: 'Flutter', icon: '/icons/flutter.svg', color: '#02569B' },
  { id: 'react-native', name: 'React Native', icon: '/icons/react.svg', color: '#61DAFB' },
  { id: 'javascript', name: 'JavaScript', icon: '/icons/javascript.svg', color: '#F7DF1E' },
  { id: 'typescript', name: 'TypeScript', icon: '/icons/typescript.svg', color: '#3178C6' },
  { id: 'firebase', name: 'Firebase', icon: '/icons/firebase.svg', color: '#FFCA28' },
  { id: 'git', name: 'Git', icon: '/icons/git.svg', color: '#F05032' },
];

export const companies: Company[] = [
  {
    id: 'apple',
    name: 'Apple Inc.',
    logo: '/logos/apple.svg',
    period: '2020 - 2022',
    role: 'Senior iOS Developer'
  },
  {
    id: 'google',
    name: 'Google',
    logo: '/logos/google.svg',
    period: '2018 - 2020',
    role: 'Mobile Developer'
  },
  {
    id: 'facebook',
    name: 'Meta',
    logo: '/logos/meta.svg',
    period: '2016 - 2018',
    role: 'iOS Developer'
  },
  {
    id: 'freelance',
    name: 'Freelance',
    logo: '/logos/freelance.svg',
    period: '2015 - 2016',
    role: 'Mobile App Developer'
  },
];

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Aplicativo de Financias',
    description: 'Um aplicativo iOS para gerenciar finanças pessoais com integração a bancos.',
    image: 'https://images.unsplash.com/photo-1611174340587-7cf0596f28d6?q=80&w=2946&auto=format&fit=crop',
    technologies: ['swift', 'swiftui', 'firebase'],
    company: 'apple',
    githubUrl: 'https://github.com/yourusername/financeapp',
    liveUrl: 'https://apps.apple.com/app'
  },
  {
    id: 'project2',
    title: 'Social Media App',
    description: 'Um clone de rede social com recursos de streaming e chat em tempo real.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop',
    technologies: ['swift', 'uikit', 'firebase'],
    company: 'google',
    githubUrl: 'https://github.com/yourusername/socialapp',
  },
  {
    id: 'project3',
    title: 'E-commerce Mobile',
    description: 'Plataforma de e-commerce com integração a diversos gateways de pagamento.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2787&auto=format&fit=crop',
    technologies: ['kotlin', 'firebase', 'typescript'],
    company: 'facebook',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://play.google.com/store/apps'
  },
  {
    id: 'project4',
    title: 'Food Delivery App',
    description: 'Aplicativo de entrega de comida com rastreamento em tempo real.',
    image: 'https://images.unsplash.com/photo-1604142830342-d433941deb22?q=80&w=2940&auto=format&fit=crop',
    technologies: ['flutter', 'firebase', 'typescript'],
    company: 'freelance',
    githubUrl: 'https://github.com/yourusername/fooddelivery',
  },
  {
    id: 'project5',
    title: 'Fitness Tracker',
    description: 'App de fitness com integração ao Apple HealthKit e Google Fit.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2787&auto=format&fit=crop',
    technologies: ['swift', 'objc', 'kotlin'],
    company: 'apple',
    githubUrl: 'https://github.com/yourusername/fitnesstracker',
    liveUrl: 'https://apps.apple.com/app'
  },
  {
    id: 'project6',
    title: 'Weather App',
    description: 'Aplicativo de previsão do tempo usando APIs climáticas.',
    image: 'https://images.unsplash.com/photo-1581301862880-8f8c30f65c8c?q=80&w=2936&auto=format&fit=crop',
    technologies: ['react-native', 'javascript', 'typescript'],
    company: 'google',
    githubUrl: 'https://github.com/yourusername/weatherapp',
  },
];

export const articles: Article[] = [
  {
    id: 'article1',
    title: 'Arquitetura MVVM em SwiftUI',
    description: 'Como implementar a arquitetura MVVM em projetos SwiftUI para melhor manutenção.',
    image: 'https://miro.medium.com/max/1400/1*-hfgGvv7W5qFmZtSfzgNKw.png',
    technologies: ['swift', 'swiftui'],
    url: 'https://medium.com/yourusername/mvvm-swiftui',
    date: '15/03/2023',
  },
  {
    id: 'article2',
    title: 'Comparação entre UIKit e SwiftUI',
    description: 'Análise detalhada das diferenças entre UIKit e SwiftUI e quando usar cada um.',
    image: 'https://miro.medium.com/max/1400/1*hnQ2FGZVhF3p9veY0-kJVQ.png',
    technologies: ['swift', 'swiftui', 'uikit'],
    url: 'https://medium.com/yourusername/uikit-vs-swiftui',
    date: '22/06/2022',
  },
  {
    id: 'article3',
    title: 'Gerenciamento de Estado em Kotlin',
    description: 'Como gerenciar estados em aplicações Android com Kotlin e Flow.',
    image: 'https://miro.medium.com/max/1400/1*3tLkdyW-weHyzSoG-P0mfA.png',
    technologies: ['kotlin'],
    url: 'https://medium.com/yourusername/kotlin-state',
    date: '10/01/2023',
  },
  {
    id: 'article4',
    title: 'Implementando autenticação com Firebase',
    description: 'Guia completo para implementar autenticação em apps móveis usando Firebase.',
    image: 'https://miro.medium.com/max/1400/1*l3wFPkIDGGXbY0g9WENZRg.png',
    technologies: ['firebase', 'swift', 'kotlin'],
    url: 'https://medium.com/yourusername/firebase-auth',
    date: '05/08/2022',
  },
];
