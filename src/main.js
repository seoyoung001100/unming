// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css';
import router from '@/router';
import ItemList from './components/ItemList.vue';

// import VueRouter from 'vue-router'

// Vue.use(VueRouter);
createApp(App).use(router).mount('#app')

createApp(App).component('ItemList', ItemList);