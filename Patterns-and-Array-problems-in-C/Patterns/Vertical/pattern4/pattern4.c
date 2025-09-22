#include "stdio.h"

int main(){

    int n= 7 ;

    for(int i=n;i>=1;i--){
        for(int j=1;j<=2*i-1;j++){
            printf("*");
        }
        if(i!=1){
                    printf("\n**\n");

        }
    }


    return 0;
}