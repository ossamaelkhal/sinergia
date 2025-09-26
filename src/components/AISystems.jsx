import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Bot, MessageSquare, BarChart3, Sparkles, Users } from 'lucide-react';

const systems = [
  {
    id: 1,
    name: 'Chatbot de Vendas Inteligente',
    description: 'IA que qualifica leads e agenda reuniões automaticamente',
    icon: Bot,
    features: ['Qualificação automática', 'Agendamento inteligente', 'Follow-up personalizado'],
    price: 'R$ 2.500',
    roi: '250% ROI',
    timeSaved: '15h/semana'
  },
  {
    id: 2,
    name: 'Suporte 24/7 com IA',
    description: 'Atendimento inteligente que resolve 80% das dúvidas automaticamente',
    icon: MessageSquare,
    features: ['Atendimento 24/7', 'Resolução automática', 'Escalação inteligente'],
    price: 'R$ 1.800',
    roi: '180% ROI',
    timeSaved: '25h/semana'
  },
  {
    id: 3,
    name: 'Analytics Preditivo',
    description: 'Análise inteligente de dados com previsões e insights automáticos',
    icon: BarChart3,
    features: ['Previsões precisas', 'Insights automáticos', 'Relatórios inteligentes'],
    price: 'R$ 3.200',
    roi: '300% ROI',
    timeSaved: '12h/semana'
  }
];

export default function AISystems({ onSystemClick }) {
  return (
    <section id="sistemas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sistemas de IA que Transformam Negócios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o sistema perfeito para automatizar seus processos e multiplicar seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <Card key={system.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{system.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {system.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {system.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-center">
                      <div className="font-bold text-purple-600">{system.price}</div>
                      <div className="text-xs text-gray-500">Investimento</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-600">{system.roi}</div>
                      <div className="text-xs text-gray-500">Retorno</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-blue-600">{system.timeSaved}</div>
                      <div className="text-xs text-gray-500">Economia</div>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-4" 
                    onClick={() => onSystemClick(system)}
                  >
                    Implementar Agora
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
