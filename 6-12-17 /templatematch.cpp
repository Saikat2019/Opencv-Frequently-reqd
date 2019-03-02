#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>                                     //included 5 libraries

using namespace cv;
using namespace std;

Mat img;
Mat templ;
Mat res;

int m_m;
int max=5;

void MatchingMethod(int m_m,void * saikat)
     {
       Mat copy;
       img.copyTo(copy);
       int rescols=img.cols-templ.cols+1;
       int resrows=img.rows-templ.rows+1;
       res.create(resrows,rescols,CV_32FC1);
       matchTemplate(img,templ,res,m_m);
       normalize(res,res,0,1,NORM_MINMAX,-1,Mat());
       double minval,maxval;
       Point minloc,maxloc;
       Point matchloc;
       minMaxLoc( res, &minval, &maxval, &minloc, &maxloc, Mat() );
       if( m_m  == CV_TM_SQDIFF || m_m == CV_TM_SQDIFF_NORMED )
             {
              matchloc = minloc; 
             }
       else
             {
              matchloc = maxloc; 
             } 
       printf("%d %d\n",matchloc.x,matchloc.y);       
       rectangle( copy, matchloc, Point( matchloc.x + templ.cols , matchloc.y + templ.rows ), Scalar(0,0,255), 2, 8, 0 );                    //creating boundary box
       //rectangle( res, matchloc, Point( matchloc.x + templ.cols , matchloc.y + templ.rows ), Scalar(0,0,255), 2, 8, 0 );                     //creating boundary box
       imshow("image_win",copy);
       //imshow("res_win",res);   
     }

int main()
     {
        img=imread("puzzle.jpg",1);
        templ=imread("part1.jpg",1);
        namedWindow("image_win",WINDOW_NORMAL);
        //namedWindow("res_win",WINDOW_NORMAL);
        createTrackbar("method","image_win",&m_m,5,MatchingMethod);
        MatchingMethod(m_m,NULL);
        //imshow("template",templ);
        waitKey(0);
        return 0;
     }
