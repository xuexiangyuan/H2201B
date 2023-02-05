<template>
  <div>
    <!-- 员工 -->
    <mbx></mbx>
    <el-card class="box-card">
      <div class="card">
        <el-tag class="tag"><i class="el-icon-warning"></i>当前共{{panum.total}}条记录</el-tag>
        <div class="btn">
          <el-button type="danger">普通excel导出</el-button>
          <el-button type="warning">负债excel导出</el-button>
          <el-button type="success">excel导入</el-button>
          <el-button type="primary" plain disabled>新增员工</el-button>
        </div>
      </div>
    </el-card>

    <!-- 表格 -->
    <el-card class="box-cardd">
      <div class="card">
        <el-table :data="tableData" style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="username" label="姓名" sortable> </el-table-column>
          <el-table-column prop="staffPhoto" label="头像">
            <template slot-scope="scoped">
              <img class="imgtab" :src="scoped.row.staffPhoto" alt="" />
            </template>
          </el-table-column>
          <el-table-column prop="mobile" label="手机号" sortable> </el-table-column>
          <el-table-column prop="workNumber" label="工号" sortable> </el-table-column>
          <el-table-column prop="formOfEmployment" label="聘用形式" sortable>
            <template slot-scope="scoped">
              <p>{{ scoped.row.formOfEmployment == 2 ? '非正式' : '正式' }}</p>
            </template>
          </el-table-column>
          <el-table-column prop="departmentName" label="部门" sortable> </el-table-column>
          <el-table-column prop="timeOfEntry" label="入职时间" sortable> </el-table-column>
          <el-table-column prop="enableState" label="账户状态" sortable>
            <template slot-scope="scoped">
              <el-switch
                v-model="scoped.row.enableState"
                :active-value="1"
                :inactive-value="2"
                active-color="#13ce66"
                inactive-color="#ccc"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" sortable width="300px">
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="examine(scope.row.id)">查看</el-button>
              <el-button size="mini" type="text">转正</el-button>
              <el-button size="mini" type="text">调岗</el-button>
              <el-button size="mini" type="text">离职</el-button>
              <el-button size="mini" type="text" @click="juese">角色</el-button>
              <el-button size="mini" class="btnn" type="text" disabled>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格 -->
      </div>

      <div class="fenye">
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="panum.page"
          :page-size="panum.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="panum.total"
        >
        </el-pagination>
        <!-- 分页 -->

        <!-- 对话框 -->
        <el-dialog title="分配角色" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
          <!-- 多选框 -->
          <el-checkbox v-model="checked">系统管理员</el-checkbox>
          <el-checkbox v-model="checked">人事经理</el-checkbox>
          <el-checkbox v-model="checked">人事专员</el-checkbox>
          <el-checkbox v-model="checked">薪资专员</el-checkbox>
          <el-checkbox v-model="checked">员工</el-checkbox>
          <el-checkbox v-model="checked">1</el-checkbox>
          <el-checkbox v-model="checked">1</el-checkbox>
          <el-checkbox v-model="checked">1</el-checkbox>
          <!-- 多选框 -->
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 对话框 -->
      </div>
    </el-card>
  </div>
</template>

<script>
import mbx from '@/components/mbx.vue'
import { user } from '../api/staff'
import { STATUS } from '../../untils/Status'

import { role } from '../api/juese'
import { jbxx } from '../api/homeuser'
import { yg } from '../api/yuangongjuese'
export default {
  components: {
    mbx
  },
  data() {
    return {
      tableData: [],
      id: '',

      dialogVisible: false, //对话框
      checked: '',
      panum: {
        total: 0, //分页total
        page: 1,
        size: 10
      }
    }
  },
  methods: {
    getlist() {
      role(this.panum).then((res) => {
        console.log(res)
        this.tableData = res.data.data.rows
        this.id = res.data.data.id
        this.panum.total = res.data.data.total //分页
      })
    },
    handleSizeChange(val) {
      this.panum.size = val
      this.getlist()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.panum.page = val
      this.getlist()
      console.log(`当前页: ${val}`)
    },

    examine(val) {
      // console.log(val);
      this.$router.push('/examine/' + val)
    },

    // 对话框
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },

    // 角色
    juese() {
      this.dialogVisible = true
      // yg().then(res=>{
      // 	console.log(res);
      // })
    },

    getlisttow() {
      jbxx().then((res) => {
        console.log(res)
      })
    }
  },
  // created() {

  // 	role().then(res=>{
  // 		console.log(res);
  // 		this.tableData=res.data.data.rows
  // 		this.id=res.data.data.id
  // 		this.total=res.data.data.total //分页
  // 	}),
  // 	jbxx().then(res=>{
  // 		console.log(res);
  // 	})
  // },
  created() {
    this.getlist()
    this.getlisttow()
  }
}
</script>

<style lang="scss" scoped>
.tag {
  color: #000;
}
.el-icon-warning {
  color: #409eff;
}
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-cardd {
  margin-top: 20px;
}

.imgtab {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.btnn {
  color: #ccc;
}

.fenye {
  margin-left: 200px;
}
</style>
