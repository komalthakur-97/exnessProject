// components/TradesTable.jsx
import React from 'react';
import { Table } from 'antd';

const columns = [
    { title: 'Symbol', dataIndex: 'symbol', key: 'symbol' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Volume', dataIndex: 'volume', key: 'volume' },
    { title: 'Profit', dataIndex: 'profit', key: 'profit' },
];

const data = [
    { key: '1', symbol: 'EUR/USD', type: 'Buy', volume: '1.0', profit: '$120' },
    { key: '2', symbol: 'USD/JPY', type: 'Sell', volume: '0.5', profit: '$85' },
];

const TradesTable = () => {
    return <Table columns={columns} dataSource={data} />;
};

export default TradesTable;
