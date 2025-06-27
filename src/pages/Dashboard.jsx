// pages/Dashboard.jsx
import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';
import HeaderBar from '../components/HeaderBar';
import PortfolioSummary from '../components/PortfolioSummary';
import TradesTable from '../components/TradesTable';

const { Content } = Layout;

const Dashboard = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout>
                <HeaderBar />
                <Content style={{ margin: '24px 16px' }}>
                    <PortfolioSummary />
                    <div style={{ marginTop: '24px' }}>
                        <TradesTable />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
