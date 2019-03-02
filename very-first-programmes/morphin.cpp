#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
Mat img1=imread("lenna.jpg",0);
Mat img2=imread("eagle.jpg",0);
int t,a,b;
void updateimg( int t,void *d)
    {
      Mat morphin(a,b,CV_8UC1,Scalar(0));
      for(int i=0;i<a;i++)
           {
               for(int j=0;j<b;j++)
                   {
                      morphin.at<uchar>(i,j)=(t*img2.at<uchar>(i,j)+(100-t)*img1.at<uchar>(i,j))/100;
                   }
           }
       imshow("win",morphin);
       waitKey(0);    
    }
int main()    
    {
       if(img1.rows>img2.rows)
            a=img1.rows;
       else
           a=img2.rows;
       if(img1.cols>img2.cols)
            b=img1.cols;
       else
           b=img2.cols;
       namedWindow("win",WINDOW_NORMAL);        
       createTrackbar("%IMG1","win",&t,100,updateimg);
       updateimg(t,NULL);
       return 0;         
    }
