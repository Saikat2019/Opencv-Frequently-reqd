#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<stdio.h>
#include<iostream>

using namespace cv;
using namespace std;

//Mat img=imread("leftImage.jpg",1);
//Mat img1=imread("leftImage.jpg",1);

 
//using namespace cv;
//using namespace std;
 
int main()
{
    // Read source image.
    Mat im_src = imread("leftImage.jpg",1);
    // Four corners of the book in source image
    vector<Point2f> pts_src;
    pts_src.push_back(Point2f(113,33));
    pts_src.push_back(Point2f(686,172));
    pts_src.push_back(Point2f(660,1567));
    pts_src.push_back(Point2f(33,1647));
 
 
    // Read destination image.
    Mat im_dst(2500,2500,CV_8UC3,Scalar(0,0,0));//=imread("destiny.jpg",1);
    // Four corners of the book in destination image.
    vector<Point2f> pts_dst;
    pts_dst.push_back(Point2f(841,181));
    pts_dst.push_back(Point2f(1670,194));
    pts_dst.push_back(Point2f(1722,2163));
    pts_dst.push_back(Point2f(854,2188));
 
    // Calculate Homography
    Mat h = getPerspectiveTransform(pts_src, pts_dst);
 
    // Output image
    Mat im_out;
    // Warp source image to destination based on homography
    warpPerspective(im_src, im_out, h, im_dst.size());
 
    // Display images
    namedWindow("Source Image",WINDOW_NORMAL);
    namedWindow("Destination Image",WINDOW_NORMAL);
    namedWindow("Warped Source Image",WINDOW_NORMAL);
    imshow("Source Image", im_src);
    imshow("Destination Image", im_dst);
    imshow("Warped Source Image", im_out);
 
    waitKey(0);
}
