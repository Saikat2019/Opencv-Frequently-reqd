#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>                                     //included 5 libraries

using namespace cv;
using namespace std;

int th=255;
Mat img_gray;
Mat draw(480,640,CV_8UC1,Scalar(0));
int i,j;

void update(int th,void *saikat)
      {
        
      }
int main()
      {
         Mat binary;
         VideoCapture vid(0);  
         //namedWindow("win",2);
         namedWindow("win1",2);
         createTrackbar("track","win1",&th,255,update);
         while(1)
            {
              Mat frame;
              vid >> frame;
              cvtColor(frame,img_gray,CV_BGR2GRAY);
              binary=img_gray>th;
              for(i=0;i<480;i++)
                   {
                      for(j=0;j<640;j++)
                          {
                             if(binary.at<uchar>(i,j)==255)
                                 draw.at<uchar>(i,640-j)=255;
                          }
                   }
              //imshow("win",binary);
              imshow("win1",draw);     
              if(waitKey(30)>=0)
                  break;
            }
         
         imwrite("draw.jpg",draw);
         waitKey(0);   
         return 0;
      }      
