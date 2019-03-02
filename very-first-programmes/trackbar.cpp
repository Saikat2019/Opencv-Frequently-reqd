#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
using namespace cv;
using namespace std;
Mat img=imread("eagle.jpg",0);
void updateimg(int t,void *a)
{
int i,j;
Mat binary(img.rows,img.cols,CV_8UC1,Scalar(0));
for(i=0;i<img.rows;i++)
 {
  for(j=0;j<img.cols;j++)
   {
    if(img.at<uchar>(i,j)>t)
     {
        binary.at<uchar>(i,j)=255;
     }
    else
         binary.at<uchar>(i,j)=0;
   }
 }

imshow("win1",binary);
waitKey(0);
}
int main()
{
  int t;
  namedWindow("win1",WINDOW_NORMAL);
  createTrackbar("track","win1",&t,255,updateimg);
  updateimg(t,NULL);
  return 0;  
} 

