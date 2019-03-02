#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<math.h>
using namespace cv;
using namespace std;
Mat img=imread("veg.jpg",0);
int isvalid(int i,int j)
   {
      if(i<0||j<0||i>=img.rows||j>=img.cols)
            return 0;
      else
            return 1;      
   } 
void dfs(int i,int j)
   {
      for(int l=i-1;l<i+2;l+=2)
         {
            for(int m=j-1;m<j+2;m+=2)
                {
                  if(isvalid(l,m))
                     {
                      if(img.at<uchar>(l,m)>120)
                         {
                            dfs(l,m);
                         }
                     }
                }
         }
   }   
void onMouse(int event,int y,int x,int flag,void *a)
   {
     if(event==EVENT_LBUTTONDOWN)
       {
         dfs(x,y);
       }
     imshow("win",img);  
   }   
int main()
   {
     namedWindow("win",WINDOW_NORMAL);
     setMouseCallback("win",onMouse,0);
     waitKey(0);
     return 0;
   }   
