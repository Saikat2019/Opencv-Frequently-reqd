#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>
#include<stdlib.h>
#include<math.h>
#include<string>
#include<queue>

using namespace cv;
using namespace std;

double X,Y;
Point up(106,15);
Point down(106,18);

int previousPosition=1;
int currentPosition;
Mat probable(500,212,CV_8UC3,Scalar(0,0,0));

int yCoordinate=0;

double meanX(queue<Point> data)
   {
     int i;
     double sum=0,mean;
     Point temp;
     for(i=0;i<data.size();i++)
        {
          sum+=data.front().x;
          temp=data.front();
          data.pop();
          data.push(temp);
        }
     cout << "sumX" <<sum<<endl;   
     mean=(sum/i);
     return mean;   
   } 
   
double meanY(queue<Point> data)
   {
     int i;
     double sum=0,mean;
     Point temp;
     for(i=0;i<data.size();i++)
        {
         
          sum+=data.front().y;
          temp=data.front();
          data.pop();
          data.push(temp);
        }
     mean=(sum/i);
     return mean;   
   }   
   
double Covarience(queue<Point> data)
   {
     double XY,sum=0,mean,cov;
     int i;
     Point temp;
     XY= X*Y;
     for(i=0;!data.empty();i++)
        {
         sum+=(data.front().x * data.front().y);
         temp=data.front();
         data.pop();
         //data.push(temp); 
        } 
     mean=(sum/i);
     printf("XY=%lf\n",XY);
     printf("%lf\n",mean);
     cov=(mean-XY);
     return cov;   
   }
   
double varienceX(queue<Point> data)
   {
     int i;
     Point temp;
     double sum=0,X,sqX,mean,varX;
     X=meanX(data);
     sqX=X*X;
     for(i=0;i<data.size();i++)
        {
          sum+=(data.front().x * data.front().x);
          temp=data.front();
          data.pop();
          data.push(temp); 
        }
     mean=(sum/i);
     varX=(mean-sqX);
     return varX;   
   }  
   
int checkWhere(Mat Line)
   {
      int i;
      for(i=0;i<Line.rows;i++)
         {
            if(Line.at<Vec3b>(i,Line.cols/2)[1]>240)break;
         }
      if(i>20 && i<110)return 1;
      else if(i<=20) return 0; 
      else return 2;  
   }   
        

Mat regressionLine1(Mat img)
   {
      int i,j;
      Point p1,p2;
      
      double covXY,varX,slope;
      int x1,x2,y1,y2;
      x1=0;
      x2=212;
      Point temp1;
      queue<Point> data;
      for(i=0;i<img.cols;i+=20)
         {
           for(j=0;;j++)
              {
                 if(img.at<Vec3b>(j,i)[0]==255)
                    {
                      if(img.at<Vec3b>(j,i)[1]==255)
                          {
                             if(img.at<Vec3b>(j,i)[2]==255)
                                {
                                if(j==0)
                                  {
                                    i+=10;
                                    continue;
                                  }
                                else
                                  {   
                                    temp1.x=i;
                                    temp1.y=-j;
                                    data.push(temp1);
                                    break;
                                   } 
                                  
                                }
                          }
                    }
              }
         }
      X=meanX(data);
      Y=meanY(data);
      covXY=Covarience(data);
      varX=varienceX(data);
      //varX=3851;
      slope=-(covXY/varX);
      cout <<" mean of X = " << X <<endl;
      cout <<" mean of Y = " << Y <<endl;
      cout <<" covarience= " << covXY<<endl;  
      cout <<" varience =  " <<varX<<endl;
      cout <<" slope =     " <<slope<<endl;
      
      y1=Y+slope*(x1-X);
      y2=Y+slope*(x2-X);
      
      /*if((y1 * y2) < 0)
        {
          y1=0;
          y2=0;
        }*/
      
      cout <<"  Y1 = "<<y1<<endl;
      cout <<"  Y2 = "<<y2<<endl;
      
      p1.x=x1;
      p2.y=-y1+5;
      p2.x=x2;
      p1.y=-y2+5;   
         
      Mat reg(img.rows,img.cols,CV_8UC3,Scalar(0,0,0));
      if(abs(p1.y-p2.y)<80)
        {
          line(reg,p1,p2,Scalar(0,255,0),1);
          if(checkWhere(reg)==1)
            line(probable,p1,p2,Scalar(0,255,0),1);
          else if(checkWhere(reg)==0)  
            line(probable,p1,p2,Scalar(0,0,255),1);
          else if(checkWhere(reg)==2)
            line(probable,p1,p2,Scalar(255,0,0),1);  
        }  
      return reg;     
   }
   

int main()
   {
     namedWindow("grid",WINDOW_NORMAL);
     namedWindow("binary",WINDOW_NORMAL);
     namedWindow("line",WINDOW_NORMAL);
     namedWindow("probable",0);
     
     VideoCapture vid("GRID.mp4");
     Mat frame;
     Mat last;
     Mat Line;
     int i,j;
     
     while(1)
       {
         vid >> frame;
         Mat binary(frame.rows,213,CV_8UC3,Scalar(0,0,0));
         for(i=0;i<frame.rows;i++)
            {
              for(j=0;j<frame.cols;j++)
                 {
                    if(frame.at<uchar>(i,j)>220)
                        binary.at<uchar>(i,j)=255;
                    else
                        binary.at<uchar>(i,j)=0;    
                 }
            } 
            
          Mat element=getStructuringElement(MORPH_RECT,Size(3,3),Point(0,0));
          erode(binary,binary,element);   

          last=binary.clone();
          Line=regressionLine1(last);
          
          currentPosition=checkWhere(Line);
          printf("    currentPosition = %d  previousPosition = %d   ",currentPosition,previousPosition); 
          if(currentPosition==1 && previousPosition==0)
            {
              yCoordinate++;
            }
          else if(currentPosition==0 && previousPosition==1)
            {
              yCoordinate--;
            }  
           previousPosition=currentPosition; 
          
          
          line(Line,Point(0,20),Point(Line.cols,20),Scalar(255,255,255),1);
          line(frame,Point(0,20),Point(frame.cols,20),Scalar(0,0,0),5);
          putText(frame,"Reference Line",Point(10,40),FONT_HERSHEY_SIMPLEX,1,Scalar(0,0,255),2);
          
          printf("******************* current Y coordinate =  %d   **********\n",yCoordinate);
          
          imshow("line",Line);
          imshow("grid",frame);
          imshow("binary",binary);
          imshow("probable",probable);
     
          if(waitKey(300)>=0)break;   
       }
       
       
       waitKey(0);
   }
