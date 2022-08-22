/*
 * @Description: Example Page Dashboard
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-02 16:20:11
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-22 17:46:51
 */
import { defineComponent, onMounted, ref } from 'vue';
import ECharts from '@/utils/ECharts';

const Dashboard = defineComponent({
  name: 'Dashboard',
  setup() {
    const charts = ref<HTMLElement>();
    let objectEChart: ECharts | null = null;
    let timer: NodeJS.Timer | null | number | undefined = null;

    onMounted(() => {
      const charts = document.getElementById('charts');
      objectEChart = new ECharts(charts!);
      objectEChart.setTemplateData();
      objectEChart.render();
      window.addEventListener('resize', function () {
        objectEChart!.resize();
      });
    });

    const setNewData = () => {
      clearInterval(Number(timer));
      const random = Math.random();
      const newData = {
        name: 'Sample Data',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [
          random,
          random * Math.random() * 10,
          random * Math.random() * 10,
          random * Math.random() * 10,
          random * Math.random() * 10,
          random * Math.random() * 10,
          random * Math.random() * 10,
        ],
      };
      timer = setInterval(() => {
        console.log('x');
        objectEChart?.setSeriesData(newData);
        objectEChart?.render();
      }, 1000);
    };

    return { charts, setNewData };
  },
  render() {
    const renderCircle = () => {
      return (
        <el-card>
          <el-progress type="circle" percentage={24}></el-progress>
        </el-card>
      );
    };
    const renderCharts = () => {
      return (
        <el-card>
          <div
            id="charts"
            ref="charts"
            style="width: 100%;height: 300px;"
          ></div>
        </el-card>
      );
    };
    return (
      <el-row gutter={32}>
        <el-col span={6}>{renderCircle}</el-col>
        <el-button onClick={() => this.setNewData()}>111</el-button>
        <el-col span={24}>{renderCharts}</el-col>
      </el-row>
    );
  },
});

export default Dashboard;
