import React from 'react';
import { Avatar, Drawer, Divider } from 'antd';
import { 
	MobileOutlined, 
	MailOutlined, 
	UserOutlined, 
	CalendarOutlined,
	FacebookOutlined,
	InstagramOutlined,
	TwitterOutlined
} from '@ant-design/icons';


const UserView = ( { data, visible, close }) => {

	return (
		<Drawer
				width={300}
				placement="right"
				onClose={close}
				closable={visible}
				open={visible}
			>
				<div className="text-center mt-3">
					<Avatar size={80} src={data?.img} />
					<h3 className="mt-2 mb-0">{data?.name}</h3>
					<span className="text-muted">{data?.username}</span>
				</div>
				<Divider dashed />
				<div className="">
					<h6 className="text-muted text-uppercase mb-3">Account details</h6>
					<p>
						<UserOutlined />
						<span className="ml-3 text-dark">id: {data?.id}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
					<p>
						<MobileOutlined />
						<span className="ml-3 text-dark">{data?.phone}</span>
					</p>
					<p>
						<MailOutlined />
						<span className="ml-3 text-dark">{data?.email? data?.email: '-'}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">Social profiles</h6>
					<p>
						<CalendarOutlined />
						<span className="ml-3 text-dark">Web site {data?.website}</span>
					</p>
					<p>
						<FacebookOutlined />
						<a href="/#" className="ml-3 text-dark">{data?.company.name}</a>
					</p>
					<p>
						<TwitterOutlined />
						<a href="/#" className="ml-3 text-dark">{data?.company.bs}</a>
					</p>
					<p>
						<InstagramOutlined />
						<a href="/#" className="ml-3 text-dark">{data?.company.catchPhrase}</a>
					</p>
				</div>
			</Drawer>
	)
}

export default UserView;