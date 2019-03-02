#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<stdio.h>
#include<iostream>
#include<queue>

using namespace cv;
using namespace std;

int length,width,a,b,m,n;
Mat img=imread("ThreePanel.jpg",1);
Mat Limg(img.rows,img.cols,CV_8UC3,Scalar(0,0,0));
Mat img2=imread("ThreePanel.jpg",0);
int i=0;
Point lCorners[4];

void copyPoped(Point p)
  {
    int i,j;
    for(i=p.y-11;i<p.y+12;i++)
       {
         for(j=p.x-11;j<p.x+12;j++)
            {
               Limg.at<Vec3b>(i-b,j-a)=img.at<Vec3b>(i,j);
            }
       }
  }

void BfsCopy(Point p)
  {
   
    
    queue<Point> BFS;
    Point p0=p;
    Point temp1,temp2,poped;
    int i,j,k,l;
    
    for(i=p0.y-11;i<p0.y+12;i++)
    {
      for(j=p0.x-11;j<p0.x+12;j++)
        {
          img2.at<uchar>(i,j)=0;
        }  
    }
    BFS.push(p0);
    
    while(!BFS.empty())
    {
      temp1=BFS.front();
      
      for(i=temp1.y-23;i<temp1.y+24;i+=23)
         {
            for(j=temp1.x-23;j<temp1.x+24;j+=23)
               {
                   if(img2.at<uchar>(i,j)>245)
                     {
                      temp2.y=i;
                      temp2.x=j;
                      for(k=i-11;k<i+12;k++)
                         {
                           for(l=j-11;l<j+12;l++)
                             { 
                              img2.at<uchar>(k,l)=0;
                             }
                         }
                      BFS.push(temp2);  
                     }
               }
         }
      poped=BFS.front(); 
      copyPoped(poped); 
      BFS.pop();   
    }
    

  }


void onMouse(int evt,int x,int y,int flags,void* param)
   {
      if(evt==CV_EVENT_LBUTTONDOWN)
        {
           lCorners[i].x=x;
           lCorners[i].y=y;
           ++i;
        }
   }

int maxLength()
   {
     int a[4],i,max=0;
     a[0]=lCorners[3].y-lCorners[0].y;
     a[1]=lCorners[2].y-lCorners[0].y;
     a[2]=lCorners[2].y-lCorners[1].y;
     a[3]=lCorners[3].y-lCorners[1].y;
     for(i=0;i<4;i++)
     {
       if(max<a[i])
         max=a[i];
     }
     printf("maximum length is %d\n",max);
     return max;
   }   
   
int maxWidth()
   {
     int a[4],i,max=0;
     a[0]=lCorners[1].x-lCorners[0].x;
     a[1]=lCorners[2].x-lCorners[0].x;
     a[2]=lCorners[2].x-lCorners[3].x;
     a[3]=lCorners[1].x-lCorners[3].x;
     for(i=0;i<4;i++)
     {
       if(max<a[i])
         max=a[i];
     }
     printf("maximum width is %d\n",max);
     return max;
   }  
   
int minX()
   {
     int min=3000;
     for(int i=0;i<4;i++)
     {
       if(min>lCorners[i].x)
            min=lCorners[i].x;
     }
     return min;
   }    
   
int minY()
   {
     int min=3000;
     for(int i=0;i<4;i++)
     {
       if(min>lCorners[i].y)
            min=lCorners[i].y;
     }
     return min;
   } 
           

int main()
   {
      
     
      int j,k;
      Point midPt;
      
      namedWindow("win",WINDOW_NORMAL);
      namedWindow("win1",WINDOW_NORMAL);
      namedWindow("win2",WINDOW_NORMAL);
      namedWindow("win3",WINDOW_NORMAL);
      namedWindow("Limg",WINDOW_NORMAL);
      setMouseCallback("win",onMouse,NULL);
      while(1)
      {
        imshow("win",img);
        waitKey(10);
        if(i>=4)break;
      }
       line(img2,lCorners[0],lCorners[1],Scalar(0),30,8);
       line(img2,lCorners[1],lCorners[2],Scalar(0),30,8);
       line(img2,lCorners[2],lCorners[3],Scalar(0),30,8);
       line(img2,lCorners[3],lCorners[0],Scalar(0),30,8);

       length=maxLength();
       width=maxWidth();
       
       Mat leftImg(img.rows,img.cols,CV_8UC3,Scalar(0,0,0));
       
       a=minX();
       b=minY();
       printf("a_cols=%d  b_rows=%d\n",a,b);
       
       m=((lCorners[0].x+lCorners[1].x+lCorners[2].x+lCorners[3].x)/4);
       n=((lCorners[0].y+lCorners[1].y+lCorners[2].y+lCorners[3].y)/4);
       midPt.x=m;
       midPt.y=n;
       
       for(j=0;j<img2.rows;j++)
          {
            for(k=0;k<img2.cols;k++)
              {
                 if(img2.at<uchar>(j,k)>0)
                   img2.at<uchar>(j,k)=255;
              }
          }
       
       BfsCopy(midPt);
      
       
       printf("\t\t\tm=%d\tn=%d\ndone\n",m,n);  
       imshow("win1",img2);
       imshow("Limg",Limg);
    
       waitKey(0);
      return 0;
   }
