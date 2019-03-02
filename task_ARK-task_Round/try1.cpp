#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<stdlib.h>
using namespace cv;
using namespace std;

Mat img=imread("gridBinary.jpg",1);

int main()
   {
     imshow("win1",img);
     waitKey(0);
   }

