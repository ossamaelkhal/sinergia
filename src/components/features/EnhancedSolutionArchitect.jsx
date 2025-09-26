import { Badge } from '@/components/ui/badge.jsx';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Target,
  Zap,
  DollarSign,
  Clock,
  Users,
  BarChart3,
  Settings,
  MessageSquare,
  Download,
  Sparkles,
  TrendingUp,
  Shield,
  Lightbulb,
  Rocket
} from 'lucide-react';

// Definição das etapas fora do componente para evitar recriação em cada renderização
const steps = [
  {
    id: 1,
    title: "Perfil do Negócio",
    description: "Vamos conhecer seu negócio e identificar oportunidades",
    icon: Target
  },
  {
    id: 2,
    title: "Análise de Dores",
    description: "Identificamos os principais gargalos e perdas de tempo",
    icon: Clock
  },
  {
    id: 3,
    title: "Seleção de Sistemas",
    description: "Escolhemos os Sistemas de IA ideais para seu caso",
    icon: Zap
  },
  {
    id: 4,
    title: "Cronograma e Projeção",
    description: "Calculamos o retorno esperado e o cronograma de implementação",
    icon: TrendingUp
  },
  {
    id: 5,
    title: "Blueprint Personalizado",
    description: "Seu plano completo de transformação digital está pronto!",
    icon: Rocket
  }
];

export default function EnhancedSolutionArchitect({ onClose, businessTypes, painPoints, aiSystems }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    businessSize: '',
    monthlyRevenue: '',
    selectedPains: [],
    selectedSystems: [],
    timeline: ''
  });
  const [analysis, setAnalysis] = useState(null);

  const generateAnalysis = () => {
    // Filtra os sistemas com base nas dores selecionadas E nos sistemas que o usuário confirmou
    const recommendedSystems = aiSystems.filter(s => 
      formData.selectedSystems.includes(s.id)
    );

    // Evita divisão por zero se nenhum sistema for selecionado
    if (recommendedSystems.length === 0) {
      setAnalysis({
          painPoints: painPoints.filter(p => formData.selectedPains.includes(p.id)),
          recommendedSystems: [],
          totalTimeSaved: 0,
          totalInvestment: 0,
          avgROI: 0,
          projectedIncrease: 0,
          paybackPeriod: 0,
          yearlyGain: 0
      });
      return;
    }

    const totalTimeSaved = recommendedSystems.reduce((acc, sys) => acc + sys.timeSaved, 0);
    const totalInvestment = recommendedSystems.reduce((acc, sys) => acc + sys.price, 0);
    const avgROI = recommendedSystems.reduce((acc, sys) => acc + sys.roi, 0) / recommendedSystems.length;
    
    // Converte o faturamento para um número para cálculo
    const revenueMap = {
        'Até R$ 50k': 50000,
        'R$ 50k - R$ 200k': 125000,
        'R$ 200k - R$ 500k': 350000,
        'Acima de R$ 500k': 750000
    };
    const monthlyRevenueValue = revenueMap[formData.monthlyRevenue] || 50000;
    const projectedIncrease = (avgROI / 100) * monthlyRevenueValue;
    const monthlyGain = projectedIncrease - (totalInvestment / 12); // Simplificação de ganho mensal

    setAnalysis({
      painPoints: painPoints.filter(p => formData.selectedPains.includes(p.id)),
      recommendedSystems,
      totalTimeSaved,
      totalInvestment,
      avgROI,
      projectedIncrease,
      paybackPeriod: projectedIncrease > 0 ? Math.ceil(totalInvestment / projectedIncrease) : Infinity,
      yearlyGain: projectedIncrease * 12 - totalInvestment
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      // Gera a análise ao sair da etapa 4 para a 5
      if (currentStep === 4) {
        generateAnalysis();
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const downloadBlueprint = () => {
    const blueprint = {
      businessProfile: {
        type: businessTypes.find(b => b.id === formData.businessType)?.name,
        size: formData.businessSize,
        monthlyRevenue: formData.monthlyRevenue,
        timeline: formData.timeline
      },
      identifiedPainPoints: painPoints.filter(p => formData.selectedPains.includes(p.id)),
      selectedSolutions: aiSystems.filter(s => formData.selectedSystems.includes(s.id)),
      projectedResults: analysis,
      implementationPlan: {
        phase1: "Semanas 1-2: Configuração inicial e treinamento da equipe.",
        phase2: "Semanas 3-6: Implementação dos sistemas principais e integração.",
        phase3: "Semanas 7-8: Otimização e ajustes finos baseados em dados de uso.",
        phase4: "Semana 9 em diante: Monitoramento contínuo de performance e expansão."
      },
      supportPackage: {
        onboarding: "2 semanas de implementação assistida.",
        training: "Treinamento completo da equipe em todas as ferramentas.",
        support: "Suporte prioritário 24/7 por 90 dias via chat e e-mail.",
        optimization: "Revisões mensais de performance e sugestões de melhorias."
      }
    };

    const blob = new Blob([JSON.stringify(blueprint, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blueprint-transformacao-digital.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.businessType && formData.businessSize && formData.monthlyRevenue;
      case 2:
        return formData.selectedPains.length > 0;
      case 3:
        return formData.selectedSystems.length > 0;
      case 4:
        return formData.timeline;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Qual é o tipo do seu negócio?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {businessTypes.map(type => (
                  <Card 
                    key={type.id}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      formData.businessType === type.id 
                        ? 'bg-purple-500/20 border-purple-500' 
                        : 'bg-white/5 border-white/20 hover:bg-white/10'
                    }`}
                    onClick={() => setFormData({...formData, businessType: type.id})}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <h4 className="text-white font-medium text-sm mb-1">{type.name}</h4>
                      <p className="text-white/60 text-xs">{type.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Porte do negócio</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Pequeno (1-10 funcionários)', 'Médio (11-50 funcionários)', 'Grande (50+ funcionários)'].map(size => (
                  <Button
                    key={size}
                    variant={formData.businessSize === size ? "default" : "outline"}
                    onClick={() => setFormData({...formData, businessSize: size})}
                    className="h-auto p-4 text-left justify-center text-center"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Faturamento mensal aproximado</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Até R$ 50k', 'R$ 50k - R$ 200k', 'R$ 200k - R$ 500k', 'Acima de R$ 500k'].map(revenue => (
                  <Button
                    key={revenue}
                    variant={formData.monthlyRevenue === revenue ? "default" : "outline"}
                    onClick={() => setFormData({...formData, monthlyRevenue: revenue})}
                    className="h-auto p-3"
                  >
                    {revenue}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-white/70 mb-6">Selecione todas as áreas que mais consomem tempo e recursos da sua equipe. Isso nos ajudará a identificar os maiores gargalos operacionais.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {painPoints.map(pain => (
                  <Card
                    key={pain.id}
                    className={`cursor-pointer transition-all hover:scale-[1.02] ${
                      formData.selectedPains.includes(pain.id)
                        ? 'bg-red-500/20 border-red-500'
                        : 'bg-white/5 border-white/20 hover:bg-white/10'
                    }`}
                    onClick={() => {
                      const newPains = formData.selectedPains.includes(pain.id)
                        ? formData.selectedPains.filter(p => p !== pain.id)
                        : [...formData.selectedPains, pain.id]
                      setFormData({...formData, selectedPains: newPains});
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium">{pain.name}</h4>
                        {formData.selectedPains.includes(pain.id) && (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <Badge className={`${
                          pain.impact === 'Alto' ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          Impacto {pain.impact}
                        </Badge>
                        <span className="text-white/60">{pain.time} perdidas</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        const recommendedSystems = aiSystems.filter(s => 
          s.solves.some(solve => formData.selectedPains.includes(solve))
        );
        return (
          <div className="space-y-6">
            <div>
              <p className="text-white/70 mb-6">Com base nas suas dores, nossa IA pré-selecionou estes sistemas. Confirme quais você gostaria de incluir no seu blueprint final.</p>
              <div className="space-y-4">
                {recommendedSystems.length > 0 ? recommendedSystems.map(system => {
                  const Icon = system.icon;
                  const solvedPains = painPoints.filter(p => 
                    system.solves.includes(p.id) && formData.selectedPains.includes(p.id)
                  );
                  return (
                    <Card
                      key={system.id}
                      className={`cursor-pointer transition-all hover:scale-[1.01] ${
                        formData.selectedSystems.includes(system.id)
                          ? 'bg-green-500/20 border-green-500'
                          : 'bg-white/5 border-white/20 hover:bg-white/10'
                      }`}
                      onClick={() => {
                        const newSystems = formData.selectedSystems.includes(system.id)
                          ? formData.selectedSystems.filter(s => s !== system.id)
                          : [...formData.selectedSystems, system.id];
                        setFormData({...formData, selectedSystems: newSystems});
                      }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-white font-semibold text-lg">{system.name}</h4>
                              <p className="text-white/70">{system.description}</p>
                            </div>
                          </div>
                          {formData.selectedSystems.includes(system.id) && (
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          )}
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 border-y border-white/10 py-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">{system.roi}%</div>
                            <div className="text-sm text-white/60">ROI Esperado</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400">{system.timeSaved}h</div>
                            <div className="text-sm text-white/60">Horas/Semana</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">R$ {system.price.toLocaleString()}</div>
                            <div className="text-sm text-white/60">Investimento</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-400">{system.payback}</div>
                             <div className="text-sm text-white/60">Payback (meses)</div>
                          </div>
                        </div>
                        <div>
                          <p className="text-white/80 text-sm mb-2">Resolve estas dores:</p>
                          <div className="flex flex-wrap gap-2">
                            {solvedPains.map(pain => (
                              <Badge key={pain.id} className="bg-green-500/20 text-green-300">
                                {pain.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                }) : (
                    <div className="text-center py-8 bg-white/5 rounded-lg">
                        <p className="text-white/70">Nenhuma dor selecionada ou nenhum sistema corresponde às dores. Volte para a etapa anterior.</p>
                    </div>
                )}
              </div>
            </div>
          </div>
        );

      case 4:
        const selectedSystems = aiSystems.filter(s => formData.selectedSystems.includes(s.id));
        const totalInvestment = selectedSystems.reduce((acc, s) => acc + s.price, 0);
        const totalTimeSaved = selectedSystems.reduce((acc, s) => acc + s.timeSaved, 0);
        const avgRoi = selectedSystems.length > 0 ? Math.round(selectedSystems.reduce((acc, s) => acc + s.roi, 0) / selectedSystems.length) : 0;
        
        return (
          <div className="space-y-6">
            <div>
              <p className="text-white/70 mb-6">Quando você gostaria de começar a ver os resultados da transformação no seu negócio?</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'immediate', title: 'Imediato', subtitle: 'Começar esta semana', icon: '🚀' },
                  { id: 'month', title: 'Próximo Mês', subtitle: 'Planejamento detalhado', icon: '📅' },
                  { id: 'quarter', title: 'Próximo Trimestre', subtitle: 'Preparação completa', icon: '📊' }
                ].map(option => (
                  <Card
                    key={option.id}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      formData.timeline === option.id
                        ? 'bg-purple-500/20 border-purple-500'
                        : 'bg-white/5 border-white/20 hover:bg-white/10'
                    }`}
                    onClick={() => setFormData({...formData, timeline: option.id})}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{option.icon}</div>
                      <h4 className="text-white font-semibold mb-2">{option.title}</h4>
                      <p className="text-white/60 text-sm">{option.subtitle}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                Resumo da Projeção
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">{avgRoi}%</div>
                  <div className="text-sm text-white/60">ROI Médio</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">{totalTimeSaved}h</div>
                  <div className="text-sm text-white/60">Horas/Semana</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">R$ {totalInvestment.toLocaleString()}</div>
                  <div className="text-sm text-white/60">Investimento Total</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-orange-400">~{analysis?.paybackPeriod || '3-6'}</div>
                    <div className="text-sm text-white/60">Meses Payback</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        if (!analysis) return <div className="text-center text-white/70">Gerando sua análise...</div>;
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Seu Blueprint de Transformação Está Pronto!</h3>
              <p className="text-white/70">Análise completa baseada nas informações fornecidas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="bg-green-500/20 border-green-500/30">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">{Math.round(analysis.avgROI)}%</div>
                  <div className="text-sm text-white/70">ROI Projetado</div>
                </CardContent>
              </Card>
              <Card className="bg-blue-500/20 border-blue-500/30">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400">{analysis.totalTimeSaved}h</div>
                  <div className="text-sm text-white/70">Horas/Semana Economizadas</div>
                </CardContent>
              </Card>
              <Card className="bg-purple-500/20 border-purple-500/30">
                <CardContent className="p-4 text-center">
                  <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400">R$ {Math.round(analysis.projectedIncrease).toLocaleString()}</div>
                  <div className="text-sm text-white/70">Aumento Mensal Projetado</div>
                </CardContent>
              </Card>
              <Card className="bg-orange-500/20 border-orange-500/30">
                <CardContent className="p-4 text-center">
                  <Shield className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-400">{isFinite(analysis.paybackPeriod) ? analysis.paybackPeriod : 'N/A'}</div>
                  <div className="text-sm text-white/70">Meses para Payback</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Sistemas Selecionados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analysis.recommendedSystems.map(system => {
                    const Icon = system.icon;
                    return (
                      <div key={system.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{system.name}</h4>
                            <p className="text-white/60 text-sm">{system.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-semibold">{system.roi}% ROI</div>
                          <div className="text-white/60 text-sm">R$ {system.price.toLocaleString()}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  const currentStepData = steps.find(s => s.id === currentStep);

  return (
    <Card className="w-full max-w-4xl max-h-[90vh] flex flex-col bg-card text-card-foreground shadow-2xl relative animate-in fade-in-0 zoom-in-95">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-muted-foreground hover:text-white z-10" onClick={onClose}>
        <X className="h-5 w-5" />
      </Button>

      <CardHeader className="text-center border-b border-border pb-4">
        <div className="w-full bg-muted rounded-full h-2.5 mb-4">
          <div 
            className="bg-primary h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${((currentStep - 1) / (steps.length -1)) * 100}%` }}
          ></div>
        </div>
        <CardTitle className="text-2xl font-bold text-primary">{currentStepData?.title}</CardTitle>
        <CardDescription>{currentStepData?.description}</CardDescription>
      </CardHeader>

      <CardContent className="p-6 md:p-8 flex-grow overflow-y-auto">
        {renderStep()}
      </CardContent>

      {/* A navegação só aparece até a penúltima etapa */}
      {currentStep < steps.length && (
        <div className="flex justify-between items-center p-6 border-t border-border">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
          </Button>
          <span className="text-sm text-muted-foreground">Passo {currentStep} de {steps.length-1}</span>
          <Button onClick={handleNext} disabled={!canProceed()}>
            {currentStep === steps.length - 1 ? 'Gerar Análise' : 'Avançar'} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
      
      {/* Botões finais na última etapa */}
      {currentStep === steps.length && (
         <div className="flex flex-col sm:flex-row gap-4 p-6 border-t border-border">
           <Button 
             onClick={downloadBlueprint}
             className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
             size="lg"
           >
             <Download className="w-4 h-4 mr-2" />
             Baixar Blueprint Completo
           </Button>
           <Button 
             variant="outline"
             size="lg"
             className="flex-1"
             onClick={() => alert('Funcionalidade de agendamento em breve!')}
           >
             <Users className="w-4 h-4 mr-2" />
             Agendar Consultoria
           </Button>
         </div>
      )}
    </Card>
  );
}