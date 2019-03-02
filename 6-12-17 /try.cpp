#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>                                     //included 5 libraries

using namespace cv;
using namespace std;

int main()                                            //main starts here
        {
          Mat org=imread("puzzle.jpg",1);             //reading in colored
          int a,b;
          a=org.rows;
          b=org.cols;
          int i,j,k,l;
          Mat part1(a/3,b/3,CV_8UC3,Scalar(0,0,0));
          Mat part2(a/3,b/3,CV_8UC3,Scalar(0,0,0));
          Mat part3(a/3,b/3,CV_8UC3,Scalar(0,0,0));
          Mat part4(a/3,b/3,CV_8UC3,Scalar(0,0,0));
          Mat part5(a/3,b/3,CV_8UC3,Scalar(0,0,0));
          Mat part6(a/3,b/3,CV_8UC3,Scalar(0,0,0));
          Mat part7(a/3,b/3,CV_8UC3,Scalar(0,0,0));
          Mat part8(a/3,b/3,CV_8UC3,Scalar(0,0,0));
          Mat part9(a/3,b/3,CV_8UC3,Scalar(0,0,0));
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       part1.at<Vec3b>(i,j)=org.at<Vec3b>(i,j);
                    }
              }
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       part2.at<Vec3b>(i,j)=org.at<Vec3b>(i,j+b/3);
                    }
              } 
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       part3.at<Vec3b>(i,j)=org.at<Vec3b>(i,j+2*(b/3));
                    }
              }
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       part4.at<Vec3b>(i,j)=org.at<Vec3b>(i+a/3,j);
                    }
              }             
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       part5.at<Vec3b>(i,j)=org.at<Vec3b>(i+(a/3),j+b/3);
                    }
              }     
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       part6.at<Vec3b>(i,j)=org.at<Vec3b>(i+a/3,j+2*(b/3));
                    }
              }     
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       part7.at<Vec3b>(i,j)=org.at<Vec3b>(i+2*(a/3),j);
                    }
              }     
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       part8.at<Vec3b>(i,j)=org.at<Vec3b>(i+2*(a/3),j+b/3);
                    }
              }     
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       part9.at<Vec3b>(i,j)=org.at<Vec3b>(i+2*(a/3),j+2*(b/3));
                    }
              }     
          imshow("win",org);
          imshow("win1",part1);
          imwrite("part1.jpg",part1);
          imshow("win2",part2);
          imwrite("part2.jpg",part2);
          imshow("win3",part3);
          imwrite("part3.jpg",part3);
          imshow("win4",part4);
          imwrite("part4.jpg",part4);
          imshow("win5",part5);
          imwrite("part5.jpg",part5);
          imshow("win6",part6);
          imwrite("part6.jpg",part6);
          imshow("win7",part7);
          imwrite("part7.jpg",part7);
          imshow("win8",part8);
          imwrite("part8.jpg",part8);
          imshow("win9",part9);
          imwrite("part9.jpg",part9);
          waitKey(0);
          return 0;
        }
