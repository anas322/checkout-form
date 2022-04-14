<template>
  <div class="inputField" :class="fieldClass" :id="fieldId">
    <slot name="header"></slot>
    <input
      :type="type"
      class="inputText"
      :class="[inputClass, { 'full-width': fullWidth }]"
      :id="inputId"
      :name="inputName"
      placeholder=" "
    />
    <span v-if="show" class="floating-label">{{ text }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
    },
    text: {
      type: String,
      required: false,
    },
    fieldId: {
      type: String,
      required: false,
    },
    inputClass: {
      type: String,
      required: false,
    },
    fieldClass: {
      type: String,
      required: false,
    },
    show: {
      type: Boolean,
      required: false,
      default: true,
    },
    inputId: {
      type: String,
      required: false,
    },
    inputName: {
      type: String,
      required: false,
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style>
/* placeholder animation */
.inputField {
  position: relative;
}
.inputText {
  padding: 15px;
  border: 1.8px solid rgba(107, 107, 107, 0.4);
  border-radius: 5px;
  font-size: 120%;
  width: 90%;
}
.inputText:focus {
  border: 1.8px solid #6b6b6b;
  outline: none;
}
.floating-label {
  pointer-events: none;
  opacity: 0.5;
  position: absolute;
  left: 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: text;
  padding: 0 7px;
  transition: all 0.5s ease;
}

.inputText:focus + span {
  top: -10px;
  left: 15px;
  transform: scale(0.9) translateY(-10%) translateX(-8.5px);
  background: #fff;
  opacity: 1;
  color: #8a8888;
}

input:not(:placeholder-shown) + span {
  top: -10px;
  left: 15px;
  transform: scale(0.9) translateY(-10%) translateX(-8.5px);
  background: #fff;
  opacity: 1;
  color: #8a8888;
}

#paypal,
#credit {
  width: 100px;
  height: 19px;
}
.full-width {
  width: 100%;
}
</style>
