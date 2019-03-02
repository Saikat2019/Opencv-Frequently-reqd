#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int main()
   {
     Mat img1=imread("lenna.jpg",0);
     Mat img2=imread("eagle.jpg",0);
     imshow("win1",img1,img2);
     waitKey(0);
     return 0;
   }
