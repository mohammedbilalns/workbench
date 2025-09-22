#include "stdio.h"

int main(){

    int n= 5 ,k;

    for(int i=1;i<=n;i++){
        k=1;
        for(int j=1;j<=2*n-i;j++){
            if(j>=i){
                if(j>i && j<2*n-i && i!=1){
                    printf(" ");
                    k++;
                }else{
                    printf("%d",k);
                    k++;
                }

            }else {
                printf(" ");
            }
           
        }
        printf("\n");
    }

    return 0;
}
