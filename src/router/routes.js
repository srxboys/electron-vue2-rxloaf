export default [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: () => import('@/pages/home/home')
  },
  {
    path: '/config',
    component: () => import('@/pages/setting/config')
  },
  {
    path: '/about',
    component: () => import('@/pages/setting/about')
  },
  {
    path: '/blank',
    component: () => import('@/pages/update/blank')
  },
  {
    path: '/win',
    component: () => import('@/pages/update/win')
  },
  {
    path: '/mac',
    component: () => import('@/pages/update/mac')
  },
  {
    path: '/linux',
    component: () => import('@/pages/update/linux')
  },
  {
    path: '/web',
    component: () => import('@/pages/update/web')
  },
  {
    path: '/ios',
    component: () => import('@/pages/update/ios')
  },
  {
    path: '/android',
    component: () => import('@/pages/update/android')
  },
  {
    path: '/xiaomi',
    component: () => import('@/pages/update/xiaomi')
  },
  {
    path: '/huawei',
    component: () => import('@/pages/update/huawei')
  },
]
