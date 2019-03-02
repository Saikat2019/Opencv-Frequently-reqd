#include<iostream>
#include<math.h>
using namespace cv;
using namespace std;
Mat img=imread("dfs_path.jpg",0);
Mat img1=imread("dfs_path.jpg",0);
int isvalid(int i,int j)
   {
      if(i<0||j<0||i>=img.rows||j>=img.cols)
            return 0;
      else
            return 1;      
   } 
void bfs(int i,int j)
   {
   
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
