import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Sparkles, 
  Play, 
  ArrowRight, 
  Clock, 
  Target, 
  TrendingUp, 
  Users,
  Rocket
} from 'lucide-react'

const EnhancedHeroSection = () => {
  const [timeRescued, setTimeRescued] = useState(0)
  const [leadsGenerated, setLeadsGenerated] = useState(0)

  // Animação dos contadores
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRescued(prev => prev < 2847 ? prev + 23 : 2847)
      setLeadsGenerated(prev => prev < 15420 ? prev + 127 : 15420)
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const battleStats = [
    { icon: Clock, label: "Horas Resgatadas Hoje", value: timeRescued, suffix: "h", color: "text-primary" },
    { icon: Target, label: "Leads Qualificados", value: leadsGenerated, suffix: "", color: "text-primary" },
    { icon: TrendingUp, label: "ROI Médio dos Clientes", value: 340, suffix: "%", color: "text-primary" },
    { icon: Users, label: "PMEs Libertadas", value: 1247, suffix: "", color: "text-primary" }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Badge className="bg-primary/10 text-primary px-6 py-2 text-sm font-medium animate-pulse">
              <Sparkles className="w-4 h-4 mr-2" />
              SinergIA: Inovação em IA para o Seu Negócio
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-foreground">
            SINERGIA
          </h1>

          <div className="mb-8 space-y-4">
            <p className="text-xl md:text-2xl text-foreground/90 font-medium">
              Sinergia: Onde a Inovação Encontra a Eficiência
            </p>
            <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Sistemas Operacionais de IA que otimizam processos, 
              transformando desafios em <span className="text-primary font-semibold">crescimento exponencial</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 group btn-hover-lift"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Descobrir Sinergia
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Ver Demo Interativo
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {battleStats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(stat.icon, { className: `w-8 h-8 text-primary` })}
                </div>
                <div className={`text-2xl font-bold text-primary mb-1`}>
                  {index < 2 ? (index === 0 ? timeRescued : leadsGenerated).toLocaleString() : stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnhancedHeroSection
