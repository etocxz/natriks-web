import type { Product } from './types'

export const getProducts = async (): Promise<Product[]> => {
  // 👉 模拟请求延迟
  await new Promise(resolve => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      title: 'Energy Storage Systems',
      desc: 'High-performance sodium battery systems...',
      img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
    },
    {
      id: 2,
      title: 'Battery Modules',
      desc: 'Flexible modular solutions...',
      img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db',
      reverse: true,
    },
  ]
}