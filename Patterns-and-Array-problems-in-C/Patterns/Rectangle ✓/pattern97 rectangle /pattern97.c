#include "stdio.h"

int main(){

    int n = 6;
    for(int i=1;i<=n;i++){
        int k = i;
        for(int j=1;j<=n;j++){
           k += j>i ? 1 :0;
           printf("%d",k);

        }
        printf("\n");
    }




    return 0;
}