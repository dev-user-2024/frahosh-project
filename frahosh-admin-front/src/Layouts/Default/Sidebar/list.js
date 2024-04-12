import DashboardIcon from '../../../assets/icons/dashboard-icon.svg'
import TicketIcon from '../../../assets/icons/ticket-icon.svg'
import AccessLevelIcon from '../../../assets/icons/acces level-icon.svg'
import UsersIcon from '../../../assets/icons/users-icon.svg'
import FinancialIcon from '../../../assets/icons/financial-icon.svg'
import SettingIcon from '../../../assets/icons/setting-icon.svg'
import UploadIcon from '../../../assets/icons/upload-icon.svg'


export const sidebarPanelList = [
    {
        icon: DashboardIcon,
        label: "داشبورد",
        path: "/"
    },
    {
        icon: UploadIcon,
        label: "بارگزاری محتوا",
        children: [
            {
                label: 'بارگزاری مقاله',
                path: '/upload-article',
            },
            {
                label: 'بارگزاری پادکست',
                path: '#',
            },

        ],
    },
    {
        icon: TicketIcon,
        label: "تیکت های پشتیبانی",
        path: "/ticket"
    },
    {
        icon: AccessLevelIcon,
        label: "محدودیت ها",
        path: "/limitness"
    },
    {
        icon: AccessLevelIcon,
        label: "سطوح دسترسی",
        path: "/access-level"
    },
    {
        icon: UsersIcon,
        label: "کاربران",
        path: "/users"
    },
    {
        icon: TicketIcon,
        label: "مالی",
        path: "/financial"
    },
    {
        icon: FinancialIcon,
        label: "مانیتورینگ",
        path: "/monitoring"
    },
    {
        icon: SettingIcon,
        label: "تنظیمات",
        path: "/setting"
    },
]