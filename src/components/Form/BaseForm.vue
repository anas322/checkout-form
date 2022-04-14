<template>
  <div class="checkout">
    <form>
      <div class="row">
        <div class="block personal-details">
          <header>
            <p>01</p>
            <h2>Personal Details</h2>
          </header>

          <aside>
            <base-button text="First name"></base-button>

            <base-button text="Last name" :fullWidth="true"></base-button>

            <base-button type="email" text="Your email address"></base-button>

            <base-button
              type="tel"
              text="Phone number"
              :fullWidth="true"
            ></base-button>
          </aside>
        </div>

        <div class="block shipping-details">
          <header>
            <p>02</p>
            <h2>shipping Details</h2>
          </header>
          <aside id="shipping">
            <base-button
              fieldId="address"
              text="Street address"
              :fullWidth="true"
            ></base-button>

            <base-button text="Zip code"></base-button>

            <base-button text="City"></base-button>

            <base-button text="Country" :fullWidth="true"></base-button>
          </aside>
        </div>

        <div class="block payment-method">
          <header>
            <p>03</p>
            <h2>Payment Details</h2>
          </header>

          <aside id="payment">
            <base-button
              fieldClass="radio"
              fieldId="paypal-card"
              inputClass="radio"
              type="radio"
              inputId="paypal"
              inputName="radio"
              :show="false"
            >
              <template #header>
                <div>
                  <i class="fa-brands fa-paypal"></i>
                  <label for="paypal">Paypal</label>
                </div>
              </template>
            </base-button>

            <base-button
              fieldClass="radio"
              fieldId="credit-card"
              inputClass="radio"
              type="radio"
              inputId="credit"
              inputName="radio"
              :show="false"
            >
              <template #header>
                <div>
                  <i class="fa-solid fa-credit-card"></i>
                  <label for="credit">Credit or debit card</label>
                </div>
              </template>
            </base-button>

            <base-button
              text="Card number"
              inputClass="card-number"
              fieldClass="card"
              :fullWidth="true"
            ></base-button>

            <div class="group">
              <base-button type="date" text="Expire date"></base-button>

              <base-button
                type="number"
                text="CVC/CVV"
                :fullWidth="true"
              ></base-button>
            </div>
          </aside>
        </div>

        <div class="block add-info">
          <button class="add-details">Add Details</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.checkout {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.row {
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
}
.block {
  display: flex;
  justify-content: space-between;

  column-gap: 1rem;
}
.block header {
  flex: 20%;
}
.block aside {
  flex: 80%;
}

/* aside section style */

aside {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 2.5rem;
}
aside .inputField {
  flex: 50%;
}
#shipping {
  display: flex;
  flex-wrap: wrap;
}
#shipping #address {
  flex: 100%;
}
#shipping #address .inputText {
  width: 95%;
}
#shipping .inputField {
  flex: 33%;
}
#shipping .inputText {
  width: 86%;
}

/* Payment style  */

#payment {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 66px;
}

#payment .radio {
  border: 1px solid rgba(107, 107, 107, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
  min-height: 61px;
}
#payment .inputField div {
  padding-left: 30px;
  display: flex;
  flex-wrap: nowrap;
  column-gap: 0.5rem;
}
#payment .inputField div i {
  padding-right: 10px;
  font-size: 25px;
}
#payment .inputField div label {
  font-size: 21px;
  font-weight: 400;
  padding-right: 130px;
}

#payment .inputField {
  flex: 50%;
}
#payment .inputField.card {
  flex: 44%;
}
#payment .inputField#paypal-card {
  flex: 44%;
}
#payment .group {
  display: flex;
  flex: 50%;
}
#payment .group .inputField input {
  width: 100%;
}
#payment .group .inputField input[type="date"] {
  font-size: 19px;
}
.add-details {
  border: none;
  cursor: pointer;
  font-size: 150%;
  padding: 22px 50px;
  border-radius: 5px;
  color: #fff;
  background: #eb6424;
}
.add-info {
  display: flex;
  justify-content: end;
}
@media only screen and (max-width: 768px) {
  .block {
    flex-flow: column wrap;
  }
  .block header {
    margin-bottom: 2rem;
  }
}
@media only screen and (max-width: 576px) {
  .payment-method {
    overflow-x: scroll;
  }
  #payment .inputField div i {
    padding-right: 10px;
    font-size: 26px;
  }
  #payment .inputField div label {
    font-size: 17px;
    font-weight: 400;
    padding-right: 130px;
    width: 100%;
  }
}
</style>
