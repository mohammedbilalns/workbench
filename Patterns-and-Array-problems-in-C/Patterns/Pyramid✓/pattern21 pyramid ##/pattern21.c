#include "stdio.h"

int main(){

     int n = 5;
     for(int i=1;i<=2*n-1;i++){
        int k = i<=n ? i : 2*n-i;
        int l = 1;
        for(int j=1;j<=n;j++){
            if(j>=n-k+1){
                printf("%d",l++);
            }else{
                printf(" ");
            }
        }
        printf("\n");
     }
    
    return 0;
}