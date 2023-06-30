import React, { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';

const { Header, Content, Sider } = Layout;

const App = () => {
  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    // Действия при отправке формы, например, добавление новой карточки
    const newCard = {
      title: 'new card',
      content: 'card content',
    };
    setCards([...cards, newCard]);
    alert('form is sended!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Menu theme="dark" mode="vertical">
          <Menu.Item key="1">item1</Menu.Item>
          <Menu.Item key="2">item2</Menu.Item>
          <Menu.Item key="3">item3</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 10 }}>
          <h2>Меню</h2>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Form onFinish={handleSubmit} style={{ marginBottom: 16 }}>
              <Form.Item label="label1">
                <Input />
              </Form.Item>
              <Form.Item label="label2">
                <Input />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Отправить
              </Button>
            </Form>
            {cards.map((card, index) => (
              <Card key={index} title={card.title} style={{ marginBottom: 16 }}>
                {card.content}
              </Card>
            ))}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
