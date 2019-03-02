#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<stdlib.h>
using namespace cv;
using namespace std;
Mat img;
int size;
void update(int ,void* )
  {
    Mat element=getStructuringElement(MORPH_RECT,Size(2*size+1,2*size+1),Point(0,0));
    Mat res;
    img.copyTo(res);
    dilate(res,res,element);
    erode(res,res,element);
    imshow("win1",img);
    imshow("win2",res);
  }
int main()
  {
    img=imread("grid.jpg",1);
    namedWindow("win1",WINDOW_NORMAL); 
    createTrackbar("size","win1",&size,20,update);
    update(0,0);
    waitKey(0);
    return 0;
  }
