import React from 'react';
import { Layout, Splitter } from 'antd';

import TradingHeader from './components/TradingHeader';
import InstrumentsTable from './components/InstrumentsTable';
import TradingChart from './components/TradingChart';
import AccountStatusBar from './components/AccountStatusBar';
import TradeStatusBar from './components/TradeStatusBar';
import Col2 from './components/Col2';
import ColBelow from './components/ColBewlow';
import VerticalSidebar from './components/VerticalSidebar';

const { Sider, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      {/* HEADER */}
      <TradingHeader />

      {/* BODY */}
      <Layout style={{ height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
        {/* SIDEBAR */}
        <Sider width={50} style={{ background: '#141D26' }}>
          <VerticalSidebar />
        </Sider>

        {/* MAIN CONTENT */}
        <Content style={{ overflow: 'hidden' }}>
          <Splitter
            style={{ height: '100%' }}
            direction="horizontal"
            min={320}
            max={Infinity}
          >
            {/* LEFT PANEL - INSTRUMENTS */}
            <Splitter.Panel size={370} min={300} collapsible>
              <div style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
                <InstrumentsTable />
              </div>
            </Splitter.Panel>

            {/* RIGHT PANEL - CHART + TOOLS */}
            <Splitter.Panel min={600}>
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {/* Toolbar */}
                <div style={{ flexShrink: 0 }}>
                  <Col2 />
                </div>

                {/* Chart + Tools */}
                <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                  <div style={{ flexShrink: 0 }}>
                    <TradeStatusBar />
                  </div>
                  <div style={{ flex: 1, overflow: 'hidden', paddingLeft: 8 }}>
                    <TradingChart />
                  </div>
                </div>

                {/* Below chart tabs */}
                <div style={{ flexShrink: 0 }}>
                  <ColBelow />
                </div>

                {/* Bottom bar */}
                <div style={{ flexShrink: 0 }}>
                  <AccountStatusBar />
                </div>
              </div>
            </Splitter.Panel>
          </Splitter>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
