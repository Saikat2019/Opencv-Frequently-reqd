#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int main()
{
  Mat img=imread("eagle.jpg",0);
  Mat upsc(5*img.rows,img.cols,CV_8UC1,Scalar(0));
  Mat dwnsc((img.rows)/3,(img.cols),CV_8UC1,Scalar(0)); 
  int i,j,k,l;
  for(i=0;i<img.rows;i++)
    {
      for(j=0,l=0;j<img.cols;j++)
        {
          upsc.at<uchar>(5*i,j)=img.at<uchar>(i,j);
          upsc.at<uchar>(5*i+1,j)=img.at<uchar>(i,j);
          upsc.at<uchar>(5*i+2,j)=img.at<uchar>(i,j);
          upsc.at<uchar>(5*i+3,j)=img.at<uchar>(i,j);
          upsc.at<uchar>(5*i+4,j)=img.at<uchar>(i,j);
        }
    }
  for(i=0;i<(img.rows)/3;i++)
    {
      for(j=0;j<img.cols;j++)
       {
         dwnsc.at<uchar>(i,j)=(img.at<uchar>(3*i,j)+img.at<uchar>(3*i+1,j)+img.at<uchar>(3*i+2,j))/3;
       } 
    }
namedWindow("win1",WINDOW_NORMAL);
namedWindow("win2",WINDOW_NORMAL);
namedWindow("win3",WINDOW_NORMAL);
imshow("win1",img);
imshow("win2",upsc);
imshow("win3",dwnsc);
waitKey(0);
return 0;
}
