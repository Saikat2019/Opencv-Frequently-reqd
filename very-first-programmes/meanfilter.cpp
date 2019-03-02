#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
using namespace std;
using namespace cv;
int isvalid(int i,int j,Mat img)
   {
      if(i<0||j<0||i>=img.rows||j>=img.cols)
         return 0;
      else
         return 1;   
   }
int main()
   {
      int i,j,k,l;
      int n=0,res=0;
      Mat img1=imread("veg.jpg",0);
      Mat blur(img1.rows,img1.cols,CV_8UC1,Scalar(0));
      for(i=0;i<img1.rows;i++)
           {
             for(j=0;j<img1.cols;j++)
                 {
                   for(k=-2;k<3;k++)
                      {
                         for(l=-1;l<2;l++)
                            {
                                if(isvalid(i+k,j+l,img1))
                                   {
                                     ++n;
                                     res+=img1.at<uchar>(i+k,j+l); 
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
       return 0;    
   }   
   

