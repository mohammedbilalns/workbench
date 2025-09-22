#include "stdio.h"

int main(){

    int n = 5,k;
    
    for(int i=1;i<=n;i++){
        k= i%2==1? 5 : 3;
        for(int j=1;j<=k;j++){
            printf("*");
        }
        if(i==n){break;}
        printf("\n");
        for(int j=1;j<=2;j++){
            printf("*\n");
        }
        
    }
}