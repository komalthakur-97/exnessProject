// components/PortfolioSummary.jsx
import React from 'react';
import { Card, Col, Row } from 'antd';

const PortfolioSummary = () => {
    const stats = [
        { title: 'Balance', value: '$10,000' },
        { title: 'Equity', value: '$9,500' },
        { title: 'Margin', value: '$500' },
    ];

    return (
        <Row gutter={16}>
            {stats.map((item, index) => (
                <Col xs={24} md={8} key={index}>
                    <Card>
                        <h3>{item.title}</h3>
                        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.value}</p>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default PortfolioSummary;
