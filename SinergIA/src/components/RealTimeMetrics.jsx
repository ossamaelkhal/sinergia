import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { useAPI } from '../contexts/APIContext.jsx'
import { 
  Clock, 
  Target, 
  TrendingUp, 
  Users, 
  Zap,
  Activity,
  Database,
  Wifi,
  WifiOff
} from 'lucide-react'

const RealTimeMetrics = () => {
  const { realTimeMetrics, integrationStatus } = useAPI()
  const [isLive, setIsLive] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Simula status de conexão em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const metrics = [
    {
      id: 'hours',
      title: 'Horas Resgatadas Hoje',
      value: realTimeMetrics.hoursRescued,
      suffix: 'h',
      icon: Clock,
      color: 'text-sinergia-vibrant-cyan',
      bgColor: 'bg-sinergia-vibrant-cyan/10',
      description: 'Tempo economizado através da automação',
      trend: '+12% vs ontem'
    },
    {
      id: 'leads',
      title: 'Leads Qualificados',
      value: realTimeMetrics.leadsQualified.toLocaleString('pt-BR'),
      suffix: '',
      icon: Target,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      description: 'Leads processados e qualificados por IA',
      trend: '+8% vs ontem'
    },
    {
      id: 'roi',
      title: 'ROI Médio dos Clientes',
      value: realTimeMetrics.avgROI,
      suffix: '%',
      icon: TrendingUp,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      description: 'Retorno sobre investimento médio',
      trend: '+5% vs mês anterior'
    },
    {
      id: 'businesses',
      title: 'Negócios em Sinergia',
      value: realTimeMetrics.businessesInSinergia.toLocaleString('pt-BR'),
      suffix: '',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      description: 'Empresas ativas na plataforma',
      trend: '+3 novos hoje'
    }
  ]

  const connectedIntegrations = Object.entries(integrationStatus)
    .filter(([_, status]) => status.connected)
    .length

  const totalIntegrations = Object.keys(integrationStatus).length

  return (
    <div className="space-y-6">
      {/* Status Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            {isLive ? (
              <Wifi className="w-5 h-5 text-green-400" />
            ) : (
              <WifiOff className="w-5 h-5 text-red-400" />
            )}
            <span className="text-white font-semibold">
              {isLive ? 'Dados em Tempo Real' : 'Offline'}
            </span>
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <Activity className="w-3 h-3 mr-1" />
            Ativo
          </Badge>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-sinergia-light-neutral-gray">
            Última atualização: {lastUpdate.toLocaleTimeString('pt-BR')}
          </div>
          <div className="text-xs text-sinergia-light-neutral-gray">
            {connectedIntegrations}/{totalIntegrations} integrações ativas
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          
          return (
            <Card key={metric.id} className="card-premium will-change-transform group relative overflow-hidden">
              {/* Live indicator */}
              <div className="absolute top-2 right-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-sm text-sinergia-light-neutral-gray">
                      {metric.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-bold text-white">
                    {metric.value}
                  </span>
                  <span className={`text-sm font-medium ${metric.color}`}>
                    {metric.suffix}
                  </span>
                </div>
                
                <CardDescription className="text-xs text-sinergia-light-neutral-gray">
                  {metric.description}
                </CardDescription>
                
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-green-400">
                    {metric.trend}
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* API Status */}
      <Card className="card-premium">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Database className="w-5 h-5 text-sinergia-vibrant-cyan" />
            <CardTitle className="text-white">Status das Integrações</CardTitle>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(integrationStatus).map(([key, status]) => (
              <div key={key} className="flex items-center justify-between p-3 bg-sinergia-deep-navy/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    status.connected ? 'bg-green-400' : 'bg-gray-400'
                  }`}></div>
                  <div>
                    <div className="text-sm font-medium text-white capitalize">
                      {key}
                    </div>
                    <div className="text-xs text-sinergia-light-neutral-gray">
                      {status.connected ? status.provider : 'Desconectado'}
                    </div>
                  </div>
                </div>
                
                {status.connected && (
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                    Online
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RealTimeMetrics

