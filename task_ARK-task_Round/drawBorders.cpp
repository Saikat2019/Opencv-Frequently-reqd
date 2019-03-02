#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<stdio.h>
#include<iostream>

using namespace cv;
using namespace std;

Mat img=imread("ThreePanel.jpg",1);
int i=0;
Point lCorners[4];

void onMouse(int evt,int x,int y,int flags,void* param)
   {
      if(evt==CV_EVENT_LBUTTONDOWN)
        {
           lCorners[i].x=x;
           lCorners[i].y=y;
           ++i;
        }
   }

int maxLength()
   {
     int a[4],i,max=0;
     a[0]=lCorners[3].y-lCorners[0].y;
     a[1]=lCorners[2].y-lCorners[0].y;
     a[2]=lCorners[2].y-lCorners[1].y;
     a[3]=lCorners[3].y-lCorners[1].y;
     for(i=0;i<4;i++)
     {
       if(max<a[i])
         max=a[i];
     }
     printf("maximum length is %d\n",max);
     return max;
   }   
   
int maxWidth()
   {
     int a[4],i,max=0;
     a[0]=lCorners[1].x-lCorners[0].x;
     a[1]=lCorners[2].x-lCorners[0].x;
     a[2]=lCorners[2].x-lCorners[3].x;
     a[3]=lCorners[1].x-lCorners[3].x;
     for(i=0;i<4;i++)
     {
       if(max<a[i])
         max=a[i];
     }
     printf("maximum width is %d\n",max);
     return max;
   }  
   
int minX()
   {
     int min=3000;
     for(int i=0;i<4;i++)
     {
       if(min>lCorners[i].x)
            min=lCorners[i].x;
     }
     return min;
   }    
   
int minY()
   {
     int min=3000;
     for(int i=0;i<4;i++)
     {
       if(min>lCorners[i].y)
            min=lCorners[i].y;
     }
     return min;
   }       

int main()
   {
      int length,width;
      int crossed=0;
      int a,b,m,n,j,k;
      for(j=0;j<img.rows;j++)
      {
         for(k=0;k<img.cols;k++)
           {
             img.at<Vec3b>(j,k)[2]=img.at<Vec3b>(j,k)[2]-2;
           }
      }
      namedWindow("win1",WINDOW_NORMAL);
      namedWindow("win2",WINDOW_NORMAL);
      namedWindow("win3",WINDOW_NORMAL);
      setMouseCallback("win1",onMouse,NULL);
      while(1)
      {
        imshow("win1",img);
        waitKey(10);
        if(i>=4)break;
      }
       line(img,lCorners[0],lCorners[1],Scalar(0,0,0),5);
       line(img,lCorners[1],lCorners[2],Scalar(0,0,0),5);
       line(img,lCorners[2],lCorners[3],Scalar(0,0,0),5);
       line(img,lCorners[3],lCorners[0],Scalar(0,0,0),5);

       length=maxLength();
       width=maxWidth();
       
       Mat leftImg(3000,3000,CV_8UC3,Scalar(0,0,0));
       
       a=minX();
       b=minY();
       printf("a_cols=%d  b_rows=%d\n",a,b);
       
       m=((lCorners[0].x+lCorners[1].x+lCorners[2].x+lCorners[3].x)/4);
       n=((lCorners[0].y+lCorners[1].y+lCorners[2].y+lCorners[3].y)/4);
       
       for(j=0;;j++)
          {
            for(k=0;img.at<Vec3b>(n+j,m+k)[0]!=0 || img.at<Vec3b>(n+j,m+k)[1]!=0 || img.at<Vec3b>(n+j,m+k)[2]!=0;k++)
               {
                 
                       leftImg.at<Vec3b>(leftImg.rows/2+j,leftImg.cols/2+k)[0]=img.at<Vec3b>(n+j,m+k)[0];
                     
                       leftImg.at<Vec3b>(leftImg.rows/2+j,leftImg.cols/2+k)[1]=img.at<Vec3b>(n+j,m+k)[1];
                     
                       leftImg.at<Vec3b>(leftImg.rows/2+j,leftImg.cols/2+k)[2]=img.at<Vec3b>(n+j,m+k)[2];
               }
          }
          
       printf("\t\t\tdone\n");  
       imshow("win2",img);
       imshow("win3",leftImg);
       waitKey(0);
      return 0;
   }
