#include "stdio.h"

int main(){

    int n = 3;
    for(int i=1;i<=n;i++){
        for(int k=1;k<=2;k++){
            for(int j=1;j<=3*i;j++){
            printf("*");
        }printf("\n");
        }
        
        for(int j=1;j<=i;j++){
            if(i==n){break;}
            printf("*\n");
        }
    }

}