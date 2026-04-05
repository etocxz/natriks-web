import type { NewsItem } from './types'

export const getNews = async (): Promise<NewsItem[]> => {
  await new Promise(r => setTimeout(r, 300))

  return [
    {
      id: 1,
      title: 'Breakthrough in Sodium Battery',
      desc: 'Improved efficiency and safety.',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231',
    },
    {
      id: 2,
      title: 'Global Expansion',
      desc: 'Entering new markets.',
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1',
    },
    {
      id: 3,
      title: 'New Partnership',
      desc: 'Collaborating globally.',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0',
    },

    // 🔥 新增测试数据
    {
      id: 4,
      title: 'AI Energy Optimization',
      desc: 'Using AI to optimize storage systems.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    },
    {
      id: 5,
      title: 'Cold Climate Performance',
      desc: 'Stable output in extreme temperatures.',
      image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef',
    },
    {
      id: 6,
      title: 'Next-gen Materials',
      desc: 'Exploring new sodium compounds.',
      image: 'https://images.unsplash.com/photo-1581092919537-1f1b0f1b2b8f',
    },
  ]
}



export const getProducts = async () => {
  await new Promise(r => setTimeout(r, 300))

  return [
    {
      id: 1,
      title: 'Energy Storage Systems',
      desc: 'High-performance sodium battery systems for grid-scale storage.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
    },
    {
      id: 2,
      title: 'Battery Modules',
      desc: 'Flexible modular battery solutions for industrial applications.',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db',
      reverse: true,
    },
  ]
}