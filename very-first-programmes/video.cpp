#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<math.h>
using namespace cv;
using namespace std;
int main()
{
VideoCapture vid(1);
Mat frame;
while(1)
{
vid>>frame;
imshow("win",frame);
if(waitKey(50)>=0)
    break;
}
return 0;
}
