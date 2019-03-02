#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<math.h>
using namespace cv;
using namespace std;
int main()
{
   VideoCapture cap(0);
   if(!cap.isOpened())  // check if we succeeded
        return -1;
    Mat edges(400,400,CV_8UC3,Scalar(0,0,0));
    namedWindow("edges",2);
    int i,j,t;
    for(;;)
    {
        Mat frame;
        cap >> frame; 
        for(i=0;i<400;i++)
           {
           for(j=0;j<400;j++)
              {
                if(!((i>150)&&(i<250)&&(j>150)&&(j<250)))
                edges.at<Vec3b>(i,j)=frame.at<Vec3b>(i,j);
              }
           }
        imshow("edges",edges);
        t=waitKey(30);
        if(t>=0)
           break;
    }
    return 0;        
}
