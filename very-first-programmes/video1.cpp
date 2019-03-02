#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
using namespace cv;
using namespace std;
int a=1;
void onMouse(int event,int x,int y,int flags, void * saikat)
    {
       if(event==EVENT_RBUTTONDOWN)
         {
           a=0;
         }  
    }
int main()
    {
      int i,j;
      VideoCapture vid(0);
      Mat frame(400,400,CV_8UC1,Scalar(0,0,0));
      printf("%d %d\t\t",frame.rows,frame.cols);
      Mat rf;
      while(1)
        {
          vid>>frame;
          
          for(i=0;i<frame.rows;i++)
             {
               for(j=0;j<frame.cols;j++)
                   {
                     rf.at<Vec3b>(i,j)=frame.at<Vec3b>(i,frame.cols-j-1);
                   }
             }
          namedWindow("video",WINDOW_NORMAL);
          setMouseCallback("video",onMouse,NULL);
          imshow("video",rf);
          waitKey(50);
        }
      return 0;
    }
