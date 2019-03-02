#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>                                     //included 5 libraries

using namespace cv;
using namespace std;

int main()                                            //main starts here
        {
          Mat org=imread("original.jpg",1);             //reading in colored
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
          Mat puzzle(a,b,CV_8UC3,Scalar(0,0,0));
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       part1.at<Vec3b>(i,j)=org.at<Vec3b>(i,j);      // dividing the original image in 9 parts and storing them in part1, part2...
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
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       puzzle.at<Vec3b>(i,j)=part8.at<Vec3b>(i,j);      // dividing the original image in 9 parts and storing them in part1, part2...
                    }
              }
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       puzzle.at<Vec3b>(i,j+b/3)=part1.at<Vec3b>(i,j);
                    }
              } 
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       puzzle.at<Vec3b>(i,j+2*(b/3))=part6.at<Vec3b>(i,j);
                    }
              }
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       puzzle.at<Vec3b>(i+a/3,j)=part7.at<Vec3b>(i,j);
                    }
              }             
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       puzzle.at<Vec3b>(i+(a/3),j+b/3)=part9.at<Vec3b>(i,j);
                    }
              }     
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       puzzle.at<Vec3b>(i+a/3,j+2*(b/3))=part5.at<Vec3b>(i,j);
                    }
              }     
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       puzzle.at<Vec3b>(i+2*(a/3),j)=part3.at<Vec3b>(i,j);
                    }
              }     
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       puzzle.at<Vec3b>(i+2*(a/3),j+b/3)=part2.at<Vec3b>(i,j);
                    }
              }     
          for(i=0;i<a/3;i++)
              {
                for(j=0;j<b/3;j++)
                    {
                       puzzle.at<Vec3b>(i+2*(a/3),j+2*(b/3))=part4.at<Vec3b>(i,j);
                    }
              }         
          imshow("Original image",org);
          imshow("Puzzled image",puzzle);
          imwrite("puzzle.jpg",puzzle);           //storing the puzzeled image so that we can use it in the next part of the PS
          waitKey(0);
          return 0;
        }
