#include "stdio.h"

int main(){
    
     int n =5,k;
     for(int i=1;i<=n;i++){
        k=1;
        for(int j=1;j<=2*n-1;j++){
            if(j==n-i+1){
                printf("%d",k);
            }else if(j==n+i-1){
                printf("%d",2*i-1);
            }else if(i==n)(
                printf("%d",++k)
            );else{
                printf(" ");
            }
        }
        printf("\n");
     }
    return 0;
}