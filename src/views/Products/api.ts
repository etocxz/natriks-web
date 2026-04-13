import type { Product } from './types'

export const getProducts = async (): Promise<Product[]> => {
  // 模拟请求延迟
  // await new Promise(resolve => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      category:'car',
      title: '12В Автомобильные стартерные аккумуляторы',//High performance 12V sodium-ion battery for starting and stopping car engine.
      desc: 'Компактные и энергоэффективные натрий-ионные батареи, предназначенные для стабильного питания маломощных устройств. Обеспечивают высокую надёжность, длительный срок службы и экологичность при ежедневном использовании.',
      img: 'http://www.ygtech.net.cn/upload/20250902173511.jpg',
    },
    {
      id: 2,
      category:'low',
      title: 'Малые тяговые натриевые аккумуляторы',//Low-power sodium-ion batteries
      desc: 'Высокопроизводительная 12В натрий-ионная батарея для систем запуска и остановки двигателя. Обеспечивает быстрый запуск, стабильную работу в экстремальных условиях и повышенную долговечность по сравнению с традиционными аккумуляторами.',
      img: 'http://www.ygtech.net.cn/upload/20250902174747.jpg',
      reverse: true,
    },
  ]
}