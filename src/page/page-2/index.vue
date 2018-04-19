<template>
  <div style="padding: 50px;">
    <h1>Page2</h1>
    <h2>Hello {{$route.params.userName}}, your id is {{$route.params.id}}</h2>
    <p>
      <router-link :to="{name: 'index'}">Index</router-link>
    </p>
  </div>
</template>
