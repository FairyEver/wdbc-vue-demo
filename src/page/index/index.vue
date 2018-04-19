<template>
  <div style="padding: 50px;">
    <h1>Hello</h1>
    <h2>You are in index</h2>
    <p>router demo:</p>
    <ul>
      <li>
        <router-link
          :to="{name: 'page-1'}">
          page-1
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'page-2',
            params: {
              id: 14,
              userName: 'Lucy'
            }
          }">
          page-2 [lucy id = 14]
        </router-link>
      </li>
      <li>
        <router-link
          :to="{
            name: 'page-2',
            params: {
              id: 8,
              userName: 'Michael Jackson'
            }
          }">
          page-2 [Michael Jackson id = 8]
        </router-link>
      </li>
      <li>
        <router-link
          :to="{name: 'page-4'}">
          page-4
        </router-link>
      </li>
      <li>
        <span
          style="cursor: pointer; user-select: none;"
          @click="$router.push({name: 'page-1'})">
          @click="$router.push({name: 'page-1'})"
        </span>
      </li>
    </ul>
  </div>
</template>
