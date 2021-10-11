<template>
<div class="mypage">

    <div style="text-align: center">
      <h1>标注评判</h1><hr>
      <h2>标注图片</h2>
      <img :src=this.$route.query.imageUrl alt="" class="annotionImage"><hr>
      <div>
        <h2 >请为该图片选择你认为正确的标注</h2>

        <el-card class="box-card" shadow="always" v-show="showName">
          <div slot="header" class="clearfix" >
            <p>名称</p>
          </div>
          <el-checkbox-group v-model="checkedNames" >
            <el-checkbox  v-for="i in name" :label="i" :key="i" border fill="red" size="small"></el-checkbox>
          </el-checkbox-group>
        </el-card>
        <el-card class="box-card" shadow="always" v-show="showMoral">
          <div slot="header" class="clearfix"  size="small">
            <p>寓意</p>
          </div>
          <el-checkbox-group v-model="checkedMoral" >
            <el-checkbox  v-for="i in moral" :label="i" :key="i" border fill="red" size="small"></el-checkbox>
          </el-checkbox-group>
        </el-card>
        <el-card class="box-card" shadow="always" v-show="showConstruction">
          <div slot="header" class="clearfix" >
            <p>构型</p>
          </div>
          <el-checkbox-group v-model="checkedConstruction" >
            <el-checkbox  v-for="i in construction" :label="i" :key="i" border fill="red"  size="small"></el-checkbox>
          </el-checkbox-group>
        </el-card>
        <el-card class="box-card" shadow="always" v-show="showNationality">
          <div slot="header" class="clearfix" >
            <p>民族</p>
          </div>
          <el-checkbox-group v-model="checkedNationality" >
            <el-checkbox  v-for="i in nationality" :label="i" :key="i" border fill="red"  size="small"></el-checkbox>
          </el-checkbox-group>
        </el-card>
        <el-card class="box-card" shadow="always" v-show="showRegion">
          <div slot="header" class="clearfix" >
            <p>地域</p>
          </div>
          <el-checkbox-group v-model="checkedRegions" >
            <el-checkbox  v-for="i in region" :label="i" :key="i" border fill="red"  size="small"></el-checkbox>
          </el-checkbox-group>
        </el-card>
        <el-card class="box-card" shadow="always" v-show="showYears">
          <div slot="header" class="clearfix" >
            <p>年代</p>
          </div>
          <el-checkbox-group v-model="checkedYears" >
            <el-checkbox  v-for="i in years" :label="i" :key="i" border fill="red"  size="small"></el-checkbox>
          </el-checkbox-group>
        </el-card>
        <el-card class="box-card" shadow="always" v-show="showColor">
          <div slot="header" class="clearfix" >
            <p>色彩</p>
          </div>
          <el-checkbox-group v-model="checkedColors" >
            <el-checkbox  v-for="i in color" :label="i" :key="i" border fill="red"  size="small"></el-checkbox>
          </el-checkbox-group>
        </el-card>
        <el-card class="box-card" shadow="always" v-show="showAppliedArts">
          <div slot="header" class="clearfix" >
            <p>工艺美术</p>
          </div>
          <el-checkbox-group v-model="checkedAppliedArts" >
            <el-checkbox  v-for="i in appliedArts" :label="i" :key="i" border fill="red"  size="small"></el-checkbox>
          </el-checkbox-group>
        </el-card>
        <el-card class="box-card" shadow="always" v-show="showOther">
          <div slot="header" class="clearfix" >
            <p>其他</p>
          </div>
          <el-checkbox-group v-model="checkedOthers" >
            <el-checkbox  v-for="i in other" :label="i" :key="i" border fill="red"  size="small"></el-checkbox>
          </el-checkbox-group>
        </el-card>
        <div style="clear:both;"></div>
        <div style="text-align: center">
          <el-button type="primary"  @click="submitAnnotion" >提交<i class="el-icon-upload el-icon--right"  size="small"></i></el-button>
        </div>
        <hr>
      </div>
      <h2>相似图片</h2>

    </div>
<!--  <img v-for="one in similarImages" :src="one" @click="" class="similarImages">-->
<!--  <hr>-->


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
name: "MachineAnnotion",
data(){
  return{
    similarImages:[],
    imageNo:"",


    checkedNames:[],
    checkedMoral:[],
    checkedConstruction:[],
    checkedNationality:[],
    checkedRegions:[],
    checkedYears:[],
    checkedColors:[],
    checkedAppliedArts:[],
    checkedOthers:[],
    name:[],
    moral:[],
    construction:[],
    nationality:[],
    region:[],
    years:[],
    color:[],
    appliedArts:[],
    other:[],
    //模块是否隐藏展示
    showName:false,
    showMoral:false,
    showConstruction:false,
    showNationality:false,
    showRegion:false,
    showYears:false,
    showColor:false,
    showAppliedArts:false,
    showOther:false,

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

  }
},
  created() {
        //获取图像编号
        var imageUrl=this.$route.query.imageUrl.toString()
        var imageUrlSplit=imageUrl.split('/')
        var tmp=imageUrlSplit[5]
        this.imageNo=tmp.toString().split('.')[0]


        this.$axios.all([
        this.$axios.post('http://cgo.culturecompute.com:9999/simiimageOut/?uuid='+this.imageNo),
        this.$axios.post('http://cgo.culturecompute.com:9999/labelOut/?uuid='+this.imageNo),
    ])
        .then(this.$axios.spread((acct1,acct2) => {
         console.log(acct1,acct2)
          //获取相似图片URL
          var similarImagesData=acct1.data['images']
          for(var i in similarImagesData){//遍历packJson 数组时，i为索引
            this.similarImages.push({'imageUrl':"http://cgo.culturecompute.com:9999/"+similarImagesData[i]})
          }

          //获取图片的注解
          var imageAnnotonsData=acct2.data
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

          if(this.name.length!=0)
            this.showName=true
          if(this.moral.length!=0)
            this.showMoral=true
          if(this.construction.length!=0)
            this.showConstruction=true
          if(this.nationality.length!=0)
            this.showNationality=true
          if(this.region.length!=0)
            this.showRegion=true
          if(this.years.length!=0)
            this.showYears=true
          if(this.color.length!=0)
            this.showColor=true
          if(this.appliedArts.length!=0)
            this.showAppliedArts=true
          if(this.other.length!=0)
            this.showOther=true
        }));
  },
  methods:{

    //提交注解
    submitAnnotion(){
      console.log(1)

      this.$axios({
        method:'post',
        url:'http://cgo.culturecompute.com:9999/jugeLabel/?uid='+this.imageNo,
        data:{    //这里是发送给后台的数据
          name:this.checkedNames,
          moral:this.checkedMoral,
          construction:this.checkedConstruction,
          nationality:this.checkedNationality,
          region:this.checkedRegions,
          years:this.checkedYears,
          color:this.checkedColors,
          appliedArts:this.checkedAppliedArts,
          other:this.checkedOthers,
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
    }
  },


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
  /*background:#d4e3dc*/

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
.el-checkbox{
  margin: 2px;
}
.el-message{
  width: 20px;
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
  width: 500px;
  height:170px;
  float:left;
  width:30%;
  margin: 0 15px;
  margin-bottom: 15px;
  text-align: left;
}
hr{
  margin: 5px;
}
</style>