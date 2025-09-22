#include "stdio.h"

int main(){

    int n = 5,k=0;
   for(int i=1 ; i<=2*n-1 ;i++){
    k+= i<=n ? 1 : -1;
    for(int j=1;j<=2*n-1;j++){

        if(j>=k && j<=2*n-k){
            printf("*");
        }else{
            printf(" ");
        }
    }



    printf("\n");
   }


    return 0;
}