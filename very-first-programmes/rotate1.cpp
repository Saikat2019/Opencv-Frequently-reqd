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
     Mat img=imread("a.png",0);
     int a,b,d,i,j,r,c;
     int m,n;
     a=img.rows;
     b=img.cols;
     d=pow((pow(a,2.0)+pow(b,2.0)),0.5);
     printf("%d %d %d\n",a,b,d);
     printf("%Lf %Lf\n",cos(rad),sin(rad));
     imshow("win",img);
     waitKey(0);
     Mat rimg(d,d,CV_8UC1,Scalar(0));
     for(i=-a/2;i<a/2;i++)
          {
              for(j=-b/2;j<b/2;j++)
                   {
                      n=a/2+i;
                      m=b/2+j;
                      r=n*cos(rad)-m*sin(rad);
                      c=n*sin(rad)+m*cos(rad);
                      rimg.at<uchar>(+r,+c)=img.at<uchar>(n,m);
                   }
          }
     imshow("win1",rimg);
     waitKey(0);
     return 0;     
   }
   
                     /*  m=(a/2+i)*cos(rad)-(b/2+j)*sin(rad);
                       n=(a/2+i)*sin(rad)+(b/2+j)*cos(rad);
                       
                           printf("m=%d",m);
                       
                           printf("n=%d",n);    
                       rimg.at<uchar>((d/2+i)*cos(rad)-(d/2+j)*sin(rad),(d/2+i)*sin(rad)+(d/2+j)*cos(rad))=img.at<uchar>(m,n);*/
