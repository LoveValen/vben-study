<template>
  <PageWrapper>
    <a-button type="primary" @click="handleClick"> 点击跳转到详情页 </a-button>
    <a-card hoverable class="enter-y">
      <h1> 商品管理 </h1>
      <div ref="chartRef" :style="{ width, height }"></div>
    </a-card>
    <div>
      <h1>标签：</h1>
      <input type="text" v-model.number="inputText" @input="handlerInput" />
    </div>

    <!-- 表格 -->
    <div class="!my-4">
      <a-card hoverable class="enter-y" title="商品表格">
        <a-table :columns="columns" :data-source="data">
          <template #name="{ text }">
            <a>{{ text }}</a>
          </template>
          <template #customTitle>
            <span>
              <smile-outlined />
              Name
            </span>
          </template>
          <template #tags="{ text: tags }">
            <span>
              <a-tag
                v-for="tag in tags"
                :key="tag"
                :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </template>
          <template #action="{ record }">
            <span>
              <a>Invite 一 {{ record.name }}</a>
              <a-divider type="vertical" />
              <a>Delete</a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link">
                More actions
                <down-outlined />
              </a>
            </span>
          </template>
        </a-table>
      </a-card>
    </div>
  </PageWrapper>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, Ref, ref } from 'vue';
import { PageWrapper } from '/@/components/Page';
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { useECharts } from '/@/hooks/web/useECharts';
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle', customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    slots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default defineComponent({
  components: {
    PageWrapper,
    SmileOutlined,
    DownOutlined,
  },

  props: {
    width: {
      type: String as PropType<string>,
      default: '100%',
    },
    height: {
      type: String as PropType<string>,
      default: '300px',
    },
  },

  setup() {
    const loading = ref(true);
    const router = useRouter();

    const state = reactive({
      inputText: '',
    });

    const chartRef = ref<HTMLDivElement | null>(null);
    const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

    const eventObj = {
      handleClick: () => {
        router.push({
          path: '/erabbit/home',
        });
      },
      handlerInput: (e) => {
        console.log('输入的值-->', e.data);
        if (/^[0-9]*$/.test(e.data)) {
          state.inputText += e.data;
        } else {
          state.inputText = state.inputText.replace(e.data, '');
        }
      },
    };

    onMounted(() => {
      setOptions({
        title: {
          text: '堆叠区域图',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {
          data: [
            {
              name: '直接访问',
              // 强制设置图形为圆。
              icon: 'circle',
              itemStyle: {
                color: 'red',
              },
              lineStyle: {},
            },
            {
              name: '联盟广告',
              // 强制设置图形为圆。
              icon: 'circle',
              itemStyle: {
                color: 'yellow',
              },
            },
            {
              name: '视频广告',
              // 强制设置图形为圆。
              icon: 'circle',
              itemStyle: {
                color: 'green',
              },
            },
          ],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {
              color: 'green',
            },
            emphasis: {
              focus: 'series',
            },
            data: [0, 332, 301, 334, 390, 330, 320],
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {
              color: 'yellow',
            },
            emphasis: {
              focus: 'series',
            },
            data: [0, 182, 191, 234, 290, 330, 310],
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {
              color: 'red',
            },
            emphasis: {
              focus: 'series',
            },
            data: [0, 232, 201, 154, 190, 330, 410],
          },
        ],
      });
    });

    setTimeout(() => {
      loading.value = false;
    }, 1500);
    return {
      loading,
      columns,
      data,
      chartRef,
      ...eventObj,
      ...toRefs(state),
    };
  },
});
</script>

<style></style>
