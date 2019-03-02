#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>                                     //included 5 libraries

using namespace cv;
using namespace std;

int dilation_elem=0;
int max_elem=2;
int dilation_size=1;
int max_kernel_size=21;
Mat img=imread("draw.jpg",0);
Mat dilation;
int t=1;

void Dilation(int ,void *saikat)
    {
      img.copyTo(dilation);
      int i;
      for(i=1;i<=t;i++)
      {
      int dilation_type;
      if(dilation_elem==0)
           dilation_type=MORPH_RECT;
      else if(dilation_elem==1)
           dilation_type=MORPH_CROSS;
      else if(dilation_elem==2)
           dilation_type=MORPH_ELLIPSE;
      Mat element=getStructuringElement( dilation_type,Size( 2*dilation_size + 1, 2*dilation_size+1 ),Point( dilation_size, dilation_size ) );
      erode( dilation, dilation, element );
      imshow( "Dilation", dilation );
      }
      imwrite("dilated.jpg",dilation);
      //waitKey(0);                                                
    }

int main()
    {
       
       namedWindow("Dilation",2);
       namedWindow("image",2);
       createTrackbar("Element", "Dilation", &dilation_elem, max_elem,Dilation);
       createTrackbar("Kernel", "Dilation", &dilation_size, max_kernel_size,Dilation);
       createTrackbar("n_o_t","Dilation",&t,50,Dilation);
       imshow("image",img);
       waitKey(0);
       return 0;
    }
