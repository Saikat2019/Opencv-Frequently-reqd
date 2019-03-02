#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<stdio.h>
#include<iostream>
#include<queue>

using namespace cv;
using namespace std;

Mat img1=imread("tryBfs.jpg",0);

int main()
  {
    namedWindow("win1",WINDOW_NORMAL);
    
    queue<Point> BFS;
    Point p0(641,1091);
    Point temp1,temp2;
    int i,j;
    
    img1.at<uchar>(p0.y,p0.x)=0;
    BFS.push(p0);
    
    while(!BFS.empty())
    {
    imshow("win1",img1); 
    waitKey(1);
      temp1=BFS.front();
      
      for(i=temp1.y-5;i<temp1.y+6;i++)
         {
            for(j=temp1.x-5;j<temp1.x+6;j++)
               {
                   if(img1.at<uchar>(i,j)==255)
                     {
                      temp2.y=i;
                      temp2.x=j;
                      img1.at<uchar>(temp2.y,temp2.x)=0;
                      BFS.push(temp2);  
                     }
               }
         }
        
      BFS.pop();   
    }
    
    //namedWindow("win2",WINDOW_NORMAL);
    
    waitKey(0);
  }

