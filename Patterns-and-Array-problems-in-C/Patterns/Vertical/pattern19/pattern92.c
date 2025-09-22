#include "stdio.h"


int main(){
    
    int n = 4 ; 
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            printf("**\n");
        }
        for(int j=1;j<=5*i;j++){
            if(i==n){break;}
            printf("*");
        }
        printf("\n");
    }
    return 0;
}