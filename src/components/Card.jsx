import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useLocation } from 'react-router-dom';




export const WonderlaForm = () => {
  const phoneNumberRegex = /^[0-9]{10}$/;
  const location = useLocation();

  console.log(location.pathname)

  // const initialValues = {
  //   text: "Happy to see your interest in booking Wonderla tickets. Do fill this below google form for further assistance.  \n\n https://docs.google.com/forms/d/e/1FAIpQLSfmmrCV61wqMJWyicCAxrU8sydkh1WMQcZCCwwfpjhemRhLvg/viewform?usp=sf_link",
  // };

  let  initialValues  = {};


  switch (location.pathname) {
    case '/wonderla':
      initialValues.text = "🎢 Happy to see your interest in booking Wonderla tickets. Do fill this below google form for further assistance.  \n\n https://docs.google.com/forms/d/e/1FAIpQLSfmmrCV61wqMJWyicCAxrU8sydkh1WMQcZCCwwfpjhemRhLvg/viewform?usp=sf_link"
      break;
    case '/bus' :
      initialValues.text = "🙏 Welcome to Jolly Tours and Travels. Do fill the below Bus Enquiry Form \n\n "
      break;
    case '/tour' :
      initialValues.text = "🙏 Welcome to Jolly Tours and Travels. Do fill the below Tour Enquiry Form \n\n "
      break;
  default:
      break;
  }


  const onFinish = (values) => {
    const { phone, text } = values;
    const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

 

  return (
    <Card title="Contact Form" style={{ maxWidth: 400, margin: 'auto', marginTop: '50px' }}>
      <Form
        name="contact_form"
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: 'Please input your phone number!' },
            { pattern: phoneNumberRegex, message: 'Please enter a valid 10-digit phone number!' }
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>
        <Form.Item
          name="text"
          label="Text"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <Input.TextArea rows={4} placeholder="Enter your message" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Send Link
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}





