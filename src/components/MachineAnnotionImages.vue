<template>
 <div class="second">
<!--   <router-link  :to="{name:'第三个页面',query:{imageUrl:url}}">
     <img src="http://www.china-train.net/content/images/temp/r_9.jpg" alt="">
   </router-link>
   <img v-for="image in imageDatas" :src="image.url" :key="image.id">-->
   <h1>标注评判</h1>

   <hr>
   <router-link v-for="image in imageDatas" :to="{name:'机器标注人工判断界面',query:{imageUrl:image}}" :key="image.id">
     <img :src=image>
   </router-link>
 </div>
</template>

<script>
export default {
name: "MachineAnnotionImages",
  data(){
  return{
    imageDatas:[
        
/*      {id:1,url:"http://www.china-train.net/content/images/temp/r_9.jpg"},
      {id:2,url:"http://www.china-train.net/content/images/temp/r_9.jpg"},
      {id:3,url:"https://img-blog.csdnimg.cn/20190831145504204.jpg?x-oss-process=image/resize,m_fixed,h_224,w_310"},
      {id:4,url:"https://img-blog.csdnimg.cn/20190831145504204.jpg?x-oss-process=image/resize,m_fixed,h_224,w_310"},
      {id:5,url:"https://img-blog.csdnimg.cn/20190831145504204.jpg?x-oss-process=image/resize,m_fixed,h_224,w_310"},
      {id:6,url:"https://img-blog.csdnimg.cn/20190831145504204.jpg?x-oss-process=image/resize,m_fixed,h_224,w_310"},
      {id:7,url:"https://img-blog.csdnimg.cn/20190831145504204.jpg?x-oss-process=image/resize,m_fixed,h_224,w_310"},
      {id:8,url:"https://img-blog.csdnimg.cn/20190831145504204.jpg?x-oss-process=image/resize,m_fixed,h_224,w_310"},*/
    ],
  }


  },
  created() {

    this.$axios({
      method:'get',
      url:'http://cgo.culturecompute.com:9999/imageOut',
    }).then((response) =>{          //这里使用了ES6的语法
      console.log(response)       //请求成功返回的数据
       var dataList=response.data['images']
      for(var i in dataList){//遍历packJson 数组时，i为索引
       if(this.imageDatas.indexOf(dataList[i].id) < 0)
         this.imageDatas.push("http://cgo.culturecompute.com:9999/"+dataList[i])
      }
    }).catch((error) =>{


      console.log(error)       //请求失败返回的数据
    })
  },


}
</script>

<style scoped>
.second {
  margin-left: 15%;
  margin-right: 15%;
}
.second>>>img:hover{
  -webkit-transition:0.5s ease;
  -moz-transition:0.5s ease;
  -webkit-transition-property:all;
  -moz-transition-property:all;
  -webkit-transform:scale(1.2);
  -moz-transform:scale(1.2);
  transform:scale(1.2);
  box-shadow:0 0 5px;
}
.second>>>img{
  -webkit-transform-origin: 100% 0;
  -moz-transform-origin: 100% 0;
  -ms-transform-origin: 100% 0;
  transform-origin: 100% 0;
  z-index:2;
  margin-right: 30px;
  /*让图片整齐*/
  object-fit: cover;width:150px;height: 150px;
}

h1{

  font-size: 30px;
  text-align: center;
}
hr{
  margin: 5px;
}

</style>