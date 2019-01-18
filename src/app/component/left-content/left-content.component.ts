import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.scss']
})
export class LeftContentComponent implements OnInit {
  content: any = ['快速上手', '教程', '核心知识', '其它技术',
    '环境搭建与部署', '发布信息', '快捷手册', 'API参考手册'];
  jcCont: any = ['简介', '应用的"外壳"', '1.英雄编辑器', '2.显示英雄列表',
    '3.主从组件', '4.服务', '5.路由', '6.HTTP'];
  zcCont: any = ['架构', '组件与模版', '表单', 'Observable与RxJS',
    '引导启动', 'Angular模块', '依赖注入', 'HttpClient', '路由与导航', '动画'];
  lfbuttom: any = ['2018 NGCHINA @ 杭州', '互助问答', '官方 MATERIAL组件库',
    'NG-ZORRO 组件库', 'NG-ZORRO MOBILE组件库'];
  openMap = {
    sub1: false,
    sub2: false,
    sub3: false,
    sub4: false,
    sub5: false,
    sub6: false,
    sub7: false,
    sub8: false,
  };
  meauArr: any = [{ '快速上手': 'app-qs-hand' }, { '简介': 'app-intro' }];
  value: any = '快速上手';
  constructor() { }

  ngOnInit() {
  }

  // 选中某一个菜单，其余则收起
  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        // console.log(key);
        this.openMap[key] = false;
      }
    }
  }

  // 点击所选中的，将它的value的值传送给子组件
  public btnClick(a) {
    console.log(a);
    this.value = a;

  }


}
