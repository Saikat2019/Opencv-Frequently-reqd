#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<stdlib.h>
using namespace cv;
using namespace std;

Mat src=imread("gridBinary.jpg",1);//, erosion_dst,dilation_dst;
Mat erosion_dst(src.rows,src.cols,CV_8UC3,Scalar(0,0,0));
Mat dilation_dst(src.rows,src.cols,CV_8UC3,Scalar(0,0,0));

int erosion_elem=0;
int erosion_size=0;
int dilation_elem=0;
int dilation_size=0;
int const max_elem=2;
int const max_kernel_size=21;

void Erosion(int ,void* );
void Dilation(int ,void* );

int main()
  {
    
    namedWindow("Erosion Demo", WINDOW_NORMAL);
    namedWindow("Dilation Demo",WINDOW_NORMAL);
   // cvMoveWindow("Dilation Demo",src.cols,0);
    createTrackbar("element\nrect\ncross\nellipse","Erosion Demo",&erosion_elem,max_elem,Erosion);
    createTrackbar("kernel size\n2n+1","Erosion Demo",&erosion_size,max_kernel_size,Erosion);
    createTrackbar("element\nrect\ncross\nellipse","Dilation Demo",&dilation_elem,max_elem,Dilation);
    createTrackbar("kernel size\n2n+1","Dilation Demo",&dilation_size,max_kernel_size,Dilation);
    Erosion(0,0);
    Dilation(0,0);
    waitKey(0);
    return 0; 
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
void Dilation(int ,void* )
  {
    int dilation_type;
    if(dilation_elem==0)
        dilation_type=MORPH_RECT;
    else if(dilation_elem==1)
        dilation_type=MORPH_CROSS;
    else if(dilation_elem==2)
        dilation_type=MORPH_ELLIPSE;
    Mat element=getStructuringElement(dilation_type,Size(2*dilation_size +1,2*dilation_size +1),Point(dilation_size,dilation_size));            
    dilate(src,dilation_dst,element);
    imshow("Dilation Demo",dilation_dst );
    imwrite("contour2.jpg",dilation_dst );
  }  
