#include "stdio.h"

int main(){
    int n =4,k=2,l=8;
    for(int i=1;i<=n;i++ ){
        for(int j=1;j<=i;j++){
            printf("%d",k++);
        }
        printf("\n");
    }
    for(int i=n;i>=1;i--){
        for(int j=1;j<=i;j++){
            printf("%d",l++);
        }
        l-= 2*i-1;
        printf("\n");
    }


   return 0;
}