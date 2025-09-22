#include "stdio.h"

int main(){
    int n=3;
    int k=4;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=2;j++){
            for(int l=1;l<=k;l++){
                printf("x");
            }
            k = (j==1)? k-1 : k;
            printf("\n");
        }
        for(int j=1;j<=2;j++){
            if(i==n){break;}
            printf("x\n");
        }
        

    }


}