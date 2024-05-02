import { Flex, Input, Button, Form, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLogin } from '../hooks/authHooks';
import { useNavigate } from 'react-router-dom';
import AddUserModal from './AddUserModal';

const UserLogin = () => {
    const { mutate: login, data: loginResponse } = useLogin();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);


    const onFinish = async (values) => {
        try {
            await login(values, {
                onSuccess: () => {
                    message.success('Logged in successfully');
                },
            }, {
                onError: () => {
                    message.error('Login failed. Please check your credentials.');
                },
            });
        } catch (error) {
            message.error('Login failed. Please check your credentials.');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Please fill in all required fields.');
    };

    useEffect(() => {
        if (loginResponse) {
            navigate(`/userprofile/${loginResponse.userId}`);
        }
    }, [loginResponse]);
    return (
        <Flex style={{alignItems: 'center', justifyContent: 'center', 
        backgroundImage: `url(https://wallpapercave.com/wp/wp2003930.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'}}>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical" style={{ border: '1px solid #d9d9d9', padding: '20px', borderRadius: '5px', backgroundColor: 'white', opacity: '0.9'}}
            >
                <h1>Login</h1>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                    <Button type="primary" style={{marginLeft: '8px'}} onClick={()=>setVisible(true)}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
            {
                visible && <AddUserModal visible={visible} onClose={() => {setVisible(false)}} />
      }
        </Flex>
    );
};

export default UserLogin;
