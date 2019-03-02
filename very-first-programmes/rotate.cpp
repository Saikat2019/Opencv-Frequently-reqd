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
  printf("enter the angle you want to rotate\t");
  scanf("%Lf",&ang);
  rad=radian(-ang);
  Mat img=imread("lenna.jpg",0);
  int a;
  int m,n,i,j;
  m=img.rows;
  n=img.cols;
  a=pow((pow(m,2)+pow(n,2)),0.5);
  printf("%d\t%d\t%d\t",m,n,a);
  Mat img1(a,a,CV_8UC1,Scalar(0)); 
  Mat rimg(a,a,CV_8UC1,Scalar(0));
  for(i=0;i<m;i++)
       {
           for(j=0;j<n;j++)
               {
                   img1.at<uchar>(i+(a-m)/2,j+(a-n)/2)=img.at<uchar>(i,j);
               }
       }
  for(i=-a/2;i<a/2+1;i++)
      {
        for(j=-a/2;j<a/2+1;j++)
           {
              rimg.at<uchar>(a/2+i,a/2+j)=img1.at<uchar>(a/2+i*cos(rad)-j*sin(rad),a/2+i*sin(rad)+j*cos(rad));
           }
      }
  namedWindow("win2",WINDOW_NORMAL);
  imshow("win2",img1);
  namedWindow("win4",WINDOW_NORMAL);
  imshow("win4",rimg);
  waitKey(0);
  return 0;       
}  

