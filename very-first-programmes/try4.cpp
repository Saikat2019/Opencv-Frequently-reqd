#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int main()
{
Mat img(100,100,CV_8UC3,Scalar(127,127,127));
namedWindow("window", WINDOW_NORMAL);
imshow("window",img);
waitKey(0);
}
