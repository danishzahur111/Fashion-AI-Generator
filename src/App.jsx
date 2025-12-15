// src/App.jsx - FINAL CORRECT CODE
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext.jsx'; // MUST have .jsx
import LandingPage from './pages/LandingPage.jsx'; // MUST have .jsx
import CampaignGenerator from './pages/CampaignGenerator.jsx'; // MUST have .jsx
import PromptResults from './pages/PromptResults.jsx'; // MUST have .jsx
import Layout from './components/Layout.jsx'; // MUST have .jsx
import './index.css'; 

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/generate" element={<CampaignGenerator />} />
            <Route path="/results" element={<PromptResults />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;