import React from 'react';
import '../styles/App.css';
import EnhancedHeroSection from '../components/EnhancedHeroSection';
import EnhancedSolutionArchitect from '../components/EnhancedSolutionArchitect';
import APIIntegrationsDemo from '../components/APIIntegrationsDemo';
import EnhancedROICalculator from '../components/EnhancedROICalculator';
import EnhancedFlowSimulator from '../components/EnhancedFlowSimulator';
import EnhancedFooter from '../components/EnhancedFooter';
import AISystemModal from '../components/AISystemModal';
import NicheSolutionsModal from '../components/NicheSolutionsModal';
import RealTimeMetrics from '../components/RealTimeMetrics';
import SalesGamification from '../components/SalesGamification';
import SalesManagementDashboard from '../components/SalesManagementDashboard';
import SalesTrainingSimulator from '../components/SalesTrainingSimulator';

function App() {
  const [modal, setModal] = React.useState(null);

  const openModal = (modalName) => {
    setModal(modalName);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div className="App">
      <EnhancedHeroSection />
      <EnhancedSolutionArchitect openNicheSolutionsModal={() => openModal('niche')} />
      <APIIntegrationsDemo openAISystemModal={() => openModal('ai')} />
      <EnhancedROICalculator />
      <EnhancedFlowSimulator />
      <RealTimeMetrics />
      <SalesGamification />
      <SalesManagementDashboard />
      <SalesTrainingSimulator />
      <EnhancedFooter />

      {modal === 'ai' && <AISystemModal closeModal={closeModal} />}
      {modal === 'niche' && <NicheSolutionsModal closeModal={closeModal} />}
    </div>
  );
}

export default App;
