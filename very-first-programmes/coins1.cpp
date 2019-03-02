#include "opencv2/highgui.hpp"
#include "opencv2/imgproc.hpp"
#include <iostream>
#include <stdio.h>

using namespace std;
using namespace cv;
int main()
   {
     Mat templ=(imread("coins(1).jpg",1));
     imshow("win2",templ);
     waitKey(0);
     return 0;
   }
