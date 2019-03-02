#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
using namespace cv;
int isvalid(int i,int j,Mat img)
   {
      if(i<0||j<0||i>=img.rows||j>=img.cols)
           return 0;
      return 1;     
   }
void insertionSort(int window[],int m)
{
    int temp, i , j;
    for(i = 0; i <=m; i++){
        temp = window[i];
        for(j = i-1; j >= 0 && temp < window[j]; j--){
            window[j+1] = window[j];
        }
        window[j+1] = temp;
    }
} 
int main()
   {
     Mat img=imread("veg.jpg",0);
     Mat blur(img.rows,img.cols,CV_8UC1,Scalar(0));
     int window[9];
     int i,j,k,l,m;
     for(i=0;i<img.rows;i++)
        {
           for(j=0;j<img.cols;j++)
               {
                m=0;
                  for(k=-1;k<2;k++)
                      {
                         for(l=-1;l<2;l++)
                             {
                                if(isvalid(i+k,j+l,img))
                                      {
                                       window[m]=img.at<uchar>(i+k,j+l);
                                       m++;
                                      }
                             }
                      }
                insertionSort(window,m);
                blur.at<uchar>(i,j)=window[m/2];      
               }
        } 
      namedWindow("win1",WINDOW_NORMAL);  
      imshow("win1",blur);
      waitKey(0);
      return 0;  
   }
   
