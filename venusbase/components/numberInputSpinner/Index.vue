<template>
  <div class='vnis' >
    <button
        @click='decreaseNumber'
        @mousedown='whileMouseDown(decreaseNumber)'
        @mouseup='clearTimer'
        :class='buttonClass'>-</button>
    <input
        type='number'
        v-model = 'numericValue'
        @keypress='validateInput'
        @input='inputValue'
        :class='inputClass'
        :min='min'
        :max='max'
        debounce='500'
    />
    <button
        @click='increaseNumber'
        @mousedown='whileMouseDown(increaseNumber)'
        @mouseup='clearTimer'
        :class='buttonClass'>+</button>
  </div>
</template>

<script>
export default {
  name: 'NumberInputSpinner',

  data(){
    return {
      numericValue: this.value,
      timer: null
    };
  },

  props: {
    value: {
      default: 0
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: 10,
      type: Number
    },
    step: {
      default: 1,
      type: Number
    },
    mouseDownSpeed: {
      default: 100,
      type: Number
    },
    inputClass: {
      default: 'vnis__input',
      type: String
    },
    buttonClass: {
      default: 'vnis__button',
      type: String
    },
    integerOnly: {
      default: false,
      type: Boolean
    }
  },
  mounted() {
  },

  methods: {
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    whileMouseDown(callback) {
      if (this.timer === null) {
        this.timer = setInterval(() => {
          callback();
        }, this.mouseDownSpeed);
      }
    },

    increaseNumber() {
      this.numericValue += this.step;
    },

    decreaseNumber() {
      this.numericValue -= this.step;
    },

    isInteger(evt) {
      evt = evt ? evt : window.event;
      let key = evt.keyCode || evt.which;
      key = String.fromCharCode(key);
      const regex = /[0-9]/;

      if (!regex.test(key)) {
        evt.returnValue = false;
        if (evt.preventDefault) evt.preventDefault();
      }
    },

    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;

      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    validateInput(evt) {
      if (this.integerOnly === true) {
        this.isInteger(evt);
      } else {
        this.isNumber(evt);
      }
    },

    inputValue(evt) {
      this.numericValue = evt.target.value
        ? parseInt(evt.target.value)
        : this.min;

        this.value = this.numericValue
    }
  },

  watch: {
    numericValue: function(val, oldVal) {
      if (val <= this.min) {
        this.numericValue = parseInt(this.min);
      }

      if (val >= this.max) {
        this.numericValue = parseInt(this.max);
      }

      if (val <= this.max && val >= this.min) {
        this.$emit('input', val, oldVal);
      }
    },
    value: function(val, oldVal) {
      this.numericValue = parseInt(val)
    }
  }
};
</script>

<style lang='scss'>
.vnis {
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  width: 160px !important;

  &__input {
    -webkit-appearance: none;
    border: 1px solid #ebebeb;
    float: left;
    font-size: 16px;
    height: 40px;
    margin: 0;
    outline: none;
    text-align: center;
    width: calc(100% - 80px);

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  &__button {
    -webkit-appearance: none;
    transition: background 0.5s ease;
    // background: #8897AA;
    border: 0;
    color: #fff;
    cursor: pointer;
    float: left;
    font-size: 0.8125rem;
    height: 40px;
    margin: 0;
    width: 40px;
    // box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.07), 0px 4px 5px 0px rgba(0, 0, 0, 0.05), 0px 1px 10px 0px rgba(0, 0, 0, 0.03);

    &:hover {
      // background: lighten(#8897AA, 5%);
    }

    &:focus {
      outline: none;
      outline-offset: -5px;
    }
  }
}
</style>
