#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"

#include<iostream>
using namespace std;
using namespace cv;
int main()
{
namedWindow("diagonal",WINDOW_NORMAL);
SparseMat img(80,80,CV_8UC3,Scalar(0));
for(int i=0;i<80;i++)
{
	for(int j=0;j<80;j++)
	{
	int a=i/100;
	int b=j/100;
	if((a%2==0 && b%2==0)||(b%2==0 && a%2==0))	
	img.at<uchar>(i,j)=255;
}
}
imshow("diagonal",img);
waitKey(0);

return 0;
}
