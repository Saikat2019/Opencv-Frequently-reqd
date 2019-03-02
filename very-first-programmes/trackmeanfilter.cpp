#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
using namespace std;
using namespace cv;
Mat img=imread("veg.jpg",0);
int isvalid(int i,int j,Mat img)
   {
      if(i<0||j<0||i>=img.rows||j>=img.cols)
         return 0;
      else
         return 1;   
   }
void trackfilt(int t,void *a)
   {
      int i,j,k,l;
      int n=0,res=0;
      Mat blur(img.rows,img.cols,CV_8UC1,Scalar(0));
      for(i=0;i<img.rows;i++)
           {
             for(j=0;j<img.cols;j++)
                 {
                   for(k=-t;k<=t;k++)
                      {
                         for(l=-t;l<=t;l++)
                            {
                                if(isvalid(i+k,j+l,img))
                                   {
                                     ++n;
                                     res+=img.at<uchar>(i+k,j+l); 
                                   }
                            }
                      }
                  blur.at<uchar>(i,j)=(res/n);    
                  n=0;
                  res=0;    
                 }
           }
       imshow("win1",blur);
       waitKey(0);    
   }   
int main()
   {
     int t;
     
     namedWindow("win1",WINDOW_NORMAL);
     createTrackbar("track1","win1",&t,5,trackfilt);
     trackfilt(t,NULL);
     return 0;
   }

   
   
