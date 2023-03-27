<template>
    <header class="landing">
      <nav class="nav">
        <h2 class="logo">Counter App</h2>
        <ul>
          <li><router-link to="/">Home</router-link></li>
        </ul>
        <ul>
          <li><router-link to="/counter">Counter</router-link></li>
        </ul>
      </nav>  
    </header>
    <main class="container">
        <p>Hello 👋 I'm </p>
      <section class="animation">
        <div class="first"><div>Chijioke Elijah,  A Web Developer</div></div>
        <div class="second"><div>A technical writer</div></div>
        <div class="third"><div>a student at altschool africa</div></div>
      </section>
    </main>
</template>


<style scoped>
main {
  font-family:'Roboto';
  background-color: #131417;  
}
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
  margin-left: 0cap;;
}

.nav {
  padding-left: 10px;
  padding-right: 10px;
}
.container {
  padding-left: 10px;
  padding-right: 10px;
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

h1 {
  position: absolute;
}
button {
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  border-color: aquamarine;
  background-color: whitesmoke;
  color: black;
}
p {
  text-shadow: 0 0 7px rgba(255,255,255,.3), 0 0 3px rgba(255,255,255,.3);
}
.container {
  color: #e5e5e5;
  font-size: 2.26rem;
  text-transform: uppercase;
  /* height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center; */
}

.animation {
  /* height:50px; */
  overflow:hidden;
  margin-left: 1rem;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  height:2.81rem;
  margin-bottom: 2.81rem;
  display:inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

.first div {
  background-color:#20a7d8;
}
.second div {
  background-color:#CD921E;
}
.third div {
  background-color:#c10528;
}

@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -5.62rem;}
  30% {margin-top: -5.62rem;}
  40% {margin-top: -11.24rem;}
  60% {margin-top: -11.24rem;}
  70% {margin-top: -5.62rem;}
  80% {margin-top: -5.62rem;}
  90% {margin-top: 0;}
  /* 100% {margin-top: 0;} */
}
</style>

  