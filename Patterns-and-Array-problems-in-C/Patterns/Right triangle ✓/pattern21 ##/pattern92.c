#include "stdio.h"

int main(){

    int n = 5;
    for(int i=n;i>=1;i--){
        int k = n-i+1;
        for(int j=1;j<=i;j++){
            printf("%d",k);
            k = k+n-i+1;
            
        }
        printf("\n");
    }

}