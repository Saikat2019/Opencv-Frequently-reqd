#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
using namespace cv;
using namespace std;
int main()
{
int i,j,p,k,l;
int a[256];
Mat img=imread("lenna.jpg",0);
k=img.rows;
for(i=0;i<256;i++)
{
   a[i]=0;
}
for(i=0;i<img.rows;i++)
  {
   for(j=0;j<img.rows;j++)
     {
        p=img.at<uchar>(i,j);
        a[p]=a[p]+1;  
     }
  }
for(i=0;i<256;i++)
{
 a[i]=a[i]%1000;
}
int max=a[0];
for(i=0;i<256;i++)
{
  if(max<a[i])
     max=a[i];
}
Mat hist(max,256,CV_8UC1,Scalar(255));
for(i=0;i<256;i++)
{
 for(j=0;j<=a[i];j++)
  {
   hist.at<uchar>(max-j,i)=0;
  } 
}
namedWindow("win1",WINDOW_NORMAL);
imshow("win1",hist);
waitKey(0);
return 0;
}
