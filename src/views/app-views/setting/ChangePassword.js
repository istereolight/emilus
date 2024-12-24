import React, { useRef } from 'react'
import { Form, Button, Input, Row, Col, message } from 'antd';



const ChangePassword = () => {

	const changePasswordFormRef = useRef();

	const onFinish = () => {
		message.success({ content: 'Password Changed!', duration: 2 });
		onReset()
  };

	const onReset = () => {
    changePasswordFormRef.current.resetFields();
  };

	return (
		<>
			<h2 className="mb-4">Change Password</h2>
			<Row >
				<Col xs={24} sm={24} md={24} lg={8}>
					<Form
						name="changePasswordForm"
						layout="vertical"
						ref={changePasswordFormRef}
						onFinish={onFinish}
					>
						<Form.Item
							label="Current Password"
							name="currentPassword"
							rules={[{ 
								required: true,
								message: 'Please enter your currrent password!' 
							}]}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item
							label="New Password"
							name="newPassword"
							rules={[{ 
								required: true,
								message: 'Please enter your new password!' 
							}]}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item
							label="Confirm Password"
							name="confirmPassword"
							rules={
								[
									{ 
										required: true,
										message: 'Please confirm your password!' 
									},
									({ getFieldValue }) => ({
										validator(rule, value) {
											if (!value || getFieldValue('newPassword') === value) {
												return Promise.resolve();
											}
											return Promise.reject('Password not matched!');
										},
									}),
								]
							}
						>
							<Input.Password />
						</Form.Item>
						<Button type="primary" htmlType="submit">
								Change password
							</Button>
					</Form>
				</Col>
			</Row>
			</>
	)
}

export default ChangePassword;