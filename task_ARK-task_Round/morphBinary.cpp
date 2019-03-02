#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<stdlib.h>
using namespace cv;
using namespace std;

Mat img0=imread("grid.jpg",0);
Mat img;
Mat frame(356,638,CV_8UC3,Scalar(0,0,0));
Mat src;//(frame.rows,frame.cols,CV_8UC3,Scalar(0,0,0));
Mat erosion_dst;//(frame.rows,frame.cols,CV_8UC3,Scalar(0,0,0));

int erosion_elem=0;
int erosion_size=1;
int const max_elem=2;
int const max_kernel_size=21;

int thresh=225;

void Binary(int ,void* )
    {
       int i,j;
       for(i=0;i<frame.rows;i++)
           {
             for(j=0;j<frame.cols;j++)
                 {
                    if(img.at<uchar>(i,j)>thresh)
                      {
                       src.at<Vec3b>(i,j)[0]=255;
                       src.at<Vec3b>(i,j)[1]=255;
                       src.at<Vec3b>(i,j)[2]=255;
                      }
                    else
                      {
                       src.at<Vec3b>(i,j)[0]=0;
                       src.at<Vec3b>(i,j)[1]=0;
                       src.at<Vec3b>(i,j)[2]=0;
                      }   
                 }
           }
           imshow("binary",src);
    }

void Erosion(int ,void* )
  {
    int erosion_type;
    if(erosion_elem==0) 
       erosion_type=MORPH_RECT;
    else if(erosion_elem==1)
       erosion_type=MORPH_CROSS;
    else if(erosion_elem==2)
       erosion_type=MORPH_ELLIPSE;
    Mat element=getStructuringElement(erosion_type,Size(2*erosion_size +1,2*erosion_size +1),Point(erosion_size,erosion_size));
    erode(src,erosion_dst,element);
    imshow("Erosion Demo",erosion_dst);         
  } 

void fine()
  {
     
    namedWindow("Erosion Demo", WINDOW_NORMAL);
    namedWindow("binary",WINDOW_NORMAL);
    namedWindow("grid",WINDOW_NORMAL);
    
    createTrackbar("threshold","binary",&thresh,255,Binary);     
    createTrackbar("element\nrect\ncross\nellipse","Erosion Demo",&erosion_elem,max_elem,Erosion);
    createTrackbar("kernel size\n2n+1","Erosion Demo",&erosion_size,max_kernel_size,Erosion);

    Binary(0,0); 
    Erosion(0,0);
  
    imshow("grid",img);
   
  }
 
int main()
  {
    int i,j;
    VideoCapture vid("GRID.mp4");
    namedWindow("video",WINDOW_NORMAL);
    //Mat frame;
    while(1)
    {
      vid >> frame;
      img=frame.clone();
      
      
      
      src=img.clone();
      erosion_dst=img.clone();
      
      imshow("video",img);
      fine();
      
      //82,358 
      if(waitKey(300)>=0)break;
    }
    
  } 
