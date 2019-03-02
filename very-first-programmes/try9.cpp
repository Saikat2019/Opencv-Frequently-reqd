#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int main()
{
Mat img=imread("eagle.jpg",1);
Mat img1(img.cols,img.rows,CV_8UC3,Scalar(0,0,0));
int i,j;
for(j=0;j<img.rows;j++)
  {
   for(i=0;i<img.cols;i++)
   {
    img1.at<Vec3b>(i,j)=img.at<Vec3b>(img.cols-1-i,j);
   }
  }
namedWindow("win",WINDOW_NORMAL);
imshow("win",img1);
waitKey(0);
}
