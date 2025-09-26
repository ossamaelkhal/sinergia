import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

export default function BusinessSolutions() {
  const solutions = [
    {
      title: "E-commerce",
      icon: "🛒",
      description: "Chatbots de vendas, recomendações personalizadas e suporte automatizado",
      benefits: ["Aumento de 40% nas conversões", "Redução de 60% no abandono de carrinho", "Suporte 24/7 automatizado"]
    },
    {
      title: "Serviços",
      icon: "🏢",
      description: "Agendamento inteligente, qualificação de leads e follow-up automatizado",
      benefits: ["Mais 50% de leads qualificados", "Agendamentos automáticos", "Follow-up personalizado"]
    },
    {
      title: "Saúde",
      icon: "🏥",
      description: "Triagem inteligente, agendamentos e lembretes automáticos",
      benefits: ["Triagem 24/7", "Redução de faltas em 30%", "Atendimento mais eficiente"]
    }
  ];

  return (
    <section id="solucoes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Soluções por Segmento
          </h2>
          <p className="text-xl text-gray-600">
            IA personalizada para cada tipo de negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-6xl mb-4">{solution.icon}</div>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2 text-left">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
