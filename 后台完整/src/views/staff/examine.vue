<template>
  <div>
    <mbx></mbx>
    <!-- 查看 -->

    <el-card class="box-card">
      <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录账户设置" name="first">
            <!-- 登录账户设置 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item prop="username">
                <el-input v-model="ruleForm.username"> </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="ruleForm.password" type="password"> </el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="btn" type="primary" @click="submitForm">更新</el-button>
              </el-form-item>
            </el-form>
            <!-- 登录账户设置 -->
          </el-tab-pane>
          <el-tab-pane label="个人详情" name="second">
            <!-- 个人详情 -->
            <div class="div">
              <div class="divv">
                <p>工号</p>
                <el-input v-model="gh"></el-input>
              </div>
              <div class="divv">
                <p>入职时间</p>
                <el-date-picker v-model="value1" type="date" placeholder="选择日期"> </el-date-picker>
              </div>
            </div>
            <div class="div">
              <div class="divv">
                <p>姓名</p>
                <el-input v-model="name"></el-input>
              </div>
              <div class="divve">
                <p>部门</p>
                <el-input v-model="bm"></el-input>
              </div>
            </div>
            <div class="div">
              <div class="divv">
                <p>手机</p>
                <el-input v-model="shouji"></el-input>
              </div>
              <div class="divv">
                <p>聘用形式</p>
                <el-select v-model="pyxs" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>

            <div class="div">
              <div class="divv">
                <p>员工头像</p>
                 <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </div>

            <div class="btnn">
              <el-button type="primary" class="btnnn">保存更新</el-button>
              <el-button>返回</el-button>
            </div>

            <p>基础信息</p>

            <div class="div">
              <div class="divv">
                <p>最高学历</p>
                <el-select v-model="zgxl" placeholder="请选择">
                  <el-option v-for="item in optionss" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>

            <!-- 员工照片 -->
            <div class="div">
              <div class="divv">
                <p>员工照片</p>
                <img :src="img" alt="" />

                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </div>
            <!-- 员工照片 -->

            <!-- 国家/地区 -->
            <div class="div">
              <div class="divv">
                <p>国家/地区</p>
                <el-select v-model="gjdq" placeholder="请选择">
                  <el-option v-for="item in diqu" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <!-- 国家/地区 -->

            <!-- 护照 -->
            <div class="div">
              <div class="divv">
                <p>护照号</p>
                <el-input v-model="hz"></el-input>
              </div>
            </div>
            <!-- 护照 -->

            <!-- 身份证号 -->
            <div class="div">
              <div class="divv">
                <p>身份证号</p>
                <el-input v-model="sfz"></el-input>
              </div>
            </div>
            <!-- 身份证号 -->

            <!-- 籍贯 -->
            <div class="div">
              <div class="divv">
                <p>籍贯</p>
                <el-input v-model="jg"></el-input>
              </div>
            </div>
            <!-- 籍贯 -->

            <!-- 民族 -->
            <div class="div">
              <div class="divv">
                <p>民族</p>
                <el-input v-model="mz"></el-input>
              </div>
            </div>
            <!-- 民族 -->

            <!-- 婚姻状况 -->
            <div class="div">
              <div class="divv">
                <p>婚姻状况</p>
                <el-select v-model="hyzt" placeholder="请选择">
                  <el-option v-for="item in hunyin" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <!-- 婚姻状况 -->

            <!-- 生日 -->
            <div class="div">
              <div class="divv">
                <p>生日</p>
                <el-input v-model="sr"></el-input>
              </div>
            </div>
            <!-- 生日 -->

            <!-- 年龄 -->
            <div class="div">
              <div class="divv">
                <p>年龄</p>
                <el-input v-model="age"></el-input>
              </div>
            </div>
            <!-- 年龄 -->

            <!-- 星座 -->
            <div class="div">
              <div class="divv">
                <p>星座</p>
                <el-select v-model="xingzuo" placeholder="请选择">
                  <el-option v-for="item in xz" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
              </div>
            </div>
            <!-- 星座 -->

            <!-- 血型 -->
            <div class="div">
              <div class="divv">
                <p>血型</p>
                <el-select v-model="xx" placeholder="请选择">
                  <el-option v-for="item in xxx" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
              </div>
            </div>
            <!-- 血型 -->

            <!-- 户籍所在地 -->
            <div class="div">
              <div class="divv">
                <p>户籍所在地</p>
                <el-input v-model="huji"></el-input>
              </div>
            </div>
            <!-- 户籍所在地 -->

            <!-- 政治面貌 -->
            <div class="div">
              <div class="divv">
                <p>政治面貌</p>
                <el-input v-model="zzmm"></el-input>
              </div>
            </div>
            <!-- 政治面貌 -->

            <!-- 入党时间 -->
            <div class="div">
              <div class="divv">
                <p>入党时间</p>
                <el-date-picker v-model="rudang" type="date" placeholder="选择日期"> </el-date-picker>
              </div>
            </div>

            <!-- 入党时间 -->

            <!-- 存档机构 -->
            <div class="div">
              <div class="divv">
                <p>存档机构</p>
                <el-input v-model="cdjg"></el-input>
              </div>
            </div>
            <!-- 存档机构 -->

            <!-- 子女状态 -->
            <div class="div">
              <div class="divv">
                <p>子女状态</p>
                <el-input v-model="znzt"></el-input>
              </div>
            </div>
            <!-- 子女状态 -->

            <!-- 子女有无商业险 -->
            <div class="div">
              <div class="divv">
                <p>子女有无商业险</p>
                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>
              </div>
            </div>
            <!-- 子女有无商业险 -->

            <!-- 有无违法违纪状态 -->
            <div class="div">
              <div class="divv">
                <p>有无违法违纪状态</p>
                <el-input v-model="ywwj"></el-input>
              </div>
            </div>
            <!-- 有无违法违纪状态 -->

            <!-- 有无重大病史 -->
            <div class="div">
              <div class="divv">
                <p>有无重大病史</p>
                <el-input v-model="ywzdbs"></el-input>
              </div>
            </div>
            <!-- 有无重大病史 -->
            <p>通讯信息</p>

            <!-- QQ -->
            <div class="div">
              <div class="divv">
                <p>QQ</p>
                <el-input v-model="qq"></el-input>
              </div>
            </div>
            <!-- QQ -->

            <!-- 微信 -->
            <div class="div">
              <div class="divv">
                <p>微信</p>
                <el-input v-model="wx"></el-input>
              </div>
            </div>
            <!-- 微信 -->

            <!-- 现居住地 -->
            <div class="div">
              <div class="divv">
                <p>现居住地</p>
                <el-input v-model="xjdz"></el-input>
              </div>
            </div>
            <!-- 现居住地 -->

            <!-- 通讯地址 -->
            <div class="div">
              <div class="divv">
                <p>通讯地址</p>
                <el-input v-model="txdz"></el-input>
              </div>
            </div>
            <!-- 通讯地址 -->

            <!-- 联系手机 -->
            <div class="div">
              <div class="divv">
                <p>联系手机</p>
                <el-input v-model="phione"></el-input>
              </div>
            </div>
            <!-- 联系手机 -->

            <!-- 个人邮箱 -->
            <div class="div">
              <div class="divv">
                <p>个人邮箱</p>
                <el-input v-model="image"></el-input>
              </div>
            </div>
            <!-- 个人邮箱 -->

            <!-- 紧急联系人 -->
            <div class="div">
              <div class="divv">
                <p>紧急联系人</p>
                <el-input v-model="jinji"></el-input>
              </div>
            </div>
            <!-- 紧急联系人 -->

            <!-- 紧急联系电话 -->
            <div class="div">
              <div class="divv">
                <p>紧急联系电话</p>
                <el-input v-model="jinjiphione" placeholder="11位字符"></el-input>
              </div>
            </div>
            <!-- 紧急联系电话 -->

            <p>账号信息</p>
            <div class="div">
              <div class="divv">
                <p>社保电脑号</p>
                <el-input v-model="sbdn" placeholder="请输入"></el-input>
              </div>
            </div>

            <!-- 公积金账号 -->
            <div class="div">
              <div class="divv">
                <p>公积金账号</p>
                <el-input v-model="gjjzh" placeholder="请输入"></el-input>
              </div>
            </div>
            <!-- 公积金账号 -->

            <!-- 银行卡号 -->
            <div class="div">
              <div class="divv">
                <p>银行卡号</p>
                <el-input v-model="yhkh" placeholder="请输入"></el-input>
              </div>
            </div>
            <!-- 银行卡号 -->

            <!-- 开户行 -->
            <div class="div">
              <div class="divv">
                <p>开户行</p>
                <el-input v-model="khh" placeholder="请输入"></el-input>
              </div>
            </div>
            <!-- 开户行 -->

            <p>教育信息</p>
            <!-- 学历类型 -->
            <div class="div">
              <div class="divv">
                <p>学历类型</p>
                <el-select v-model="pyxs" placeholder="请选择">
                  <el-option v-for="item in jyxx" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <!-- 学历类型 -->

            <!-- 毕业学校 -->
            <div class="div">
              <div class="divv">
                <p>毕业学校</p>
                <el-input v-model="byxx" placeholder="请输入"></el-input>
              </div>
            </div>
            <!-- 毕业学校 -->

            <!-- 入学时间 -->
            <div class="div">
              <div class="divv">
                <p>入学时间</p>
                <el-date-picker v-model="rxsj" type="date" placeholder="选择日期"> </el-date-picker>
              </div>
            </div>
            <!-- 入学时间 -->

            <!-- 毕业时间 -->
            <div class="div">
              <div class="divv">
                <p>毕业时间</p>
                <el-date-picker v-model="bysj" type="date" placeholder="选择日期"> </el-date-picker>
              </div>
            </div>
            <!-- 毕业时间 -->

            <!-- 专业 -->
            <div class="div">
              <div class="divv">
                <p>专业</p>
                <el-input v-model="zy" placeholder="请输入"></el-input>
              </div>
            </div>
            <!-- 专业 -->

            <p>从业信息</p>
            <!-- 上家公司 -->
            <div class="div">
              <div class="divv">
                <p>上家公司</p>
                <el-input v-model="sjgs" placeholder="请输入"></el-input>
              </div>
            </div>
            <!-- 上家公司 -->

            <!-- 职称 -->
            <div class="div">
              <div class="divv">
                <p>职称</p>
                <el-input v-model="zc" placeholder="请输入"></el-input>
              </div>
            </div>
            <!-- 职称 -->

            <!-- 有无竞业限制 -->
            <div class="div">
              <div class="divv">
                <p>有无竞业限制</p>
                <el-input v-model="ywjy" placeholder="请输入"></el-input>
              </div>
            </div>
            <!-- 有无竞业限制 -->

            <!-- 备注 -->
            <div class="div">
              <div class="divv">
                <p>备注</p>
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"> </el-input>
              </div>
            </div>
            <!-- 备注 -->

            <div class="foolt">
              <el-button type="primary">保存更新</el-button>
              <el-button>返回</el-button>
            </div>
            <!-- 个人详情 -->
          </el-tab-pane>
          <el-tab-pane label="岗位信息" name="third">角色管理</el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
import mbx from '@/components/mbx.vue'

import { jbxx } from '../api/homeuser'
import { jbxxx } from '../api/homeuser1'
export default {
  data() {
    return {
			id:'',
      img:"",
      activeName: 'second',
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        mobile: [
          { required: true, message: '用户不能为空', trigger: 'blur' },
          { min: 3, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      },
      gh: '',
      value1: '',
      name: '',
      shouji: '',
      bm: '',
      pyxs: '',
      zgxl: '博士',
      options: '',
      optionss: '',
      diqu: '',
      hz: '',
      sfz: '',
      jg: '',
      mz: '',
      sr: '',
      age: '',
			xingzuo:'',
      xz: '',
      xx: '',
      huji: '',
      zzmm: '',
      rudang: '',
      cdjg: '',
      znzt: '',
      radio: '1',
      ywwj: '',
      ywzdbs: '',
      qq: '',
      wx: '',
      xjdz: '',
      txdz: '',
      phione: '',
      image: '',
      jinji: '',
      jinjiphione: '',
      sbdn: '',
      gjjzh: '',
      yhkh: '',
      khh: '',
      jyxx: '',
      byxx: '',
      rxsj: '',
      bysj: '',
      zy: '',
      sjgs: '',
      zc: '',
      ywjy: '',
      textarea: '',
      imageUrl: '',
      gjdq:'',
      hyzt:'',
       optionss: [{
          value: '选项1',
          label: '初中'
        }, {
          value: '选项2',
          label: '高中'
        }, {
          value: '选项3',
          label: '中专'
        }, {
          value: '选项4',
          label: '大专'
        },{
          value: '选项5',
          label: '本科'
        },{
          value: '选项6',
          label: '硕士'
        },{
          value: '选项7',
          label: '博士'
        }

        ],
       options: [{
          value: '选项1',
          label: '正式'
        }, {
          value: '选项2',
          label: '非正式'
        }

        ],
       diqu: [{
          value: '选项1',
          label: '中国大陆'
        }, {
          value: '选项2',
          label: '港澳台国外'
        }
        ],
       hunyin: [{
          value: '选项1',
          label: '未婚'
        }, {
          value: '选项2',
          label: '已婚'
        },{
					value: '选项3',
          label: '离异'
				}
        ],
       xz: [{
          value: '选项1',
          label: '水平座'
        }, {
          value: '选项2',
          label: '双鱼座'
        },{
					value: '选项3',
          label: '白羊座'
				},{
					value: '选项4',
          label: '金牛座'
				},{
					value: '选项5',
          label: '双子座'
				},{
					value: '选项6',
          label: '巨蟹座'
				},{
					value: '选项7',
          label: '狮子座'
				},{
					value: '选项8',
          label: '处女座'
				},{
					value: '选项9',
          label: '天秤座'
				},{
					value: '选项11',
          label: '天蝎座'
				},{
					value: '选项12',
          label: '射手座'
				},{
					value: '选项13',
          label: '摩羯座'
				}
        ],
       xxx: [{
          value: '选项1',
          label: 'A型'
        }, {
          value: '选项2',
          label: 'B型'
        },{
					value: '选项3',
          label: 'O型'
				},{
					value: '选项4',
          label: 'AB型'
				}

        ],
    }
  },
  created() {
		// console.log(this.$route.params.id);
		this.id=this.$route.params.id
    jbxx(this.id).then((res) => {
      console.log(res.data.data)
      this.ruleForm.username = res.data.data.username
      this.ruleForm.password = res.data.data.password
      this.gh=res.data.data.workNumber
      this.value1=res.data.data.correctionTime
      this.name=res.data.data.username
      this.bm=res.data.data.departmentName
      this.shouji=res.data.data.mobile
      this.img=res.data.data.staffPhoto
    }),

		jbxxx(this.id).then(res=>{
			// console.log(res.data);
			this.gjdq=res.data.data.nationalArea
			this.hz=res.data.data.passportNo
			this.sfz=res.data.data.idNumber
			this.jg=res.data.data.nativePlace
			this.mz=res.data.data.nation
			this.hyzt=res.data.data.maritalStatus
			this.sr=res.data.data.birthday
			this.xingzuo=res.data.data.constellation
			this.xx=res.data.data.bloodType
		})
  },
  methods: {
    handleClick() {},
    submitForm() {},
    // 上传头像
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
    // 上传头像
  },
  components: {
    mbx
  }
}
</script>

<style lang="scss" scoped>
.demo-ruleForm {
  margin-top: 30px;
}

.el-input {
  width: 300px;
  // margin-left: 300px;
}

.el-input--prefix {
  width: 360px;
  // margin-left: -100px;
}

.btn {
  width: 100px;
  // margin-left: 300px;
  background-color: #407ffe;
  height: 50px;
}
.el-button--primary {
  height: 40px;
  // width: 70px;
}

.div {
  display: flex;
  align-items: center;
  // justify-content: space-between;
  margin-top: 20px;
}

.divv {
  display: flex;
  align-items: center;
  margin-left: 70px;
  img {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}
.divve {
  display: flex;
  align-items: center;
  margin-left: 100px;
}

.btnn {
  margin-top: 20px;
  margin-left: 100px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.foolt{
  margin-left: 100px;
  margin-top: 20px;
}
</style>
