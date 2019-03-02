#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int main()
{
int i,j;
Mat img(80,80,CV_8UC1,Scalar(0));
for(i=0;i<=79;i++)
{
for(j=0;j<=79;j++)
{
if((i/10)%2==1 && (j/10)%2==0)
img.at<uchar>(i,j)=255;
else if((i/10)%2==0 && (j/10)%2==1)
img.at<uchar>(i,j)=255;
}}
namedWindow("win",WINDOW_NORMAL);
imshow("win",img);
waitKey(0);
return 0;
}

