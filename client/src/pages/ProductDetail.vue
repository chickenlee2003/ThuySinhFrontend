<template>
    <q-page padding>
      <div class="row q-col-gutter-xl">
        <!-- Product Images -->
        <div class="col-12 col-md-6">
          <q-carousel
            v-model="slide"
            animated
            arrows
            navigation
            infinite
            height="400px"
            class="rounded-borders"
          >
            <q-carousel-slide v-for="(image, index) in product.images" :key="index" :name="index">
              <q-img :src="image" style="height: 100%" />
            </q-carousel-slide>
          </q-carousel>
        </div>
  
        <!-- Product Info -->
        <div class="col-12 col-md-6">
          <h1 class="text-h4">{{ product.name }}</h1>
          <div class="text-h5 text-red q-mt-md">{{ formatPrice(product.price) }}</div>
          
          <div class="q-mt-md">
            <div class="text-body1">{{ product.description }}</div>
          </div>
  
          <div class="q-mt-lg">
            <div class="row items-center q-gutter-md">
              <q-input
                v-model="quantity"
                type="number"
                filled
                style="width: 100px"
                label="Số lượng"
                min="1"
              />
              <q-btn
                color="primary"
                icon="shopping_cart"
                label="Thêm vào giỏ hàng"
                @click="addToCart"
                size="lg"
              />
            </div>
          </div>
  
          <!-- Product Details -->
          <q-card flat bordered class="q-mt-lg">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="details" label="Chi tiết" />
              <q-tab name="care" label="Chăm sóc" />
              <q-tab name="shipping" label="Vận chuyển" />
            </q-tabs>
  
            <q-separator />
  
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="details">
                <div class="text-body1">
                  <ul>
                    <li v-for="(detail, index) in product.details" :key="index">
                      {{ detail }}
                    </li>
                  </ul>
                </div>
              </q-tab-panel>
  
              <q-tab-panel name="care">
                <div class="text-body1">
                  {{ product.careInstructions }}
                </div>
              </q-tab-panel>
  
              <q-tab-panel name="shipping">
                <div class="text-body1">
                  {{ product.shippingInfo }}
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
  
      <!-- Related Products -->
      <div></div>
      <!-- Related Products -->
      <div class="q-mt-xl">
        <h2 class="text-h4 q-mb-md">Sản phẩm liên quan</h2>
        <div class="row q-col-gutter-md">
          <div v-for="product in relatedProducts" :key="product.id" class="col-12 col-sm-6 col-md-3">
            <q-card class="product-card" @click="navigateToProduct(product.id)">
              <q-img :src="product.image" :ratio="1" />
              <q-card-section>
                <div class="text-h6">{{ product.name }}</div>
                <div class="text-subtitle2 text-red">{{ formatPrice(product.price) }}</div>
              </q-card-section>
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
  const slide = ref(0)
  const tab = ref('details')
  const quantity = ref(1)
  
  // Mock product data
  const product = {
    id: 1,
    name: 'Cá Rồng Bạch Kim',
    price: 5000000,
    images: [
      '/placeholder.svg?height=400&width=400',
      '/placeholder.svg?height=400&width=400',
      '/placeholder.svg?height=400&width=400'
    ],
    description: 'Cá Rồng Bạch Kim là một trong những loại cá cảnh đẹp và quý hiếm nhất. Với màu sắc độc đáo và vẻ đẹp sang trọng, đây là lựa chọn hoàn hảo cho người chơi cá cảnh đẳng cấp.',
    details: [
      'Xuất xứ: Malaysia',
      'Độ tuổi: 1 năm',
      'Kích thước: 30cm',
      'Màu sắc: Bạch kim ánh vàng',
      'Giới tính: Đực'
    ],
    careInstructions: 'Cá Rồng cần được nuôi trong bể có dung tích tối thiểu 500L, nhiệt độ nước 26-28 độ C, pH 6.5-7.5. Cho ăn 2-3 lần/ngày với thức ăn chuyên dụng cho cá Rồng.',
    shippingInfo: 'Chúng tôi vận chuyển cá bằng phương pháp chuyên dụng, đảm bảo an toàn tối đa. Thời gian vận chuyển 1-3 ngày tùy khu vực.'
  }
  
  const relatedProducts = [
    {
      id: 2,
      name: 'Cá Rồng Huyết Long',
      price: 8000000,
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 3,
      name: 'Cá Rồng Kim Long',
      price: 6000000,
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 4,
      name: 'Cá Rồng Thanh Long',
      price: 7000000,
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 5,
      name: 'Cá Rồng Hỏa Long',
      price: 9000000,
      image: '/placeholder.svg?height=300&width=300'
    }
  ]
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }
  
  const addToCart = () => {
    // Implement cart functionality
    console.log('Adding to cart:', {
      product,
      quantity: quantity.value
    })
  }
  
  const navigateToProduct = (productId) => {
    router.push(`/product/${productId}`)
  }
  </script>
  
  <style scoped>
  .product-card {
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
  }
  </style>