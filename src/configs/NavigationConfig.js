import { 
  DashboardOutlined,
  FileTextOutlined,
  GiftOutlined,
  MailOutlined,
  MobileOutlined,
  PictureOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UsergroupAddOutlined,
  UserOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Основные',
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboard',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'catalog',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'items',
          path: `${APP_PREFIX_PATH}/homes`,
          title: 'Товары',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'category',
          path: `${APP_PREFIX_PATH}/homes`,
          title: 'Категории',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'collections',
          path: `${APP_PREFIX_PATH}/homes`,
          title: 'Коллекции',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'combo',
          path: `${APP_PREFIX_PATH}/homes`,
          title: 'Комбо',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'customers',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'customers-list',
          path: `${APP_PREFIX_PATH}/pages/user-list`,
          title: 'Список клиентов',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'customers-group',
          path: `${APP_PREFIX_PATH}/homes`,
          title: 'Группы клиентов',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'customer-settings',
          path: `${APP_PREFIX_PATH}/setting`,
          title: 'Настройки пользователя',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Баннеры',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'promocodes',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'offline-points',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Оффлайн точки',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'addresses',
          path: `${APP_PREFIX_PATH}/homes`,
          title: 'Адреса',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'geo',
          path: `${APP_PREFIX_PATH}/homes`,
          title: 'Геозоны',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'employees',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Сотрудники',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'newsletter',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
},
{
  key: 'system',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Системные',
  // icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    }, 
    {
      key: 'mobile-app',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Мобильное приложение',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    }, 
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/homes`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }, 
  ]
}

]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
