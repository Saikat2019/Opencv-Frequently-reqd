#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include "opencv2/imgcodecs.hpp"
#include<iostream>
using namespace cv;
using namespace std;
Mat src;
Mat src_gray;
int thresh=100;
int max_thresh=255;
RNG rng(12345);

void thresh_callback(int ,void* );

int main()
{
  src=imread("saikat.jpg",1);
  cvtColor(src,src_gray,COLOR_BGR2GRAY);
  blur(src_gray,src_gray,Size(3,3));
  namedWindow("win1",WINDOW_AUTOSIZE);
  imshow("win1",src);
  createTrackbar("threshold:","source",&thresh,max_thresh,thresh_callback);
  thresh_callback(0,0);
  waitKey(0);
  return 0;
}

void thresh_callback(int ,void* )
{
  Mat threshold_output;
  vector<vector<Point > > contours;
  vector<Vec4i>hierarchy;
  threshold(src_gray,threshold_output,thresh,255,THRESH_BINARY);
  findContours(threshold_output,contours,hierarchy,RETR_TREE,CHAIN_APPROX_SIMPLE,Point(0,0));
  vector<vector<Point > > contours_poly(contours.size());
  vector<Rect>boundRect(contours.size());
  vector<Point2f>center(contours.size());
  vector<float>radius(contours.size());
  for(size_t i=0;i<contours.size();i++)
     {
       approxPolyDP(Mat (contours[i]),contours_poly[i],3,true);
       boundRect[i]=boundingRect(Mat(contours_poly[i]));
       minEnclosingCircle(contours_poly[i],center[i],radius[i]);
     }
  Mat drawing=Mat::zeros(threshold_output.size(),CV_8UC3);
  for(size_t i=0;i<contours.size();i++)
     {
       Scalar color=Scalar(rng.uniform(0,255),rng.uniform(0,255),rng.uniform(0,255));
       drawContours(drawing, contours_poly,(int)i,color,1,8,vector<Vec4i>(),0,Point(0,0));
       rectangle(drawing,boundRect[i].tl(),boundRect[i].br(),color,2,8,0);
       circle(drawing,center[i],(int)radius[i],color,2,8,0);
     }
  namedWindow("contours",WINDOW_AUTOSIZE);
  imshow("contours",drawing);   
}
