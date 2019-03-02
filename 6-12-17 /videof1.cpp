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
    
    /**
 * Helper function to find a cosine of angle between vectors
 * from pt0->pt1 and pt0->pt2
 */
static double angle(cv::Point pt1, cv::Point pt2, cv::Point pt0)
{
	double dx1 = pt1.x - pt0.x;
	double dy1 = pt1.y - pt0.y;
	double dx2 = pt2.x - pt0.x;
	double dy2 = pt2.y - pt0.y;
	return (dx1*dx2 + dy1*dy2)/sqrt((dx1*dx1 + dy1*dy1)*(dx2*dx2 + dy2*dy2) + 1e-10);
}

/**
 * Helper function to display text in the center of a contour
 */
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
      createTrackbar("trackHmax","video",&Hmax,255,updateHmax);
      createTrackbar("trackHmin","video",&Hmin,255,updateHmin);
      createTrackbar("trackSmax","video",&Smax,255,updateSmax);
      createTrackbar("trackSmin","video",&Smin,255,updateSmin);
      createTrackbar("trackVmax","video",&Vmax,255,updateVmax);
      createTrackbar("trackVmin","video",&Vmin,255,updateVmin); 
      int i,j;
      Mat img(720,1280,CV_8UC1,Scalar(0));
      while(1)
         {
           Mat frame(720,1280,CV_8UC3,Scalar(0,0,0));
           vid >> frame;
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
           cv::Mat src(720,1280,CV_8UC1,Scalar(0));
	/*vid >> src;
	if (src.empty())
		return -1;*/
        img.copyTo(src);   
	// Convert to grayscale
	cv::Mat gray(720,1280,CV_8UC1,Scalar(0));
	//cv::cvtColor(src, gray, CV_BGR2GRAY);
        img.copyTo(gray);
	// Use Canny instead of threshold to catch squares with gradient shading
	cv::Mat bw(720,1280,CV_8UC1,Scalar(0));
	cv::Canny(gray, bw, 0, 50, 5);

	// Find contours
	std::vector<std::vector<cv::Point> > contours;
	cv::findContours(bw.clone(), contours, CV_RETR_LIST, CV_CHAIN_APPROX_SIMPLE);

	std::vector<cv::Point> approx;
	cv::Mat dst = src.clone();

	for (int i = 0; i < contours.size(); i++)
	{
		// Approximate contour with accuracy proportional
		// to the contour perimeter
		cv::approxPolyDP(cv::Mat(contours[i]), approx, cv::arcLength(cv::Mat(contours[i]), true)*0.02, true);

		// Skip small or non-convex objects 
		if (std::fabs(cv::contourArea(contours[i])) < 100 || !cv::isContourConvex(approx))
			continue;

		if (approx.size() == 3)
		{
			setLabel(dst, "TRI", contours[i]);    // Triangles
			//printf("triangle");
		}
		else if (approx.size() >= 4 && approx.size() <= 6)
		{
			// Number of vertices of polygonal curve
			int vtc = approx.size();

			// Get the cosines of all corners
			std::vector<double> cos;
			for (int j = 2; j < vtc+1; j++)
				cos.push_back(angle(approx[j%vtc], approx[j-2], approx[j-1]));

			// Sort ascending the cosine values
			std::sort(cos.begin(), cos.end());

			// Get the lowest and the highest cosine
			double mincos = cos.front();
			double maxcos = cos.back();

			// Use the degrees obtained above and the number of vertices
			// to determine the shape of the contour
			if (vtc == 4 && mincos >= -0.1 && maxcos <= 0.3)
			{
				setLabel(dst, "RECT", contours[i]);
				//printf("rectangle\n");
			}	

                 }
	}
	 //imshow("video",img);
	 cv::imshow("src", src);
	 cv::imshow("video", dst);
           if(waitKey(30)>=0)
           {
               break;
           }     
         }
      return 0;    
   }
