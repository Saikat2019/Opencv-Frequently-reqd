#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<stdio.h>
#include<iostream>

using namespace cv;
using namespace std;

Point p1(-1,-1);
Mat img=imread("ThreePanel.jpg",1);

void onMouse(int evt,int x,int y,int flags,void* param)
   {
      if(evt==CV_EVENT_LBUTTONDOWN)
        {
           p1.x=x;
           p1.y=y;
        }
   }
   
Point* corners(void *)
   {
      int i=0;
      Point* Corners;
           namedWindow("win1",WINDOW_NORMAL);
      while(1)
      {
      printf("i=%d\n",i);
      imshow("win1",img);
      setMouseCallback("win1",onMouse,NULL);
      if(i==0)
        {
          if(p1.x==-1)
            {
              Corners[i]=p1;
              printf("\tx= %d\n",p1.y);
              printf("\ty= %d\n\n",p1.x);
              
              i++;
            }
        }  
      else
        {
          if(p1!=Corners[i-1])
            {
               Corners[i]=p1;
               printf("\tx= %d\n",p1.y);
       printf("\ty= %d\n\n",p1.x);
               i++;
            }
        }  
        waitKey(1);
         if(i>3)
             break; 
      }
      return Corners;
   } 

int main()
   {
     Point* leftCorners;

     leftCorners=corners(NULL);  
     for(int i=0;i<4;i++)
     {
       printf("%d %d \n", leftCorners[i].x,leftCorners[i].y);
     }
     
   }
