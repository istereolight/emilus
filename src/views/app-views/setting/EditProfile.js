import React, { useState } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { APP_PREFIX_PATH } from 'configs/AppConfig';


export const EditProfile = () => {

	const avatarEndpoint = '';
	const [avatar, setAvatar] = useState({
		avatarUrl: avatarEndpoint
	});
	const history = useHistory();
	const user = useSelector(state => state.getUsers.currentUser);
	const { name, username, email, phone, website, company, address } = user;

	const getBase64 = (img, callback) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	};

	const onFinish = values => {
		const key = 'updatable';
		message.loading({ content: 'Updating...', key });
		setTimeout(() => {
			message.success({ content: 'Done!', key, duration: 2 });
			history.push(`${APP_PREFIX_PATH}/pages/user-list`)
		}, 1000);
		
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	const onUploadAavater = info => {
		const key = 'updatable';
		if (info.file.status === 'uploading') {
			message.loading({ content: 'Uploading...', key, duration: 1000 });
			return;
		}
		if (info.file.status === 'done') {
			getBase64(info.file.originFileObj, imageUrl =>
				setAvatar({
					avatarUrl: imageUrl,
				}),
			);
			message.success({ content: 'Uploaded!', key,  duration: 1.5 });
		}
	};

	const onRemoveAvater = () => {
		setAvatar({
			avatarUrl: ''
		})
	}


	return (
		<>
				<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
					<Avatar size={90} src={avatar.avatarUrl} icon={<UserOutlined />}/>
					<div className="ml-md-3 mt-md-0 mt-3">
						<Upload onChange={onUploadAavater} showUploadList={false} action={avatarEndpoint}>
							<Button type="primary">Change Avatar</Button>
						</Upload>
						<Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
					</div>
				</Flex>
				<div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"
						initialValues={
							{ 
								'name': name,
								'email': email,
								'username': username,
								'phoneNumber': phone,
								'website': website,
								'company': company.name,
								'address': `${address.street} ${address.suite}`,
								'city': address.city,
								'postcode': address.zipcode
							}
						}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row gutter={ROW_GUTTER}>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: 'Please input your username!'
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Email"
											name="email"
											rules={[{ 
												required: true,
												type: 'email',
												message: 'Please enter a valid email!' 
											}]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Phone Number"
											name="phoneNumber"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Website"
											name="website"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Company"
											name="company"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24}>
										<Form.Item
											label="Address"
											name="address"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="City"
											name="city"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Post code"
											name="postcode"
										>
											<Input />
										</Form.Item>
									</Col>
								</Row>
								<Button type="primary" htmlType="submit">
									Save Change
								</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</>	
	)
}

export default EditProfile;
