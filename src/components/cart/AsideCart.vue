<template>
  <aside class="cart" :class="{ active: $store.state.isNavActive }">
    <div class="x" @click="toggleNav">
      <i class="fa-solid fa-xmark"></i>
    </div>
    <h2 class="title">Order Summary</h2>
    <ul>
      <li>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="bag"
          width="70"
          height="70"
        />
        <article>
          <header>
            <strong>Nike Performance</strong>
            <div>
              <small style="color: grey">color: Orange, Size: 42</small>
            </div>
          </header>
          <div class="details">
            <strong>price: $12</strong>
            <div class="counter">
              <button>+</button>
              <strong>2</strong>
              <button>-</button>
            </div>
          </div>
        </article>
      </li>

      <li>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="bag"
          width="70"
          height="70"
        />
        <article>
          <header>
            <strong>Nike Performance</strong>
            <div>
              <small style="color: grey">color: Orange, Size: 42</small>
            </div>
          </header>
          <div class="details">
            <strong>price: $12</strong>
            <div class="counter">
              <button>+</button>
              <strong>2</strong>
              <button>-</button>
            </div>
          </div>
        </article>
      </li>

      <li>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="bag"
          width="70"
          height="70"
        />
        <article>
          <header>
            <strong>Nike Performance</strong>
            <div>
              <small style="color: grey">color: Orange, Size: 42</small>
            </div>
          </header>
          <div class="details">
            <strong>price: $12</strong>
            <div class="counter">
              <button>+</button>
              <strong>2</strong>
              <button>-</button>
            </div>
          </div>
        </article>
      </li>
    </ul>

    <base-button fieldClass="apply-card" text="Dicount code"
      ><button class="apply">Apply</button></base-button
    >

    <div class="cost">
      <div class="col-1">
        <p>subtotal</p>
        <strong>$150.99</strong>
      </div>

      <div class="col-2">
        <p>shipping cost</p>
        <strong>+$0.99</strong>
      </div>

      <div class="col-3 minus">
        <p>discount(20%)</p>
        <strong>-$15.18</strong>
      </div>

      <div class="col-4 total">
        <strong>Total</strong>
        <strong>$250.74</strong>
      </div>

      <button>checkout</button>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleNav() {
      this.$store.commit("toggleNav");
    },
  },
};
</script>

<style scoped>
/* cart style  */
.cart {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  min-width: 400px;
  background: #fff;
  box-shadow: 24px 24px 49px #c3c3c3, -24px -24px 49px #fdfdfd;
  transform: translateX(120%);
  transition: all 0.5s ease-out;
}
.cart.active {
  transform: translateX(0);
}

.x {
  font-size: 170%;
  padding: 2px 12px;
  margin: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  display: inline-block;
}
.x:hover {
  background: #f1f1f1;
}
.title {
  margin: 10px 0 25px 10px;
  font-family: var(--bebas-font);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 200%;
}

/* products list style  */
ul {
  list-style-type: none;
}
ul li {
  margin-bottom: 1.5rem;
  display: flex;
  column-gap: 30px;
  margin-left: 1rem;
  margin-right: 1rem;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 12px;
}
ul li:last-child {
  border: none;
}

article header {
  padding-bottom: 1rem;
}
article header strong {
  font-weight: 800;
}
article header p {
  color: grey;
}
ul .details {
  display: flex;
  column-gap: 1rem;
}
ul .details .counter {
  display: flex;
  column-gap: 1rem;
}

ul .details .counter button {
  font-size: 173%;
  height: 25px;
  vertical-align: middle;
  line-height: 1px;
  width: 30px;
  border: none;
  color: darkgrey;
  cursor: pointer;
  box-shadow: 3px 3px 3px #bebef9;
  border-radius: 6px;
}
.apply {
  position: absolute;
  right: 51px;
  bottom: 19px;
  border: none;
  background: none;
  color: #d65c5c;
  font-weight: 700;
  font-size: 115%;
  padding-right: 12px;
  cursor: pointer;
}
.apply-card {
  margin: 0 0 1.5rem 2rem;
}

/* const section style  */
.cost {
  display: flex;
  flex-flow: column wrap;
  row-gap: 3px;
  padding: 1rem 1rem;
}
.col-1,
.col-2,
.col-3,
.col-4 {
  display: flex;
  justify-content: space-between;
}
.col-1 p,
.col-2 p,
.col-3 p {
  color: rgb(83, 79, 79);
  font-weight: 600;
}
.minus {
  color: rgb(238, 87, 87);
}
.total {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
.cost button {
  border: none;
  padding: 11px;
  font-size: 200%;
  font-family: var(--bebas-font);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 900;
  border-radius: 15px;
  background: #eb6424;
  box-shadow: 4px 22px 13px #f3f3f3;
  cursor: pointer;
  color: #fff;
}
</style>
