<template>
  <div style="padding: 50px;">
    <h1>Page3</h1>
    my child router view :
    <div style="border: 1px solid #333;">
      <router-view></router-view>
    </div>
    <p>
      <router-link :to="{name: 'index'}">Index</router-link>
    </p>
  </div>
</template>
