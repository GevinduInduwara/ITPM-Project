import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Table, message } from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/authHooks';
import { useDeleteUser, useGetAllUsers } from '../hooks/userHooks';
import AddUserModal from './AddUserModal';

const UsersTable = () => {
  const { data: allUsers, refetch: refetchUsers, error: errorFetching } = useGetAllUsers();
  const { mutate: deleteUser, data: deleteData } = useDeleteUser();
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const {mutate: logout} = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    if (allUsers) {
      setDataSource(allUsers);
    }
    if (errorFetching) {
      message.error(errorFetching.message);
    }

  }, [allUsers, errorFetching]);

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId, {
        onSuccess: () => {
          message.success('User deleted successfully');
          refetchUsers();
        },
      }, {
        onError: () => {
          message.error('Failed to delete user');
        },

      });
    } catch (error) {
      console.error('Error deleting user:', error);
      message.error('Failed to delete user');
    }
  };

  const handleLogout = () => {
    Cookies.remove('jwt');
    logout();
    navigate('/');
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (text, record) => (
        <span>
          {record.phone ? record.phone : '-'}
        </span>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Link to={`/userprofile/${record._id}`}>
            <Button type="primary" icon={<EditOutlined />} style={{ marginRight: '8px' }}>
              Edit
            </Button>
          </Link>
          <Popconfirm
            title="Are you sure you want to delete this user?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </span>
      ),
    },
  ];


  return (
    <div>
      <div style={{ marginBottom: '16px', textAlign: 'right' }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setVisible(true)}>Add User</Button>
        <Button type="primary" style={{ marginLeft: '8px' }} onClick={() => refetchUsers()}>Refresh</Button>
        <Button type="primary" style={{ marginLeft: '8px' }} onClick={handleLogout}>Logout</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />
      {
        visible && <AddUserModal visible={visible} onClose={() => {
          setVisible(false)
        }
        } />
      }
    </div>
  );
};

export default UsersTable;
