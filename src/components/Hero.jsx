import React from 'react';
import { Lightbulb, LayoutGrid, LineChart } from 'lucide-react';

const Hero = ({ company }) => {
    const isIkea = company === 'ikea';

    return (
        <div className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="tag-pill">
                    <Lightbulb size={14} />
                    <span>STRATEGIC COHERENCE</span>
                </div>

                <h1>
                    {isIkea ? 'IKEA: Cost Leadership via Design' : 'Netflix: Disruption via Streaming'}
                </h1>

                <p className="hero-desc">
                    {isIkea
                        ? "IKEA's 'Blue Ocean' is defined by eliminating the salesperson and delivery/assembly tasks to offer unmatched prices and design."
                        : "Netflix's 'Blue Ocean' eliminated late fees and physical stores to offer unlimited on-demand entertainment."}
                </p>

                <div className="hero-buttons">
                    <button className="hero-btn primary">
                        <LineChart size={16} /> Strategy Canvas = "The Promise"
                    </button>
                    <button className="hero-btn secondary">
                        <LayoutGrid size={16} /> Business Model = "The Machine"
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
