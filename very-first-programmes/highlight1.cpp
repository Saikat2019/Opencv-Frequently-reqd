#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<math.h>
using namespace std;
using namespace cv;
Mat img;//=imread("lenna.jpg",1);
int r,t,c;
int abs(int a)
   {
      if(a>0)
         return a;
      return (-a);   
   } 
void updateimg(int r,void *p)
   {
      int a,b,i,j;
      Mat highlight(a,b,CV_8UC1,Scalar(255,255,255));
      a=img.rows;
      b=img.cols;
      int d;
      for(i=0;i<a;i++)
          { 
             for(j=0;j<b;j++)
                  {
                     d=pow((pow((i-(a/2)),2)+pow((j-(b/2)),2)),0.5);
                     if(d>r)
                       {
                         // if(img.at<Vec3b>(i,j)[c]+(d-r)<t)
                              highlight.at<Vec3b>(i,j)[c]=img.at<Vec3b>(i,j)[c]+(d-r);
                             /* highlight.at<Vec3b>(i,j)[abs(c-1)]=img.at<Vec3b>(i,j)[abs(c-1)];
                              highlight.at<Vec3b>(i,j)[abs(c-2)]=img.at<Vec3b>(i,j)[abs(c-2)];*/
                         // else
                           //     img.at<Vec3b>(i,j)[c]=t;
                       }
                     else 
                          highlight.at<Vec3b>(i,j)=img.at<Vec3b>(i,j);
                        
                  }
          }
      imshow("win",highlight);
      waitKey(0);   
   } 
int main() 
   {
      img=imread("lenna.jpg",1);
      namedWindow("win",WINDOW_NORMAL);
      createTrackbar("trackr","win",&r,255,updateimg);
      updateimg(r,NULL);
      createTrackbar("trackt","win",&t,255,updateimg);
      updateimg(t,NULL);
      createTrackbar("trackc","win",&c,255,updateimg);
      updateimg(c,NULL);
      return 0;
   }  
