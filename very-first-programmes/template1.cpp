#include "opencv2/imgcodecs.hpp"
#include "opencv2/highgui.hpp"
#include "opencv2/imgproc.hpp"
#include <iostream>
#include <stdio.h>

using namespace std;
using namespace cv;
int main()
   {
     int i,j,k,l;
     Mat img=imread("coins.jpg",0);
     Mat temp=imread("con.jpg",0);
     namedWindow("win1",2);
     imshow("win1",img);
     namedWindow("win2",2);
     imshow("win2",temp); 
     waitKey(0);
     int a,b,m,n;
     a=img.rows;
     b=img.cols;
     m=temp.rows;
     n=temp.cols;
     printf("%d %d\n",a,b);
     for(i=0;i<a;i++)
         {
           for(j=0;j<b;j++)
              {
                 if(img.at<uchar>(i,j)==temp.at<uchar>(0,0))
                    {
                      for(k=i;k<i+m;k++)
                         {
                           for(l=j;l<l+n;l++)
                               {
                                   if(img.at<uchar>(k,l)!=temp.at<uchar>(k-i,l-j));
                                       break;
                               }
                               if(img.at<uchar>(k,l)!=temp.at<uchar>(k-i,l-j));
                                       break;
                         }
                    } 
                  if(k==(i+m-1) && m==(l+n-1))
                       break;  
              }
              if(k==(i+m-1) && m==(l+n-1))
                       break; 
         }
       
       if(i!=(a-1) && j!=(b-1))
           printf("template found at %d %d\n",i,j);
           return 0;    
   }
