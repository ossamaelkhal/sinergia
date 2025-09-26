import React from 'react';

export default function SalesAnalysis() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Análise de Vendas Inteligente
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Dashboards Inteligentes</h3>
            <p className="text-gray-600">Visualize seus dados de vendas em tempo real com insights automáticos</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Previsões Precisas</h3>
            <p className="text-gray-600">IA que prevê tendências e identifica oportunidades de crescimento</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Automação Completa</h3>
            <p className="text-gray-600">Relatórios automáticos e alertas inteligentes para sua equipe</p>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-gray-600">Aumento médio em produtividade</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Redução em tempo de análise</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoramento automático</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">ROI</div>
              <div className="text-gray-600">Retorno garantido em 90 dias</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
