#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>  
#include "circleDetect1.hpp"                                   //included 5 libraries

using namespace cv;
using namespace std;

int th=0;
Mat img_bgr=imread("original.jpg",1);
Mat img_gray;
Mat img_bw;
     
void update(int th ,void *saikat)
   {
     img_bw=img_gray>th;
     imshow("win",img_bw);
     waitKey(0);
   }

int main()
   {
     Detect();
     
     cvtColor(img_bgr,img_gray,CV_BGR2GRAY);
     namedWindow("win",2);
     createTrackbar("track","win",&th,255,update);
     update(th,NULL);
     return 0;
   }
