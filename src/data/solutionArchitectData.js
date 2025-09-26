import { MessageSquare, BarChart3, Users, Settings, Zap, Clock } from 'lucide-react';

export const businessTypes = [
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Loja online',
    icon: '🛒'
  },
  {
    id: 'saas',
    name: 'SaaS',
    description: 'Software como serviço',
    icon: '💻'
  },
  {
    id: 'consultoria',
    name: 'Consultoria',
    description: 'Serviços profissionais',
    icon: '👔'
  },
  {
    id: 'saude',
    name: 'Saúde',
    description: 'Clínicas e hospitais',
    icon: '🏥'
  },
  {
    id: 'educacao',
    name: 'Educação',
    description: 'Escolas e cursos',
    icon: '🎓'
  },
  {
    id: 'financeiro',
    name: 'Financeiro',
    description: 'Bancos e fintechs',
    icon: '💰'
  },
  {
    id: 'juridico',
    name: 'Jurídico',
    description: 'Escritórios de advocacia',
    icon: '⚖️'
  },
  {
    id: 'outros',
    name: 'Outros',
    description: 'Outros segmentos',
    icon: '🏢'
  }
];

export const painPoints = [
  {
    id: 'atendimento',
    name: 'Atendimento ao Cliente',
    impact: 'Alto',
    time: '20h/semana'
  },
  {
    id: 'vendas',
    name: 'Processo de Vendas',
    impact: 'Alto',
    time: '15h/semana'
  },
  {
    id: 'marketing',
    name: 'Marketing e Leads',
    impact: 'Médio',
    time: '12h/semana'
  },
  {
    id: 'operacional',
    name: 'Processos Operacionais',
    impact: 'Alto',
    time: '25h/semana'
  },
  {
    id: 'financeiro',
    name: 'Controle Financeiro',
    impact: 'Médio',
    time: '10h/semana'
  },
  {
    id: 'rh',
    name: 'Recursos Humanos',
    impact: 'Médio',
    time: '8h/semana'
  }
];

export const aiSystems = [
  {
    id: 'chatbot',
    name: 'Chatbot Inteligente',
    description: 'Atendimento 24/7 automatizado',
    icon: MessageSquare,
    price: 2500,
    roi: 300,
    timeSaved: 20,
    solves: ['atendimento']
  },
  {
    id: 'crm-ia',
    name: 'CRM com IA',
    description: 'Gestão inteligente de vendas',
    icon: Users,
    price: 5000,
    roi: 250,
    timeSaved: 15,
    solves: ['vendas', 'marketing']
  },
  {
    id: 'analytics',
    name: 'Analytics Preditivo',
    description: 'Insights automáticos de negócio',
    icon: BarChart3,
    price: 3500,
    roi: 200,
    timeSaved: 12,
    solves: ['marketing', 'financeiro']
  },
  {
    id: 'automacao',
    name: 'Automação de Processos',
    description: 'Workflows inteligentes',
    icon: Settings,
    price: 4000,
    roi: 350,
    timeSaved: 25,
    solves: ['operacional', 'rh']
  },
  {
    id: 'ia-vendas',
    name: 'IA para Vendas',
    description: 'Qualificação automática de leads',
    icon: Zap,
    price: 3000,
    roi: 280,
    timeSaved: 18,
    solves: ['vendas', 'marketing']
  },
  {
    id: 'scheduler',
    name: 'Agendamento Inteligente',
    description: 'Agenda automática com IA',
    icon: Clock,
    price: 1500,
    roi: 180,
    timeSaved: 8,
    solves: ['atendimento', 'operacional']
  }
];
