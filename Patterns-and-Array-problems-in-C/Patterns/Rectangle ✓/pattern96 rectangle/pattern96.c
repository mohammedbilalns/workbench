#include "stdio.h"


int main(){

    int n = 6;
    for(int i=1;i<=n;i++){
        int k = 1;
        for(int j=1;j<=n;j++){
             if(j>=n-i+1){
                k =i;
            }
            printf("%d",k);
           
        }
        printf("\n");
    }



    return 0;
}