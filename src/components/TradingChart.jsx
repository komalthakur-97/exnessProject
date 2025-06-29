import React, { useEffect, useRef } from 'react';
import { Card } from 'antd';
import { createChart } from 'lightweight-charts';

const dummyData = [
    { time: '2024-06-24', open: 144, high: 147, low: 143, close: 146 },
    { time: '2024-06-25', open: 146, high: 148, low: 145, close: 147 },
    { time: '2024-06-26', open: 147, high: 149, low: 146, close: 148 },
    { time: '2024-06-27', open: 148, high: 151, low: 147, close: 150 },
    { time: '2024-06-28', open: 150, high: 152, low: 148, close: 149 },
];

const TradingChart = () => {
    const containerRef = useRef();
    const chartRef = useRef(); // store chart instance

    useEffect(() => {
        const container = containerRef.current;
        const chart = createChart(container, {
            width: container.clientWidth,
            height: 400,
            layout: {
                background: { color: '#1e1e1e' },
                textColor: '#ccc',
            },
            grid: {
                vertLines: { color: '#2a2a2a' },
                horzLines: { color: '#2a2a2a' },
            },
            timeScale: {
                timeVisible: true,
                borderColor: '#383838',
            },
        });

        chartRef.current = chart;

        const candleSeries = chart.addCandlestickSeries({
            upColor: '#26a69a',
            downColor: '#ef5350',
            wickUpColor: '#26a69a',
            wickDownColor: '#ef5350',
            borderVisible: false,
        });

        candleSeries.setData(
            dummyData.map(d => ({
                ...d,
                time: new Date(d.time).getTime() / 1000,
            }))
        );

        // 👇 ResizeObserver for dynamic resizing
        const resizeObserver = new ResizeObserver(() => {
            if (container) {
                chart.resize(container.clientWidth, 400);
            }
        });
        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
            chart.remove();
        };
    }, []);

    return (
        <Card
            headStyle={{ background: '#1A232D', borderBottom: '1px solid #2f3e4d' }}
            bodyStyle={{ background: '#1A232D', padding: 0 }}
            style={{
                background: '#1A232D',
                border: '1px solid #2f3e4d',
                overflow: 'hidden',
            }}
        >
            <div ref={containerRef} style={{ width: '100%', height: '400px' }} />
        </Card>
    );
};

export default TradingChart;
