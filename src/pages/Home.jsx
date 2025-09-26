import React, { useState } from 'react';
import { SinergiaProvider } from '@/contexts/SinergiaContext.jsx';
import CallToAction from '@/components/CallToAction.jsx';
import Footer from '@/components/Footer.jsx';
import EnhancedSolutionArchitect from '@/components/features/EnhancedSolutionArchitect.jsx';
import { businessTypes, painPoints, aiSystems } from '@/data/solutionArchitectData.js';

export default function Home() {
  const [showSolutionArchitect, setShowSolutionArchitect] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState(null);

  const handleClose = () => {
    setShowSolutionArchitect(false);
    setSelectedSystem(null);
  };

  const openSolutionArchitect = (system = null) => {
    setSelectedSystem(system);
    setShowSolutionArchitect(true);
  };

  return (
    <SinergiaProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Transforme Seu Negócio com
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> IA Inteligente</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Sistemas de IA que automatizam vendas, suporte e operações. 
                <strong className="text-white"> Resultados garantidos em 24 horas.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={() => openSolutionArchitect()}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  🚀 Criar Meu Blueprint IA
                </button>
                
                <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                  📞 Falar com Especialista
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">300%</div>
                  <div className="text-sm text-gray-300">ROI Médio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">24h</div>
                  <div className="text-sm text-gray-300">Implementação</div>
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

          {/* Elementos decorativos */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </section>

        {/* Sistemas de IA */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sistemas de IA que <span className="text-purple-400">Revolucionam</span> Negócios
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cada sistema é projetado para resolver problemas específicos e gerar ROI imediato
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiSystems.map((system) => {
                const Icon = system.icon;
                return (
                  <div key={system.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all hover:scale-105 cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{system.name}</h3>
                    <p className="text-gray-300 mb-4">{system.description}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{system.roi}%</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{system.timeSaved}h</div>
                        <div className="text-xs text-gray-400">Economizadas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">R$ {system.price.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">Investimento</div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => openSolutionArchitect(system)}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all"
                    >
                      Ver Blueprint Personalizado
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 px-4 bg-black/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Resultados <span className="text-green-400">Comprovados</span>
              </h2>
              <p className="text-xl text-gray-300">
                Veja como nossos clientes transformaram seus negócios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MC
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Dr. Marcos Costa</h4>
                    <p className="text-gray-600 text-sm">Diretor, Clínica Médica</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Com o chatbot de agendamento e suporte, reduzimos 90% das ligações e aumentamos a satisfação dos pacientes."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    AF
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ana Ferreira</h4>
                    <p className="text-gray-600 text-sm">Sócia, Escritório Jurídico</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "O analytics preditivo nos ajudou a identificar os melhores casos. Nossa taxa de sucesso aumentou 45% e economizamos 20h por semana."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
        <Footer />

        {/* Modal do Solution Architect */}
        {showSolutionArchitect && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <EnhancedSolutionArchitect
              onClose={handleClose}
              businessTypes={businessTypes}
              painPoints={painPoints}
              aiSystems={aiSystems}
              selectedSystem={selectedSystem}
            />
          </div>
        )}
      </div>
    </SinergiaProvider>
  );
}
