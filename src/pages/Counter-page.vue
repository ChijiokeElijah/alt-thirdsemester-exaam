<script setup>
import useCounter from "../composables/useCounter";

const { counter, inputValue, setValue, increment, decrement, reset } =
  useCounter();
</script>

<template>
  <main>
      <div class="landing">
        <nav class="nav">
        <h2 class="logo">Counter App</h2>
        <ul>
          <li><router-link to="/">Home</router-link></li>
        </ul>
        <ul>
          <li><router-link to="/counter">Counter</router-link></li>
        </ul>
      </nav>
      </div>
    </main>
  <div class="container">
      <div class="main">    
        <h1>Counter App</h1>
        <h2 class="counter">{{ counter }}</h2>
      </div>
      <div class="setvalue">
        <input class="input" type="number" v-model="inputValue" />
        <button :disabled="inputValue === null" @click="setValue">
          SetValue
        </button>
      </div >
      <div class="buttons">
      <button class="increment" @click="decrement">-</button>
      <button class="decrement" @click="increment">+</button>
      <button class="reset" @click="reset">Reset</button>
      </div>
  </div>
</template>

<style>
nav {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: rgb(53, 15, 141);
}
.logo {
  color: rgb(255, 166, 0);
  margin-right: auto;
  cursor: pointer;
  font-weight: bolder;
  margin-left: 0cap;
}

.nav {
  padding-left: 10px;
  padding-right: 10px;
}
h1{
  color:rgb(53, 15, 141)
}
.container{
  color: black;
  background-color: rgb(144, 238, 207);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  height: 70vh;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 10px;
}
.counter{
  margin-left: 60px;

}
.setvalue button {
  margin: 8px;
}
.input{
  width: 55px;
  height: 30px;
  border-radius: 8px;

}
button{
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  border-color: aquamarine;
  background-color: whitesmoke;
  color: black;
  font-weight: bold;
  font-size: larger;

}
.increment, .decrement{
  width: 55px;
}
nav ul li {
  text-decoration: none;
  list-style-type: none;
}

ul li a {
  color: white;
  font-size: large;
  text-decoration: none;
}

  
</style>

