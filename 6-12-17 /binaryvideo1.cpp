#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>                                     //included 5 libraries

using namespace cv;
using namespace std;

int th_max=255;
int th_min=255;
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
         namedWindow("win",2);
         createTrackbar("track_max","win",&th_max,255,update);
         createTrackbar("track_min","win",&th_min,255,update);
         while(1)
            {
              Mat frame;
              vid >> frame;
              frame.copyTo(binary);
              for(i=0;i<480;i++)
                   {
                      for(j=0;j<640;j++)
                          {
                             if(binary.at<Vec3b>(i,j)[0]<th_max && binary.at<Vec3b>(i,j)[0]>th_min)
                                 draw.at<uchar>(i,j)=255;
                          }
                   }
              imshow("win",binary); 
              imshow("win1",draw);    
              if(waitKey(30)>=0)
                  break;
            }
         imwrite("draw.jpg",draw);  
         return 0;
      }      
