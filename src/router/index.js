import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../components/Index";
import MachineAnnotionImages from "@/components/MachineAnnotionImages";
import MachineAnnotion from "@/components/MachineAnnotion";
import HumanAnnotion from "@/components/HumanAnnotion";
import HumanAnnotionImages from "@/components/HumanAnnotionImages";
import AutoAnnotion from "@/components/AutoAnnotion";
import SpecialistDataBank from "@/components/SpecialistDataBank"
Vue.use(VueRouter);
const routes = [
  {
    path:'/',
    redirect:'/Index'
  },
  {
    path: '/Index',
    name: "会议通知",
    component: Index,
  },
  {
    path: '/MachineAnnotionImages',
    name: "机器标注人工判断图片展示",
    component: MachineAnnotionImages,
  },
  {
    path: '/MachineAnnotion',
    name: "机器标注人工判断界面",
    component: MachineAnnotion,
  },
  {
    path: '/HumanAnnotion',
    name: "人工标注界面",
    component: HumanAnnotion,
  },
  {
    path: '/HumanAnnotionImages',
    name: "人工标注图片展示",
    component: HumanAnnotionImages,
  },
  {
    path: '/AutoAnnotion',
    name: "自动标注",
    component: AutoAnnotion,
  },
  {
    path: '/SpecialistDataBank',
    name: "专家资料库",
    component: SpecialistDataBank,
  },
];

const router = new VueRouter({
  routes
});

export default router;
