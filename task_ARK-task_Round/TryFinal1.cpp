#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<stdio.h>
#include<iostream>

using namespace cv;
using namespace std;

Mat img=imread("leftImage.jpg",1);
Mat img1=imread("leftImage.jpg",1);

int isvalid(int i,int j)
  {
    if(img1.at<Vec3b>(i,j)[0]==0)
      {
        if(img1.at<Vec3b>(i,j)[1]==0)
           {
             if(img1.at<Vec3b>(i,j)[1]==0)
                  return 0;
           }
      }
    else return 1;
  }
  
void decreaseRowBy1Downward(int row,int col)
  {
    int i,j,k,tempB,tempG,tempR,n,sum0,sum1,sum2;
    
    img1.at<Vec3b>(row+1,col)[0]=(img1.at<Vec3b>(row,col)[0]+img1.at<Vec3b>(row+1,col)[0])/2;
    img1.at<Vec3b>(row+1,col)[1]=(img1.at<Vec3b>(row,col)[1]+img1.at<Vec3b>(row+1,col)[1])/2;
    img1.at<Vec3b>(row+1,col)[2]=(img1.at<Vec3b>(row,col)[2]+img1.at<Vec3b>(row+1,col)[2])/2;
    
    img1.at<Vec3b>(row,col)[0]=0;
    img1.at<Vec3b>(row,col)[1]=0;
    img1.at<Vec3b>(row,col)[2]=0;

/*  tempB=img1.at<Vec3b>(row,col)[0];
    tempG=img1.at<Vec3b>(row,col)[1];
    tempR=img1.at<Vec3b>(row,col)[2]; */
    
    for(i=row+1,n=0;i<img.rows/2;i++)
    {
       for(j=i-1,n=0,sum0=0,sum1=0,sum2=0;j<i+2;j++)
          {
             for(k=col-1;k<col+2;k++)
                {
                   if(isvalid(j,k))
                     {
                       n++;
                       sum0=sum0+img1.at<Vec3b>(j,k)[0];
                       sum1=sum1+img1.at<Vec3b>(j,k)[1];
                       sum2=sum2+img1.at<Vec3b>(j,k)[2];
                     }
                }
          }
       img1.at<Vec3b>(i,col)[0]=(sum0/n);
       img1.at<Vec3b>(i,col)[1]=(sum1/n);
       img1.at<Vec3b>(i,col)[2]=(sum2/n);   
    }
      
  }  

int main()
  {
    namedWindow("win1",WINDOW_NORMAL);
    int i,j,k,l,m,n;
    int r=207,c=270;
    int midR=428;
    int midC=816;
    Point corner1(100,20),corner2(690,210),corner3(660,1620),corner4(18,1664); 
    printf("%d   %d\n",midR,midC);
    
    for(i=0;i<img.rows;i++)
       {
          for(j=0;j<img.cols;j++)
             {
                if(isvalid(i,j))
                   {
                      if(i<corner2.y)
                        {
                           decreaseRowBy1Downward(i,j);
                        }
                   }
             }
       }
    
    imshow("win1",img1);
    waitKey(0);   
  }
