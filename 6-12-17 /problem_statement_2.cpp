#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>  

using namespace std;
using namespace cv;

int Bmax=255;
int Bmin=55;
int Gmax=255;
int Gmin=90;
int Rmax=255;
int Rmin=75;
int me=2;
int md=1;
int points;
int total=0;
int tr=0;
int tt=0;
  
static double angle(cv::Point pt1, cv::Point pt2, cv::Point pt0)
{
	double dx1 = pt1.x - pt0.x;
	double dy1 = pt1.y - pt0.y;
	double dx2 = pt2.x - pt0.x;
	double dy2 = pt2.y - pt0.y;
	return (dx1*dx2 + dy1*dy2)/sqrt((dx1*dx1 + dy1*dy1)*(dx2*dx2 + dy2*dy2) + 1e-10);
}

void setLabel(cv::Mat& im, const std::string label, std::vector<cv::Point>& contour)
{
	int fontface = cv::FONT_HERSHEY_SIMPLEX;
	double scale = 0.4;
	int thickness = 1;
	int baseline = 0;

	cv::Size text = cv::getTextSize(label, fontface, scale, thickness, &baseline);
	cv::Rect r = cv::boundingRect(contour);

	cv::Point pt(r.x + ((r.width - text.width) / 2), r.y + ((r.height + text.height) / 2));
	cv::rectangle(im, pt + cv::Point(0, baseline), pt + cv::Point(text.width, -text.height), CV_RGB(255,255,255), CV_FILLED);
	cv::putText(im, label, pt, fontface, scale, CV_RGB(0,0,0), thickness, 8);
}
    
int main()
   {
      VideoCapture vid("PS 2.mp4");
      namedWindow("video",2);
      namedWindow("original video",2);
      int i,j;
      Mat img(720,1280,CV_8UC1,Scalar(0));
      while(1)
         {
           int nor=0;
           int no_t=0;
           Mat frame(720,1280,CV_8UC3,Scalar(0,0,0));
           Mat original;
           vid >> frame;
           vid >> original;
           for(i=0;i<frame.rows;i++)
               {
                  for(j=0;j<frame.cols;j++)
                      {
                        if(frame.at<Vec3b>(i,j)[0]>Bmin && frame.at<Vec3b>(i,j)[0]<Bmax && frame.at<Vec3b>(i,j)[1]>Gmin && frame.at<Vec3b>(i,j)[1]<Gmax && frame.at<Vec3b>(i,j)[2]<Rmax && frame.at<Vec3b>(i,j)[2]>Rmin)
                        {
                          img.at<uchar>(i,j)=255;
                        }  
                        else
                          img.at<uchar>(i,j)=0;
                      }
               }
           for(i=1;i<=me;i++)
              {
               Mat elemente=getStructuringElement( MORPH_ELLIPSE,Size( 3, 3 ),Point( 1,1 ) );
               erode( img, img, elemente );
              }    
            for(j=1;j<=md;j++)
              {
               Mat elementd=getStructuringElement( MORPH_ELLIPSE,Size( 3, 3 ),Point( 1,1 ) );
               dilate( img, img, elementd );
              }       
        cv::Mat src(720,1280,CV_8UC1,Scalar(0));
        img.copyTo(src);   
	cv::Mat gray(720,1280,CV_8UC1,Scalar(0));
        img.copyTo(gray);
	cv::Mat bw(720,1280,CV_8UC1,Scalar(0));
	cv::Canny(gray, bw, 0, 50, 5);
	std::vector<std::vector<cv::Point> > contours;
	cv::findContours(bw.clone(), contours, CV_RETR_LIST, CV_CHAIN_APPROX_SIMPLE);

	std::vector<cv::Point> approx;
	cv::Mat dst = src.clone();

	for (int i = 0; i < contours.size(); i++)
	{
		cv::approxPolyDP(cv::Mat(contours[i]), approx, cv::arcLength(cv::Mat(contours[i]), true)*0.02, true);
		if (std::fabs(cv::contourArea(contours[i])) < 100 || !cv::isContourConvex(approx))
			continue;

		if (approx.size() == 3)
		{
			setLabel(dst, "TRI", contours[i]);
			no_t++;    
		}
		else if (approx.size() >= 4 && approx.size() <= 6)
		{
			int vtc = approx.size();
			std::vector<double> cos;
			for (int j = 2; j < vtc+1; j++);
			if (vtc == 4)
			{
				setLabel(dst, "RECT", contours[i]);
				nor++;
			}	

                 }
          if(no_t==1 && tt<2)
            {
              tt++;
              total+=200;
              printf("\t\t\t*****  your bot is over a triangle  *****\n");
              printf("\t\t\t*****  points gain + 200  *****\n");
              printf("\t\t\t***** your current total is %d  *****\n",total);
            }
          if(nor==3 && tr<5)
            {
              tr++;
              total+=100;
              printf("\t\t\t*****  your bot is over a rectangle  *****\n");
              printf("\t\t\t*****  points gain + 100  *****\n");
              printf("\t\t\t***** your current total is %d  *****\n",total);
            }        
	}
	 cv::imshow("original video", original);
	 cv::imshow("video", dst);
           if(waitKey(30)>=0)
           {
               break;
           }     
         }
      printf("\n\n\t\t\t***** your total is %d  *****\n\n",total);   
      return 0;    
   }
