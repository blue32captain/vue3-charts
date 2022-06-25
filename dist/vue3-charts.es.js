import { defineComponent, ref, onMounted, h } from "vue";
import { Chart } from "frappe-charts";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const Vue3Charts = defineComponent({
  name: "Vue3Charts",
  props: {
    title: {
      type: String,
      required: true,
      default: ""
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
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const chartRef = ref(null);
    const chartJSState = {
      chart: null,
      props: __spreadValues({}, props)
    };
    const destroy = () => {
      if (chartJSState.chart) {
        chartJSState.chart.destroy();
        chartJSState.chart = null;
      }
    };
    const update = (animateSpeed = 750) => {
      chartJSState.chart.data = __spreadValues(__spreadValues({}, chartJSState.chart.data), chartJSState.props.data);
      chartJSState.chart.options = __spreadValues(__spreadValues({}, chartJSState.chart.options), chartJSState.props.options);
      chartJSState.chart.update(animateSpeed);
    };
    const resize = () => chartJSState.chart && chartJSState.chart.resize();
    const render = () => {
      if (chartJSState.chart) {
        return chartJSState.chart.update();
      }
      return chartJSState.chart = new Chart("#chartRef", {
        title: chartJSState.props.title,
        type: chartJSState.props.type,
        data: chartJSState.props.data,
        height: chartJSState.props.height,
        colors: chartJSState.props.colors,
        isNavigable: chartJSState.props.isNavigable,
        xUnit: chartJSState.props.xUnit
      });
    };
    onMounted(() => render());
    return {
      chartJSState,
      chartRef,
      render,
      resize,
      update,
      destroy
    };
  },
  render(props) {
    return h("div", {
      id: "chartRef",
      ref: "chartRef",
      height: props.height,
      width: props.width
    });
  }
});
const _sfc_main = Vue3Charts;
_sfc_main.install = (app, options = {}) => {
  var _a;
  app.component(_sfc_main.name, _sfc_main);
  if ((_a = options == null ? void 0 : options.plugins) == null ? void 0 : _a.length) {
    _sfc_main.registerGlobalPlugins(options.plugins);
  }
};
export { _sfc_main as default };
