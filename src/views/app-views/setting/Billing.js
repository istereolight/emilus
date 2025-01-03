import React, { useState } from 'react'
import { Table, Button, Tooltip, Form, Modal, Input, Row, Col } from 'antd';
import { DeleteOutlined, CreditCardOutlined, CalendarOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';

const { Column } = Table;


const AddNewCardForm = ({ visible, onCreate, onCancel }) => {

  const [form] = Form.useForm();
  return (
    <Modal
      title="Add new card"
      visible={visible}
      okText="Save card"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        name="addCardForm"
        layout="vertical"
      >
        <Form.Item
          label="Card holder name"
          name="cardHolderName"
          rules={
            [
              { 
                require: true,
                message: 'Please enter card holder name!' 
              }
            ]
          }
        >
          <Input suffix={<CreditCardOutlined />} placeholder="Card holder name" />
        </Form.Item>
        <Form.Item
          label="Card number"
          name="cardNumber"
          hasFeedback
          rules={
            [
              { 
                pattern: /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g,
                message: 'Please enter a valid credit card number!' 
              }
            ]
          }
        >
          <Input suffix={<CreditCardOutlined />} placeholder="0000 0000 0000 00" />
        </Form.Item>
        <Row gutter={ROW_GUTTER}>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label="Expiry date"
              name="exp"
              rules={
                [
                  { 
                    pattern: /^(0[1-9]|1[0-2])[- /.]\d{2}/,
                    message: 'Please enter a valid date format!' 
                  }
                ]
              }
            >
              <Input suffix={<CalendarOutlined />} placeholder="MM/YY" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label="CVV code"
              name="cvv"
              rules={
                [
                  { 
                    pattern: /^[0-9]{3,4}$/,
                    message: 'Please enter a CVV code format!' 
                  }
                ]
              }
            >
              <Input 
                suffix={
                  <Tooltip title="The last three digits printed on the back of the card">
                    <QuestionCircleOutlined className="cursor-pointer" />
                  </Tooltip>
                } 
                placeholder="000"
                />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}

const Billing = () => {

  const defaultState = {
    selectedRowKeys: ["card-1"],
    creditCards : [
      {
        key: 'card-1',
        cardType: 'Visa',
        cardTypeImg: '/img/others/img-8.png',
        cardNumber: '•••• •••• •••• 7260',
        exp: '06/22'
      },
      {
        key: 'card-2',
        cardType: 'Master',
        cardTypeImg: '/img/others/img-9.png',
        cardNumber: '•••• •••• •••• 1272',
        exp: '04/21'
      }
    ],
    modalVisible: false,
    newCreditCardInfo: {
      cardHolderName: '',
      cardNumber: '',
      exp: '06/22'
    }
  };

  const [payCards, setPayCards] = useState(defaultState);

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setPayCards({ selectedRowKeys });
  };

  const showModal = () => {
    setPayCards({
      modalVisible: true,
    });
  };

  const closeModal = () => {
    setPayCards({
      modalVisible: false,
    });
  }

  const addCard = values => {
    const { cardNumber, exp } = values
    const cardType = [
      {
        img: '/img/others/img-8.png',
        type: 'Visa'
      },
      {
        img: '/img/others/img-9.png',
        type: 'Master'
      }
    ]
    const randomCardType = cardType[Math.floor(Math.random() * cardType.length)];
    const reg = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm
    const substr = `•••• •••• •••• `
    const cardInfo = {
      key: `card-${payCards.creditCards.length + 1}`,
      cardType: randomCardType.type,
      cardTypeImg: randomCardType.img,
      cardNumber: cardNumber.replace(reg, substr),
      exp: exp
    }
    setPayCards({
      modalVisible: false,
      creditCards: [
        ...payCards.creditCards,
        cardInfo
      ]
    })
  };

  const { selectedRowKeys, creditCards, modalVisible } = payCards;
    const rowSelection = {
      selectedRowKeys,
      type: 'radio',
      onChange: onSelectChange,
    };

    const locale = {
      emptyText: (
        <div className="text-center my-4">
          <img src="/img/others/img-7.png" alt="Add credit card" style={{maxWidth: '90px'}}/>
          <h3 className="mt-3 font-weight-light">Please add a credit card!</h3>
        </div>
      )
    };

  return (
    <>
      <h2 className="mb-4">Billing</h2>
      <Table locale={locale} dataSource={creditCards} rowSelection={rowSelection} pagination={false}>
        <Column 
          title="Card type" 
          key="cardType" 
          render={(text, record) => (
            <>
              <img src={record.cardTypeImg} alt={record.cardType} />
              <span className="ml-2">{record.cardType}</span>
            </>
          )}
        />
        <Column title="Card Number" dataIndex="cardNumber" key="cardNumber" />
        <Column title="Expires on" dataIndex="exp" key="exp" />
        <Column 
          title="" 
          key="actions"
          className="text-right" 
          render={(text, record) => (
            <Tooltip title="Remove card">
              <Button 
                type="link" 
                shape="circle" 
                icon={<DeleteOutlined />} 
                onClick={() => {
                  const newCreditCards = [...creditCards];
                  setPayCards({
                    creditCards: newCreditCards.filter(item => item.key !== record.key),
                  });
                }} 
              />
            </Tooltip>
          )}
        />
      </Table>
      <div className="mt-3 text-right">
        <Button type="primary" onClick={showModal}>Add new card</Button>
      </div>
        <AddNewCardForm visible={modalVisible} onCreate={addCard} onCancel={closeModal}/>
    </>
  )
}

export default Billing;