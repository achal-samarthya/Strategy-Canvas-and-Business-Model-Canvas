import React, { useState } from 'react';
import StrategyCanvas from './StrategyCanvas';
import BusinessModelCanvas from './BusinessModelCanvas';
import Hero from './Hero';
import { STRATEGY_DATA, BMC_DATA } from '../data';
import { Building2, Clapperboard } from 'lucide-react';

const Dashboard = () => {
    const [company, setCompany] = useState('ikea'); // 'ikea' or 'netflix'

    const currentStrategyData = STRATEGY_DATA[company];
    const currentBMCData = BMC_DATA[company];

    const strategyConfig = company === 'ikea'
        ? { keys: ['ikea', 'industry'], colors: ['#0051BA', '#bdc3c7'] }
        : { keys: ['netflix', 'blockbuster'], colors: ['#E50914', '#bdc3c7'] };

    return (
        <div className="dashboard">
            {/* Company Toggle (Top Right absolute or separate header?) 
          Let's put it above the Hero for now or integrated.
          Screenshot doesn't show toggle, but we need it.
          Let's make a small floating toggle or top bar.
      */}
            <div className="top-nav">
                <div className="company-switch">
                    <button
                        className={`switch-btn ${company === 'ikea' ? 'active' : ''}`}
                        onClick={() => setCompany('ikea')}
                    >
                        IKEA
                    </button>
                    <button
                        className={`switch-btn ${company === 'netflix' ? 'active' : ''}`}
                        onClick={() => setCompany('netflix')}
                    >
                        Netflix
                    </button>
                </div>
            </div>

            <Hero company={company} />

            <div className="split-layout">
                <StrategyCanvas
                    data={currentStrategyData}
                    dataKeys={strategyConfig.keys}
                    colors={strategyConfig.colors}
                />
                <BusinessModelCanvas data={currentBMCData} />
            </div>
        </div>
    );
};

export default Dashboard;
