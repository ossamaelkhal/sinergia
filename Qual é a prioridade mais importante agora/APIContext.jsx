import React, { createContext, useContext, useState, useEffect } from 'react'

// Contexto para gerenciar integrações de API
const APIContext = createContext()

// Hook personalizado para usar o contexto
export const useAPI = () => {
  const context = useContext(APIContext)
  if (!context) {
    throw new Error('useAPI deve ser usado dentro de um APIProvider')
  }
  return context
}

// Simulação de endpoints de API para demonstração
const mockAPIEndpoints = {
  // CRM Integration
  crm: {
    leads: '/api/crm/leads',
    contacts: '/api/crm/contacts',
    opportunities: '/api/crm/opportunities'
  },
  
  // Analytics Integration
  analytics: {
    metrics: '/api/analytics/metrics',
    reports: '/api/analytics/reports',
    realtime: '/api/analytics/realtime'
  },
  
  // Automation Integration
  automation: {
    workflows: '/api/automation/workflows',
    triggers: '/api/automation/triggers',
    actions: '/api/automation/actions'
  },
  
  // Communication Integration
  communication: {
    whatsapp: '/api/communication/whatsapp',
    email: '/api/communication/email',
    sms: '/api/communication/sms'
  },
  
  // E-commerce Integration
  ecommerce: {
    products: '/api/ecommerce/products',
    orders: '/api/ecommerce/orders',
    customers: '/api/ecommerce/customers'
  }
}

// Dados mock para demonstração
const mockData = {
  realTimeMetrics: {
    hoursRescued: 2847,
    leadsQualified: 15420,
    avgROI: 340,
    businessesInSinergia: 1247
  },
  
  integrationStatus: {
    crm: { connected: true, provider: 'HubSpot', lastSync: '2025-09-02T14:25:00Z' },
    analytics: { connected: true, provider: 'Google Analytics', lastSync: '2025-09-02T14:24:00Z' },
    automation: { connected: true, provider: 'Zapier', lastSync: '2025-09-02T14:23:00Z' },
    communication: { connected: true, provider: 'WhatsApp Business', lastSync: '2025-09-02T14:22:00Z' },
    ecommerce: { connected: false, provider: null, lastSync: null }
  },
  
  availableIntegrations: [
    {
      id: 'hubspot',
      name: 'HubSpot CRM',
      category: 'CRM',
      description: 'Sincronize leads, contatos e oportunidades automaticamente',
      icon: '🔗',
      status: 'connected',
      features: ['Sync de Leads', 'Automação de Follow-up', 'Relatórios Unificados']
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      category: 'CRM',
      description: 'Integração completa com o ecossistema Salesforce',
      icon: '☁️',
      status: 'available',
      features: ['Sync Bidirecional', 'Workflows Personalizados', 'Analytics Avançado']
    },
    {
      id: 'zapier',
      name: 'Zapier',
      category: 'Automation',
      description: 'Conecte com mais de 5000 aplicações',
      icon: '⚡',
      status: 'connected',
      features: ['5000+ Apps', 'Workflows Ilimitados', 'Triggers Personalizados']
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Business',
      category: 'Communication',
      description: 'Automação completa para WhatsApp Business',
      icon: '💬',
      status: 'connected',
      features: ['Mensagens Automáticas', 'Chatbots IA', 'Métricas Detalhadas']
    },
    {
      id: 'shopify',
      name: 'Shopify',
      category: 'E-commerce',
      description: 'Automação para lojas Shopify',
      icon: '🛒',
      status: 'available',
      features: ['Sync de Produtos', 'Automação de Pedidos', 'Customer Journey']
    },
    {
      id: 'google-analytics',
      name: 'Google Analytics',
      category: 'Analytics',
      description: 'Métricas e insights avançados',
      icon: '📊',
      status: 'connected',
      features: ['Tracking Avançado', 'Conversões IA', 'Relatórios Personalizados']
    }
  ]
}

// Provider do contexto
export const APIProvider = ({ children }) => {
  const [realTimeMetrics, setRealTimeMetrics] = useState(mockData.realTimeMetrics)
  const [integrationStatus, setIntegrationStatus] = useState(mockData.integrationStatus)
  const [availableIntegrations, setAvailableIntegrations] = useState(mockData.availableIntegrations)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Simulação de atualização em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeMetrics(prev => ({
        ...prev,
        hoursRescued: prev.hoursRescued + Math.floor(Math.random() * 3),
        leadsQualified: prev.leadsQualified + Math.floor(Math.random() * 5),
        businessesInSinergia: prev.businessesInSinergia + Math.floor(Math.random() * 2)
      }))
    }, 10000) // Atualiza a cada 10 segundos

    return () => clearInterval(interval)
  }, [])

  // Função para simular chamada de API
  const apiCall = async (endpoint, options = {}) => {
    setIsLoading(true)
    setError(null)
    
    try {
      // Simula delay de rede
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simula resposta baseada no endpoint
      let response
      switch (endpoint) {
        case mockAPIEndpoints.analytics.realtime:
          response = realTimeMetrics
          break
        case mockAPIEndpoints.crm.leads:
          response = { leads: [], total: 0 }
          break
        default:
          response = { success: true, data: null }
      }
      
      return { success: true, data: response }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setIsLoading(false)
    }
  }

  // Função para conectar integração
  const connectIntegration = async (integrationId) => {
    setIsLoading(true)
    
    try {
      // Simula processo de conexão
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIntegrationStatus(prev => ({
        ...prev,
        [integrationId]: {
          connected: true,
          provider: availableIntegrations.find(i => i.id === integrationId)?.name,
          lastSync: new Date().toISOString()
        }
      }))
      
      setAvailableIntegrations(prev => 
        prev.map(integration => 
          integration.id === integrationId 
            ? { ...integration, status: 'connected' }
            : integration
        )
      )
      
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setIsLoading(false)
    }
  }

  // Função para desconectar integração
  const disconnectIntegration = async (integrationId) => {
    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIntegrationStatus(prev => ({
        ...prev,
        [integrationId]: {
          connected: false,
          provider: null,
          lastSync: null
        }
      }))
      
      setAvailableIntegrations(prev => 
        prev.map(integration => 
          integration.id === integrationId 
            ? { ...integration, status: 'available' }
            : integration
        )
      )
      
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setIsLoading(false)
    }
  }

  const value = {
    // Dados
    realTimeMetrics,
    integrationStatus,
    availableIntegrations,
    
    // Estados
    isLoading,
    error,
    
    // Funções
    apiCall,
    connectIntegration,
    disconnectIntegration,
    
    // Endpoints para referência
    endpoints: mockAPIEndpoints
  }

  return (
    <APIContext.Provider value={value}>
      {children}
    </APIContext.Provider>
  )
}

export default APIContext

