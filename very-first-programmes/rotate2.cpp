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
void update(int ang,void * saikat)
{
  long double rad;
  rad=radian(-ang);
  Mat img=imread("lenna.jpg",1);
  int a;
  int m,n,i,j;
  m=img.rows;
  n=img.cols;
  a=pow((pow(m,2)+pow(n,2)),0.5);
  Mat img1(a,a,CV_8UC3,Scalar(0,0,0)); 
  Mat rimg(a,a,CV_8UC3,Scalar(0,0,0));
  for(i=0;i<m;i++)
       {
           for(j=0;j<n;j++)
               {
                   img1.at<Vec3b>(i+(a-m)/2,j+(a-n)/2)=img.at<Vec3b>(i,j);
               }
       }
  for(i=-a/2;i<a/2+1;i++)
      {
        for(j=-a/2;j<a/2+1;j++)
           {
              rimg.at<Vec3b>(a/2+i,a/2+j)=img1.at<Vec3b>(a/2+i*cos(rad)-j*sin(rad),a/2+i*sin(rad)+j*cos(rad));
           }
      }
  imshow("win",rimg);
  waitKey(0);     
}  
int main()
   {
   int ang;
   namedWindow("win",WINDOW_NORMAL);
   createTrackbar("rotation angle","win",&ang,360,update);
   update(ang,NULL);
   return 0;
   }


