#include<stdio.h>
#include<math.h>

int s[512][10];

int CopyWithA(int n)
  {
  	int i,j,k,l;
	for(i=0;i<512;i++)
	  {
	  	for(j=0;j<10;j++)
	  	  {
	  	  	printf("%d\t",s[i][j]);
			}
			printf("\n");
					 }
	printf("\n    ***************\n");				 	
	for(i=0;;i++)
	  {
	  	if(s[i][0]==-9)break;
		  }	
	for(j=0;j<i;j++)
	   {
	   	 for(k=0;;k++)
	   	    {
	   	    	if(s[j][k]==-9)
	   	    	  {
	   	    	  	s[i+j][k]=n;
	   	    	  	break;
					 }
				else
				{
				   s[i+j][k]=s[j][k];
			       continue;
				  }
			   }
			 }
	s[i+j][0]=n;		 		 	  
  } 
void subSet(int* set,int n)
   {
   	 int i;
   	 s[0][0]=set[0];
   	 for(i=1;i<n;i++)
   	 {
   	 	CopyWithA(set[i]);
		}
	return;	
   }
 
int main()
  {
  	int n,i,j,x=0,sum;
  	printf("enter the no of elements in the set\t");
  	scanf("%d",&n);
  	int set[n];
  	printf("enter the elements\n");
  	for(i=0;i<n;i++)
  	{
  		scanf("%d",&set[i]);
	  }
  	for(i=0;i<128;i++)
  	{
  		for(j=0;j<10;j++)
  		{
  		   s[i][j]=-9;	
		  }
	  }
	subSet(set,n);
	for(i=0;i<128;i++)
	{
		for(j=0;j<10;j++)
		 {
		 	printf("%d\t",s[i][j]);
		 }
		 printf("\n");
	  }
	printf("\n\n\n\n\n\n\n\n\n\t\t*********************************");
	printf("the set you have entered is");
	for(i=0;i++;i<n)
	   {
	   	printf("elenent no.%d -- %d\n",i+1,set[i]);
		   }
	printf("\t\t*********************************\n");	       
	for(i=0;i<pow(2,n);i++)
	  {
	  	printf("**Subset no.%d-",i+1);
	  	sum=0;
	  	for(j=0;;j++)
	  	  {
	  	  	if(s[i][j]==-9) break;
	  	  	else
	  	  	   {
	  	  	     printf("%d ",s[i][j]);
	  	  	     sum=sum+s[i][j];
	  	  	    }
			}
		printf(" Sum of the Subset = %d\n",sum);	
	  }  
	return 0;  
  }

