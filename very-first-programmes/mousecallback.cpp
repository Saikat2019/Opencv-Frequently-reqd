#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<math.h>
using namespace cv;
using namespace std;
Mat img=imread("vej.jpg",0);
int isvalid(int i,int j)
   {
      if(i<0||j<0||i>=img.rows||j>=img.cols)
            return 0;
      else
            return 1;      
   } 
void DFS(int i,int j)
   {
      int a,b;
      img.at<uchar>(i,j)=0;    
       for(a=i-1;a<i+2;a++)
            {
              for(b=j-1;b<j+2;b++)
                 {
                  if(isvalid(a,b))
                     {
                       if(img.at<uchar>(a,b)=255)
                          DFS(a,b);
                          
                      }  
                 }
            }
            imshow("paint",img);
        waitKey(0);
   }  
void callbackfunc(int event,int x,int y,int flags,void *userdata)
     {
       int m,n,i,j;
       if(event==EVENT_LBUTTONDOWN)
         {
            m=img.at<uchar>(x,y);
            printf("%d %d %d\n",y,x,m);
            DFS(y,x);
            /*j=y;
            for(i=x;img.at<uchar>(i,j)=m;i++)
                {
                   for(j=y;img.at<uchar>(i,j)=m;j++)
                     {
                      //  if(img.at<uchar>(i,j)==m)
                          img.at<uchar>(i,j)=12;
                     }
                } */
         }
        
     }
int main()
     {
        namedWindow("paint",WINDOW_NORMAL);
        setMouseCallback("paint",callbackfunc,NULL);
        imshow("paint",img);
        waitKey(0);
        return 0;
     }
