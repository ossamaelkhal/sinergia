import React from 'react';

export default function TechnicalIntegrations() {
  const integrations = [
    { name: "WhatsApp Business", icon: "��", description: "Integração completa com API oficial" },
    { name: "CRM Systems", icon: "📊", description: "Salesforce, HubSpot, Pipedrive e mais" },
    { name: "E-commerce", icon: "🛒", description: "Shopify, WooCommerce, Magento" },
    { name: "Calendários", icon: "📅", description: "Google Calendar, Outlook, Calendly" },
    { name: "Pagamentos", icon: "💳", description: "Stripe, PayPal, PagSeguro" },
    { name: "Analytics", icon: "📈", description: "Google Analytics, Facebook Pixel" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Integrações Técnicas
          </h2>
          <p className="text-xl text-gray-600">
            Conectamos com as ferramentas que você já usa
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">{integration.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{integration.name}</h3>
              <p className="text-sm text-gray-600">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
