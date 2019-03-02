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
    int i,j,k,l;
    
    for(i=p0.y-8;i<p0.y+9;i++)
    {
      for(j=p0.x-8;j<p0.x+9;j++)
        {
          img1.at<uchar>(i,j)=0;
        }  
    }
    BFS.push(p0);
    
    while(!BFS.empty())
    {
    imshow("win1",img1); 
    waitKey(1);
      temp1=BFS.front();
      
      for(i=temp1.y-17;i<temp1.y+18;i+=17)
         {
            for(j=temp1.x-17;j<temp1.x+18;j+=17)
               {
                   if(img1.at<uchar>(i,j)>245)
                     {
                      temp2.y=i;
                      temp2.x=j;
                      for(k=i-8;k<i+9;k++)
                         {
                           for(l=j-8;l<j+9;l++)
                             { 
                              img1.at<uchar>(k,l)=0;
                             }
                         }
                      BFS.push(temp2);  
                     }
               }
         }
        
      BFS.pop();   
    }
    
    
    
    waitKey(0);
  }

