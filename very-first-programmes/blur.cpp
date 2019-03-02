#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
using namespace std;
using namespace cv;
int isvalid(int i,int j,Mat img)
{
  if(i<0||j<0||i>=img.rows||j>=img.cols)
return 0;
return 1;
}
int main()
{
int a=0,b=0,c=0,d=0;
Mat img=imread("con.jpg",0);
Mat img1(img.rows,img.cols,CV_8UC1,Scalar(0));
for(int i=0;i<img.rows;i++)
{
	for(int j=0;j<img.cols;j++)
	{ 
		for(int x=-1;x<2;x++)
                {
                       for(int y=-1;y<2;y++)
                       {
                               if(isvalid((i+x),(j+y),img))
                                {
                                  c=c+img.at<uchar>(i+x,j+y);
                                  a++;
                                }
                        }
                }
                d=c/a;
               img1.at<uchar>(i,j)=d;
                c=0;
                d=0;
                a=0;
                
	}
}
imshow("win1",img);
imshow("win",img1);
waitKey(0);
}

