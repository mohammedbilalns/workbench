#include "stdio.h"

int main(){


    int n = 5;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            if(j==1 || i==j|| i==n){
                printf("%d ",j);
            }else{
                printf("  ");
            }
        }
        printf("\n");
    }
}