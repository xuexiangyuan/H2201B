<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true">新建Todelist</el-button>
    <el-calendar>
      <template slot="dateCell" slot-scope="{ data }">
        <p>
          {{ data.day.split("-").slice(2).join("-") }}
        </p>
        <!-- {{ data.day }} -->
        <ul>
          <li
            @click="xg(item, index)"
            :class="item.resource == '已完成' ? 'actived' : 'activedd'"
            v-for="item, index in $store.state.list"
            :key="index"
            v-show="item.time == data.day"
          >
            {{ item.name }}
          </li>
        </ul>
      </template>
    </el-calendar>
    <!-- 添加弹框 -->
    <el-dialog title="新增事件" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="事件名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.time"
            type="date"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="事件状态" :label-width="formLabelWidth">
          <el-radio-group v-model="form.resource">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="add()">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        
      </div>
    </el-dialog>
    <!-- 修改弹框 -->
    <el-dialog title="修改事件" :visible.sync="dialogFormVisibles">
      <el-form :model="forms">
        <el-form-item label="事件名称" :label-width="formLabelWidth">
          <el-input v-model="forms.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="forms.time"
            type="date"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item label="事件状态" :label-width="formLabelWidth">
          <el-radio-group v-model="forms.resource">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="edit()">确 定</el-button>
        <el-button @click="dialogFormVisibles = false">取 消</el-button>
        
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 弹框显示
      dialogFormVisible: false,
      dialogFormVisibles: false,
      //添加的表单
      form: {},
      //修改的表单
      forms: {},
      i: -1,
      formLabelWidth: "120px",
    };
  },
  methods: {
    //添加
    add() {
      // 处理时间格式
      console.log(this.form);
       //时间转换为字符串。然后/分割
      let str = this.form.time.toLocaleString().split(" ")[0].split("/").join("-");
      console.log(str);
      // 判断是否需要补0
      if (str.length < 10) {
        let newtime = this.insertStr(str, 8, "0");
        this.form.time = newtime;
      } else {
        this.form.time = str;
      }
      console.log(this.form);

      this.$store.commit("add", this.form);
      this.dialogFormVisible = false;
      this.form = {};
    },
    //时间个数补0
    insertStr(source, start, newStr) {
      return source.slice(0, start) + newStr + source.slice(start);
    },
    //回填
    xg(item, i) {
      this.dialogFormVisibles = true;

      this.forms = {
        ...item,
      };
      this.i = i;
    },
    // 确定修改
    edit() {
      let str = this.forms.time.toLocaleString().split(" ")[0].split("/").join("-");
      if (str.length < 10) {
        let newtime = this.insertStr(str, 8, "0");
        this.forms.time = newtime;
      } else {
        this.forms.time = str;
      }

      this.$store.commit("edit", { ...this.forms, i: this.i });

      this.dialogFormVisibles = false;
    },

    
  },
};
</script>

<style lang='scss' scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.actived {
  text-align: center;
  color: #fff;
  background: #72A246;
  border-radius: 5px;
}

.activedd {
  text-align: center;
  color: #fff;
  background: #921D30;
  border-radius: 5px;
}
</style>
