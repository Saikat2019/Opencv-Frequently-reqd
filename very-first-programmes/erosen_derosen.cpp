#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<math.h>
using namespace cv;
using namespace std;
Mat img=imread("rubik.jpg",0);
int main()
     {
       Mat edge(img.rows,img.cols,CV_8UC1,Scalar(255));
       int gx,gy,res;
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
                          if((res)>100)
                             edge.at<uchar>(i,j)=0;
                       }
              }      
        imshow("win3",edge);
        waitKey(0);
       
        Mat erosen(img.rows,img.cols,CV_8UC1,Scalar(0));
         for(i=0;i<img.rows;i++)
              {
                 for(j=0;j<img.cols;j++)
                       {
                           if((edge.at<uchar>(i-1,j-1)==255)||(edge.at<uchar>(i-1,j)==255)||(edge.at<uchar>(i-1,j+1)==255)||(edge.at<uchar>(i,j-1)==255)
                           ||(edge.at<uchar>(i,j)==255)||(edge.at<uchar>(i,j+1)==255)||(edge.at<uchar>(i+1,j-1)==255)||(edge.at<uchar>(i+1,j)==255)
                           ||(edge.at<uchar>(i+1,j+1)==255))
                                 erosen.at<uchar>(i,j)=255;
                       }
              }         
        imshow("win2",erosen);
        waitKey(0);
        
        Mat derosen(img.rows,img.cols,CV_8UC1,Scalar(255));
         for(i=0;i<img.rows;i++)
              {
                 for(j=0;j<img.cols;j++)
                    {
                       if((erosen.at<uchar>(i-1,j-1)==0)||(erosen.at<uchar>(i-1,j)==0)||(erosen.at<uchar>(i-1,j+1)==0)||(erosen.at<uchar>(i,j-1)==0)
                          /* ||(erosen.at<uchar>(i,j)==0)*/||(erosen.at<uchar>(i,j+1)==0)||(erosen.at<uchar>(i+1,j-1)==0)||(erosen.at<uchar>(i+1,j)==0)
                           ||(erosen.at<uchar>(i+1,j+1)==0))
                                 derosen.at<uchar>(i,j)=0;
                    }
              } 
        imshow("win1",derosen);
        waitKey(0);
        return 0;           
      }  

