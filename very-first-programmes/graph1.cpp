#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<math.h>
using namespace cv;
using namespace std;
double radian(int deg)
   {
      double rad;
      rad=(2*acos(0.0)*deg)/180.0;
      return rad;
   } 
int main()
   {
      Mat img=imread("dilated.jpg",0);
      int a=img.rows,b=img.cols,d;
      d=pow((a*a)+(b*b),0.5);
      int r,deg;
      double rad;
      Mat graph(d,189,CV_8UC1,Scalar(0));
      for(int i=0;i<a;i++)
          {
             for(int j=0;j<b;j++)
                 {
                  if(img.at<uchar>(i,j)==255)
                  {
                    for(deg=0;deg<181;deg++)
                        {
                          rad=radian(deg);
                          r=j*cos(rad)+i*sin(rad);
                          //if(graph.at<uchar>((d/2)+r,deg)<246)
                          graph.at<uchar>((d/2)+r,deg)+=1;
                        }
                  }      
                 } 
          }
       int count=0,max=(graph.at<uchar>(0,0)); 
       for(int i=0;i<a;i++)
          {
             for(int j=0;j<b;j++)
                {
                   if(max<graph.at<uchar>(i,j))
                   {
                     printf("%d\n",max);
                     max=graph.at<uchar>(i,j);
                   }  
                }
          }   
       printf("%d\n",max);   
       for(int i=0;i<a;i++)
          {
             for(int j=0;j<b;j++)
                {
                   if((graph.at<uchar>(i,j)==194) || (graph.at<uchar>(i,j)==(182))/* || (graph.at<uchar>(i,j)==(max-2))*/)
                     count++;
                }
          } 
       printf("%d\n",count);          
       imshow("graph",graph);
       waitKey(0);
       return 0;   
   }
