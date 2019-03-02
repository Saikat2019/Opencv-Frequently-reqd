#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<math.h>
using namespace cv;
using namespace std;
Mat img=imread("rubik.jpg",0);
void updateimg(int t,void *a)
    {
       long int max=0;
       Mat edge(img.rows,img.cols,CV_8UC1,Scalar(255));
       long int gx,gy,res;
       int i,j;
       for(i=0;i<img.rows;i++)
              {
                 for(j=0;j<img.cols;j++)
                       {
                          gy=((-1*img.at<uchar>(i-1,j-1))+(-2*img.at<uchar>(i-1,j))+(-1*img.at<uchar>(i-1,j+1))+(1*img.at<uchar>(i+1,j-1))+(2*img.at<uchar>(i+1,j))
                          +(1*img.at<uchar>(i+1,j+1)))/8;
                          gx=((-1*img.at<uchar>(i-1,j-1))+(-2*img.at<uchar>(i,j-1))+(-1*img.at<uchar>(i+1,j-1))+(1*img.at<uchar>(i-1,j+1))+(2*img.at<uchar>(i,j+1))
                          +(1*img.at<uchar>(i+1,j+1)))/8;
                          res=pow((pow(gy,2)+pow(gx,2)),0.5);
                          if((res)>t)
                             edge.at<uchar>(i,j)=0;
                       }
              }      
        imshow("win1",edge);
        waitKey(0);      
    }     
int main()
     {
        int t;
        namedWindow("win1",WINDOW_NORMAL);
        createTrackbar("edge","win1",&t,10,updateimg);
        updateimg(t,NULL);
        return 0;
     }    
