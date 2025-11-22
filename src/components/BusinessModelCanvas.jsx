import React from 'react';
import { Download, Settings, Users, Truck, Heart, Box, DollarSign, ShoppingBag, LayoutGrid } from 'lucide-react';
import './Canvas.css';

const Block = ({ title, items, icon: Icon, className, isGreen }) => (
    <div className={`bmc-card ${className} ${isGreen ? 'green-theme' : ''}`}>
        <div className="block-header">
            {Icon && <Icon size={16} className="block-icon" />}
            <h4>{title}</h4>
        </div>
        <ul>
            {items.map((item, i) => (
                <li key={i}>• {item}</li>
            ))}
        </ul>
    </div>
);

const BusinessModelCanvas = ({ data }) => {
    return (
        <div className="canvas-card bmc-wrapper">
            <div className="card-header">
                <div className="header-content">
                    <div className="icon-title">
                        <LayoutGrid size={20} className="icon-grid-header" />
                        <h3>Business Model Canvas</h3>
                    </div>
                    <p className="subtitle">The operational engine</p>
                </div>
                <div className="header-actions">
                    <div className="toggle-pill">
                        <span className="inactive">○ Normal</span>
                        <span className="active">● Strategic Driver</span>
                    </div>
                    <button className="icon-btn"><Download size={18} /></button>
                </div>
            </div>

            <div className="bmc-grid-custom">
                {/* Column 1 */}
                <Block title="KEY PARTNERS" items={data.keyPartners} icon={Users} className="grid-kp" />
                <Block title="CHANNELS" items={data.channels} icon={Truck} className="grid-ch" />

                {/* Column 2 */}
                <Block title="KEY ACTIVITIES" items={data.keyActivities} icon={Settings} className="grid-ka" />
                <Block title="SEGMENTS" items={data.customerSegments} icon={Users} className="grid-sg" />

                {/* Column 3 */}
                <Block title="VALUE PROP" items={data.valuePropositions} icon={ShoppingBag} className="grid-vp" />

                {/* Column 4 */}
                <Block title="RELATIONSHIPS" items={data.customerRelationships} icon={Heart} className="grid-rel" />
                <Block title="KEY RESOURCES" items={data.keyResources} icon={Box} className="grid-kr" />

                {/* Bottom Row */}
                <Block title="REVENUE STREAMS" items={data.revenueStreams} icon={DollarSign} className="grid-rs" isGreen={true} />
                <Block title="COST STRUCTURE" items={data.costStructure} icon={DollarSign} className="grid-cs" />
            </div>
        </div>
    );
};

export default BusinessModelCanvas;
