/*
 * @Author: Miya
 * @Date: 2022-07-27 23:23:02
 * @LastEditTime: 2022-07-28 18:10:18
 * @LastEditors: Mirage
 * @Description: Example Buttons
 * @FilePath: \Vue3-Element-Template\src\views\example\components\button.tsx
 */
import { defineComponent } from 'vue';
import { Edit, Search, Upload } from '@element-plus/icons-vue';

const buttonCardDefault = () => {
  return (
    <>
      <el-button type="primary">Submit</el-button>
      <el-button type="primary" disabled={true}>
        Disabled
      </el-button>
      <el-button type="text">Link</el-button>
    </>
  );
};

const buttonCardIcons = () => {
  return (
    <>
      <el-button type="primary" icon={Edit}></el-button>
      <el-button type="primary" icon={Search}>
        Search
      </el-button>
      <el-button type="primary">
        Upload
        <el-icon>
          <Upload />
        </el-icon>
      </el-button>
    </>
  );
};

const buttonCardSeverities = () => {
  return (
    <>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </>
  );
};

const buttonCardRound = () => {
  return (
    <>
      <el-button round>Round</el-button>
      <el-button type="primary" round>
        Primary
      </el-button>
      <el-button type="success" round>
        Success
      </el-button>
      <el-button type="info" round>
        Info
      </el-button>
      <el-button type="warning" round>
        Warning
      </el-button>
      <el-button type="danger" round>
        Danger
      </el-button>
    </>
  );
};

const ExampleButton = defineComponent({
  render() {
    return (
      <el-row gutter={16}>
        <el-col span={12}>
          <el-card header="Default">{buttonCardDefault}</el-card>
        </el-col>
        <el-col span={12}>
          <el-card header="Icons">{buttonCardIcons}</el-card>
        </el-col>
        <el-col span={12}>
          <el-card header="Severities">{buttonCardSeverities}</el-card>
        </el-col>
        <el-col span={12}>
          <el-card header="Round">{buttonCardRound}</el-card>
        </el-col>
      </el-row>
    );
  },
});

export default ExampleButton;
