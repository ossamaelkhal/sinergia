import React from 'react';
import EnhancedHeroSection from '../components/EnhancedHeroSection';
import EnhancedSolutionArchitect from '../components/EnhancedSolutionArchitect';
import APIIntegrationsDemo from '../components/APIIntegrationsDemo';
import EnhancedROICalculator from '../components/EnhancedROICalculator';
import EnhancedFlowSimulator from '../components/EnhancedFlowSimulator';
import RealTimeMetrics from '../components/RealTimeMetrics';
import SalesGamification from '../components/SalesGamification';
import SalesManagementDashboard from '../components/SalesManagementDashboard';
import SalesTrainingSimulator from '../components/SalesTrainingSimulator';
import EnhancedFooter from '../components/EnhancedFooter';
import AISystemModal from '../components/AISystemModal';
import NicheSolutionsModal from '../components/NicheSolutionsModal';

const Home = () => {
  const [modal, setModal] = React.useState(null);

  const openModal = (modalName) => {
    setModal(modalName);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <EnhancedHeroSection />
        <EnhancedSolutionArchitect openNicheSolutionsModal={() => openModal('niche')} />
        <APIIntegrationsDemo openAISystemModal={() => openModal('ai')} />
        <EnhancedROICalculator />
        <EnhancedFlowSimulator />
        <RealTimeMetrics />
        <SalesGamification />
        <SalesManagementDashboard />
        <SalesTrainingSimulator />
      </main>
      <EnhancedFooter />

      {modal === 'ai' && <AISystemModal closeModal={closeModal} />}
      {modal === 'niche' && <NicheSolutionsModal closeModal={closeModal} />}
    </div>
  );
};

export default Home;
