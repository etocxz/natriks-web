import type { NewsItem } from './types'
import news0 from './NewsAssets/news0.svg'
import news1 from './NewsAssets/news1.svg'
import news2 from './NewsAssets/news2.svg'
import news3 from './NewsAssets/news3.svg'

export const getNews = async (): Promise<NewsItem[]> => {
  await new Promise(r => setTimeout(r, 300))

  return [
    {
      id: 1,
      title: 'Прорыв в натриевых батареях',
      desc: ' ',
      image: news0,
    },
    {
      id: 2,
      title: 'Глобальное расширение',
      desc: '',
      image: news1,
    },
    {
      id: 3,
      title: 'Сотрудничество на глобальном уровне.',
      desc: '',
      image: news2,
    },

    // 🔥 新增测试数据
    {
      id: 4,
      title: 'Материалы нового поколения',
      desc: '',
      image: news3,
    },
    // {
    //   id: 5,
    //   title: 'Cold Climate Performance',
    //   desc: 'Stable output in extreme temperatures.',
    //   image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef',
    // },
    // {
    //   id: 6,
    //   title: 'Next-gen Materials',
    //   desc: 'Exploring new sodium compounds.',
    //   image: 'https://images.unsplash.com/photo-1581092919537-1f1b0f1b2b8f',
    // },
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