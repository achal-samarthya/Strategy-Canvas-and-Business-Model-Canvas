import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Download, MousePointerClick } from 'lucide-react';

const StrategyCanvas = ({ data, dataKeys, colors }) => {
    return (
        <div className="canvas-card strategy-card">
            <div className="card-header">
                <div className="header-content">
                    <div className="icon-title">
                        <span className="icon-chart">📈</span>
                        <h3>Strategy Canvas</h3>
                    </div>
                    <p className="subtitle">Visualizing the Value Curve</p>
                </div>
                <button className="icon-btn"><Download size={18} /></button>
            </div>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#eee" />
                        <XAxis
                            dataKey="factor"
                            angle={-25}
                            textAnchor="end"
                            interval={0}
                            tick={{ fontSize: 11, fill: '#666' }}
                            tickLine={false}
                            height={80}
                        />
                        <YAxis
                            domain={[0, 10]}
                            ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            tick={{ fontSize: 11, fill: '#999' }}
                            label={{ value: 'Offering Level (0-10)', angle: -90, position: 'insideLeft', fill: '#999', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            iconType="rect"
                        />
                        {/* Industry Line - Dashed */}
                        <Line
                            type="monotone"
                            dataKey={dataKeys[1]}
                            stroke="#bdc3c7"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={{ r: 4, fill: '#fff', stroke: '#bdc3c7', strokeWidth: 2 }}
                            name={dataKeys[1] === 'industry' ? 'Traditional Furniture Store' : 'Blockbuster'}
                        />
                        {/* Company Line - Solid Blue */}
                        <Line
                            type="monotone"
                            dataKey={dataKeys[0]}
                            stroke="#0051BA"
                            strokeWidth={3}
                            dot={{ r: 5, fill: '#fff', stroke: '#0051BA', strokeWidth: 3 }}
                            activeDot={{ r: 7 }}
                            name={dataKeys[0].toUpperCase()}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="interactive-insight">
                <div className="insight-icon">
                    <MousePointerClick size={20} color="#f39c12" />
                </div>
                <div className="insight-text">
                    <h4>Interactive Insight</h4>
                    <p>Click on any point in the <strong>blue line</strong> above to see exactly <em>which</em> parts of the business model make that feature possible.</p>
                </div>
            </div>
        </div>
    );
};

export default StrategyCanvas;
