<template>
  <div class="mypage">
    <div style="text-align: center">
      <h1>人工标注</h1><hr>
      <h2>标注图片</h2>
      <img :src=this.$route.query.imageUrl alt="" class="annotionImage"><hr>

<!--      <div>-->
<!--        <h2>请填写为该图片标注的内容</h2>-->

<!--        <el-card class="box-card" shadow="always">-->
<!--          <div slot="header" class="clearfix" >-->
<!--            <p>名称</p>-->
<!--          </div>-->
<!--          <p>-->
<!--            <el-input-->
<!--                type="textarea"-->
<!--                maxlength="30"-->
<!--                show-word-limit-->
<!--                placeholder="请输入内容"-->
<!--                v-model="name"-->
<!--                clearable-->
<!--            >-->
<!--            </el-input>-->
<!--          </p>-->

<!--          </el-checkbox-group>-->
<!--        </el-card>-->

<!--        <el-card class="box-card" shadow="always">-->
<!--          <div slot="header" class="clearfix" >-->
<!--            <p>寓意</p>-->
<!--          </div>-->
<!--          <p>-->
<!--            <el-input-->
<!--                type="textarea"-->
<!--                maxlength="30"-->
<!--                show-word-limit-->
<!--                placeholder="请输入内容"-->
<!--                v-model="moral"-->
<!--                clearable-->
<!--            >-->
<!--            </el-input>-->
<!--          </p>-->

<!--          </el-checkbox-group>-->
<!--        </el-card>-->

<!--        <el-card class="box-card" shadow="always">-->
<!--          <div slot="header" class="clearfix" >-->
<!--            <p>构型</p>-->
<!--          </div>-->
<!--          <p>-->
<!--            <el-input-->
<!--                type="textarea"-->
<!--                maxlength="30"-->
<!--                show-word-limit-->
<!--                placeholder="请输入内容"-->
<!--                v-model="construction"-->
<!--                clearable-->
<!--            >-->
<!--            </el-input>-->
<!--          </p>-->

<!--          </el-checkbox-group>-->
<!--        </el-card>-->

<!--        <el-card class="box-card" shadow="always">-->
<!--          <div slot="header" class="clearfix" >-->
<!--            <p>民族</p>-->
<!--          </div>-->
<!--          <p>-->
<!--            <el-input-->
<!--                type="textarea"-->
<!--                maxlength="30"-->
<!--                show-word-limit-->
<!--                placeholder="请输入内容"-->
<!--                v-model="nationality"-->
<!--                clearable-->
<!--            >-->
<!--            </el-input>-->
<!--          </p>-->

<!--          </el-checkbox-group>-->
<!--        </el-card>-->


<!--        <el-card class="box-card" shadow="always">-->
<!--          <div slot="header" class="clearfix" >-->
<!--            <p>地域</p>-->
<!--          </div>-->
<!--          <p>-->
<!--            <el-input-->
<!--                type="textarea"-->
<!--                maxlength="30"-->
<!--                show-word-limit-->
<!--                placeholder="请输入内容"-->
<!--                v-model="region"-->
<!--                clearable-->
<!--            >-->
<!--            </el-input>-->
<!--          </p>-->

<!--          </el-checkbox-group>-->
<!--        </el-card>-->

<!--        <el-card class="box-card" shadow="always">-->
<!--          <div slot="header" class="clearfix" >-->
<!--            <p>年代</p>-->
<!--          </div>-->
<!--          <p>-->
<!--            <el-input-->
<!--                type="textarea"-->
<!--                maxlength="30"-->
<!--                show-word-limit-->
<!--                placeholder="请输入内容"-->
<!--                v-model="years"-->
<!--                clearable-->
<!--            >-->
<!--            </el-input>-->
<!--          </p>-->

<!--          </el-checkbox-group>-->
<!--        </el-card>-->

<!--        <el-card class="box-card" shadow="always">-->
<!--          <div slot="header" class="clearfix" >-->
<!--            <p>色彩</p>-->
<!--          </div>-->
<!--          <p>-->
<!--            <el-input-->
<!--                type="textarea"-->
<!--                maxlength="30"-->
<!--                show-word-limit-->
<!--                placeholder="请输入内容"-->
<!--                v-model="color"-->
<!--                clearable-->
<!--            >-->
<!--            </el-input>-->
<!--          </p>-->

<!--          </el-checkbox-group>-->
<!--        </el-card>-->

<!--        <el-card class="box-card" shadow="always">-->
<!--          <div slot="header" class="clearfix" >-->
<!--            <p>工艺美术</p>-->
<!--          </div>-->
<!--          <p>-->
<!--            <el-input-->
<!--                type="textarea"-->
<!--                maxlength="30"-->
<!--                show-word-limit-->
<!--                placeholder="请输入内容"-->
<!--                v-model="appliedArts"-->
<!--                clearable-->
<!--            >-->
<!--            </el-input>-->
<!--          </p>-->

<!--          </el-checkbox-group>-->
<!--        </el-card>-->

<!--        <el-card class="box-card" shadow="always">-->
<!--          <div slot="header" class="clearfix" >-->
<!--            <p>其他</p>-->
<!--          </div>-->
<!--          <p>-->
<!--            <el-input-->
<!--                type="textarea"-->
<!--                maxlength="30"-->
<!--                show-word-limit-->
<!--                placeholder="请输入内容"-->
<!--                v-model="other"-->
<!--                clearable-->
<!--            >-->
<!--            </el-input>-->
<!--          </p>-->

<!--          </el-checkbox-group>-->
<!--        </el-card>-->
<!--        <div style="clear:both;"></div>-->
<!--        <div style="text-align: center">-->
<!--          <el-button type="primary"  @click="submitAnnotion()">提交<i class="el-icon-upload el-icon&#45;&#45;right"></i></el-button>-->
<!--          <hr/>-->
<!--        </div>-->
<!--      </div>-->





      <div>
        <h2>请填写为该图片标注的内容</h2>

        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix" >
            <p>名称</p>
          </div>
          <p>
            <el-tag
                :key="tag"
                v-for="tag in name"
                closable
                :disable-transitions="false"
                @close="handleNameClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputNameVisible"
                v-model="inputNameValue"
                ref="saveNameTagInput"
                size="small"
                @keyup.enter.native="handleNameInputConfirm"
                @blur="handleNameInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showNameInput">+新建标注</el-button>
          </p>

<!--          </el-checkbox-group>-->
        </el-card>

        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix" >
            <p>寓意</p>
          </div>
          <p>
            <el-tag
                :key="tag"
                v-for="tag in moral"
                closable
                :disable-transitions="false"
                @close="handleMoralClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputMoralVisible"
                v-model="inputMoralValue"
                ref="saveMoralTagInput"
                size="small"
                @keyup.enter.native="handleMoralInputConfirm"
                @blur="handleMoralInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showMoralInput">+新建标注</el-button>
          </p>
<!--          </el-checkbox-group>-->
        </el-card>

        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix" >
            <p>构型</p>
          </div>
          <p>
            <el-tag
                :key="tag"
                v-for="tag in construction"
                closable
                :disable-transitions="false"
                @close="handleConstructionClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputConstructionVisible"
                v-model="inputConstructionValue"
                ref="saveConstructionTagInput"
                size="small"
                @keyup.enter.native="handleConstructionInputConfirm"
                @blur="handleConstructionInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showConstructionInput">+新建标注</el-button>
          </p>
<!--          </el-checkbox-group>-->
        </el-card>

        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix" >
            <p>民族</p>
          </div>
          <p>
            <el-tag
                :key="tag"
                v-for="tag in nationality"
                closable
                :disable-transitions="false"
                @close="handleNationalityClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputNationalityVisible"
                v-model="inputNationalityValue"
                ref="saveNationalityTagInput"
                size="small"
                @keyup.enter.native="handleNationalityInputConfirm"
                @blur="handleNationalityInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showNationalityInput">+新建标注</el-button>
          </p>
<!--          </el-checkbox-group>-->
        </el-card>


        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix" >
            <p>地域</p>
          </div>
          <p>
            <el-tag
                :key="tag"
                v-for="tag in region"
                closable
                :disable-transitions="false"
                @close="handleRegionClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputRegionVisible"
                v-model="inputRegionValue"
                ref="saveRegionTagInput"
                size="small"
                @keyup.enter.native="handleRegionInputConfirm"
                @blur="handleRegionInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showRegionInput">+新建标注</el-button>
          </p>
<!--          </el-checkbox-group>-->
        </el-card>

        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix" >
            <p>年代</p>
          </div>
          <p>
            <el-tag
                :key="tag"
                v-for="tag in years"
                closable
                :disable-transitions="false"
                @close="handleYearsClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputYearsVisible"
                v-model="inputYearsValue"
                ref="saveYearsTagInput"
                size="small"
                @keyup.enter.native="handleYearsInputConfirm"
                @blur="handleYearsInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showYearsInput">+新建标注</el-button>
          </p>
<!--          </el-checkbox-group>-->
        </el-card>

        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix" >
            <p>色彩</p>
          </div>
          <p>
            <el-tag
                :key="tag"
                v-for="tag in color"
                closable
                :disable-transitions="false"
                @close="handleColorClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputColorVisible"
                v-model="inputColorValue"
                ref="saveColorTagInput"
                size="small"
                @keyup.enter.native="handleColorInputConfirm"
                @blur="handleColorInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showColorInput">+新建标注</el-button>
          </p>
<!--          </el-checkbox-group>-->
        </el-card>

        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix" >
            <p>工艺美术</p>
          </div>
          <p>
            <el-tag
                :key="tag"
                v-for="tag in appliedArts"
                closable
                :disable-transitions="false"
                @close="handleAppliedArtsClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputAppliedArtsVisible"
                v-model="inputAppliedArtsValue"
                ref="saveAppliedArtsTagInput"
                size="small"
                @keyup.enter.native="handleAppliedArtsInputConfirm"
                @blur="handleAppliedArtsInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showAppliedArtsInput">+新建标注</el-button>
          </p>
<!--          </el-checkbox-group>-->
        </el-card>

        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix" >
            <p>其他</p>
          </div>
          <p>
            <el-tag
                :key="tag"
                v-for="tag in other"
                closable
                :disable-transitions="false"
                @close="handleOtherClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputOtherVisible"
                v-model="inputOtherValue"
                ref="saveOtherTagInput"
                size="small"
                @keyup.enter.native="handleOtherInputConfirm"
                @blur="handleOtherInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showOtherInput">+新建标注</el-button>
          </p>
<!--          </el-checkbox-group>-->
        </el-card>
        <div style="clear:both;"></div>
        <div style="text-align: center">
          <el-button type="primary"  @click="submitAnnotion()">提交<i class="el-icon-upload el-icon--right"></i></el-button>
          <hr/>
        </div>
      </div>






      <h2>相似图片</h2>
<!--      <el-button   @click="loadSimImageTags()" icon="el-icon-info">点击加载相似图片标签</el-button>-->
    </div>
<!--    <img v-for="one in similarImages" :src="one.imageUrl" class="similarImages">-->
    <div v-for="(item,index) in similarImages" :key="index" @click="showDialog(item)">
      <img :src="item.imageUrl"  class="similarImages">
    </div>
    <el-dialog  :visible.sync="isShow">
      <b>图片标签展示</b>
      <div style="text-align: center"><img :src="this.showImgeURl"></div>
      <b>标签：</b>
      <p>名称：<el-tag
          v-for="i in showImageName"
          :key="i"
          :type="i"
          :hit="true"
          type="info">
        {{ i }}
      </el-tag></p>
      <p>寓意：<el-tag
          v-for="i in showImageMoral"
          :key="i"
          :type="i"
          :hit="true"
          type="info">
        {{ i }}
      </el-tag></p>
      <p>构型：<el-tag
          v-for="i in showImageConstruction"
          :key="i"
          :type="i"
          :hit="true"
          type="info">
        {{ i }}
      </el-tag></p>
      <p>民族：<el-tag
          v-for="i in showImageNationality"
          :key="i"
          :type="i"
          :hit="true"
          type="info">
        {{ i }}
      </el-tag></p>
      <p>地域：<el-tag
          v-for="i in showImageRegion"
          :key="i"
          :type="i"
          :hit="true"
          type="info">
        {{ i }}
      </el-tag></p>
      <p>年代：<el-tag
          v-for="i in showImageYears"
          :key="i"
          :type="i"
          :hit="true"
          type="info">
        {{ i }}
      </el-tag></p>
      <p>色彩：<el-tag
          v-for="i in showImageColor"
          :key="i"
          :type="i"
          :hit="true"
          type="info">
        {{ i }}
      </el-tag></p>
      <p>工艺美术：<el-tag
          v-for="i in showImageAppliedArts"
          :key="i"
          :type="i"
          :hit="true"
          type="info">
        {{ i }}
      </el-tag></p>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="isShow = false">确 定</el-button></div>
    </el-dialog>

  </div>

</template>

<script>
export default {
  name: "HumanAnnotion",
  data(){
    return{
      //相似图片url
      similarImages:[],

      // imageNo:"",
      // name:"",
      // moral:"",
      // construction:"",
      // nationality:"",
      // region:"",
      // years:"",
      // color:"",
      // appliedArts:"",
      // other:"",

      //填写的标签信息
      imageNo:"",
      name:[],
      moral:[],
      construction:[],
      nationality:[],
      region:[],
      years:[],
      color:[],
      appliedArts:[],
      other:[],

      //相似图片的标签信息
      showImgeURl:'',
      showImageName:[],
      showImageMoral:[],
      showImageConstruction:[],
      showImageNationality:[],
      showImageRegion:[],
      showImageYears:[],
      showImageColor:[],
      showImageAppliedArts:[],
      isShow:false,

      //动态增添标签
      inputNameVisible: false,
      inputMoralVisible: false,
      inputConstructionVisible: false,
      inputNationalityVisible: false,
      inputRegionVisible: false,
      inputYearsVisible: false,
      inputColorVisible: false,
      inputAppliedArtsVisible: false,
      inputOtherVisible: false,

      inputNameValue: '',
      inputMoralValue: '',
      inputConstructionValue: '',
      inputNationalityValue: '',
      inputRegionValue: '',
      inputYearsValue: '',
      inputColorValue: '',
      inputAppliedArtsValue: '',
      inputOtherValue: '',
    }
  },
  methods:{
    //提交注解
    submitAnnotion(){
      console.log(1)

      this.$axios({
        method:'post',
        url:'http://cgo.culturecompute.com:9999/labelIn/?uuid'+this.imageNo,
        data:{    //这里是发送给后台的数据
          name:this.name,
          moral:this.moral,
          construction:this.construction,
          nationality:this.nationality,
          region:this.region,
          years:this.years,
          color:this.color,
          appliedArts:this.appliedArts,
          other:this.other,
        }
      }).then((response) =>{          //这里使用了ES6的语法
        console.log(response)       //请求成功返回的数据
        this.$message({
          showClose: true,
          message: '提交成功',
          type: 'success'
        });
      }).catch((error) =>{
        console.log(error)       //请求失败返回的数据
        this.$message({
          showClose: true,
          message: '提交失败',
          type: 'error'
        });
      })
    },
      //对话框，获取图片标签信息
      showDialog(item){

        this.showImgeURl=item.imageUrl

        //获取图像编号
        var showImageUrlSplit=this.showImgeURl.split('/')
        var tmp=showImageUrlSplit[5]
        var showImageNo=tmp.toString().split('.')[0]

        this.$axios({
          method:'post',
          url:'http://cgo.culturecompute.com:9999/labelOut/?uuid='+showImageNo,
        }).then((response) =>{          //这里使用了ES6的语法
          console.log(response)       //请求成功返回的数据
          var annotionData=response.data

          this.showImageName.length=0
          for(var key in annotionData['name']){
            if(annotionData['name'][key]!='')
              this.showImageName.push(annotionData['name'][key])
          }
          this.showImageMoral.length=0
          for(var key in annotionData['moral']){
            if(annotionData['moral'][key]!='')
              this.showImageMoral.push(annotionData['moral'][key])
          }
          this.showImageConstruction.length=0
          for(var key in annotionData['construction']){
            if(annotionData['construction'][key]!='')
              this.showImageConstruction.push(annotionData['construction'][key])
          }
          this.showImageNationality.length=0
          for(var key in annotionData['nationality']){
            if(annotionData['nationality'][key]!='')
              this.showImageNationality.push(annotionData['nationality'][key])
          }
          this.showImageRegion.length=0
          for(var key in annotionData['region']){
            if(annotionData['region'][key]!='')
              this.showImageRegion.push(annotionData['region'][key])
          }
          this.showImageYears.length=0
          for(var key in annotionData['years']){
            if(annotionData['years'][key]!='')
              this.showImageYears.push(annotionData['years'][key])
          }
          this.showImageColor.length=0
          for(var key in annotionData['color']){
            if(annotionData['color'][key]!='')
              this.showImageColor.push(annotionData['color'][key])
          }
          this.showImageAppliedArts.length=0
          for(var key in annotionData['appliedArts']){
            if(annotionData['appliedArts'][key]!='')
              this.showImageAppliedArts.push(annotionData['appliedArts'][key])
          }

        }).catch((error) =>{
          console.log(error)       //请求失败返回的数据
        })
        this.isShow=true
      },

    //名称标签增删方法
    handleNameClose(tag) {
      this.name.splice(this.name.indexOf(tag), 1);
    },
    showNameInput() {
      this.inputNameVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveNameTagInput.$refs.input.focus();
      });
    },
    handleNameInputConfirm() {
      let inputNameValue = this.inputNameValue;
      if (inputNameValue) {
        this.name.push(inputNameValue);
      }
      this.inputNameVisible = false;
      this.inputNameValue = '';
    },

    //寓意标签增删方法
    handleMoralClose(tag) {
      this.moral.splice(this.moral.indexOf(tag), 1);
    },
    showMoralInput() {
      this.inputMoralVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveMoralTagInput.$refs.input.focus();
      });
    },
    handleMoralInputConfirm() {
      let inputMoralValue = this.inputMoralValue;
      if (inputMoralValue) {
        this.moral.push(inputMoralValue);
      }
      this.inputMoralVisible = false;
      this.inputMoralValue = '';
    },

    //构型标签增删方法
    handleConstructionClose(tag) {
      this.construction.splice(this.construction.indexOf(tag), 1);
    },
    showConstructionInput() {
      this.inputConstructionVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveConstructionTagInput.$refs.input.focus();
      });
    },
    handleConstructionInputConfirm() {
      let inputConstructionValue = this.inputConstructionValue;
      if (inputConstructionValue) {
        this.construction.push(inputConstructionValue);
      }
      this.inputConstructionVisible = false;
      this.inputConstructionValue = '';
    },


    //民族标签增删方法
    handleNationalityClose(tag) {
      this.nationality.splice(this.nationality.indexOf(tag), 1);
    },
    showNationalityInput() {
      this.inputNationalityVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveNationalityTagInput.$refs.input.focus();
      });
    },
    handleNationalityInputConfirm() {
      let inputNationalityValue = this.inputNationalityValue;
      if (inputNationalityValue) {
        this.nationality.push(inputNationalityValue);
      }
      this.inputNationalityVisible = false;
      this.inputNationalityValue = '';
    },

    //地域标签增删方法
    handleRegionClose(tag) {
      this.region.splice(this.region.indexOf(tag), 1);
    },
    showRegionInput() {
      this.inputRegionVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveRegionTagInput.$refs.input.focus();
      });
    },
    handleRegionInputConfirm() {
      let inputRegionValue = this.inputRegionValue;
      if (inputRegionValue) {
        this.region.push(inputRegionValue);
      }
      this.inputRegionVisible = false;
      this.inputRegionValue = '';
    },

    //年代标签增删方法
    handleYearsClose(tag) {
      this.years.splice(this.years.indexOf(tag), 1);
    },
    showYearsInput() {
      this.inputYearsVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveYearsTagInput.$refs.input.focus();
      });
    },
    handleYearsInputConfirm() {
      let inputYearsValue = this.inputYearsValue;
      if (inputYearsValue) {
        this.years.push(inputYearsValue);
      }
      this.inputYearsVisible = false;
      this.inputYearsValue = '';
    },

    //色彩标签增删方法
    handleColorClose(tag) {
      this.color.splice(this.color.indexOf(tag), 1);
    },
    showColorInput() {
      this.inputColorVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveColorTagInput.$refs.input.focus();
      });
    },
    handleColorInputConfirm() {
      let inputColorValue = this.inputColorValue;
      if (inputColorValue) {
        this.color.push(inputColorValue);
      }
      this.inputColorVisible = false;
      this.inputColorValue = '';
    },


    //工艺美术标签增删方法
    handleAppliedArtsClose(tag) {
      this.appliedArts.splice(this.appliedArts.indexOf(tag), 1);
    },
    showAppliedArtsInput() {
      this.inputAppliedArtsVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveAppliedArtsTagInput.$refs.input.focus();
      });
    },
    handleAppliedArtsInputConfirm() {
      let inputAppliedArtsValue = this.inputAppliedArtsValue;
      if (inputAppliedArtsValue) {
        this.appliedArts.push(inputAppliedArtsValue);
      }
      this.inputAppliedArtsVisible = false;
      this.inputAppliedArtsValue = '';
    },

    //其他标签增删方法
    handleOtherClose(tag) {
      this.other.splice(this.other.indexOf(tag), 1);
    },
    showOtherInput() {
      this.inputOtherVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveOtherTagInput.$refs.input.focus();
      });
    },
    handleOtherInputConfirm() {
      let inputOtherValue = this.inputOtherValue;
      if (inputOtherValue) {
        this.other.push(inputOtherValue);
      }
      this.inputOtherVisible = false;
      this.inputOtherValue = '';
    },

},
  created() {
    //获取图像编号
    var imageUrl=this.$route.query.imageUrl.toString()
    var imageUrlSplit=imageUrl.split('/')
    var tmp=imageUrlSplit[5]
    this.imageNo=tmp.toString().split('.')[0]
    this.$axios({
      method:'get',
      url:'http://cgo.culturecompute.com:9999/simiimageOut/?uuid='+this.imageNo,
    }).then((response) =>{          //这里使用了ES6的语法
      console.log(response)       //请求成功返回的数据
      var dataList=response.data['images']
      for(var i in dataList){//遍历packJson 数组时，i为索引
        var item={'imageUrl':"http://cgo.culturecompute.com:9999/"+dataList[i]}
        this.similarImages.push(item)

      }
    }).catch((error) =>{
       console.log(error)       //请求失败返回的数据
    })

    // console.log(this.similarImages)

  },
  mounted(){

  }
}
</script>

<style scoped>
.mypage{
  margin-left: 10%;
  margin-right: 10%;

}

h1{
  font-size: 30px;
}

h2{
  font-size: 20px;
}
p{
  font-size: 17px;
  /*background:#d4e3dc;*/

}

.similarImages{
  margin: 15px;
  /*让图片整齐*/
  object-fit: cover;
  height: 150px;
  width:150px;
  float:left;

}
.el-tag{
  margin: 2px;
}
.annotionImage{
  height: 350px;
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
  height:180px
}
hr{
  margin: 5px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
