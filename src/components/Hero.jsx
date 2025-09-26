import React from 'react';
import { Button } from '@/components/ui/button.jsx';

export default function Hero({ onStartClick }) {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforme Seu Negócio com
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block mt-2">
              IA Inteligente
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sistemas de IA personalizados que automatizam processos, aumentam vendas e reduzem custos. 
            <strong className="text-white">Resultados garantidos em 24 horas.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 h-auto"
              onClick={onStartClick}
            >
              🚀 Criar Meu Sistema de IA - GRÁTIS
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
            >
              �� Falar com Especialista
            </Button>
          </div>

          {/* Badges de confiança */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">24h</div>
              <div className="text-sm text-gray-300">Implementação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">90 dias</div>
              <div className="text-sm text-gray-300">Garantia ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">500+</div>
              <div className="text-sm text-gray-300">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
              <div className="text-sm text-gray-300">Suporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
}
              <div className="text-sm text-gray-300">Garantia ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">500+</div>
              <div className="text-sm text-gray-300">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
              <div className="text-sm text-gray-300">Suporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
}
