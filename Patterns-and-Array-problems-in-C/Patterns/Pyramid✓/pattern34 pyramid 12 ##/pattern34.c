#include "stdio.h"

int main(){

    int n = 4;
    for(int i=1;i<=n;i++){
        int k=i;
        for(int j=1;j<=n+i-1;j++){
            if(j>=n-i+1){
                printf("%d",k);
                k+= j<n ? -1 : 1;
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
    
    return 0;
}