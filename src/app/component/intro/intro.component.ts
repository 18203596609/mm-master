import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceService } from '../../app-service.service';
import { EchartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  exArr: any;
  chartOption: EchartsOption;


  constructor(
    private http: HttpClient,
    private serviceHttp: AppServiceService,
    private ngx: NgxEchartsModule,
  ) { }

  ngOnInit() {
    this.getArr();
  }

  public getArr() {
    const url = 'http://10.110.147.31/DJGDemo/forecastEs/getLongForcast';
    const params = { topmostpn: '16200385', method: 'IBShift' };
    this.http.get(url, { params }).subscribe((res) => {
      this.exArr = res;
      console.log(this.exArr);
      this.chartOption = {
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.exArr.date
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: this.exArr.dataArr[0]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: this.exArr.dataArr[1]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: this.exArr.dataArr[2]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: this.exArr.dataArr[3]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { normal: {} },
            data: this.exArr.dataArr[4]
          }
        ]
      }
    });

  }

}
