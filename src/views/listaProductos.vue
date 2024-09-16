<template>
    <div class="container my-5">
      <h1 class="text-primary mb-4">Lista de Productos</h1>
      <div class="row" v-if="productos.length">
        <div class="col-md-4 mb-4" v-for="producto in productos" :key="producto.id">
          <div class="card h-100">
            <img :src="producto.image" class="card-img-top" :alt="producto.title">
            <div class="card-body">
              <h5 class="card-title">{{ producto.title }}</h5>
              <p class="card-text">{{ producto.description }}</p>
              <p><strong>Precio:</strong> ${{ producto.price }}</p>
              <p><strong>Calificación:</strong> {{ producto.rating.rate }} ({{ producto.rating.count }} opiniones)</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt-3">Cargando productos...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'listaProductos',
    setup() {
      const productos = ref([]);
  
      const obtenerProductos = async () => {
        try {
          const respuesta = await fetch('https://fakestoreapi.com/products');
          const datos = await respuesta.json();
          productos.value = datos;
        } catch (error) {
          console.error('Error al obtener los productos:', error);
        }
      };
  
      onMounted(() => {
        obtenerProductos();
      });
  
      return { productos };
    }
  };
  </script>
  
  <style scoped>
  .card-img-top {
    max-height: 200px;
    object-fit: contain;
  }
  </style>  