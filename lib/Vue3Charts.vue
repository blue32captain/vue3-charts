<script>
import { h, ref, onMounted, defineComponent } from 'vue'
import { Chart } from 'frappe-charts';

const Vue3Charts = defineComponent({
  name: 'Vue3Charts',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      required: false,
      default: null
    },
    width: {
      type: Number,
      required: false,
      default: null
    },
    isNavigable: {
      type: Number,
      required: false,
      default: 0
    },
    xUnit: {
      type: Number,
      required: false,
      default: 1
    },
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    },
    colors: {
      type: Array,
      default: () => []
    }
  },
  setup (props, { emit }) {
    const chartRef = ref(null)

    const chartJSState = {
      chart: null,
      props: { ...props }
    }

    const destroy = () => {
      if (chartJSState.chart) {
        chartJSState.chart.destroy()
        chartJSState.chart = null
      }
    }

    const update = (animateSpeed = 750) => {
      chartJSState.chart.data = { ...chartJSState.chart.data, ...chartJSState.props.data }
      chartJSState.chart.options = { ...chartJSState.chart.options, ...chartJSState.props.options }
      chartJSState.chart.update(animateSpeed)
    }

    const resize = () => chartJSState.chart && chartJSState.chart.resize()

    const render = () => {
      if (chartJSState.chart) {
        return chartJSState.chart.update()
      }

      return chartJSState.chart = new Chart(
          "#chartRef", {
            title: chartJSState.props.title,
            type: chartJSState.props.type,
            data: chartJSState.props.data,
            height: chartJSState.props.height,
            colors: chartJSState.props.colors,
            isNavigable: chartJSState.props.isNavigable,
            xUnit: chartJSState.props.xUnit,
            // plugins: chartJSState.plugins
          }
      )
    }

    onMounted(() => render())

    return {
      chartJSState,
      chartRef,
      render,
      resize,
      update,
      destroy,
    }
  },

  render (props) {
    return h('div', {
      id: 'chartRef',
      ref: 'chartRef',
      height: props.height,
      width: props.width
    })
  }
})

export default Vue3Charts

</script>
