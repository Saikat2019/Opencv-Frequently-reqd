#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<stdlib.h>
#include<math.h>
#include<string>
#include<queue>

using namespace cv;
using namespace std;

Mat frame;

int main()
   {
     namedWindow("grid",WINDOW_NORMAL);
     namedWindow("binary",WINDOW_NORMAL);
     namedWindow("binaryDilate",WINDOW_NORMAL);
     namedWindow("binaryDT",WINDOW_NORMAL);
     namedWindow("binaryDT1",WINDOW_NORMAL);
     namedWindow("DTcanny",WINDOW_NORMAL);
     
     VideoCapture vid("botDetect1.avi");
     
     Mat last;
     Mat Line;
     int i,j;
     int min=765;
     
     while(1)
       {
         vid >> frame;
         Mat binary(frame.rows,frame.cols,CV_8UC1,Scalar(0));
                  Mat binaryDilate(frame.rows,frame.cols,CV_8UC3,Scalar(0,0,0));
                           Mat binaryDT(frame.rows,frame.cols,CV_8UC3,Scalar(0,0,0));
                                    Mat binaryDT1(frame.rows,frame.cols,CV_8UC3,Scalar(0,0,0));
                                    Mat DTcanny(frame.rows,frame.cols,CV_8UC3,Scalar(0,0,0));
         for(i=0;i<frame.rows;i++)
            {
              for(j=0;j<frame.cols;j++)
                 {
                 	if(((frame.at<Vec3b>(i,j)[0]+frame.at<Vec3b>(i,j)[1]+frame.at<Vec3b>(i,j)[2])/3)>155)
                 	{
                 		//min=(frame.at<Vec3b>(i,j)[0]+frame.at<Vec3b>(i,j)[1]+frame.at<Vec3b>(i,j)[2]);
                 		binary.at<uchar>(i,j)=255;
                 	}

                    //binary.at<uchar>(i,j)=((frame.at<Vec3b>(i,j)[0]+frame.at<Vec3b>(i,j)[1]+frame.at<Vec3b>(i,j)[2])/3);
                 }
            } 
            //cout<<min<<endl;
        /* for(i=0;i<frame.rows;i++)
            {
              for(j=0;j<frame.cols;j++)
                 {

                    binary.at<uchar>(i,j)=765-((frame.at<Vec3b>(i,j)[0]+frame.at<Vec3b>(i,j)[1]+frame.at<Vec3b>(i,j)[2])-min);
                    binaryB.at<Vec3b>(i,j)[0]=binaryB.at<Vec3b>(i,j)[1]=binaryB.at<Vec3b>(i,j)[2]=frame.at<Vec3b>(i,j)[0];
                    binaryG.at<Vec3b>(i,j)[0]=binaryG.at<Vec3b>(i,j)[1]=binaryG.at<Vec3b>(i,j)[2]=frame.at<Vec3b>(i,j)[1];
                    binaryR.at<Vec3b>(i,j)[0]=binaryR.at<Vec3b>(i,j)[1]=binaryR.at<Vec3b>(i,j)[2]=frame.at<Vec3b>(i,j)[2];
                 }
            } */
            
          //GaussianBlur( binary,binary, Size( 3,3 ), 0, 0 );  
          Mat element = getStructuringElement(MORPH_ELLIPSE,Size(3,3),Point(0,0));
          dilate(binary,binaryDilate,element);

          
    distanceTransform(binaryDilate, binaryDT, CV_DIST_L2, 3);

    normalize(binaryDT,binaryDT, 0, 1., NORM_MINMAX);
    erode(binaryDT,binaryDT1,element);

     for(i=0;i<frame.rows;i++)
            {
              for(j=0;j<frame.cols;j++)
                 {

                   DTcanny.at<Vec3b>(i,j)[0]=binaryDT1.at<Vec3b>(i,j)[0];
                   DTcanny.at<Vec3b>(i,j)[1]=binaryDT1.at<Vec3b>(i,j)[1];
                   DTcanny.at<Vec3b>(i,j)[2]=binaryDT1.at<Vec3b>(i,j)[2] ;
                 }
            } 
       Canny( DTcanny, DTcanny, 0,255, 3 );      
    
          imshow("grid",frame);
          imshow("binary",binary);
          imshow("binaryDilate",binaryDilate);
          imshow("binaryDT",binaryDT);
          imshow("binaryDT1",binaryDT1);
          imshow("DTcanny",DTcanny);

     
          if(waitKey(100)>=0)break;   
       }
       
       
       waitKey(0);
   }
