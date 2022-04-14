<template>
  <header>
    <div class="col-1 logo">
      <img src="../../assets/logo.svg" alt="Nike logo" width="60" height="60" />
    </div>

    <div class="drop-down">
      <i class="fa-solid fa-bars" @click="toggleMenu"></i>
    </div>

    <ul class="col-2 center" :class="{ active: isActive }">
      <li>new</li>
      <li>Men</li>
      <li>women</li>
      <li>kids</li>
      <li class="offer">special offers</li>
    </ul>

    <ul class="col-3 aside" :class="{ active: isActive }">
      <li><i class="fa-solid fa-magnifying-glass"></i></li>
      <li><i class="fa-regular fa-heart"></i></li>
      <li @click="toggleCart"><i class="fa-solid fa-cart-shopping"></i></li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleCart() {
      this.$store.commit("toggleNav");
    },
    toggleMenu() {
      this.isActive = !this.isActive;
      console.log("hey", this.isActive);
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  height: 4rem;
  background: #fff;
  overflow: hidden;
  position: relative;
  transition: all 1s;
}
.col-1 {
  flex: 20%;
  text-align: start;
}
.col-2 {
  flex: 60%;
}
.col-3 {
  flex: 20%;
}
.center {
  list-style-type: none;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
}
.center li {
  padding: 0 20px;
  height: inherit;
  line-height: 4rem;
  vertical-align: middle;
  font-weight: 500;
  font-size: 130%;
  text-transform: capitalize;
  white-space: nowrap;
}
.center li:hover {
  background: #f3f3f3;
  cursor: pointer;
}
.offer {
  color: rgb(247, 79, 67);
}
.aside {
  display: flex;
  justify-content: flex-end;
  column-gap: 20px;
  list-style-type: none;
  transition: all 2s ease;
}
.aside li i {
  font-size: 1.4rem;
  padding: 10px;
}
.aside li:hover {
  background: #f3f3f3;
  border-radius: 50%;
  cursor: pointer;
}
/* drop-down function */
.drop-down {
  position: absolute;
  top: 15px;
  right: 25px;
  display: none;
}
.drop-down i {
  font-size: 2rem;
  cursor: pointer;
}
@media only screen and (max-width: 850px) {
  .drop-down {
    display: initial;
  }
  header {
    flex-direction: column;
    height: auto;
    overflow: hidden;
  }
  .center {
    flex-direction: column;
    margin-bottom: 16px;
    width: 100%;
    height: 0;
    overflow: hidden;
  }
  .center.active {
    height: 70px;
  }
  .center.active li {
    width: 100%;
    text-align: center;
  }
  .aside {
    max-height: 0;
    overflow: hidden;
    transition: all 0.1s;
  }
  .aside.active {
    max-height: 100px;
    padding-bottom: 25px;
  }
}
</style>
