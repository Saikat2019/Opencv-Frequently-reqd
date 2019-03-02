#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>  

using namespace std;
using namespace cv;

int Hmax=255;
int Hmin=0;
int Smax=255;
int Smin=0;
int Vmax=255;
int Vmin=0;
int m=1;
int i,j;
 Mat vid=imread("photoCap.jpg",1);

void updateHmax(int ,void * saikat1)
    {
    }
    
void updateHmin(int ,void * saikat2)
    {
    }    

void updateSmax(int ,void * saikat3)
    {
    }
    
void updateSmin(int ,void * saikat4)
    {
    }    
    
void updateVmax(int ,void * saikat5)
    {
    }    

void updateVmin(int ,void * saikat6)
    {
    }
    

    
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
  
  void updatemorph(int ,void * saikat7)
    {
    Mat img(720,1280,CV_8UC1,Scalar(0));
           Mat frame(720,1280,CV_8UC3,Scalar(0,0,0));
           Mat original;
           vid.copyTo(frame);
           vid.copyTo(original);
           //cvtColor(frame,frame,CV_BGR2HSV);
           for(i=0;i<frame.rows;i++)
               {
                  for(j=0;j<frame.cols;j++)
                      {
                        if(frame.at<Vec3b>(i,j)[0]>Hmin && frame.at<Vec3b>(i,j)[0]<Hmax && frame.at<Vec3b>(i,j)[1]>Smin && frame.at<Vec3b>(i,j)[1]<Smax && frame.at<Vec3b>(i,j)[2]<Vmax && frame.at<Vec3b>(i,j)[2]>Vmin)
                        {
                          img.at<uchar>(i,j)=255;
                        }  
                        else
                          img.at<uchar>(i,j)=0;
                      }
               }
           for(i=1;i<=m;i++)
              {
               Mat elemente=getStructuringElement( MORPH_ELLIPSE,Size( 3, 3 ),Point( 1,1 ) );
               erode( img, img, elemente );
              }    
            for(i=1;i<=m;i++)
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
		}
		else if (approx.size() >= 4 && approx.size() <= 6)
		{
			int vtc = approx.size();
			std::vector<double> cos;
			for (int j = 2; j < vtc+1; j++)
				cos.push_back(angle(approx[j%vtc], approx[j-2], approx[j-1]));
			std::sort(cos.begin(), cos.end());
			double mincos = cos.front();
			double maxcos = cos.back();
			if (vtc == 4 && mincos >= -0.1 && maxcos <= 0.3)
			{
				setLabel(dst, "RECT", contours[i]);
			}	

                 }
	}
	 cv::imshow("original video", original);
	 cv::imshow("video", dst);
         waitKey(0);
    }
 
   {
      namedWindow("video",2);
      namedWindow("original video",2);
      createTrackbar("trackHmax","video",&Hmax,255,updateHmax);
      updateHmax(Hmax,NULL);
      createTrackbar("trackHmin","video",&Hmin,255,updateHmin);
      updateHmin(Hmin,NULL);
      createTrackbar("trackSmax","video",&Smax,255,updateSmax);
      updateSmax(Smax,NULL);
      createTrackbar("trackSmin","video",&Smin,255,updateSmin);
      updateSmin(Smin,NULL);
      createTrackbar("trackVmax","video",&Vmax,255,updateVmax);
      updateVmax(Vmax,NULL);
      createTrackbar("trackVmin","video",&Vmin,255,updateVmin);
      updateVmin(Vmin,NULL); 
      createTrackbar("no of morph","video",&m,5,updatemorph);
      updatemorph(m,NULL); 
      
           
      return 0;    
   }
