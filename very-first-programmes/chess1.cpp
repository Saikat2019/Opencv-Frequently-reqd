#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int main()
{
Mat img1(400,400,CV_8UC1,Scalar(0));
 for(int i=0;i<400;i++)
      {
       if((i/50)%2==0) 
         for(int j=0;j<400;j++)
              {
                if((j/50)%2==1)
                   img1.at<uchar>(i,j)=255;    
              }
      }  
imshow("win2",img1);
imwrite("sdfs.jpg",img1);
waitKey(0);
return 0;
}
