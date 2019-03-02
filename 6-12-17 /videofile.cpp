#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>  

using namespace std;
using namespace cv;

int main()
   {
      VideoCapture vid("PS 2.mp4");
      while(1)
         {
           Mat frame;
           vid >> frame;
           imshow("video",frame);
           if(waitKey(30)>=0)
           {
              imwrite("photoCap.jpg",frame);
               break;
           }    
         }
      return 0;    
   }
