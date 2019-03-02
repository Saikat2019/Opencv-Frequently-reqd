#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int main()
{
Mat img(80,80,CV_8UC1,Scalar(0));
int i,j;
for(i=0;i<80;i++)
  {
   for(j=0;j<80;j++)
    {
     if((i/10)%2==1&&(j/10)%2==0)
       {
        img.at<uchar>(i,j)=100;
       }
     else if((i/10)%2==0&&(j/10)%2==1)
       {
        img.at<uchar>(i,j)=100;
       }
     }
   }
namedWindow("win5",WINDOW_NORMAL);
imshow("win5",img);
waitKey(0);
return 0;
}
