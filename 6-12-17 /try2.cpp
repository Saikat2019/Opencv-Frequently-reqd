#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
#include<stdio.h>

using namespace cv;
using namespace std;

Mat part1=imread("part1.jpg",1);
Mat part2=imread("part2.jpg",1);
Mat part3=imread("part3.jpg",1);
Mat part4=imread("part4.jpg",1);
Mat part5=imread("part5.jpg",1);
Mat part6=imread("part6.jpg",1);
Mat part7=imread("part7.jpg",1);
Mat part8=imread("part8.jpg",1);
Mat part9=imread("part9.jpg",1);


int a=part1.rows;
int b=part1.cols;
int tb=250;
int tg=250;
int tr=250;
int m;
int n;
Mat res1(m,n,CV_8UC3,Scalar(0,0,0));

int absl(int a)
     {
       if (a<0)
           return (-a);                                 //function returning absolute value
       else 
           return a;    
     }
     
void draw(Mat drawin,Mat toDraw,int i,int j)                        //defining a function draw to draw in an image at point i,j
     {
         int x,y;
         for(x=0;x<toDraw.rows;x++)
             {
               for(y=0;y<toDraw.cols;y++)
                   {
                      drawin.at<Vec3b>(i+x,j+y)=toDraw.at<Vec3b>(x,y);
                   } 
             }
         imshow("winx",drawin);
         waitKey(0);      
     }
void rightColumnMatch(Mat res1,int col,int row1,int row2)              
     {   
         
         int cb12=0;
         int cg12=0;
         int cr12=0;
         int i,j,k,l;
         
         for(i=row1,k=0;i<=row2;i++,k++)
            {
               cb12=cb12+absl(res1.at<Vec3b>(i,col)[0]-((res1.at<Vec3b>(i,col-1)[0]+res1.at<Vec3b>(i,col-2)[0]+part2.at<Vec3b>(k,0)[0]+part2.at<Vec3b>(k,1)[0])/4));  //taking avg and measuring the
               cg12=cg12+absl(res1.at<Vec3b>(i,col)[1]-((res1.at<Vec3b>(i,col-1)[1]+res1.at<Vec3b>(i,col-2)[1]+part2.at<Vec3b>(k,0)[1]+part2.at<Vec3b>(k,1)[1])/4));   //difference with the center
               cr12=cr12+absl(res1.at<Vec3b>(i,col)[2]-((res1.at<Vec3b>(i,col-1)[2]+res1.at<Vec3b>(i,col-2)[2]+part2.at<Vec3b>(k,0)[2]+part2.at<Vec3b>(k,1)[2])/4));
                
            }  
         if ((cb12<tb)&&(cg12<tg)&&(cr12<tr))
            {    
              draw(res1,part2,row1,col);
            }
         int cb13=0;
         int cg13=0;
         int cr13=0;   
         for(i=row1,k=0;i<=row2;i++,k++)
            {
               cb13=cb13+absl(res1.at<Vec3b>(i,col)[0]-((part1.at<Vec3b>(i,col-1)[0]+part1.at<Vec3b>(i,col-2)[0]+part3.at<Vec3b>(k,0)[0]+part3.at<Vec3b>(k,1)[0])/4));  //taking avg and measuring the
               cg13=cg13+absl(res1.at<Vec3b>(i,col)[1]-((part1.at<Vec3b>(i,col-1)[1]+part1.at<Vec3b>(i,col-2)[1]+part3.at<Vec3b>(k,0)[1]+part3.at<Vec3b>(k,1)[1])/4));   //difference with the center
               cr13=cr13+absl(res1.at<Vec3b>(i,col)[2]-((part1.at<Vec3b>(i,col-1)[2]+part1.at<Vec3b>(i,col-2)[2]+part3.at<Vec3b>(k,0)[2]+part3.at<Vec3b>(k,1)[2])/4));
                
            }  
         if ((cb13<tb)&&(cg13<tg)&&(cr13<tr))
            {    
              draw(res1,part3,row1,col);
            } 
         int cb14=0;
         int cg14=0;
         int cr14=0;   
         for(i=row1,k=0;i<=row2;i++,k++)
            {
               cb14=cb14+absl(res1.at<Vec3b>(i,col)[0]-((res1.at<Vec3b>(i,col-1)[0]+res1.at<Vec3b>(i,col-2)[0]+part4.at<Vec3b>(k,0)[0]+part4.at<Vec3b>(k,1)[0])/4));  //taking avg and measuring the
               cg14=cg14+absl(res1.at<Vec3b>(i,col)[1]-((res1.at<Vec3b>(i,col-1)[1]+res1.at<Vec3b>(i,col-2)[1]+part4.at<Vec3b>(k,0)[1]+part4.at<Vec3b>(k,1)[1])/4));   //difference with the center
               cr14=cr14+absl(res1.at<Vec3b>(i,col)[2]-((res1.at<Vec3b>(i,col-1)[2]+res1.at<Vec3b>(i,col-2)[2]+part4.at<Vec3b>(k,0)[2]+part4.at<Vec3b>(k,1)[2])/4));
                
            }  
         if ((cb14<tb)&&(cg14<tg)&&(cr14<tr))
            {    
              draw(res1,part4,row1,col);
            }
         int cb15=0;
         int cg15=0;
         int cr15=0;   
         for(i=row1,k=0;i<=row2;i++,k++)
            {
               cb15=cb15+absl(res1.at<Vec3b>(i,col)[0]-((res1.at<Vec3b>(i,col-1)[0]+res1.at<Vec3b>(i,col-2)[0]+part5.at<Vec3b>(k,0)[0]+part5.at<Vec3b>(k,1)[0])/4));  //taking avg and measuring the
               cg15=cg15+absl(res1.at<Vec3b>(i,col)[1]-((res1.at<Vec3b>(i,col-1)[1]+res1.at<Vec3b>(i,col-2)[1]+part5.at<Vec3b>(k,0)[1]+part5.at<Vec3b>(k,1)[1])/4));   //difference with the center
               cr15=cr15+absl(res1.at<Vec3b>(i,col)[2]-((res1.at<Vec3b>(i,col-1)[2]+res1.at<Vec3b>(i,col-2)[2]+part5.at<Vec3b>(k,0)[2]+part5.at<Vec3b>(k,1)[2])/4));
                
            }  
         if ((cb15<tb)&&(cg15<tg)&&(cr15<tr))
            {    
              draw(res1,part5,row1,col);
            }
         int cb16=0;
         int cg16=0;
         int cr16=0;   
         for(i=row1,k=0;i<=row2;i++,k++)
            {
               cb16=cb16+absl(res1.at<Vec3b>(i,col)[0]-((res1.at<Vec3b>(i,col-1)[0]+res1.at<Vec3b>(i,col-2)[0]+part6.at<Vec3b>(k,0)[0]+part6.at<Vec3b>(k,1)[0])/4));  //taking avg and measuring the
               cg16=cg16+absl(res1.at<Vec3b>(i,col)[1]-((res1.at<Vec3b>(i,col-1)[1]+res1.at<Vec3b>(i,col-2)[1]+part6.at<Vec3b>(k,0)[1]+part6.at<Vec3b>(k,1)[1])/4));   //difference with the center
               cr16=cr16+absl(res1.at<Vec3b>(i,col)[2]-((res1.at<Vec3b>(i,col-1)[2]+res1.at<Vec3b>(i,col-2)[2]+part6.at<Vec3b>(k,0)[2]+part6.at<Vec3b>(k,1)[2])/4));
                
            }  
         if ((cb16<tb)&&(cg16<tg)&&(cr16<tr))
            {    
              draw(res1,part6,row1,col);
            }
         int cb17=0;
         int cg17=0;
         int cr17=0;   
         for(i=row1,k=0;i<=row2;i++,k++)
            {
               cb17=cb17+absl(res1.at<Vec3b>(i,col)[0]-((res1.at<Vec3b>(i,col-1)[0]+res1.at<Vec3b>(i,col-2)[0]+part7.at<Vec3b>(k,0)[0]+part7.at<Vec3b>(k,1)[0])/4));  //taking avg and measuring the
               cg17=cg17+absl(res1.at<Vec3b>(i,col)[1]-((res1.at<Vec3b>(i,col-1)[1]+res1.at<Vec3b>(i,col-2)[1]+part7.at<Vec3b>(k,0)[1]+part7.at<Vec3b>(k,1)[1])/4));   //difference with the center
               cr17=cr17+absl(res1.at<Vec3b>(i,col)[2]-((res1.at<Vec3b>(i,col-1)[2]+res1.at<Vec3b>(i,col-2)[2]+part7.at<Vec3b>(k,0)[2]+part7.at<Vec3b>(k,1)[2])/4));
                
            }  
         if ((cb17<tb)&&(cg17<tg)&&(cr17<tr))
            {    
              draw(res1,part7,row1,col);
            }
         int cb18=0;
         int cg18=0;
         int cr18=0;   
         for(i=row1,k=0;i<=row2;i++,k++)
            {
               cb18=cb18+absl(res1.at<Vec3b>(i,col)[0]-((res1.at<Vec3b>(i,col-1)[0]+res1.at<Vec3b>(i,col-2)[0]+part8.at<Vec3b>(k,0)[0]+part8.at<Vec3b>(k,1)[0])/4));  //taking avg and measuring the
               cg18=cg18+absl(res1.at<Vec3b>(i,col)[1]-((res1.at<Vec3b>(i,col-1)[1]+res1.at<Vec3b>(i,col-2)[1]+part8.at<Vec3b>(k,0)[1]+part8.at<Vec3b>(k,1)[1])/4));   //difference with the center
               cr18=cr18+absl(res1.at<Vec3b>(i,col)[2]-((res1.at<Vec3b>(i,col-1)[2]+res1.at<Vec3b>(i,col-2)[2]+part8.at<Vec3b>(k,0)[2]+part8.at<Vec3b>(k,1)[2])/4));
                
            }  
         if ((cb18<tb)&&(cg18<tg)&&(cr18<tr))
            {   
              draw(res1,part8,row1,col);
            }             
         int cb19=0;
         int cg19=0;
         int cr19=0;   
         for(i=row1,k=0;i<=row2;i++,k++)
            {
               cb19=cb19+absl(res1.at<Vec3b>(i,col)[0]-((res1.at<Vec3b>(i,col-1)[0]+res1.at<Vec3b>(i,col-2)[0]+part9.at<Vec3b>(k,0)[0]+part9.at<Vec3b>(k,1)[0])/4));  //taking avg and measuring the
               cg19=cg19+absl(res1.at<Vec3b>(i,col)[1]-((res1.at<Vec3b>(i,col-1)[1]+res1.at<Vec3b>(i,col-2)[1]+part9.at<Vec3b>(k,0)[1]+part9.at<Vec3b>(k,1)[1])/4));   //difference with the center
               cr19=cr19+absl(res1.at<Vec3b>(i,col)[2]-((res1.at<Vec3b>(i,col-1)[2]+res1.at<Vec3b>(i,col-2)[2]+part9.at<Vec3b>(k,0)[2]+part9.at<Vec3b>(k,1)[2])/4));
                
            }  
         if ((cb19<tb)&&(cg19<tg)&&(cr19<tr))
            {    
              draw(res1,part9,row1,col);
            }                 
     } 
int main()
     {
       int m=3*a;
       int n=3*b;
       Mat res2(m,n,CV_8UC3,Scalar(0,0,0));
       Mat res3(m,n,CV_8UC3,Scalar(0,0,0));
       draw(res1,part1,0,0);
       rightColumnMatch(res1,b-1,0,a-1);
       imshow("win",res2);
       waitKey(0);
       rightColumnMatch(res2,2*b-1,0,a-1);
       imshow("win2",res3);
       waitKey(0);
       return 0;   
     }         
/*int main()
     {
        namedWindow("win1",2);
        createTrackbar("trackB","win1",&tb,3000,update);
        createTrackbar("trackG","win1",&tg,3000,update);
        createTrackbar("trackR","win1",&tr,3000,update);
        update(tb,NULL);
        return 0;
     }  */   
