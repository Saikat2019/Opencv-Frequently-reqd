#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int main()
  {
   Mat img=imread("con.jpg",1);
   imshow("win",img);
   waitKey(0);
   return 0;
   } 
