#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int main()
{
Mat img=imread("eagle.jpg",1);
int i,j;
for(i=0;i<img.rows;i++)
  {
    for(j=0;j<img.cols;j++)
     {
        img.at<Vec3b>(i,j)[0]=255-img.at<Vec3b>(i,j)[0];
        img.at<Vec3b>(i,j)[1]=255-img.at<Vec3b>(i,j)[1];
        img.at<Vec3b>(i,j)[2]=255-img.at<Vec3b>(i,j)[2];
     }
  } 
namedWindow("win1",WINDOW_NORMAL);
imshow("win1",img);
waitKey(0);
return 0;
}
