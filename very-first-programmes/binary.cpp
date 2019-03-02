#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int main()
{
int i,j;
Mat img=imread("eagle.jpg",1);
Mat binary(img.rows,img.cols,CV_8UC1,Scalar(0));
for(i=0;i<img.rows;i++)
 {
  for(j=0;j<img.cols;j++)
   {
    if((0.21*img.at<Vec3b>(i,j)[2]+0.72*img.at<Vec3b>(i,j)[1]+0.07*img.at<Vec3b>(i,j)[0])>127)
     {
        binary.at<uchar>(i,j)=255;
     }
    else
         binary.at<uchar>(i,j)=0;

   //s black_n_white.at<uchar>(i,j)=(0.21*img.at<Vec3b>(i,j)[2]+0.72*img.at<Vec3b>(i,j)[1]+0.07*img.at<Vec3b>(i,j)[0]);
   }
 }
namedWindow("win",WINDOW_NORMAL);
imshow("win",binary);
waitKey(0);
return 0;
}

