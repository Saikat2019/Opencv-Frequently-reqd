#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
using namespace std;
using namespace cv;
int main()
{
Mat img(150,150,CV_8UC1,Scalar(255));
namedWindow("Rohan",WINDOW_AUTOSIZE);
imshow("Rohan",img);
waitKey(0);

return 0;
}
