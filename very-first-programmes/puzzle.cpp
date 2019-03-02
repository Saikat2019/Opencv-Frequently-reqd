#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>                                     //included 5 libraries

int main()                                            //main starts here
        {
          Mat org=imread("puzzle.jpg",1);             //reading in colored
          int i,j,a,b,m,n;
          a=org.rows;
          b=org.cols;
          printf("%d %d\n",a,b);
          return;
        }
