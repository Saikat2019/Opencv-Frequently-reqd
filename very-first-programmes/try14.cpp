#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<math.h>
using namespace cv;
using namespace std;
Mat img=imread("rubic.jpg",0);
int main()
    {
       imshow("win",img);
       Mat edge(img.rows,img.cols,CV_8UC1,Scalar(0));
       int gx,gy,res;
       int i,j;
       for(i=0;i<img.rows;i++)
              {
                 for(j=0;j<img.cols;j++)
                       {
                          gy=((-1*img.at<uchar>(i-1,j-1))+(-2*img.at<uchar>(i-1,j))+(-1*img.at<uchar>(i-1,j+1))+(1*img.at<uchar>(i+1,j-1))+(2*img.at<uchar>(i+1,j))
                          +(1*img.at<uchar>(i+1,j+1)))/8;
                          printf("gy%d\t",gy);
                          gx=((-1*img.at<uchar>(i-1,j-1))+(-2*img.at<uchar>(i,j-1))+(-1*img.at<uchar>(i+1,j-1))+(1*img.at<uchar>(i-1,j+1))+(2*img.at<uchar>(i,j+1))
                          +(1*img.at<uchar>(i+1,j+1)))/8;
                          res=pow((pow(gy,2)+pow(gx,2)),0.5);
                          printf("gx=%d\t",gx);  
                       }
              }
        imshow("win1",edge);
        waitKey(0);      
    }     

