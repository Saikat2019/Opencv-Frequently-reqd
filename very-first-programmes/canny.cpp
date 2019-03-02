#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<math.h>
using namespace cv;
using namespace std;
int tmax=255;
int tmin=0;
void updateimg(int t,void *a)
{
  int i,j;
   Mat img=imread("canny1.png",0);
   Mat img1(img.rows,img.cols,CV_8UC1,Scalar(0));
   Mat img2(img.rows,img.cols,CV_8UC1,Scalar(0));
   Canny(img,img1,tmin,tmax,3,1);
   /*for(i=0;i<img.rows;i++)
              {
                 for(j=0;j<img.cols;j++)
                       {
                        if(img1.at<uchar>(i,j)==0)
                             img2.at<uchar>(i,j)=255;
                        else    
                             img2.at<uchar>(i,j)=0 ;
                        }
              } */
   imwrite("sketch.jpg",img2);
   imshow("win2",img1); 
   waitKey(0);
}
int main()
{
  namedWindow("win2",WINDOW_NORMAL);
  createTrackbar("trackMAX","win2",&tmax,255,updateimg);
  
  createTrackbar("trackMIN","win2",&tmin,100,updateimg);
  updateimg(tmax,NULL);
  updateimg(tmin,NULL);
  return 0;
}

