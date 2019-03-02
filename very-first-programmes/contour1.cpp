#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
/*#include<stdio.h>
#include<stdlib.h>
#include<math.h>*/
using namespace cv;
using namespace std;
Mat img=imread("contour.png",0);
Mat res(img.rows,img.cols,CV_8UC1,Scalar(0));//,dummy(img.rows,img.cols,CV_8UC1,Scalar(0));
void update(int t, void *saikat)
    {
       vector < vector < Point > > contours;
       vector <Vec4i> hierarchy;
       Canny(img,img,50,100,3,0);
       findContours(img,contours,hierarchy,RETR_TREE,CHAIN_APPROX_NONE);
       for(int i=0;i<contours.size();i++)
           {
               if(contourArea(contours[i])>t)
               drawContours(res,contours,i,255,2,8,hierarchy,0,Point());
               else
                  continue;
           }
       imshow("win",res);
       //res=dummy;    
    }
/*int main()
    {
       int t;
       namedWindow("win",WINDOW_NORMAL);
       createTrackbar("contour area","win",&t,200,update);
       update(t,NULL);
       waitKey(0);
       return 0;
    } */
  
int main()
    {
    int t=100;
    vector < vector < Point > > contours;
       vector <Vec4i> hierarchy;
       Canny(img,img,50,100,3,1);
       findContours(img,contours,hierarchy,RETR_TREE,CHAIN_APPROX_NONE);
       for(int i=0;i<contours.size();i++)
           {
               if(contourArea(contours[i])>t)
               drawContours(res,contours,i,255,2,8,hierarchy,0,Point());
               else
                  continue;
           }
       imshow("win",res);
       waitKey(0);
       return 0; 
    }      

