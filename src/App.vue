<template>
  <div class="container">
    <the-header></the-header>
  </div>
  <div class="checkout-text"><span>Checkout</span></div>
  <div class="container">
    <base-form></base-form>
    <aside-cart></aside-cart>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import BaseForm from "./components/Form/BaseForm.vue";
import AsideCart from "./components/cart/AsideCart.vue";
export default {
  components: {
    TheHeader,
    BaseForm,
    AsideCart,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

:root {
  --bebas-font: "Bebas Neue", cursive, sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  padding: 0 1rem;
}
#app {
  font-family: "Plus Jakarta Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.checkout-text {
  width: 100%;
  background: url("./assets/background.jpg") no-repeat center;
  background-size: cover;
  height: 200px;
  position: relative;
}
.checkout-text span {
  position: absolute;
  font-size: 4rem;
  font-weight: 800;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media only screen and (min-width: 1200px) {
  .container {
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
