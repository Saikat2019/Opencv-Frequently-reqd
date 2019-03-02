#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<stdio.h>
#include<iostream>
#include<queue>

using namespace cv;
using namespace std;

int m,n;
Mat img=imread("botDetect2.png",1);
Mat img2=imread("botDetect2.png",0);
Mat Final1(2000,1000,CV_8UC3,Scalar(0,0,0));   //where the final image will be created
Mat Final2(2000,2000,CV_8UC3,Scalar(0,0,0));
Mat Final3(2000,1000,CV_8UC3,Scalar(0,0,0));

int i=0;                 //to calculate no of corners
Point2f lCorners[12];       //to store the corners

void BfsCopy(Point2f p,Mat Limg)                          //bfs algo to find interconnected pixels
  {
   
    
    queue<Point2f> BFS;
    Point2f p0=p;
    Point2f temp1,temp2,poped;
    int i,j,k,l;
    
    img2.at<uchar>(p0.y,p0.x)=0; 
    BFS.push(p0);
    
    while(!BFS.empty())
    {
      temp1=BFS.front();
      
      for(i=temp1.y-1;i<temp1.y+2;i+=1)
         {
            for(j=temp1.x-1;j<temp1.x+2;j+=1)
               {
                   if(img2.at<uchar>(i,j)>245)
                     {
                      temp2.y=i;
                      temp2.x=j;
                      img2.at<uchar>(temp2.y,temp2.x)=0;   
                      BFS.push(temp2);  
                     }
               }
         }
      poped=BFS.front();
      Limg.at<Vec3b>(poped.y,poped.x)=img.at<Vec3b>(poped.y,poped.x);   
      BFS.pop();   
    }
    

  }


void onMouse(int evt,int x,int y,int flags,void* param)     //onmose for the call back function
   {
      if(evt==CV_EVENT_LBUTTONDOWN)
        {
           lCorners[i].x=x;
           lCorners[i].y=y;
           circle(img,lCorners[i],15,Scalar( 0, 0, 255 ),-1);
           ++i;
        }
   }


Mat giveMyImage(int a, int b,int c,int d)
   {
      
     
      int j,k;
      Point2f midPt;     //this is the mid point of the four selected corners
      
       line(img2,lCorners[a],lCorners[b],Scalar(0),30,8);    //drawing borders of black color so that we can apply interconnected 
       line(img2,lCorners[b],lCorners[c],Scalar(0),30,8);    //pixels for one part i.e to segment out
       line(img2,lCorners[c],lCorners[d],Scalar(0),30,8);
       line(img2,lCorners[d],lCorners[a],Scalar(0),30,8);

       Mat Limg(img.rows,img.cols,CV_8UC3,Scalar(0,0,0));    //creating blank image to show only one part
       
       
       m=((lCorners[a].x+lCorners[b].x+lCorners[c].x+lCorners[d].x)/4);    //calculating the midpoint
       n=((lCorners[a].y+lCorners[b].y+lCorners[c].y+lCorners[d].y)/4);
       midPt.x=m;
       midPt.y=n;
       
       for(j=0;j<img2.rows;j++)
          {
            for(k=0;k<img2.cols;k++)
              {
                 if(img2.at<uchar>(j,k)>0)
                   img2.at<uchar>(j,k)=255;                      //creating an binary image to seperate inside pic via borders
              }
          }
       
       BfsCopy(midPt,Limg);              //applying bfs algo to find interconnected pixels
      
       
       
      return Limg;
   }
   
void transform_Perspectively_And_Stich()
   {
   }   
   
int main()
    {
       int n;
       namedWindow("win",WINDOW_NORMAL);
       setMouseCallback("win",onMouse,NULL);
        while(1)
      {
        imshow("win",img);
        waitKey(1);
        if(i>=12)break;                               //will continue untill we get four corners
      }
    
       Mat leftImage=giveMyImage(0,1,2,3);          //calling the function to segment out left image
       Mat middle=giveMyImage(4,5,6,7);
       Mat right=giveMyImage(8,9,10,11);
    
       vector<Point2f> src_left;
       vector<Point2f> src_middle;
       vector<Point2f> src_right;
       
       vector<Point2f> dst_left;
       vector<Point2f> dst_middle;
       vector<Point2f> dst_right;
       
       for(n=0;n<4;n++)
          {
            src_left.push_back(lCorners[n]);
          }
          
       for(n=4;n<8;n++)
          {
            src_middle.push_back(lCorners[n]);
          }   
          
       for(n=8;n<12;n++)
          {
            src_right.push_back(lCorners[n]);
          }   
         
       dst_left.push_back(Point2f(0,0));
       dst_left.push_back(Point2f(1000,0));
       dst_left.push_back(Point2f(1000,2000));
       dst_left.push_back(Point2f(0,2000));
       
       dst_middle.push_back(Point2f(0,0));
       dst_middle.push_back(Point2f(2000,0));
       dst_middle.push_back(Point2f(2000,2000));
       dst_middle.push_back(Point2f(0,2000));
       
       dst_right.push_back(Point2f(0,0));
       dst_right.push_back(Point2f(1000,0));
       dst_right.push_back(Point2f(1000,2000));
       dst_right.push_back(Point2f(0,2000));
       
       Mat LEFT = getPerspectiveTransform(src_left, dst_left);
      // namedWindow("win1",WINDOW_NORMAL);
       //imshow("win1",LEFT);
       
      
       for(int I=0;I<LEFT.rows;I++)
           for(int J=0;J<LEFT.cols;J++)
               cout<<"{{{{{{{{{{{{{{{{ "<<LEFT.at<Vec3b>(I,J)<<endl;
       waitKey(0);
       warpPerspective(leftImage,Final1,LEFT, Final1.size()); 
       
       Mat MIDDLE= getPerspectiveTransform(src_middle,dst_middle);
       warpPerspective(middle,Final2,MIDDLE,Final2.size());
       
       Mat RIGHT= getPerspectiveTransform(src_right,dst_right);
       warpPerspective(right,Final3,RIGHT,Final3.size()); 
       
       Mat Final(2000,4000,CV_8UC3,Scalar(0,0,0));
       
       for(m=0;m<=2000;m++)
           {
              for(n=0;n<=4000;n++)
                  {
                      if(n<1000)
                           Final.at<Vec3b>(m,n)=Final1.at<Vec3b>(m,n);
                      
                      else if(n>1000 && n<3000)
                           Final.at<Vec3b>(m,n)=Final2.at<Vec3b>(m,n-1000);
                           
                      else if(n>3000)     
                           Final.at<Vec3b>(m,n)=Final3.at<Vec3b>(m,n-3000);          
                  }
           }
           
       namedWindow("Final",WINDOW_NORMAL);       
       imshow("Final",Final);
       waitKey(0);    
           
       Mat FINAL(2000,4000,CV_8UC3,Scalar(0,0,0));
       
       for(m=0;m<=2000;m++)
          {
            for(n=0,i=0;n<=4000;n++)
               {
                  if(Final1.at<Vec3b>(m,n)[0]>0)
                     {
                       if(Final1.at<Vec3b>(m,n)[1]>0)
                           {
                             if(Final1.at<Vec3b>(m,n)[2]>0)
                                {
                                  FINAL.at<Vec3b>(m,i)=Final.at<Vec3b>(m,n);
                                  i++;
                                } 
                           }
                     }
               }
          } 
         
      namedWindow("Limg",WINDOW_NORMAL);       
      imshow("Limg",leftImage);
      namedWindow("middle",WINDOW_NORMAL);       
      imshow("middle",middle);
      namedWindow("right",WINDOW_NORMAL);       
      imshow("right",right);
      namedWindow("Final1",WINDOW_NORMAL);       
      imshow("Final1",Final1);
      namedWindow("Final2",WINDOW_NORMAL);       
      imshow("Final2",Final2);
      namedWindow("Final3",WINDOW_NORMAL);       
      imshow("Final3",Final3);
       namedWindow("FINAL",WINDOW_NORMAL);       
       imshow("FINAL",FINAL);
    
       waitKey(0);
    }   
