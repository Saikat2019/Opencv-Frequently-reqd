#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<math.h>
using namespace std;
using namespace cv;
Mat img=imread("lenna.jpg",1);
int r,t,c;
void updateimg(int r,void *p)
   {
      int a,b,i,j;
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
                          if(img.at<Vec3b>(i,j)[2]+(d-r)<t)
                              img.at<Vec3b>(i,j)[2]=img.at<Vec3b>(i,j)[2]+(d-r);
                          else
                                img.at<Vec3b>(i,j)[2]=t;
                       }
                  }
          }
      imshow("win",img);
      waitKey(0);   
   } 
int main() 
   {
      namedWindow("win",WINDOW_NORMAL);
      createTrackbar("trackr","win",&r,280,updateimg);
      updateimg(r,NULL);
      createTrackbar("trackt","win",&t,255,updateimg);
      updateimg(t,NULL);
      /*createTrackbar("trackc","win",&c,2,updateimg);
      updateimg(c,NULL);*/
      return 0;
   }  
