#include "stdio.h"

int main(){

    int n = 5;
    for(int i=1;i<=n;i++){
        int k=i;
        for(int j=1;j<=n;j++){
            if(j>=i){
                printf("%d ",k);
                k+=i;
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
    return 0;
}