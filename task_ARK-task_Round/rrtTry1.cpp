#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<stdio.h>
#include<iostream>
#include<cstdlib>
#include<cmath>
#include<list>
#include<iterator>

using namespace cv;
using namespace std;

struct POINT        //structure consisting a point i.e node and address of its mother node
    {
       Point p;
       Point* mother;
    };

Point from_to[2];      //to store start and end points
int i=0;
double thresh=5;        //max length
list <Point> nodes;     //where i will store the nodes
bool done=false;        //if i reach the end point then done will be true
Point start,end;

Mat graph=imread("rrt.jpg",1);    

void onMouse(int evt,int x,int y,int flags,void* param)   //to get start n end points by left click of the mouse
   {
      if(evt==CV_EVENT_LBUTTONDOWN)
        {
           from_to[i].x=x;
           from_to[i].y=y;
           ++i;
        }
   }
   
Point randPt()      //this returns a random point
   {
      Point random;
      int randX=rand();
      randX=randX % graph.cols;
      
      int randY=rand();
      randY=randY % graph.rows;
      
      random.x=randX;
      random.y=randY;
      
      return random;
   } 
   
double Dist(Point p1, Point p2)       //calculate distance between two points
   {
     double dist=(double) sqrt((pow(p1.x-p2.x,2.0)+pow(p1.y-p2.y,2.0)));
     return dist;
   }  
   
int isvalid(Point node,Point nn)     //if the node is black i.e on obstacle then returns 0 else 1
   { 
      if(graph.at<Vec3b>(node.y,node.x)[0]>250 && graph.at<Vec3b>(node.y,node.x)[1]>250 && graph.at<Vec3b>(node.y,node.x)[2]>250)
         return 1;
      else
         return 0;     
   
   }    
   
Point nearestNode(Point node)   //from the list of previous nodes it returns the nearest node
   {
     Point nn;
     double minDist=600;
     list<Point> :: iterator it;
     for(it=nodes.begin();it!=nodes.end();++it)
        {
           if(minDist>Dist(node,*it))
              {
                 minDist=Dist(node,*it);
                 nn= *it;
              }
        }
      return nn;  
   }         
   
void node()
   {
      Point Node;
      Point rnd=randPt();
      Point nn=nearestNode(rnd);
      double dist=Dist(rnd,nn);

      if(dist<=thresh) Node=rnd;
      else
         {
                
            Node.x=nn.x+(thresh*((rnd.x-nn.x)/dist));
            Node.y=nn.y+(thresh*((rnd.y-nn.y)/dist));
         }
         
      cout<<" @@@@@@@@@ isvalid = "<<isvalid(Node,nn)<<endl;   
         
      if(isvalid(Node,nn))
         {  
           
           line(graph,Node,nn,Scalar(255,0,0),2);
           nodes.push_back(Node);
           if(Dist(Node,end)<10)
              {
                done= true;
              }
         }   
      
      cout<< "**** done "<<endl;     
         
   }     

int main()
   {
      namedWindow("Graph",0);
      setMouseCallback("Graph",onMouse,NULL);
      
      
      while(1)
      {
         imshow("Graph",graph);
         waitKey(10);

         if(i>=2)break;
      }
      start=from_to[0];
      end=from_to[1];   
         
      
      cout <<" Start Point = "<<start<<" End Point = "<<end<<endl;
      cout <<" random point = "<<randPt()<<endl;
      cout <<" dist = "<<Dist(start,end)<<endl;
      
      nodes.push_back(start);
      
      while(1)
        {
          node();
          imshow("Graph",graph);
          waitKey(1);
          if(done)break;
        }
      waitKey(0);
   }
