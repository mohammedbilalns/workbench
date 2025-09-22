#include "stdio.h"

int main(){

    int n = 4;
    for(int i=1;i<=n;i++){
        int k=1;
        for(int j=1;j<=n;j++){
            if(j>=n-i+1){
                printf("%d",k++);
            }else{
                printf(" ");
            }
        }
        k=1;
        for(int j=1;j<i;j++){
            printf("%c",64+k);
            k++;
        }
        printf("\n");
    }
    
    return 0;
}