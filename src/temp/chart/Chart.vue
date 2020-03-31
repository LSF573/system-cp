<template>
  <div v-breadcrumbs.hide class="chart-temp">
    <!-- Counters -->
    <div class="row">
      <div class="col-sm-6 col-xl-3">

        <b-card class="mb-4">
          <div class="d-flex align-items-center">
            <div class="lnr lnr-cart display-4 text-success"></div>
            <div class="ml-3">
              <div class="text-muted small">今日消费</div>
              <div class="text-large">2362</div>
            </div>
          </div>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card class="mb-4">
          <div class="d-flex align-items-center">
            <div class="lnr lnr-earth display-4 text-info"></div>
            <div class="ml-3">
              <div class="text-muted small">今日消费</div>
              <div class="text-large">687,123</div>
            </div>
          </div>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card class="mb-4">
          <div class="d-flex align-items-center">
            <div class="lnr lnr-gift display-4 text-danger"></div>
            <div class="ml-3">
              <div class="text-muted small">今日消费</div>
              <div class="text-large">985</div>
            </div>
          </div>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card class="mb-4">
          <div class="d-flex align-items-center">
            <div class="lnr lnr-users display-4 text-warning"></div>
            <div class="ml-3">
              <div class="text-muted small">今日消费</div>
              <div class="text-large">105,652</div>
            </div>
          </div>
        </b-card>

      </div>
    </div>

    <!-- Statistics -->
    <b-card no-body class="mb-4">
      <b-card-header header-tag="h6" class="with-elements">
        <div class="card-header-title">图表</div>
      </b-card-header>
      <div class="row no-gutters row-bordered">
        <div class="col-md-8 col-lg-12 col-xl-8">
          <b-card-body>
            <label for="" style="display: inline-block;margin-right: 1rem;">
              <b-select class="custom-select mr-sm-2 mb-2 mb-sm-0" value="按日统计" :options="['Choose...','按日统计','按月统计','按年统计']" />
            </label>

            <label for="" style="display: inline-block; width: 20rem;">
              <flat-pickr v-model="range" :config="rangeConfig" placeholder="Range picker" />
            </label>

            <b-btn variant="primary">搜索</b-btn>
            <dashboard1-chart1 :height="210" />
          </b-card-body>
        </div>

        <div class="col-md-4 col-lg-12 col-xl-4">
          <b-card-body>

            <!-- Numbers -->
            <div class="row">
              <div class="col-6 col-xl-5 text-muted mb-3">消费</div>
              <div class="col-6 col-xl-7 mb-3">
                <span class="text-big">10,332</span>
                <sup class="text-success">+12%</sup>
              </div>
              <div class="col-6 col-xl-5 text-muted mb-3">消费</div>
              <div class="col-6 col-xl-7 mb-3">
                <span class="text-big">$1,534</span>
                <sup class="text-danger">-5%</sup>
              </div>
              <div class="col-6 col-xl-5 text-muted mb-3">消费</div>
              <div class="col-6 col-xl-7 mb-3">
                <span class="text-big">$10,534</span>
                <sup class="text-success">+12%</sup>
              </div>
              <div class="col-6 col-xl-5 text-muted mb-3">消费</div>
              <div class="col-6 col-xl-7 mb-3">
                <span class="text-big">21,332</span>
                <sup class="text-danger">-12%</sup>
              </div>
              <div class="col-6 col-xl-5 text-muted mb-3">消费</div>
              <div class="col-6 col-xl-7 mb-3">
                <span class="text-big">12</span>
                <sup class="text-success">+12%</sup>
              </div>
            </div>
            <!-- / Numbers -->

          </b-card-body>
        </div>
      </div>
    </b-card>

    <!-- 表格 -->
    <b-card no-body>
      <div class="table-responsive">
        <b-table
          :items="productsData"
          :fields="fields"
          :striped="true"
          :bordered="true"
          class="products-table card-table">
        </b-table>
      </div>
    </b-card>
  </div>
</template>
<style src="vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>
<script>
import Vue from 'vue'
import VueChartJs from 'vue-chartjs'
import PerfectScrollbar from 'vendor/libs/perfect-scrollbar/PerfectScrollbar'
import flatPickr from 'vue-flatpickr-component'
import * as numeral from 'numeral'

Vue.component('dashboard1-chart1', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05'],
      datasets: [{
        label: 'Visits',
        data: [93, 25, 95, 59, 46, 68, 4, 41],
        borderWidth: 1,
        backgroundColor: 'rgba(28,180,255,.05)',
        borderColor: 'rgba(28,180,255,1)'
      }, {
        label: 'Returns',
        data: [83, 1, 43, 28, 56, 82, 80, 66],
        borderWidth: 1,
        borderDash: [5, 5],
        backgroundColor: 'rgba(136, 151, 170, 0.1)',
        borderColor: '#8897aa'
      }]
    }, {
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: '#aaa'
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: '#aaa'
          }
        }]
      },

      responsive: false,
      maintainAspectRatio: false
    })
  }
})
export default {
  components: {
    PerfectScrollbar,
    flatPickr
  },
  data () {
    return {
      currentPage: 1,
      fields: [
        { key: 'date', label: '日期', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'cost', label: '消费', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'finish_task', label: '完成试玩', sortable: true, tdClass: 'py-2 align-middle' },
        { key: 'finish_explore', label: '完成探索', sortable: true, tdClass: 'py-2 align-middle', formatter: value => numeral(value).format('$0,0.00') },
        { key: 'finish_zs', label: '完成专属', sortable: true, tdClass: 'py-2 align-middle' }
      ],
      productsData: [{
        date: "2019-01-03",
        cost: "￥123,345,00",
        finish_task: 3455632,
        finish_explore: 52,
        finish_zs: 480
      }, {
        date: "2019-01-03",
        cost: "￥123,345,00",
        finish_task: 3455632,
        finish_explore: 52,
        finish_zs: 480
      }, {
        date: "2019-01-03",
        cost: "￥123,345,00",
        finish_task: 3455632,
        finish_explore: 52,
        finish_zs: 480
      }, {
        date: "2019-01-03",
        cost: "￥123,345,00",
        finish_task: 3455632,
        finish_explore: 52,
        finish_zs: 480
      }, {
        date: "2019-01-03",
        cost: "￥123,345,00",
        finish_task: 3455632,
        finish_explore: 52,
        finish_zs: 480
      }],
      rangeConfig: {
        mode: 'range',
        altInput: true,
        animate: true
      },
      range: ''
    }
  },
  mounted () {
    const charts = this.$children.filter(component => /-chart\d+$/.test(component.$options._componentTag))

    const resizeCharts = () => charts.forEach(chart => chart._data._chart.resize())

    // Initial resize
    resizeCharts()

    // For performance reasons resize charts on delayed resize event
    this.layoutHelpers.on('resize.dashboard-1', resizeCharts)
  },
  beforeDestroy () {
    this.layoutHelpers.off('resize.dashboard-1')
  }
}
</script>
