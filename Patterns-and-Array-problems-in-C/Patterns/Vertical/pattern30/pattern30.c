#include "stdio.h"

int main(){

    int n= 4 ;
    printf("*\n");
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            for(int k=1;k<=i;k++ ){
                printf("*");
            }
            printf("\n");
        }
        for(int j=1;j<=3*i;j++){
            if(j%2 ==1){
                printf("*");
            }else {
                printf("$");
            }
        }
        printf("\n");
    }


    return 0;
}