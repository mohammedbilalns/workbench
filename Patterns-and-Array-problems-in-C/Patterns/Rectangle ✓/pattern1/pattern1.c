#include "stdio.h"

int main(){

    int n= 4 ;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(j<=n-i+1){
                printf("%d",j);
            }else {
            printf("*");
            }
        }
    for(int j=4;j>=1;j--){
        if(j<=n-i+1){
            printf("%d",j);
        }else{
            printf("*");
        }
    }

        printf("\n");
    }


    return 0;
}

