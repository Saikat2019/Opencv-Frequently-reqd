#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<stdio.h>
#include<iostream>
#include<queue>
#include<iomanip>
#include<cmath>


using namespace cv;
using namespace std;

int m,n;
Mat img1=imread("leftImage.jpg",1);
Mat img2;

int i=0,j=0;
Point lCorners_from[8];
Point lCorners_to[4];
float x[8];

void onMouse1(int evt,int x,int y,int flags,void* param)     //onmose for the call back function
   {
      if(evt==CV_EVENT_LBUTTONDOWN)
        {
          
           lCorners_from[i].x=x;
           lCorners_from[i].y=y;
           circle(img1,lCorners_from[i],15,Scalar( 0, 0, 255 ),-1);
           ++i;
        }
   }

void onMouse2(int evt,int x,int y,int flags,void* param)     //onmose for the call back function
   {
      if(evt==CV_EVENT_LBUTTONDOWN)
        {
           lCorners_to[j].x=x;
           lCorners_to[j].y=y;
           circle(img2,lCorners_to[j],15,Scalar( 0, 0, 255 ),-1);
           ++j;
        }
   }


void Homography_matrix()
{
    int n,i,j,k;
    cout.precision(4);        //set precision
    cout.setf(ios::fixed);
    cout<<"\nEnter the no. of equations\n";        
    n=8;                //input the no. of equations
    float a[8][9];//**********        //declare an array to store the elements of augmented-matrix    
    cout<<"\nEnter the elements of the augmented-matrix row-wise:\n";
  for(int m=0;m<4;m++)
  {  
    a[m][0]=lCorners_from[m].y;
    a[m][1]=lCorners_from[m].x;
    a[m][2]=1;
    for(int b=0;b<3;b++)
         a[m][3+b]=0;
    a[m][6]=-(lCorners_from[m].y*lCorners_to[m].y);
    a[m][7]=-(lCorners_from[m].y*lCorners_to[m].y);
     
   } 
   
  for(int n=4;n<8;n++)
  {
    for(int c=0;c<3;c++)
          a[n][c]=0;
    a[n][3]=lCorners_from[n-4].y;
    a[n][4]=lCorners_from[n-4].x;
    a[n][5]=1;
    a[n][6]=-(lCorners_from[n-4].y*lCorners_to[n-4].x);
    a[n][7]=-(lCorners_from[n-4].x*lCorners_to[n-4].x);
  } 
  
  for(int d=0;d<4;d++)
     {
       a[d][8]=lCorners_to[d].y;
     }
   
    
  for(int d=0;d<4;d++)
     {
       a[d+3][8]=lCorners_to[d].x;
     } 
   
    for (i=0;i<n;i++)                    //Pivotisation
        for (k=i+1;k<n;k++)
            if (abs(a[i][i])<abs(a[k][i]))
                for (j=0;j<=n;j++)
                {
                    double temp=a[i][j];
                    a[i][j]=a[k][j];
                    a[k][j]=temp;
                }
    cout<<"\nThe matrix after Pivotisation is:\n";
    for (i=0;i<n;i++)            //print the new matrix
    {
        for (j=0;j<=n;j++)
            cout<<a[i][j]<<setw(16);
        cout<<"\n";
    }    
    for (i=0;i<n-1;i++)            //loop to perform the gauss elimination
        for (k=i+1;k<n;k++)
            {
                double t=a[k][i]/a[i][i];
                for (j=0;j<=n;j++)
                    a[k][j]=a[k][j]-t*a[i][j];    //make the elements below the pivot elements equal to zero or elimnate the variables
            }
    
    cout<<"\n\nThe matrix after gauss-elimination is as follows:\n";
    for (i=0;i<n;i++)            //print the new matrix
    {
        for (j=0;j<=n;j++)
            cout<<a[i][j]<<setw(16);
        cout<<"\n";
    }
    for (i=n-1;i>=0;i--)                //back-substitution
    {                        //x is an array whose values correspond to the values of x,y,z..
        x[i]=a[i][n];                //make the variable to be calculated equal to the rhs of the last equation
        for (j=i+1;j<n;j++)
            if (j!=i)            //then subtract all the lhs values except the coefficient of the variable whose value                                   is being calculated
                x[i]=x[i]-a[i][j]*x[j];
        x[i]=x[i]/a[i][i];            //now finally divide the rhs by the coefficient of the variable to be calculated
    }
    cout<<"\nThe values of the variables are as follows:\n";
    for (i=0;i<n;i++)
        cout<<x[i]<<endl;            // Print the values of x, y,z,....    
   
}    
   
int main()
    {
       int n;
       Mat img(2*img1.rows,2*img1.cols,CV_8UC3,Scalar(0,0,0));
       img2=img.clone();
       namedWindow("win1",WINDOW_NORMAL);
       setMouseCallback("win1",onMouse1,NULL);
       namedWindow("win2",WINDOW_NORMAL);
       setMouseCallback("win2",onMouse2,NULL);
        while(1)
      {
        imshow("win1",img1);
        waitKey(10);
        if(i>=4)break;                               //will continue untill we get four corners
      }
    
       while(1)
      {
        imshow("win2",img2);
        waitKey(10);
        if(j>=4)break;                               //will continue untill we get four corners
      }
      Homography_matrix();
      float a,b,c,d,e,f,g,h,i;
      a=x[0];
      b=x[1];
      c=x[2];
      d=x[3];
      e=x[4];
      f=x[5];
      g=x[6];
      h=x[7];
      i=sqrt(1-(a*a+b*b+c*c+d*d+e*e+f*f+g*g+h*h));
      int p,q,X,Y;
      waitKey(0); 
      for(p=0;p<img1.rows;p++)
         {
           for(q=0;q<img1.cols;q++)
              {
                 Y=(((a*p)+(b*q)+c)/((g*p)+(h*q)+i));
                 X=(((d*p)+(e*q)+f)/((g*p)+(h*q)+i));
                 img2.at<Vec3b>(Y,X)=img1.at<Vec3b>(q,p);
              }
         }
       waitKey(0);
       imshow("win2",img2);
       imwrite("perspective.jpg",img2);  
       waitKey(0);
    }   
