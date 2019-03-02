#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<math.h>
using namespace cv;
using namespace std;
Mat img=imread("draw.jpg",0);
Mat img1=imread("draw.jpg",0);
int isvalid(int i,int j)
   {
      if(i<0||j<0||i>=img.rows||j>=img.cols)
            return 0;
      else
            return 1;      
   } 
void DFS(int i,int j)
   {
      int a,b;
      img.at<uchar>(i,j)=255;    
       for(a=i-1;a<i+2;a++)
            {
              for(b=j-1;b<j+2;b++)
                 {
                  if(isvalid(a,b))
                     {
                       if(img.at<uchar>(a,b)<150)
                          DFS(a,b);
                          
                      }  
                 }
            }
   }   
int main()
   {
      int i,j,count=0;
      for(i=0;i<img.rows;i++)
            {
               for(j=0;j<img.cols;j++)
                    {
                    if(img.at<uchar>(i,j)<150)
                    {
                     DFS(i,j);                     
                     count++;
                    }
                    }
            }
        cout<<count<<endl;
        imshow("win",img);
        imshow("win1",img1);
        waitKey(0);
        return 0;    
   }
