#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
using namespace cv;
using namespace std;
int main()
   {
     VideoCapture vid(0);
     Mat img;
     namedWindow("win",2);
     while(1)
       {
          Mat frame;
          vid >> frame;
          cvtColor(frame,img,CV_BGR2HSV);
          imshow("win",img);
          imshow("win1",frame);
          if(waitKey(30)>=0)
                break;
       }
   }
