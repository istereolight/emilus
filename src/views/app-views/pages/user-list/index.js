import React, { useEffect, useState } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, setCurrentUser, setUsers } from 'redux/reducers/GetUsers';
import MoonLoader from "react-spinners/ClipLoader";
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';



const UserList = () => {

	const users = useSelector(state => state.getUsers.users);
	const isLoading = useSelector(state => state.getUsers.loading);
	const dispatch = useDispatch();
	const history = useHistory();


	const [userList, setUserList] = useState({
		userProfileVisible: false,
		selectedUser: null
	})

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch])

	const deleteUser = (userId, name) => {
		dispatch(setUsers(users.filter(item => item.id !== userId)))
		message.success({ content: `Deleted user ${name}`, duration: 1 });
	}

	const showUserProfile = userInfo => {
		setUserList({
			...userList,
			userProfileVisible: true,
			selectedUser: userInfo
		})
	};
	
	const closeUserProfile = () => {
		setUserList({
			...userList,
			userProfileVisible: false,
			selectedUser: null
		})
	}

	const onTableRowClick = (user) => {
		dispatch(setCurrentUser(user))
		history.push(`${APP_PREFIX_PATH}/setting`);
	}

	const tableColumns = [
		{
			title: 'User',
			dataIndex: 'name',
			render: (_, record) => (
				<div className="d-flex" onClick={() => onTableRowClick(record)}>
					<AvatarStatus  name={record.name} subTitle={record.email}/>
				</div>
			),
			sorter: {
				compare: (a, b) => {
					a = a.name.toLowerCase();
						b = b.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: 'Username',
			dataIndex: 'username',
			render: (_, record) => (
				<span onClick={() => onTableRowClick(record)}>{record.username}</span>
			),
			sorter: {
				compare: (a, b) => {
					const lowerA = a.address.city.toLowerCase();
        	const lowerB = b.address.city.toLowerCase();
					if (lowerA < lowerB) return -1;
        	if (lowerA > lowerB) return 1;
        	return 0;
				},
			},
		},
		{
			title: 'City',
			dataIndex: 'city',
			render: (_, record) => (
				<span onClick={() => onTableRowClick(record)}>{record.address.city}</span>
			),
			sorter: {
				compare: (a, b) => {
					const lowerA = a.address.city.toLowerCase();
        	const lowerB = b.address.city.toLowerCase();
					if (lowerA < lowerB) return -1;
        	if (lowerA > lowerB) return 1;
        	return 0;
				}
			},
		},
		{
			title: 'Company',
			dataIndex: 'company',
			render: (_, record) => (
				<span onClick={() => onTableRowClick(record)}>{record.company.name}</span>
			),
			sorter: {
				compare: (a, b) => {
					const lowerA = a.address.city.toLowerCase();
        	const lowerB = b.address.city.toLowerCase();
					if (lowerA[0] < lowerB[0]) return -1;
        	if (lowerA[0] > lowerB[0]) return 1;
        	return 0;
				}
			}
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {showUserProfile(elm)}} size="small"/>
					</Tooltip>
					<Tooltip title="Delete">
						<Button danger icon={<DeleteOutlined />} onClick={()=> {deleteUser(elm.id, elm.name)}} size="small"/>
					</Tooltip>
				</div>
			)
		}
	];

	return (
		<>
			{isLoading ?
				<div className='spinner'>
					<MoonLoader
						color="#1c84be"
						cssOverride={{}}
					/>
				</div>
				 : 
				<Card bodyStyle={{'padding': '0px'}}>
					<Table columns={tableColumns} dataSource={users} rowKey='id' />
					<UserView data={userList.selectedUser} visible={userList.userProfileVisible} close={()=> {closeUserProfile()}}/>
				</Card>
			}
		</>
	)

}

export default UserList;
