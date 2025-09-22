#include "stdio.h"

int main(){

    int n= 3 ,k=2;

    for(int i=1;i<=n;i++){
        
        for(int j=1;j<=i;j++){
            printf("XX\n");
            
        }
        for(int j=1;j<=i+k;j++){
            if(j<=i){
                printf("_");
            }else{
                printf("X");
            }
        }
        k*=2;
        printf("\n");
        
    }


    return 0;
}