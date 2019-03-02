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
       POINT* mother;
    };

POINT from_to[2];      //to store start and end points
int i=0;
double thresh=5;        //max length
list <POINT> nodes;     //where i will store the nodes
bool done=false;        //if i reach the end point then done will be true
POINT start,end;

Mat graph=imread("rrt.jpg",1);    

void onMouse(int evt,int x,int y,int flags,void* param)   //to get start n end points by left click of the mouse
   {
      if(evt==CV_EVENT_LBUTTONDOWN)
        {
           from_to[i].p.x=x;
           from_to[i].p.y=y;
           ++i;
        }
   }
   
POINT randPt()      //this returns a random point
   {
      POINT random;
      int randX=rand();
      randX=randX % graph.cols;
      
      int randY=rand();
      randY=randY % graph.rows;
      
      random.p.x=randX;
      random.p.y=randY;
      
      return random;
   } 
   
double Dist(POINT p1, POINT p2)       //calculate distance between two points
   {
     double dist=(double) sqrt((pow(p1.p.x-p2.p.x,2.0)+pow(p1.p.y-p2.p.y,2.0)));
     return dist;
   }  
   
int isvalid(POINT node,POINT nn)     //if the node is black i.e on obstacle then returns 0 else 1
   { 
      if(graph.at<Vec3b>(node.p.y,node.p.x)[0]>250 && graph.at<Vec3b>(node.p.y,node.p.x)[1]>250 && graph.at<Vec3b>(node.p.y,node.p.x)[2]>250)
         return 1;
      else
         return 0;     
   
   }    
   
POINT nearestNode(POINT node)   //from the list of previous nodes it returns the nearest node
   {
     POINT nn;
     double minDist=600;
     list<POINT> :: iterator it;
     for(it=nodes.begin();it!=nodes.end();++it)
        {
           if(minDist>Dist(node,*it))
              {
                 minDist=Dist(node,*it);
                 nn=*it;
                 
              }
        }
      return nn;  
   }         
   
void node()
   {
      POINT Node;
      POINT rnd=randPt();
      POINT nn=nearestNode(rnd);
      double dist=Dist(rnd,nn);

      if(dist<=thresh) 
         { 
            Node=rnd;
            Node.mother=&nn;
         }
      else
         {
                
            Node.p.x=nn.p.x+(thresh*((rnd.p.x-nn.p.x)/dist));
            Node.p.y=nn.p.y+(thresh*((rnd.p.y-nn.p.y)/dist));
            Node.mother=&nn;
         }
         
      cout<<" @@@@@@@@@ isvalid = "<<isvalid(Node,nn)<<endl;   
         
      if(isvalid(Node,nn))
         {  
           
           line(graph,Node.p,nn.p,Scalar(255,0,0),2);
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
      Point temp;
      
      while(1)
      {
         imshow("Graph",graph);
         waitKey(10);

         if(i>=2)break;
      }
      start=from_to[0];
      end=from_to[1];   
         
      
      cout <<" Start Point = "<<start.p<<" End Point = "<<end.p<<endl;
      cout <<" random point = "<<randPt().p<<endl;
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
      list<POINT> :: iterator it;
      /*for(it=nodes.begin();it!=nodes.end();++it)
        {
           //cout<<" ()()()()()()   "<<*((*it).mother)<<endl;
        }  */
      POINT* pt;
      pt=nodes.back().mother;
     // pt=pt->mother;
      cout<<" AAAAAAAAAAAAAAAAAddresses = "<<(*pt).p<<endl;  
      waitKey(0);
   }
