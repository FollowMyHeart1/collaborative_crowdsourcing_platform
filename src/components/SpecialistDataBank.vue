<template>
<div class="thePage">

<h1>专家资料库</h1><hr>
  <div v-for="(item,index) in imageDatas" :key="index" @click="showDialog(item)">
    <img :src="item.imageUrl"  class="Images">
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
    <p>地区：<el-tag
        v-for="i in showImageRegion"
        :key="i"
        :type="i"
        :hit="true"
        type="info">
      {{ i }}
    </el-tag></p>
    <p>年份：<el-tag
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
<!--    <el-table :data="this.showImageAnnotion">-->
<!--&lt;!&ndash;      <el-table-column property="date" label="日期" width="150"></el-table-column>&ndash;&gt;-->
<!--      <el-table-column  label="名称" width="400">-->
<!--        <el-tag-->
<!--          v-for="i in showImageName"-->
<!--          :key="i"-->
<!--          :type="i"-->
<!--          :hit="true"-->
<!--          type="info">-->
<!--        {{ i }}-->
<!--      </el-tag></el-table-column>-->
<!--      <el-table-column property="moral" label="寓意" width="400">-->
<!--        <el-tag-->
<!--            v-for="i in showImageMoral"-->
<!--            :key="i"-->
<!--            :type="i"-->
<!--            :hit="true"-->
<!--            type="info">-->
<!--          {{ i }}-->
<!--        </el-tag>-->
<!--      </el-table-column>-->
<!--      <el-table-column property="construction" label="构型" width="400">-->
<!--        <el-tag-->
<!--            v-for="i in showImageConstruction"-->
<!--            :key="i"-->
<!--            :type="i"-->
<!--            :hit="true"-->
<!--            type="info">-->
<!--          {{ i }}-->
<!--        </el-tag>-->
<!--      </el-table-column>-->
<!--      <el-table-column property="nationality" label="民族" width="400">-->
<!--        <el-tag-->
<!--            v-for="i in showImageNationality"-->
<!--            :key="i"-->
<!--            :type="i"-->
<!--            :hit="true"-->
<!--            type="info">-->
<!--          {{ i }}-->
<!--        </el-tag>-->
<!--      </el-table-column>-->
<!--      <el-table-column property="region" label="地区" width="400">-->
<!--        <el-tag-->
<!--            v-for="i in showImageRegion"-->
<!--            :key="i"-->
<!--            :type="i"-->
<!--            :hit="true"-->
<!--            type="info">-->
<!--          {{ i }}-->
<!--        </el-tag>-->
<!--      </el-table-column>-->
<!--      <el-table-column property="color" label="颜色" width="400">-->
<!--        <el-tag-->
<!--            v-for="i in showImageColor"-->
<!--            :key="i"-->
<!--            :type="i"-->
<!--            :hit="true"-->
<!--            type="info">-->
<!--          {{ i }}-->
<!--        </el-tag>-->
<!--      </el-table-column>-->
<!--      <el-table-column property="years" label="年代" width="400">-->
<!--        <el-tag-->
<!--            v-for="i in showImageYears"-->
<!--            :key="i"-->
<!--            :type="i"-->
<!--            :hit="true"-->
<!--            type="info">-->
<!--          {{ i }}-->
<!--        </el-tag>-->
<!--      </el-table-column>-->
<!--      <el-table-column property="appliedArts" label="工艺美术" width="400">-->
<!--        <el-tag-->
<!--            v-for="i in showImageAppliedArts"-->
<!--            :key="i"-->
<!--            :type="i"-->
<!--            :hit="true"-->
<!--            type="info">-->
<!--          {{ i }}-->
<!--        </el-tag>-->
<!--      </el-table-column>-->
<!--&lt;!&ndash;      <el-table-column property="address" label="地址"></el-table-column>&ndash;&gt;-->
<!--    </el-table>-->



<!--    {{this.showImageAnnotion}}-->
    <div slot="footer" class="dialog-footer">
      <el-button @click="isShow = false">取 消</el-button>
      <el-button type="primary" @click="isShow = false">确 定</el-button></div>
  </el-dialog>

</div>
</template>

<script>
export default {
name: "SpecialistDataBank",
  data(){
    return{
      imageDatas:[],
      showImgeURl:'',
      showImageAnnotion:[],
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
    this.imageDatas.length=0
    this.$axios({
      method:'get',
      url:'http://cgo.culturecompute.com:9999/imageOut',
    }).then((response) =>{          //这里使用了ES6的语法
      console.log(response)       //请求成功返回的数据
      var dataList=response.data['images']
      for(var i in dataList){//遍历packJson 数组时，i为索引
        if(this.imageDatas.indexOf(dataList[i].id) < 0)
          this.imageDatas.push({'imageUrl':"http://cgo.culturecompute.com:9999/"+dataList[i],'isShowPopover':false})
      }
    }).catch((error) =>{


      console.log(error)       //请求失败返回的数据
    })
  },
  methods:{

    showDialog(item){
      this.showImageAnnotion.length=0
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

        this.showImageAnnotion.push({
          'name':annotionData['name'],
          'moral':annotionData['moral'],
          'construction':annotionData['construction'],
          'nationality':annotionData['nationality'],
          'region':annotionData['region'],
          'years':annotionData['years'],
          'color':annotionData['color'],
          'appliedArts':annotionData['appliedArts'],
          'other':annotionData['other']
        })
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
h1{
  font-size: 30px;
  text-align: center;
}

.Images{
  margin: 15px;
  /*让图片整齐*/
  object-fit: cover;
  height: 150px;
  width:150px;
  float:left;

}
.thePage{
  margin-left: 5%;
  margin-right: 5%;
}
.el-tag{
  margin: 2px;
}
</style>