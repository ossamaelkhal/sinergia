import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-2xl font-bold">Sinerg.IA</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando negócios com IA inteligente. Resultados garantidos em 24 horas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                📧 contato@sinergia.ai
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sistemas</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Chatbot de Vendas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte Inteligente</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics Preditivo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agendamento IA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status do Sistema</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sinerg.IA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
