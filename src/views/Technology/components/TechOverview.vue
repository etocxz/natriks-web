


<template>
    
  <section class="overview">
    
    <div class="container">
        
      <h2>Обзор технологии</h2>
      <p>
        Натрий-ионные аккумуляторы — это современная технология хранения энергии, 
в которой перенос заряда осуществляется ионами натрия.

По принципу работы они близки к литий-ионным батареям, 
но используют более доступные и широко распространённые материалы.

Натрий является одним из самых распространённых элементов на Земле, 
что делает такие аккумуляторы перспективным решением.
      </p>
    </div>
  </section>
</template>

<style scoped>
.overview {
  padding: 120px 0;
  display: flex;
  justify-content: center;
}

.container {
  max-width: 1000px;
}

h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  color: #8A92A3;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .overview {
    padding: 72px 20px;
  }

  .container {
    max-width: none;
    width: 100%;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 16px;
    line-height: 1.3;
  }

  p {
    font-size: 14px;
    line-height: 1.8;
    word-break: break-word;
  }
}
</style>
