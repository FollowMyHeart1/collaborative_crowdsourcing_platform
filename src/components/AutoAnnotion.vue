<template>
  <div class="mypage" v-loading="loading"  element-loading-text="正在标注中">
    <h1>自动标注</h1><hr>
    <el-form :model="form" style="text-align: center;font-size: 40px">
      <h2>请上传要标注的图片：</h2>
      <el-form-item >
        <el-upload
            ref="upload"
            action="http://cgo.culturecompute.com:9999/imageIn"
            accept="image/png,image/gif,image/jpg,image/jpeg"
            list-type="picture-card"
            :limit=limitNum
            :auto-upload="false"
            :on-exceed="handleExceed"
            :before-upload="handleBeforeUpload"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <el-dialog :visible.sync="dialogVisible1">
          超出上传个数，只能上传一张图片
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="uploadFile">立即上传</el-button>
        <el-button size="small">取消</el-button>
      </el-form-item>
    </el-form>
    <hr>
    <div style="text-align: center">
      <el-button size="small" type="primary" @click="AutoAnnotion">自动标注</el-button>
<!--      <div v-loading="loading"  element-loading-text="拼命加载中" style=""></div>-->
    </div>
    <div   v-show="showAnnotionResult">
      <h2>标注结果展示</h2>
      <div>
        <el-card class="box-card" shadow="always" v-show="showName">
          <div slot="header" class="clearfix" >
            <p>名称</p>
          </div>
          <p>
            <el-tag
                v-for="i in name"
                :key="i"
                :type="i"
                :hit="true"
                size="small">
              {{ i }}
            </el-tag>
          </p>

        </el-card>
        <el-card class="box-card" shadow="always" v-show="showMoral">
          <div slot="header" class="clearfix" >
            <p>寓意</p>
          </div>
          <p>
            <el-tag
                v-for="i in moral"
                :key="i"
                :type="i"
                :hit="true"
                size="small">
              {{ i }}
            </el-tag>
          </p>

        </el-card>
        <el-card class="box-card" shadow="always" v-show="showConstruction">
          <div slot="header" class="clearfix" >
            <p>构型</p>
          </div>
          <p>
            <el-tag
                v-for="i in construction"
                :key="i"
                :type="i"
                :hit="true"
                size="small">
              {{ i }}
            </el-tag>
          </p>

        </el-card>
        <el-card class="box-card" shadow="always" v-show="showNationality">
          <div slot="header" class="clearfix" >
            <p>民族</p>
          </div>
          <p>
            <el-tag
                v-for="i in nationality"
                :key="i"
                :type="i"
                :hit="true"
                size="small">
              {{ i }}
            </el-tag>
          </p>

        </el-card>
        <el-card class="box-card" shadow="always" v-show="showRegion">
          <div slot="header" class="clearfix" >
            <p>地域</p>
          </div>
          <p>
            <el-tag
                v-for="i in region"
                :key="i"
                :type="i"
                :hit="true"
                size="small">
              {{ i }}
            </el-tag>
          </p>

        </el-card>
        <el-card class="box-card" shadow="always" v-show="showYears">
          <div slot="header" class="clearfix" >
            <p>年代</p>
          </div>
          <p>
            <el-tag
                v-for="i in years"
                :key="i"
                :type="i"
                :hit="true"
                size="small">
              {{ i }}
            </el-tag>
          </p>

        </el-card>
        <el-card class="box-card" shadow="always" v-show="showColor">
          <div slot="header" class="clearfix" >
            <p>色彩</p>
          </div>
          <p>
            <el-tag
                v-for="i in color"
                :key="i"
                :type="i"
                :hit="true"
                size="small">
              {{ i }}
            </el-tag>
          </p>

        </el-card>
        <el-card class="box-card" shadow="always" v-show="showAppliedArts">
          <div slot="header" class="clearfix" >
            <p>工艺美术</p>
          </div>
          <p>
            <el-tag
                v-for="i in appliedArts"
                :key="i"
                :type="i"
                :hit="true"
                size="small">
              {{ i }}
            </el-tag>
          </p>

        </el-card>
        <el-card class="box-card" shadow="always" v-show="showOther">
          <div slot="header" class="clearfix" >
            <p>其他</p>
          </div>

          <el-tag
              v-for="i in other"
              :key="i"
              :type="i"
              :hit="true"
              size="small">
            {{ i }}
          </el-tag>
        </el-card>

      </div>

    </div>
  </div>

</template>

<script>
export default {
name: "AutoAnnotion",
  data() {
    return{
      AnnotionResShow:true,
      dialogImageUrl: '',
      dialogVisible: false,
      dialogVisible1:false,
      limitNum: 1,
      form: {},

      name:[],
      moral:[],
      construction:[],
      nationality:[],
      region:[],
      years:[],
      color:[],
      appliedArts:[],
      other:[],

      //上传图片的位置
      imagePath:'',

      showAnnotionResult:false,
      showName:false,
      showMoral:false,
      showConstruction:false,
      showNationality:false,
      showRegion:false,
      showYears:false,
      showColor:false,
      showAppliedArts:false,
      showOther:false,
      //加载符号的控制
      loading:false,

    }
  },
  methods: {

    //自动标注
    AutoAnnotion(){
      //打开加载符号，关闭结果选项卡
      this.loading=true
      this.showAnnotionResult=false


      //获取上传图像编号
      var imageUrl=this.imagePath
      var imageUrlSplit=imageUrl.split('/')
      var tmp=imageUrlSplit[2]


      this.$axios({
        method:'get',
        url:'http://cgo.culturecompute.com:9999/autoLabel/?uuid='+tmp,
      }).then((response) =>{          //这里使用了ES6的语法

        console.log(response)       //请求成功返回的数据

        var imageAnnotonsData=response.data
        this.name.length=0
        this.moral.length=0
        this.construction.length=0
        this.nationality.length=0
        this.region.length=0;
        this.years.length=0
        this.color.length=0
        this.appliedArts.length=0
        this.other.length=0
        //名称
        for(var i in imageAnnotonsData['name']){
          if(imageAnnotonsData['name'][i]!="")
            this.name.push(imageAnnotonsData['name'][i])
        }
        //寓意
        for(var i in imageAnnotonsData['moral']){
          if(imageAnnotonsData['moral'][i]!="")
            this.moral.push(imageAnnotonsData['moral'][i])
        }
        //构型
        for(var i in imageAnnotonsData['construction']){

          if(imageAnnotonsData['construction'][i]!="")
            this.construction.push(imageAnnotonsData['construction'][i])
        }
        //民族
        for(var i in imageAnnotonsData['nationality']){
          if(imageAnnotonsData['nationality'][i]!="")
            this.nationality.push(imageAnnotonsData['nationality'][i])
        }

        //地域
        for(var i in imageAnnotonsData['region']){
          if(imageAnnotonsData['region'][i]!="")
            this.region.push(imageAnnotonsData['region'][i])
        }

        //年代
        for(var i in imageAnnotonsData['years']){
          if(imageAnnotonsData['years'][i]!="")
            this.years.push(imageAnnotonsData['years'][i])
        }

        //色彩
        for(var i in imageAnnotonsData['color']){
          if(imageAnnotonsData['color'][i]!="")
            this.color.push(imageAnnotonsData['color'][i])
        }

        //工艺美术
        for(var i in imageAnnotonsData['appliedArts']){
          if(imageAnnotonsData['appliedArts'][i]!="")
            this.appliedArts.push(imageAnnotonsData['appliedArts'][i])
        }

        //其他
        for(var i in imageAnnotonsData['other']){
          if(imageAnnotonsData['other'][i]!="")
            this.other.push(imageAnnotonsData['other'][i])
        }

        this.showAnnotionResult=true
        if(this.name!=null&&this.name.length!=0)
          this.showName=true
        if(this.moral!=null&&this.moral.length!=0)
          this.showMoral=true
        if(this.construction!=null&&this.construction.length!=0)
        this.showConstruction=true
        if(this.nationality!=null&&this.nationality.length!=0)
          this.showNationality=true
        if(this.region!=null&&this.region.length!=0)
          this.showRegion=true
        if(this.years!=null&&this.years.length!=0)
          this.showYears=true
        if(this.color!=null&&this.color.length!=0)
          this.showColor=true
        if(this.appliedArts!=null&&this.appliedArts.length!=0)
          this.showAppliedArts=true
        if(this.other!=null&&this.other.length!=0)
          this.showOther=true

        this.loading=false

      }).catch((error) =>{
        console.log(error)       //请求失败返回的数据
      })
    },
    // 上传文件之前的钩子
    handleBeforeUpload(file){
      console.log('before')
      if(!(file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg' || file.type === 'image/jpeg')) {
        this.$notify.warning({
          title: '警告',
          message: '请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片'
        })
      }
      let size = file.size / 1024 / 1024 / 2
      if(size > 2) {
        this.$notify.warning({
          title: '警告',
          message: '图片大小必须小于2M'
        })
      }
    },
    // 文件超出个数限制时的钩子
    handleExceed(files, fileList) {
        this.dialogVisible1=true;

    },
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    uploadFile() {
      this.$refs.upload.submit()
    },
    handleSuccess(res) {
      console.log(res)
      this.imagePath=res.file
    }
  },
  created() {

  },
}
</script>

<style scoped>
.mypage{
  /*text-align: center;*/
  margin-left: 10%;
  margin-right: 10%;
}

h1{
  font-size: 30px;
  text-align: center;
}
h2{
  font-size: 20px;
  text-align: center;
}
p{
  font-size: 15px;
  /*background:#d4e3dc;*/
  /*margin-bottom: 2px;*/

}
.el-tag{
  margin: 4px;
}



/*.clearfix:before,*/
/*.clearfix:after {*/
/*  display: table;*/
/*  content: "";*/
/*}*/
/*.clearfix:after {*/
/*  clear: both*/
/*}*/
.clearfix{
  height: 1px;
  margin-bottom: 15px;
}

.box-card {
  width: 400px;
  float:left;
  width:30%;
  margin: 10px;
  margin-bottom: 10px;
  height: 170px;
}
hr{
  margin: 5px;
}
</style>