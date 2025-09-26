import React from 'react';
import { Button } from '@/components/ui/button.jsx';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Sinerg.IA</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sistemas" className="text-gray-600 hover:text-purple-600 transition-colors">
              Sistemas
            </a>
            <a href="#solucoes" className="text-gray-600 hover:text-purple-600 transition-colors">
              Soluções
            </a>
            <a href="#integracoes" className="text-gray-600 hover:text-purple-600 transition-colors">
              Integrações
            </a>
            <a href="#contato" className="text-gray-600 hover:text-purple-600 transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline">
              Login
            </Button>
            <Button>
              Começar Grátis
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
