#include <opencv2/opencv.hpp>
#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/opencv.hpp"
#include <iostream>
#include <vector>
#include <stdlib.h>

#define BOT_RADIUS 43		//radius of ground bot
#define HEIGHT 220	//HEIGHT at which the reference was taken
#define PIXEL_LENGTH 85			//Pixel width of ground bot at reference pic

using namespace std;
using namespace cv;

	Mat frame=imread("circleDetect1.jpg",1);
	int r1=500;
	int r2=600;

float radius(float h)
{
	return (BOT_RADIUS*HEIGHT/h);
}


Point get_quadPosition(){
	return Point(0,0);
}

void update1(int r1,void *saikat)
      {
      	Mat img2(frame.rows,frame.cols,CV_8UC1);
	GaussianBlur(frame, frame, Size(3, 3), 6, 6);
	cvtColor(frame, img2, CV_BGR2GRAY);
	vector<Vec3f> circles;
	Canny(img2,img2 ,130 ,200);
	HoughCircles(img2, circles, CV_HOUGH_GRADIENT, 1, 50, 100, 20, r1, r2);
	for (size_t i = 0; i < circles.size(); i++)	//for loop for displaying the detected circles
		{
			Point center(cvRound(circles[i][0]), cvRound(circles[i][1]));
			int radius = cvRound(circles[i][2]);
            circle(frame, center, 3, Scalar(0, 255, 0), -1, 8, 0);
			circle(frame, center, radius, Scalar(0, 0, 255), 3, 8, 0);
		}
	imshow("Height",frame);
	waitKey(0);
        
      }

void update2(int r2,void *saikat)
      {
        
      }      

int main()
{


	float bot_radius;
	Point quad = get_quadPosition();
	namedWindow("Height", WINDOW_NORMAL);
   
	createTrackbar("r1", "Height", &r1, frame.cols,update1);
	update1(r1,NULL);
	createTrackbar("r3", "Height", &r2, frame.cols,update2);
  
    update2(r2,NULL);
		
		
	return 0;
}
