<template>
  <div>
    <!-- biaoge -->
    <el-card class="box-card">
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="name" label="姓名" sortable> </el-table-column>
          <el-table-column prop="phone" label="手机" sortable> </el-table-column>
          <el-table-column prop="gh" label="工号" sortable> </el-table-column>
          <el-table-column prop="bm" label="部门" sortable> </el-table-column>
          <el-table-column prop="tiem" label="入职时间" sortable> </el-table-column>
          <el-table-column prop="" label="离职时间" sortable> </el-table-column>
          <el-table-column prop="security" label="社保城市"> </el-table-column>
          <el-table-column prop="public" label="公积金城市"> </el-table-column>
          <el-table-column prop="securitynum" label="社保基数"> </el-table-column>
          <el-table-column prop="publicnum" label="公积金基数"> </el-table-column>
          <el-table-column label="操作">
            <template>
              <el-button type="text">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination layout="prev, pager, next" :total="10" class="fy"></el-pagination>
        <!-- 分页 -->
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'cgx',
          phone: '13800000001',
          gh: '0001',
          bm: '总裁办',
          tiem: '2018-11-01',
          security: '北京',
          public: '北京',
          securitynum: '10000',
          publicnum: '10000'
        },
        {
          name: '管理员',
          phone: '13800000002',
          gh: '9002',
          bm: '总裁办',
          tiem: '22018-11-02',
          security: '北京',
          public: '北京',
          securitynum: '10000',
          publicnum: '10000'
        },
        {
          name: '孙财',
          phone: '13800000003',
          gh: '111',
          bm: '市场部',
          tiem: '2018-11-04',
          security: '北京',
          public: '北京',
          securitynum: '3388',
          publicnum: '2277'
        },
        {
          name: '罗晓晓',
          phone: '13800000004',
          gh: '1111',
          bm: '人事部',
          tiem: '2018-12-02',
          security: '北京',
          public: '北京',
          securitynum: '5000',
          publicnum: '5000'
        },
        {
          name: '文吉星',
          phone: '13400000001',
          gh: '1001',
          bm: '人事部',
          tiem: '2018-01-01',
          security: '北京',
          public: '北京',
          securitynum: '5900',
          publicnum: '5900'
        },
        {
          name: '巴思慧',
          phone: '13400000002',
          gh: '1002',
          bm: '人事部',
          tiem: '2018-01-01',
          security: '北京',
          public: '北京',
          securitynum: '5900',
          publicnum: '5900'
        },
        {
          name: '乔海',
          phone: '13500000001',
          gh: '2001',
          bm: '总裁办',
          tiem: '2018-01-01',
          security: '北京',
          public: '北京',
          securitynum: '10000',
          publicnum: '10000'
        },
        {
          name: '董昊空',
          phone: '13500000002',
          gh: '2002',
          bm: '总裁办',
          tiem: '2018-01-01',
          security: '北京',
          public: '北京',
          securitynum: '10000',
          publicnum: '10000'
        },
        {
          name: '周乐天',
          phone: '13500000003',
          gh: '2003',
          bm: '财务部',
          tiem: '2018-01-01',
          security: '北京',
          public: '北京',
          securitynum: '5000',
          publicnum: '5000'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 20px;
}
.fy{
	margin-left: 40%;
}
</style>
