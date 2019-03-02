#include "opencv2/highgui.hpp"
#include "opencv2/imgproc.hpp"
#include <iostream>
#include <stdio.h>

using namespace std;
using namespace cv;
     Mat img=imread("coins.jpg",1);
     Mat templ=imread("con.jpg",1);
     int rescols=img.cols-templ.cols+1;
     int resrows=img.rows-templ.rows+1;
     Mat res(resrows,rescols,CV_8UC1,Scalar(0));

int main()
   {
     
     matchTemplate(img,templ,res,CV_TM_SQDIFF);
     normalize(res,res,0,1,NORM_MINMAX,-1,Mat());
     double minval,maxval;
     Point minloc,maxloc;
     minMaxLoc(res,&minval,&maxval,&minloc,&maxloc,Mat());
     namedWindow("image",2);
     namedWindow("result",2);
     rectangle(img,minloc,Point(minloc.x+templ.cols,minloc.y+templ.rows),Scalar::all(0),2,8,0);
     rectangle(res,minloc,Point(minloc.x+templ.cols,minloc.y+templ.rows),Scalar::all(0),2,8,0);
     imshow("image",img);
     waitKey(0);
   }
