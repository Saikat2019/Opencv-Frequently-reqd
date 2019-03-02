#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<math.h>
using namespace cv;
using namespace std;
int isvalid(int i, int j,Mat img1)
   {
      if(i<0||j<0||i>=img1.rows||j>img1.cols)
                return 0;
      return 1;          
   }
double radian(int deg)
   {
      double rad;
      rad=(2*acos(0.0)*deg)/180.0;
      return rad;
   } 
int main()
   {
      Mat img=imread("pentagon.png",0);
      int a=img.rows,b=img.cols,d;
      d=pow((a*a)+(b*b),0.5);
      int r,deg;
      double rad;
      int i,j;
      Mat graph(d,181,CV_8UC1,Scalar(0));
      for(i=0;i<a;i++)
          {
             for(j=0;j<b;j++)
                 {
                  if(img.at<uchar>(i,j)==255)
                  {
                    for(deg=0;deg<181;deg++)
                        {
                          rad=radian(deg);
                          r=j*cos(rad)+i*sin(rad);
                          graph.at<uchar>((d/2)+r,deg)+=2;
                        }
                  }      
                 } 
          }
       imshow("graph",graph);
       waitKey(0); 
       /*int m,n;
       for(i=0;i<d;i++)
            {
               for(j=0;j<180
            }*/
       return 0;   
   }
