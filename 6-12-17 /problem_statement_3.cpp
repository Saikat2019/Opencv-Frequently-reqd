#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <iostream>
#include<stdio.h>                                 
#include <cmath>

using namespace cv;
using namespace std;

int th=255;
Mat img_gray;
Mat draw(480,640,CV_8UC1,Scalar(0));
int i,j;
int dilation_elem=0;
int max_elem=2;
int dilation_size=1;
int max_kernel_size=21;
Mat img1(480,640,CV_8UC1,Scalar(0));
Mat dilation(480,640,CV_8UC1,Scalar(0));
int t=1;
int k=3;

void Dilation(int ,void *saikat2)
      {
      draw.copyTo(dilation);
      int i;
       
      for(i=1;i<=t;i++)
      {
      int dilation_type;
      if(dilation_elem==0)
           dilation_type=MORPH_RECT;
      else if(dilation_elem==1)
           dilation_type=MORPH_CROSS;
      else if(dilation_elem==2)
           dilation_type=MORPH_ELLIPSE;
      Mat element=getStructuringElement( dilation_type,Size( 2*dilation_size + 1, 2*dilation_size+1 ),Point( dilation_size, dilation_size ) );
      erode( dilation, dilation, element );
      }
      //Canny( dilation, dilation, 255, 127, 3 );                  //Canny( detected_edges, detected_edges, lowThreshold, lowThreshold*ratio, kernel_size );
      imshow( "Dilation", dilation );
     imwrite("dilated.jpg",dilation);
      }

void multidilation()
      {
       namedWindow("Dilation",2);
       createTrackbar("Element", "Dilation", &dilation_elem, max_elem,Dilation);
       createTrackbar("Kernel", "Dilation", &dilation_size, max_kernel_size,Dilation);
       createTrackbar("n_o_t","Dilation",&t,50,Dilation);
       createTrackbar("kernel","Dilation",&k,21,Dilation);
      }

void update(int th,void *saikat)
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
	cv::rectangle(im, pt + cv::Point(0, baseline), pt + cv::Point(text.width, -text.height), CV_RGB(0,0,255), CV_FILLED);
	cv::putText(im, label, pt, fontface, scale, CV_RGB(255,255,255), thickness, 16);
}

void contour()
      {
	cv::Mat src = cv::imread("dilated.jpg");
	cv::Mat gray;
	cv::cvtColor(src, gray, CV_BGR2GRAY);
	cv::Mat bw;
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
			printf("*****you have drawn a triangle*****\n");
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
				printf("*****you have drawn a rectangle*****\n");
			}	
			else if (vtc == 5 && mincos >= -0.34 && maxcos <= -0.27)
			{
				setLabel(dst, "PENTA", contours[i]);
				printf("*****you have drawn a pentagon*****\n");
			}	
			else if (vtc == 6 && mincos >= -0.55 && maxcos <= -0.45)
			{
				setLabel(dst, "HEXA", contours[i]);
				printf("*****you have drawn a hexagon*****\n");
			}	
		}
		else
		{
			double area = cv::contourArea(contours[i]);
			cv::Rect r = cv::boundingRect(contours[i]);
			int radius = r.width / 2;

			if (std::abs(1 - ((double)r.width / r.height)) <= 0.2 &&
			    std::abs(1 - (area / (CV_PI * std::pow(radius, 2)))) <= 0.2)
				setLabel(dst, "CIR", contours[i]);
				printf("*****you have drawn a circle*****\n");
		}
	}
	cv::imshow("detected", dst);
	cv::waitKey(0);
      }      
            
int main()
      {
         Mat binary;
         VideoCapture vid(0);  
         namedWindow("win1",2);
         createTrackbar("track","win1",&th,255,update);
         while(1)
            {
              Mat frame;
              vid >> frame;
              cvtColor(frame,img_gray,CV_BGR2GRAY);
              binary=img_gray>th;
              for(i=0;i<480;i++)
                   {
                      for(j=0;j<640;j++)
                          {
                             if(binary.at<uchar>(i,j)==255)
                                 draw.at<uchar>(i,640-j)=255;
                          }
                   }
              imshow("win1",draw);     
              if(waitKey(30)>=0)
                  break;
            } 
         multidilation();
         imwrite("dilated.jpg",dilation); 
         contour(); 
         contour();  
         waitKey(0);   
         return 0;
      }      
