#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
using namespace cv;
using namespace std;
Mat img=imread("a.png",1);
int bmax=255,bmin=0,gmax=255,gmin=0,rmax=255,rmin=0;
void updateimg(int t,void *a)
     {
         Mat bimg(img.rows,img.cols,CV_8UC1,Scalar(0));
         int i,j;
         for(i=0;i<img.rows;i++)
              {
                 for(j=0;j<img.cols;j++)
                      {
                        if((img.at<Vec3b>(i,j)[0]>bmin && img.at<Vec3b>(i,j)[0]<bmax)&&(img.at<Vec3b>(i,j)[1]>gmin && img.at<Vec3b>(i,j)[1]<gmax)&&(img.at<Vec3b>(i,j)[2]>rmin && img.at<Vec3b>(i,j)[2]<rmax))
                            bimg.at<uchar>(i,j)=255;
                      }
              }
         imshow("win1",bimg);
         waitKey(0);     
     }
int main()
     {
       namedWindow("original",WINDOW_NORMAL);
       imshow("original",img);
       waitKey(0);
       namedWindow("win1",WINDOW_NORMAL);
       createTrackbar("blueMAX","win1",&bmax,255,updateimg);
       updateimg(bmax,NULL);
       createTrackbar("blueMIN","win1",&bmin,255,updateimg);
       updateimg(bmin,NULL);
       createTrackbar("greenMAX","win1",&gmax,255,updateimg);
       updateimg(gmax,NULL);
       createTrackbar("greenMIN","win1",&gmin,255,updateimg);
       updateimg(gmin,NULL);
       createTrackbar("redMAX","win1",&rmax,255,updateimg);
       updateimg(rmax,NULL);
       createTrackbar("redMIN","win1",&rmin,255,updateimg);
       updateimg(rmin,NULL);
       return 0;
     }     
