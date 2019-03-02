#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int main()
{
 int i,j;
 Mat img1=imread("eagle.jpg",1);
 Mat mrimg(img1.rows,img1.cols,CV_8UC3,Scalar(0,0,0));
 for(i=0;i<img1.rows;i++)
 {
   for(j=0;j<img1.cols;j++)
     {
       mrimg.at<Vec3b>(i,j)=img1.at<Vec3b>(i,img1.rows-1-j);
     }
 }
 namedWindow("win1",WINDOW_NORMAL);
 imshow("win1",mrimg);
 waitKey(0);
 return 0;
}


