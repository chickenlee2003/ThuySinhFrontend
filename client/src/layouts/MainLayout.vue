<template>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
          <q-toolbar-title>
            <router-link to="/" class="text-white text-decoration-none">
              Thủy Sinh Shop
            </router-link>
          </q-toolbar-title>
          <q-space />
          <q-btn flat round dense icon="search" @click="showSearch = true" />
          <q-btn flat round dense icon="shopping_cart">
            <q-badge color="red" floating>{{ cartItemCount }}</q-badge>
          </q-btn>
        </q-toolbar>
  
        <q-dialog v-model="showSearch">
          <q-card style="width: 500px; max-width: 90vw;">
            <q-card-section>
              <q-input dense outlined v-model="searchText" label="Tìm kiếm" @keyup.enter="performSearch">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-header>
  
      <q-drawer v-model="leftDrawerOpen" side="left" bordered>
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item-label header>Danh mục sản phẩm</q-item-label>
            <q-item v-for="category in categories" :key="category.id" clickable v-ripple :to="'/category/' + category.id">
              <q-item-section avatar>
                <q-icon :name="category.icon" />
              </q-item-section>
              <q-item-section>{{ category.name }}</q-item-section>
            </q-item>
  
            <q-separator spaced />
  
            <q-item-label header>Thông tin thêm</q-item-label>
            <q-item clickable v-ripple to="/about">
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>
              <q-item-section>Giới thiệu</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/contact">
              <q-item-section avatar>
                <q-icon name="contact_support" />
              </q-item-section>
              <q-item-section>Liên hệ</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer elevated class="bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <div class="row q-gutter-md justify-center q-py-sm">
              <router-link to="/about" class="text-white">Về chúng tôi</router-link>
              <router-link to="/contact" class="text-white">Liên hệ</router-link>
              <router-link to="/policy" class="text-white">Chính sách</router-link>
            </div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const leftDrawerOpen = ref(false)
  const showSearch = ref(false)
  const searchText = ref('')
  const cartItemCount = ref(0)
  
  const categories = [
    { id: 1, name: 'Cá Rồng', icon: 'pets' },
    { id: 2, name: 'Cá Đĩa', icon: 'pets' },
    { id: 3, name: 'Cá Chép Koi', icon: 'pets' },
    { id: 4, name: 'Cá Betta', icon: 'pets' },
    { id: 5, name: 'Cá Cảnh Khác', icon: 'pets' },
    { id: 6, name: 'Thức ăn & Phụ kiện', icon: 'inventory_2' },
  ]
  
  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
  
  const performSearch = () => {
    if (searchText.value.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchText.value)}`)
      showSearch.value = false
      searchText.value = ''
    }
  }
  </script>
  
  <style scoped>
  .text-decoration-none {
    text-decoration: none;
  }
  </style>