// Import necessary modules
import React from 'react';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Form, Input, Row, Spin, Typography, Upload, Avatar, message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteUser, useGetUser, useUpdateUser, useUploadAvatar } from '../hooks/userHooks';
import { useLogout } from '../hooks/authHooks';
import FixedNav from "../Components/fixednavbar/FixedNav";
import Cookies from 'js-cookie';

const { Text, Title } = Typography;

const UserProfile = () => {
  const [form] = Form.useForm();
  const { mutate: getUserData, data: userData, isLoading } = useGetUser();
  const { mutate: updateUser } = useUpdateUser();
  const { mutate: uploadImage } = useUploadAvatar();
  const [fileList, setFileList] = useState([]);
  const { mutate: deleteUser, data: deleteData } = useDeleteUser();
  const [avatarUrl, setAvatarUrl] = useState('');
  const { mutate: logout } = useLogout();
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getUserData(params.id);
    }
  }, [params]);

  const handleLogout = () => {
    Cookies.remove('jwt');
    logout();
    navigate('/');
  };

  useEffect(() => {
    if (userData) {
      form.setFieldsValue(userData);
      setAvatarUrl(`http://localhost:4000/${userData.photo}`);
    }
  }, [userData]);

  const handleSubmit = async (values) => {
    try {
      if (params.id) {
        values.id = params.id;
        await updateUser(values, {
          onSuccess: () => {
            getUserData(params.id);
          },
        },);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
      message.error('Failed to update user data');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(params.id);
      message.success('User deleted successfully');
      Cookies.remove('jwt');
      navigate('/');
    } catch (error) {
      console.error('Error deleting user:', error);
      message.error('Failed to delete user');
    }

  }

  const handleFileChange = async (event) => {
    const file = event.fileList.slice(-1)[0]?.originFileObj; // Get the last uploaded file
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('id', params.id);
      const response = await uploadImage(formData);
      setFileList([{
        uid: file.uid,
        name: file.name,
        status: 'done',
        url: URL.createObjectURL(file),
      }]);
    }
  };

  return (
    isLoading ? (<Spin size="large" />) : (
      <Flex style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
         <FixedNav />
        <Title level={2} style={{ marginBottom: '24px', marginTop: '20px' }}>User Profile</Title>
        <Flex flexDirection="column" alignItems="center">
          <Form form={form} onFinish={handleSubmit} layout="vertical" style={{ border: '1px solid #d9d9d9', padding: '20px', borderRadius: '5px' }}>
            <Row gutter={[16, 16]}>
              <Col xs={12} sm={12}>
                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your first name' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={12} sm={12}>
                <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item name="photo" label="Upload Photo">
                  <Upload
                    listType="picture"
                    previewFile={(file) => URL.createObjectURL(file)}
                    beforeUpload={() => false}
                    multiple={false}
                    onChange={handleFileChange}
                    fileList={fileList}
                    accept="image/*"
                  >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  <Text type="secondary">Please upload an image file</Text>
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item label="Avatar">
                  <Avatar size={64} icon={<UserOutlined />} src={avatarUrl} />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Save Changes</Button>
                </Form.Item>
                <Form.Item>
                <Button type="primary" style={{ width: '100%' }} onClick={handleLogout}>Logout</Button>
                </Form.Item>
                <Form.Item>
                <Button type="primary" style={{ width: '100%' }} onClick={handleDelete}>Delete Profile</Button>
                </Form.Item>
              </Col>
            </Row>

          </Form>
        </Flex>
      </Flex>
    )
  );
};

export default UserProfile;
