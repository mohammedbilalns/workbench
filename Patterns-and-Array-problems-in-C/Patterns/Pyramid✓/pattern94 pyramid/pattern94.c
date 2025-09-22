#include "stdio.h"

int main(){
    int n = 9;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=2*n-1;j++){

            if(j>=i && j<=2*n-i){
                if(j>=n-i+2 &&j<=n+i-2 && i<=(n-1)/2){
                    printf("  ");
                }else{
                    printf("* ");
                }
            }else{ 
                printf("  ");
            }
        }
        printf("\n");
    }

    return 0;
}