#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<math.h>
using namespace cv;
using namespace std;
long double radian(long double ang)
   {
      long double rad= ((ang/180.0)*(2*acos(0.0)));
         return rad;
   }
int main()
   { 
     long double ang,rad;
     printf("enter the value of angle\n");
     scanf("%Lf",&ang);
     rad=radian(ang);
     Mat img=imread("lenna.jpg",0);
     int i,j,a,b,d;
     a=img.rows;
     b=img.cols;
     d=pow((pow(a,2.0)+pow(b,2.0)),0.5);
     Mat img2(d,d,CV_8UC1,Scalar(0));
     Mat rimg(d,d,CV_8UC1,Scalar(0));
     /*for(i=0;i<d;i++)
          {
            for(j=0;j<d;j++)
                 {
                   img2.at<uchar>(
                 }
          }*/       
     for(i=0;i<d;i++)
          {
            for(j=0;j<d;j++)
                 {
                    rimg.at<uchar>(((cos(rad)*(i-(d/2)))-(sin(rad)*(j-(d/2))))+d/2,((sin(rad)*(i-(d/2)))+(cos(rad)*(j-(d/2))))+d/2)=img.at<uchar>(i,j);
                 }
          }
     imshow("win",rimg);
     waitKey(0);     
   }
