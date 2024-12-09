<template>
    <q-page>
      <!-- Banner Section -->
      <div class="banner q-pa-md">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="3000"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          class="rounded-borders"
        >
          <q-carousel-slide v-for="banner in banners" :key="banner.id" :name="banner.id">
            <q-img :src="banner.image" :ratio="16/9">
              <div class="absolute-bottom text-subtitle1 text-center bg-transparent">
                {{ banner.title }}
              </div>
            </q-img>
          </q-carousel-slide>
        </q-carousel>
      </div>
  
      <!-- Featured Categories -->
      <div class="q-pa-md">
        <h2 class="text-h4 q-mb-md text-center">Danh mục nổi bật</h2>
        <div class="row q-col-gutter-md justify-center">
          <div v-for="category in featuredCategories" :key="category.id" class="col-12 col-sm-6 col-md-4">
            <q-card class="category-card" @click="navigateToCategory(category.id)">
              <q-img :src="category.image" :ratio="16/9" />
              <q-card-section>
                <div class="text-h6">{{ category.name }}</div>
                <div class="text-subtitle2">{{ category.description }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
  
      <!-- Featured Products -->
      <div class="q-pa-md">
        <h2 class="text-h4 q-mb-md text-center">Sản phẩm nổi bật</h2>
        <div class="row q-col-gutter-md justify-center">
          <div v-for="product in featuredProducts" :key="product.id" class="col-12 col-sm-6 col-md-3">
            <q-card class="product-card">
              <q-img :src="product.image" :ratio="1">
                <div class="absolute-top text-right">
                  <q-btn flat round color="red" icon="favorite" />
                </div>
              </q-img>
              <q-card-section>
                <div class="text-h6">{{ product.name }}</div>
                <div class="text-subtitle2 text-red">{{ formatPrice(product.price) }}</div>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn color="primary" label="Xem chi tiết" :to="`/product/${product.id}`" />
                <q-btn color="secondary" icon="shopping_cart" label="Thêm vào giỏ" @click="addToCart(product)" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const slide = ref(1)
  
  const banners = [
    { id: 1, title: 'Cá Rồng Đẹp & Quý Hiếm', image: '/placeholder.svg?height=400&width=800' },
    { id: 2, title: 'Cá Đĩa Nhiều Màu Sắc', image: '/placeholder.svg?height=400&width=800' },
    { id: 3, title: 'Cá Chép Koi Nhật Bản', image: '/placeholder.svg?height=400&width=800' }
  ]
  
  const featuredCategories = [
    { 
      id: 1, 
      name: 'Cá Rồng', 
      description: 'Các loại cá rồng quý hiếm',
      image: '/placeholder.svg?height=300&width=400' 
    },
    { 
      id: 2, 
      name: 'Cá Đĩa', 
      description: 'Cá đĩa nhiều màu sắc đẹp',
      image: '/placeholder.svg?height=300&width=400' 
    },
    { 
      id: 3, 
      name: 'Cá Chép Koi', 
      description: 'Cá chép Koi Nhật Bản',
      image: '/placeholder.svg?height=300&width=400' 
    }
  ]
  
  const featuredProducts = [
    {
      id: 1,
      name: 'Cá Rồng Bạch Kim',
      price: 5000000,
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 2,
      name: 'Cá Đĩa Xanh',
      price: 1500000,
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 3,
      name: 'Cá Chép Koi Kohaku',
      price: 3000000,
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 4,
      name: 'Cá Betta Halfmoon',
      price: 500000,
      image: '/placeholder.svg?height=300&width=300'
    }
  ]
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }
  
  const navigateToCategory = (categoryId) => {
    router.push(`/category/${categoryId}`)
  }
  
  const addToCart = (product) => {
    // Implement cart functionality
    console.log('Adding to cart:', product)
  }
  </script>
  
  <style scoped>
  .category-card {
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .category-card:hover {
    transform: translateY(-5px);
  }
  
  .product-card {
    transition: transform 0.2s;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
  }
  </style>