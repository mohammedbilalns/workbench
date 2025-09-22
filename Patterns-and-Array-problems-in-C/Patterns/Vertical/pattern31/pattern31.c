#include "stdio.h"

int main(){

    int n= 4 ;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=2*i;j++){
            printf("*");
        }
        printf("\n");
        for(int j=1;j<=4*i;j++){
            if(j==4*n){break;}
            if(j%2==1){
                printf("*");
            }else {
                printf("_");
            }
        }
        printf("\n");
    }


    return 0;
}