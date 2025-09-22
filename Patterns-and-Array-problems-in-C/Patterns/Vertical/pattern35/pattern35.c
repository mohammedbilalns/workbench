#include "stdio.h"

int main(){

    int n = 3,k=1;
    for(int i=1;i<=n;i++){

        for(int j=1;j<=i;j++){
            printf("%d\n",i);
        }
        for(int j=1;j<=i+1;j++){
            printf("%d",k++);
        }
        printf("\n");




    }






    return 0;
}