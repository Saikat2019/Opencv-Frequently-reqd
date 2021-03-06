#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<stdlib.h>
#include<math.h>
using namespace cv;
using namespace std;
Mat src;
Mat src_grey;
int thresh=100;
int max_thresh=255;
RNG rng(12345);
void thresh_callback(int ,void *);
int main()
    {
       src_grey=imread("dilated.jpg",0);
       cvtColor(src,src_grey,CV_BGR2GRAY);
       blur(src_grey,src_grey,Size(3,3));
       namedWindow("win",WINDOW_NORMAL);
       imshow("win",src);
       createTrackbar("cannythresh","win",&thresh,max_thresh,thresh_callback);
       thresh_callback(thresh,NULL);
       waitKey(0);
       return 0;
    }
void thresh_callback(int thresh ,void *saikat)  
    {
      Mat canny_output;
      vector < vector < Point > > contours;
      vector < Vec4i > hierarchy;
      Canny(src_grey,canny_output,thresh,thresh*2,3);
      findContours(canny_output,contours,hierarchy,CV_RETR_TREE,CV_CHAIN_APPROX_SIMPLE,Point(0,0));
      Mat drawing=Mat :: zeros(canny_output.size(),CV_8UC3);
      for(int i=0;i<contours.size();i++)
           {
             Scalar color=Scalar(rng.uniform(0,255),rng.uniform(0,255),rng.uniform(0,255));
             drawContours(drawing, contours,i,color,2,8,hierarchy,0,Point());
             
           }
           namedWindow("contours",CV_WINDOW_AUTOSIZE);
           imshow("contours",drawing);
    }
      
