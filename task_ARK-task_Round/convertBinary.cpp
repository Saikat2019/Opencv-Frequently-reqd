#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<stdlib.h>
using namespace cv;
using namespace std;

Mat img=imread("grid.jpg",0);
Mat binary(img.rows,img.cols,CV_8UC3,Scalar(0,0,0));

int thresh=200;

void Binary(int ,void* )
    {
       int i,j;
       for(i=0;i<img.rows;i++)
           {
             for(j=0;j<img.cols;j++)
                 {
                    if(img.at<uchar>(i,j)>thresh)
                      {
                       binary.at<Vec3b>(i,j)[0]=255;
                       binary.at<Vec3b>(i,j)[1]=255;
                       binary.at<Vec3b>(i,j)[2]=255;
                      }
                    else
                      {
                       binary.at<Vec3b>(i,j)[0]=0;
                       binary.at<Vec3b>(i,j)[1]=0;
                       binary.at<Vec3b>(i,j)[2]=0;
                      }   
                 }
           }
           imshow("binary",binary);
    }

int main()
   {
     
     namedWindow("binary",WINDOW_NORMAL);
     namedWindow("grid",WINDOW_NORMAL);
     createTrackbar("threshold","binary",&thresh,255,Binary);
     Binary(0,0);
     imshow("grid",img);
     
     waitKey(0);
     imwrite("gridBinry.jpg",binary);
     
     
   }
