import React from 'react';
import { useParams } from 'react-router-dom';
import PlatformOverview from './PlatformOverview';
import EventAnalytics from './EventAnalytics';
import QuickCheckIn from './QuickCheckIn';
import SellTickets from './SellTickets';
import SmartTickets from './SmartTickets';
import NotFoundPage from '../../helper/Notfound';

const FeaturePage = () => {
  const { featureId } = useParams();

  const renderFeatureComponent = () => {
    switch (featureId) {
      case 'platform-overview':
        return <PlatformOverview />;
      case 'event-analytics':
        return <EventAnalytics />;
      case 'quick-check-in':
        return <QuickCheckIn />;
      case 'sell-tickets':
        return <SellTickets />;
      case 'smart-tickets':
        return <SmartTickets />;  
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div>
      {renderFeatureComponent()}
    </div>
  );
};

export default FeaturePage;
