#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
Mat img=imread("eagle.jpg",1);
int isvalid(int i,int j)
{
 if(i<0||i>=img.rows||j<0||j>=img.cols)
     return 0;
 else
     return 1;
}
int main()
{
int i,j;
int res,n;
int k,l;

Mat blur(img.rows,img.cols,CV_8UC1,Scalar(0));
for(i=0;i<img.rows;i++)
 {
   for(j=0;j<img.cols;j++)
    {
     n=0;
     for(k=-1;k<2;k++)
      {
       for(l=-1;l<2;l++)
        {
          if(isvalid(i+k,j+l)==1)
           {  
            n=n+1;
           } 
        }
      }
printf("%d\t",n);
     res=0;
     for(k=-1;k<2;k++)
      {
       for(l=-1;l<2;l++)
        {
          if(isvalid(i+k,j+l)==1)
            {
             res=res+img.at<uchar>(i+k,j+l);
            }
        }
      }
     blur.at<uchar>(i,j)=res/n;
    }
 }

imshow("win1",blur);
waitKey(0);
return 0;
}
