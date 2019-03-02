#include <opencv2/core/utility.hpp>
#include "opencv2/imgproc.hpp"
#include "opencv2/imgcodecs.hpp"
#include "opencv2/highgui.hpp"
#include <cstdio>
#include <iostream>
using namespace cv;
using namespace std;
int main()
{
int blockSize=75;
    int imageSize=blockSize*8;
    Mat chessBoard(imageSize,imageSize,CV_8UC3,Scalar::all(0));
    unsigned char color=0;

     for(int i=0;i<imageSize;i=i+blockSize){
      color=~color;
       for(int j=0;j<imageSize;j=j+blockSize){
       Mat ROI=chessBoard(Rect(i,j,blockSize,blockSize));
       ROI.setTo(Scalar::all(color));
       color=~color;
      }
     }
    imshow("Chess board", chessBoard);
    waitKey(0);
}
