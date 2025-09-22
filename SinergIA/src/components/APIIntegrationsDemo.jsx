import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { useAPI } from '../contexts/APIContext.jsx'
import { 
  Zap, 
  CheckCircle, 
  Clock, 
  Settings, 
  ArrowRight, 
  Plug,
  Database,
  Cloud,
  MessageSquare,
  BarChart3,
  ShoppingCart,
  Users,
  Workflow,
  X
} from 'lucide-react'

const APIIntegrationsDemo = ({ onClose }) => {
  const { 
    availableIntegrations, 
    integrationStatus, 
    connectIntegration, 
    disconnectIntegration, 
    isLoading 
  } = useAPI()
  
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [connectingId, setConnectingId] = useState(null)

  const categories = [
    { id: 'all', name: 'Todas', icon: Database },
    { id: 'CRM', name: 'CRM', icon: Users },
    { id: 'Analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'Automation', name: 'Automação', icon: Workflow },
    { id: 'Communication', name: 'Comunicação', icon: MessageSquare },
    { id: 'E-commerce', name: 'E-commerce', icon: ShoppingCart }
  ]

  const filteredIntegrations = selectedCategory === 'all' 
    ? availableIntegrations 
    : availableIntegrations.filter(integration => integration.category === selectedCategory)

  const handleConnect = async (integrationId) => {
    setConnectingId(integrationId)
    await connectIntegration(integrationId)
    setConnectingId(null)
  }

  const handleDisconnect = async (integrationId) => {
    setConnectingId(integrationId)
    await disconnectIntegration(integrationId)
    setConnectingId(null)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return 'bg-green-500'
      case 'connecting': return 'bg-yellow-500'
      case 'available': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'connected': return 'Conectado'
      case 'connecting': return 'Conectando...'
      case 'available': return 'Disponível'
      default: return 'Indisponível'
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-sinergia-card border border-sinergia-vibrant-cyan/30 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-sinergia-vibrant-cyan/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Integrações de API
              </h2>
              <p className="text-sinergia-light-neutral-gray">
                Conecte o SinergIA com seus sistemas existentes
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="border-sinergia-vibrant-cyan/30 text-sinergia-light-neutral-gray hover:bg-sinergia-vibrant-cyan/10"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="p-6 border-b border-sinergia-vibrant-cyan/20">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? 'bg-gradient-sinergia-button text-sinergia-deep-navy'
                      : 'border-sinergia-vibrant-cyan/30 text-sinergia-light-neutral-gray hover:bg-sinergia-vibrant-cyan/10'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredIntegrations.map((integration) => {
              const isConnected = integration.status === 'connected'
              const isConnecting = connectingId === integration.id
              
              return (
                <Card key={integration.id} className="card-premium will-change-transform group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{integration.icon}</div>
                        <div>
                          <CardTitle className="text-lg text-white">
                            {integration.name}
                          </CardTitle>
                          <Badge 
                            className={`${getStatusColor(integration.status)} text-white text-xs mt-1`}
                          >
                            {getStatusText(integration.status)}
                          </Badge>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-sinergia-vibrant-cyan/30 text-sinergia-vibrant-cyan text-xs">
                        {integration.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sinergia-light-neutral-gray text-sm">
                      {integration.description}
                    </CardDescription>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Recursos:</h4>
                      <ul className="space-y-1">
                        {integration.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-xs text-sinergia-light-neutral-gray">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Connection Status */}
                    {isConnected && integrationStatus[integration.id] && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                        <div className="flex items-center text-green-400 text-sm mb-1">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Conectado com {integrationStatus[integration.id].provider}
                        </div>
                        <div className="text-xs text-sinergia-light-neutral-gray">
                          Última sincronização: {new Date(integrationStatus[integration.id].lastSync).toLocaleString('pt-BR')}
                        </div>
                      </div>
                    )}
                    
                    {/* Action Button */}
                    <div className="pt-2">
                      {isConnected ? (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDisconnect(integration.id)}
                          disabled={isConnecting}
                          className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10"
                        >
                          {isConnecting ? (
                            <>
                              <Clock className="w-4 h-4 mr-2 animate-spin" />
                              Desconectando...
                            </>
                          ) : (
                            <>
                              <Plug className="w-4 h-4 mr-2" />
                              Desconectar
                            </>
                          )}
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => handleConnect(integration.id)}
                          disabled={isConnecting}
                          className="w-full btn-premium bg-gradient-sinergia-button text-sinergia-deep-navy"
                        >
                          {isConnecting ? (
                            <>
                              <Clock className="w-4 h-4 mr-2 animate-spin" />
                              Conectando...
                            </>
                          ) : (
                            <>
                              <Zap className="w-4 h-4 mr-2" />
                              Conectar
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-sinergia-vibrant-cyan/20 bg-gradient-to-r from-sinergia-deep-navy/50 to-sinergia-deep-navy/30">
          <div className="flex items-center justify-between">
            <div className="text-sm text-sinergia-light-neutral-gray">
              <strong className="text-white">
                {availableIntegrations.filter(i => i.status === 'connected').length}
              </strong> de {availableIntegrations.length} integrações ativas
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-sinergia-vibrant-cyan/30 text-sinergia-vibrant-cyan hover:bg-sinergia-vibrant-cyan/10"
            >
              <Settings className="w-4 h-4 mr-2" />
              Configurações Avançadas
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default APIIntegrationsDemo

