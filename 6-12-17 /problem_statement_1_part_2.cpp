#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>                                     //included 5 libraries

using namespace cv;
using namespace std;

Point findtemplate(Mat puzzle, Mat templ)            //creating a function which takes input of image and template
       {
         Mat res;
         int rescols=puzzle.cols-templ.cols+1;
         int resrows=puzzle.rows-templ.rows+1;
         res.create(resrows,rescols,CV_32FC1);
         matchTemplate(puzzle,templ,res,CV_TM_SQDIFF_NORMED);
         normalize(res,res,0,1,NORM_MINMAX,-1,Mat());
         double minval,maxval;
         Point minloc,maxloc;
         minMaxLoc(res,&minval,&maxval,&minloc,&maxloc,Mat());
         return minloc;                                 //returns the point where (0,0)of the template matches with the image
       }
int main()
       {
          Mat org=imread("original.jpg",1);
          Mat puzzle=imread("puzzle.jpg",1);
          int count=1;
          int a=puzzle.rows,b=puzzle.cols;
          int i,j,k=1,l=1,m,n;
          Point p;
          Mat templ(a/3,b/3,CV_8UC3,Scalar(0,0,0));
          Mat result(a,b,CV_8UC3,Scalar(0,0,0));
          for(i=0;i<=2*a/3;i+=a/3)
                {                                          //increamenting the corner points to next templ
                  for(j=0;j<=2*b/3;j+=b/3)
                      {
                         for(m=0;m<a/3;m++)
                              {
                                  for(n=0;n<b/3;n++)
                                     {
                                        templ.at<Vec3b>(m,n)=puzzle.at<Vec3b>(i+m,j+n);         //storing one smallest div of that puzzle in template templ
                                     }
                              }
                         p=findtemplate(org,templ);                                          //calling the function findtemplate to get the point where the template matches     
                         for(m=0;m<a/3;m++)
                              {
                                  for(n=0;n<b/3;n++)
                                     {
                                        result.at<Vec3b>(p.y+m,p.x+n)=templ.at<Vec3b>(m,n);      //writing the templ in result at the same position as in the original image  
                                     }
                              }     
                      }
                }
          imshow("original",org);
          waitKey(0);
          imshow("puzzle",puzzle);
          waitKey(0);
          imshow("result_Solved_puzzle",result);
          waitKey(0);
          return 0;
       }       
