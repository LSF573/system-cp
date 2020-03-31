<template>
  <div class="date-picker">
    <input type="text"
      class="month-picker-input"
      :class="inputClass"
      :placeholder="placeholder"
      @click.stop="showDashboard()"
      :value="inputValue">
    <div class="date-dashboard" v-if="showDateDashboard">
      <div class="year-switch">
        <div class="arrow" @click.stop="reduceYear()" @mouseenter="leftArrowHoverState(true)" @mouseleave="leftArrowHoverState(false)">
          <svg width="5px" height="6px" viewBox="0 0 5 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>左边_nor</title>
            <desc>Created with Sketch.</desc>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-68.000000, -44.000000)" :stroke="leftArrowStroke">
                    <polyline points="72 44 69 47 72 50"></polyline>
                </g>
            </g>
          </svg>
        </div>
        <div class="year">{{yearValue}}</div>
        <div class="arrow" @click.stop="increaseYear()" @mouseenter="rightArrowHoverState(true)" @mouseleave="rightArrowHoverState(false)">
          <svg width="5px" height="6px" viewBox="0 0 5 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>右边_nor</title>
            <desc>Created with Sketch.</desc>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g  transform="translate(-148.000000, -44.000000)" :stroke="rightArrowStroke">
                    <polyline transform="translate(150.500000, 47.000000) scale(-1, 1) translate(-150.500000, -47.000000) " points="152 44 149 47 152 50"></polyline>
                </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="month">
        <div class="month-item"
          v-for="(month, index) in months"
          :class="{
            'active': month.active,
            'in-range': month.inRange,
            'equal-range-border-left': month.equalRangeBorderLeft,
            'equal-range-border-right': month.equalRangeBorderRight
            }"
          @click.stop="monthActive(index)"
          @mouseenter="monthHover(index)">
          {{month.value}}月
          <div class="month-bg" :class="{'active': month.active}"></div>
          </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss'>

.table-block-container {
  .date-picker {
    .date-dashboard {
      top: 28px !important;
    }
  }
}

.date-picker {
  position: relative;
  font-family: PingFangSC-Regular;

  input {
    width: 220px;
    caret-color: transparent;
    cursor: pointer;
  }

  .date-dashboard {
    position: absolute;
    top: 36px;
    z-index: 1;
    padding: 10px 0 0;
    background-color: #FFFFFF;
    opacity: 1;
    width: 220px;
    height: 136px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

    .year-switch {
      user-select: none;
      text-align: center;
      margin-bottom: 12px;

      .year {
        display: inline-block;
        width: 32px;
        margin: 0 12px;
        height: 20px;
        line-height: 20px;
      }

      .arrow {
        cursor: pointer;
        position: relative;
        top: -2px;
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
      }
    }

    .month {
      width: 180px;
      margin: 0 auto;

      .month-item {
        cursor: pointer;
        position: relative;
        display: inline-block;
        text-align: center;
        width: 45px;
        height: 18px;
        line-height: 18px;
        margin-bottom: 12px;

        &:hover {
          .month-bg {
            background-color: #ededed;
          }
        }

        .month-bg {
          position: absolute;
          width: 27px;
          height: 27px;
          top: -4px;
          left: 9px;
          z-index: -1;
          border-radius: 50%;

          &.active {
            background-color: #3a89ff;
            color: #FFFFFF;
          }
        }

        &.active {
          color: #FFFFFF;
        }

        &.in-range {
          background-color: rgba(216, 234, 254, 1);

          .month-bg {
            background-color: transparent;
          }
        }

        &.equal-range-border-left {
          background-color: #3a89ff;
          color: #FFFFFF;
          border-top-left-radius: 32px;
          border-bottom-left-radius: 32px;

          .month-bg {
            background-color: transparent;
          }
        }

        &.equal-range-border-right {
          background-color: #3a89ff;
          color: #FFFFFF;
          border-top-right-radius: 32px;
          border-bottom-right-radius: 32px;

          .month-bg {
            background-color: transparent;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  props: {
    placeholder: '',
    inputClass: '',
    range: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputValue: '',
      showDateDashboard: false,
      months: [],
      yearValue: new Date().getFullYear(),
      lowYear: new Date().getFullYear(),
      highYear: new Date().getFullYear(),
      lowMonth: '',
      highMonth: '',
      monthValue: '',
      rangeIndex: [-1, -1],
      rangeHoverIndex: [-1, -1],
      rightArrowStroke: '#999999',
      leftArrowStroke: '#999999'
    }
  },
  watch: {
    'rangeHoverIndex': function (newVal, oldVal) {
      this.months.forEach((month) => {
        let monthValue = parseInt(month.value) - 1
        if (monthValue <= newVal[1] && monthValue >= newVal[0]) {
          if (monthValue === newVal[1]) {
            month.equalRangeBorderRight = true
          } else if (monthValue === newVal[0]) {
            month.equalRangeBorderLeft = true
          } else {
            month.equalRangeBorderRight = false
            month.inRange = true
          }
        } else {
          month.equalRangeBorderRight = false
          month.inRange = false
        }
      })
    }
  },
  created () {
    // 初始化数据
    for (let i = 1; i <= 12; i++) {
      this.months.push({
        value: i,
        active: false,
        hover: false,
        inRange: false,
        equalRangeBorderLeft: false,
        equalRangeBorderRight: false
      })
    }
  },
  mounted () {
    window.document.addEventListener('click', this.hideDashboard)
    this.$nextTick(() => {
      let input = document.querySelector('.month-picker-input')
      input.addEventListener('keydown', this.keydownEvent)
    })
  },
  destroyed () {
    window.document.removeEventListener('click', this.hideDashboard)
    let input = document.querySelector('.month-picker-input')
    input.removeEventListener('click', this.keydownEvent)
  },
  methods: {
    showDashboard () {
      this.showDateDashboard = true
    },
    hideDashboard () {
      this.showDateDashboard = false
    },
    keydownEvent (e) {
      e.preventDefault()
      if (e.keyCode === 8) {
        this.inputValue = ''
      }
    },
    reduceYear () {
      if (!this.range) {
        this.yearValue--
      } else {
        this.yearValue--
        // this.lowYear = this.yearValue
        this.months.forEach((month) => {
          // 先重置状态
          month.equalRangeBorderRight = false
          month.equalRangeBorderLeft = false
          month.inRange = false
          this.computeMonthState(month)
        })
      }
    },
    increaseYear () {
      if (!this.range) {
        this.yearValue++
      } else {
        this.yearValue++
        // this.highYear = this.yearValue
        this.months.forEach((month) => {
          month.equalRangeBorderRight = false
          month.equalRangeBorderLeft = false
          month.inRange = false
          this.computeMonthState(month)
        })
      }
    },
    computeMonthState (month) {
      let monthIndex = month.value - 1
      if (this.lowYear === this.yearValue && this.highYear === this.yearValue) { // 没有跨年分
        if (monthIndex === this.rangeIndex[0]) {
          month.equalRangeBorderLeft = true
        } else if (monthIndex === this.rangeIndex[1]) {
          month.equalRangeBorderRight = true
        } else if (monthIndex > this.rangeIndex[0] && monthIndex < this.rangeIndex[1]) {
          month.inRange = true
        }
      } else if (this.lowYear === this.yearValue) {
        if (monthIndex === this.rangeIndex[0]) {
          month.equalRangeBorderLeft = true
        } else if (monthIndex > this.rangeIndex[0]) {
          month.inRange = true
        }
      } else if (this.highYear === this.yearValue) {
        if (monthIndex === this.rangeIndex[1]) {
          month.equalRangeBorderRight = true
        } else if (monthIndex < this.rangeIndex[1]) {
          month.inRange = true
        }
      }
    },
    rightArrowHoverState(hover) {
      if (hover) {
        this.rightArrowStroke = '#4A4A4A'
      } else {
        this.rightArrowStroke = '#999999'
      }
    },
    leftArrowHoverState (hover) {
      if (hover) {
        this.leftArrowStroke = '#4A4A4A'
      } else {
        this.leftArrowStroke = '#999999'
      }
    },
    monthHover (index) {
      if (!this.range) {
        this.months.forEach((month, index) => {
          month.hover = false
        })
        this.months[index].hover = true
      } else {
        if (this.lowYear !== this.yearValue) {
          if (this.rangeIndex[0] !== -1 && this.rangeIndex[1] !== -1) {
            return
          }
          if (this.lowYear < this.yearValue) {
            this.months.forEach((month) => {
              month.equalRangeBorderLeft = false
              month.equalRangeBorderRight = false
            })
            this.$set(this.rangeHoverIndex, 0, -1)
            this.$set(this.rangeHoverIndex, 1, index)
          } else {
            this.months.forEach((month) => {
              month.equalRangeBorderLeft = false
              month.equalRangeBorderRight = false
            })
            this.$set(this.rangeHoverIndex, 0, index)
            this.$set(this.rangeHoverIndex, 1, 12)
          }
        } else {
          if (this.rangeIndex[0] !== -1 && this.rangeIndex[1] !== -1) {
            return
          } else if (this.rangeIndex[0] === -1 && this.rangeIndex[1] === -1) {
            this.months.forEach((month, index) => {
              month.hover = false
            })
            this.months[index].hover = true
          }
          if (this.rangeIndex[0] !== -1) {
            if (index > this.rangeIndex[0]) {
              this.months.forEach((month) => {
                month.equalRangeBorderLeft = false
                month.equalRangeBorderRight = false
              })
              this.$set(this.rangeHoverIndex, 0, this.rangeIndex[0])
              this.$set(this.rangeHoverIndex, 1, index)
            } else {
              this.months.forEach((month) => {
                month.equalRangeBorderLeft = false
                month.equalRangeBorderRight = false
              })
              this.$set(this.rangeHoverIndex, 0, index)
              this.$set(this.rangeHoverIndex, 1, this.rangeIndex[0])
            }
          }
        }
      }
    },
    monthActive (index) {
      if (!this.range) {
        this.months.forEach((month, index) => {
          month.active = false
        })
        this.months[index].active = true
        this.monthValue = this.months[index].value
        this.inputValue = `${this.yearValue}/${this.monthValue}`
        this.hideDashboard()
      } else {
        if (this.rangeIndex[0] !== -1 && this.rangeIndex[1] !== -1) {
          this.rangeIndex = [-1, -1]
          this.$set(this.rangeIndex, 0, index)
          this.$set(this.rangeIndex, 1, -1)
          this.$set(this.rangeHoverIndex, 0, -1)
          this.$set(this.rangeHoverIndex, 1, -1)
          this.months.forEach((month, index) => {
            month.hover = false
            month.equalRangeBorderLeft = false
          })
          this.months[index].equalRangeBorderLeft = true
          this.lowYear = this.yearValue
          this.highYear = this.yearValue
          this.lowMonth = this.months[this.rangeIndex[0]].value
          this.inputValue = `${this.lowYear}/${this.lowMonth}`
        } else if (this.rangeIndex[0] !== -1) {
          this.highYear = this.yearValue
          this.$set(this.rangeIndex, 1, index)
          this.highMonth = this.months[this.rangeIndex[1]].value
          if (this.lowYear > this.highYear) {
            let temp = this.lowYear
            this.lowYear = this.highYear
            this.highYear = temp
            temp = this.lowMonth
            this.lowMonth = this.highMonth
            this.highMonth = temp
            temp = this.rangeIndex[0]
            this.$set(this.rangeIndex, 0, this.rangeIndex[1])
            this.$set(this.rangeIndex, 1, temp)
          }
          if (this.lowYear === this.highYear && this.lowMonth > this.highMonth) {
            let temp = this.lowMonth
            this.lowMonth = this.highMonth
            this.highMonth = temp
          }
          this.inputValue = `${this.lowYear}/${this.lowMonth} - ${this.highYear}/${this.highMonth}`
          this.hideDashboard()
        } else {
          this.lowYear = this.yearValue
          this.months.forEach((month, index) => {
            month.hover = false
            month.equalRangeBorderLeft = false
          })
          this.months[index].equalRangeBorderLeft = true
          this.$set(this.rangeIndex, 0, index)
          this.lowMonth = this.months[this.rangeIndex[0]].value
          this.inputValue = `${this.lowYear}/${this.lowMonth}`
        }
      }
    }
  }
}
</script>
