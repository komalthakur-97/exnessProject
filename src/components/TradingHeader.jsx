import { useState, useEffect,useRef } from 'react';
import {
    Input, Button, Space, Avatar, Typography, Tag, Row, Col, Modal, Dropdown, Menu,
} from 'antd';
import {
    PlusOutlined,
    CloseOutlined,
    StarOutlined,
    StarFilled,
    DownOutlined,
    BellOutlined,
    SettingOutlined,
    UserOutlined,
    AppstoreOutlined, LogoutOutlined,
    MailOutlined,
    QuestionCircleOutlined,
    MessageOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

const tradingPairs = [
    { symbol: 'EUR/USD', flag2: 'us', desc: 'Euro vs US Dollar' },
    { symbol: 'USD/JPY', flag2: 'jp', desc: 'US Dollar vs Japanese Yen' },
    { symbol: 'XAU/USD', flag2: 'us', desc: 'Gold vs US Dollar' },
    { symbol: 'BTC/USD', flag2: 'us', desc: 'Bitcoin vs US Dollar' },
];

const flagImg = (code) => {
    if (code === 'xau') return 'https://upload.wikimedia.org/wikipedia/commons/6/65/Gold_Unesco.svg';
    if (code === 'btc') return 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026';
    return `https://flagcdn.com/h24/${code}.png`;
};

const menu = (
    <Menu
        items={[
            {
                key: '1',
                icon: <AppstoreOutlined />,
                label: 'Personal Area',
            },
            {
                key: '2',
                icon: <span style={{ fontSize: 16 }}>ex</span>,
                label: 'Public website',
            },
            {
                key: '3',
                icon: <UserOutlined />,
                label: 'Partnership',
            },
        ]}
    />
);

const TradingHeader = () => {
    const [visible, setVisible] = useState(false);
    const [selectedPair, setSelectedPair] = useState('EUR/USD');
    const [favorites, setFavorites] = useState(['EUR/USD', 'USD/JPY']);
    const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

    const favRef = useRef(null);
    const toggleFavorite = (symbol) => {
        setFavorites((prev) =>
            prev.includes(symbol)
                ? prev.filter((item) => item !== symbol)
                : [...prev, symbol]
        );
    };

    const handleTabClick = (symbol) => {
        setSelectedPair(symbol);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (favRef.current && !favRef.current.contains(event.target)) {
                setVisible(false);
            }
        };

        if (visible) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [visible]);
    return (
        <>
            <div
                style={{
                    background: '#1F2937',
                    padding: '10px 20px',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #2a2e3a',
                }}
            >
                <Space size="large">
                    <Text style={{ color: '#F9CE00', fontSize: '22px', fontWeight: 'bold' }}>exness</Text>
                    &nbsp;
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                        {tradingPairs.map((pair) => (
                            <div
                                key={pair.symbol}
                                onClick={() => handleTabClick(pair.symbol)}
                                style={{
                                    cursor: 'pointer',
                                    color: selectedPair === pair.symbol ? '#fff' : '#ccc',
                                    fontWeight: selectedPair === pair.symbol ? 'bold' : 'normal',
                                    borderBottom: selectedPair === pair.symbol ? '2px solid #fff' : '2px solid transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                }}
                            >
                                <span>{pair.symbol}</span>
                                <img src={flagImg(pair.flag2)} alt="" width={20} height={14} />
                            </div>
                        ))}
                        <PlusOutlined
                            style={{ fontSize: 16, color: '#aaa', cursor: 'pointer' }}
                            onClick={() => setVisible(true)}
                        />
                    </div>
                </Space>

                <Space size="middle" style={{ gap: 20 }}>

                    <div>
                        <div style={{ textAlign: 'right', display: "flex", justifyContent: "space-between" }}>
                            <Tag color="#BEE5B0 " style={{ fontWeight: 500, marginRight: 4, color: "green" }}>Demo</Tag>
                            <Text style={{ color: '#aaa' }}>Standard</Text>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Text strong style={{ fontSize: '16px', color: '#F1F5F9' }}>10,000.00 USD</Text>
                            <DownOutlined style={{ fontSize: 12, marginLeft: 6, color: '#aaa' }} />
                        </div>
                    </div>

                    <Avatar style={{ backgroundColor: '#1E293B' }} icon={<BellOutlined className='fontWhite' />} />
                    <Avatar style={{ backgroundColor: '#1E293B' }} icon={<SettingOutlined className='fontWhite' />} />

                    <Avatar
                        onClick={() => setIsDepositModalOpen(true)}
                        style={{ backgroundColor: '#1E293B', cursor: 'pointer' }}
                        icon={<AppstoreOutlined className='fontWhite' />}
                    />

                    <Dropdown
                        overlay={
                            <Menu
                                items={[
                                    {
                                        key: 'email',
                                        icon: <MailOutlined />,
                                        label: <Text type="secondary">t****9@gmail.com</Text>,
                                        disabled: true,
                                    },
                                    {
                                        key: 'support',
                                        icon: <QuestionCircleOutlined />,
                                        label: 'Support',
                                        onClick: () => console.log('Support clicked'),
                                    },
                                    {
                                        key: 'suggest',
                                        icon: <MessageOutlined />,
                                        label: 'Suggest a feature',
                                        onClick: () => console.log('Suggest a feature clicked'),
                                    },
                                    {
                                        key: 'deposit',
                                        icon: <AppstoreOutlined />,
                                        label: 'Deposit Funds',
                                        onClick: () => setIsDepositModalOpen(true),
                                    },
                                    {
                                        key: 'signout',
                                        icon: <LogoutOutlined />,
                                        label: 'Sign Out',
                                        danger: true,
                                        onClick: () => console.log('Signed out'),
                                    },
                                ]}
                            />
                        }
                        trigger={['click']}
                    >
                        <Avatar
                            style={{ backgroundColor: '#1E293B', cursor: 'pointer' }}
                            icon={<UserOutlined className='fontWhite' />}
                        />
                    </Dropdown>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button
                            className='DepositButton'
                        >
                            Deposit
                        </Button>
                    </Dropdown>
                </Space>

            </div >

            {visible && (
                <div
                    ref={favRef}
                    style={{
                        position: 'absolute',
                        top: 64,
                        left: '20%',
                        width: '60%',
                        background: '#1F2A38',
                        color: 'white',
                        borderRadius: 8,
                        padding: 20,
                        zIndex: 999,
                        boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 className='fontWhite'>Add to Favorites</h3>
                        <Button
                            type="text"
                            icon={<CloseOutlined style={{ color: 'white' }} />}
                            onClick={() => setVisible(false)}
                        />
                    </div>

                    <Input placeholder="Search" allowClear style={{ marginBottom: 16 }} />

                    <Row gutter={[16, 12]}>
                        {tradingPairs.map((pair) => (
                            <Col span={24} key={pair.symbol}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '8px 16px',
                                        background: '#2B3B4E',
                                        borderRadius: 4,
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <Text strong>{pair.symbol}</Text>
                                        <img src={flagImg(pair.flag2)} alt="" width={24} />
                                        <Text type="secondary" style={{ color: '#aaa' }}>{pair.desc}</Text>
                                    </div>
                                    <Button
                                        type="text"
                                        icon={
                                            favorites.includes(pair.symbol)
                                                ? <StarFilled style={{ color: '#fadb14' }} />
                                                : <StarOutlined style={{ color: 'white' }} />
                                        }
                                        onClick={() => toggleFavorite(pair.symbol)}
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}

            <Modal
                open={isDepositModalOpen}
                onCancel={() => setIsDepositModalOpen(false)}
                title="Deposit Funds"
                okText="Deposit"
                onOk={() => setIsDepositModalOpen(false)}
                centered
            >
                <Input placeholder="Enter amount to deposit" addonAfter="USD" />
            </Modal>
        </>
    );
};

export default TradingHeader;
