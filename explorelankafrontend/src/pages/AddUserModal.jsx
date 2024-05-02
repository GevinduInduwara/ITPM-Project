import React from 'react';
import { Modal, Form, Input, Button, Typography, Row, Col, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useAddUser } from '../hooks/userHooks';

const { Text } = Typography;

const AddUserModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const { mutate: addUser } = useAddUser();

  const handleSubmit = async (values) => {
    try {
      // Perform client-side validation here if needed
      // Call the mutation hook to add the new user
      await addUser(values);
      form.resetFields(); // Reset form fields after successful submission
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error adding user:', error);
      message.error('Failed to add user');
    }
  };

  return (
    <Modal
      visible={visible}
      title="Add User"
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your first name' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="phone" label="Phone" rules={[{ required: false, message: 'Please enter your phone' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please enter your password' }]}>
              <Input.Password />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item name="ConfirmPassword" label="Confirm Password" dependencies={['password']} hasFeedback rules={[
              { required: true, message: 'Please confirm your password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match'));
                },
              }),
            ]}>
              <Input.Password />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Add User</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
