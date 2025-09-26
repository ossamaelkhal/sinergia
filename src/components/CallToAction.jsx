import { Button } from '@/components/ui/button.jsx';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a mais de 500 empresas que já multiplicaram seus resultados com nossa IA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto"
            >
              🚀 Começar Agora - GRÁTIS
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
            >
              Falar com Especialista
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-75">
            ✅ Sem compromisso • ✅ Implementação em 24h • ✅ Garantia de 90 dias
          </div>
        </div>
      </div>
    </section>
  );
}
