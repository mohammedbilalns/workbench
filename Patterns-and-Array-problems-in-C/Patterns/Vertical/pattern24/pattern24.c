#include "stdio.h"

int main(){

    int n= 4,k=0 ;

    for(int i=1;i<=n;i++){
        k+= i<=n-2 ? 4 : 2;
        if(i%2==1){
            printf("*\n");
        }else {
            printf("*\n*\n");
        }
        for(int j=1;j<=k;j++){
            if(i==n){break;}
            printf("*");
        }
        printf("\n");

        
    }


    return 0;
}